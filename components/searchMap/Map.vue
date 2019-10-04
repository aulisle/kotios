<template>
  <div>
    <div ref="gmap" class="map" />
  </div>
</template>

<script>
import Marker from './Marker.vue'
import { mapState } from 'vuex'
import { debounce } from 'lodash'

import Vue from 'vue'

let RentoMarker = null

const createMarker = (result, self) => {
  if (RentoMarker) {
    const marker = new RentoMarker()
    marker.latlng = {
      lat: () => result.location.lat,
      lng: () => result.location.lng
    }
    marker.resultId = result.id
    marker.project = result
    marker.setMap(self.gmap)
    return marker
  }

  return null
}

const updateMarker = (marker, result) => {
  if (!result) {
    return
  }

  marker.title = result.title
  marker.latlng = {
    lat: () => result.location.lat,
    lng: () => result.location.lng
  }
}

const deleteMarker = marker => {
  marker.remove()
  marker.setMap(null)
  if (marker.vueInstance) {
    marker.vueInstance.$destroy()
  }
}

let LatLngBounds = null
let LatLng = null

export default {
  name: 'BrowseMap',

  data() {
    return {
      gmap: {},
      google: null,
      markers: [],
      firstDraw: false
    }
  },

  computed: {
    ...mapState('search', ['results', 'boundingBox'])
  },

  watch: {
    gmap() {
      this.drawMarkers()
    },

    results() {
      this.drawMarkers()
    },

    boundingBox(newBoundingBox) {
      if (
        !process.client ||
        !LatLng ||
        !LatLngBounds ||
        !newBoundingBox ||
        !newBoundingBox.southwest ||
        !newBoundingBox.northeast
      ) {
        return
      }

      const a = new LatLng(
        newBoundingBox.southwest.lat,
        newBoundingBox.southwest.lng
      )
      const b = new LatLng(
        newBoundingBox.northeast.lat,
        newBoundingBox.northeast.lng
      )

      const bounds = new LatLngBounds(a, b)
      // eslint-disable-next-line
      console.log('BOUNDS', bounds)

      this.gmap.fitBounds(bounds)
      this.gmap.panToBounds(bounds)
    }
  },

  mounted() {
    // Only load if in browser
    if (process.client) {
      const self = this

      // eslint-disable-next-line
      console.log('MAPS', this.$gMapsLoader)
      this.$gMapsLoader.load(google => {
        self.google = google
        LatLngBounds = google.maps.LatLngBounds
        LatLng = google.maps.LatLng

        self.gmap = new google.maps.Map(self.$refs.gmap, {
          zoomControl: true,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: false
        })

        self.gmap.addListener('bounds_changed', self.mapBoundsChanged)

        const a = new LatLng(
          self.boundingBox.southwest.lat,
          self.boundingBox.southwest.lng
        )

        const b = new LatLng(
          self.boundingBox.northeast.lat,
          self.boundingBox.northeast.lng
        )

        const bounds = new LatLngBounds(a, b)
        // eslint-disable-next-line
        console.log('BOUNDS', bounds)

        self.gmap.fitBounds(bounds)
        self.gmap.panToBounds(bounds)

        RentoMarker = () => {}

        RentoMarker.prototype = new google.maps.OverlayView()

        RentoMarker.prototype.remove = function() {
          if (this.div) {
            this.div.parentNode.removeChild(this.div)
            this.div = null
          }
        }

        RentoMarker.prototype.getPosition = function() {
          return this.latlng
        }

        RentoMarker.prototype.draw = function() {
          const selfie = this
          let div = this.div
          if (!div) {
            div = this.div = document.createElement('div')
            selfie.vueInstance = new Vue({
              store: self.$store,
              router: self.$router,
              i18n: self.$i18n,
              render: h =>
                h(Marker, {
                  props: {
                    project: selfie.project
                  }
                })
            })

            selfie.vueInstance.$mount()
            div.appendChild(selfie.vueInstance.$el)
            div.style.position = 'absolute'

            const panes = this.getPanes()
            panes.overlayImage.appendChild(div)
          }

          const point = this.getProjection().fromLatLngToDivPixel(this.latlng)

          if (point) {
            div.style.left = point.x + 'px'
            div.style.top = point.y + 'px'
          }
        }
      })
    }
  },
  beforeDestroy() {
    this.markers.forEach(marker => {
      marker.vueInstance.$destroy()
    })
  },
  methods: {
    drawMarkers() {
      if (!process.client) {
        return
      }

      const self = this

      if (this.gmap && self.google && self.google.maps) {
        const alreadyAdded = {}
        const toBeDeleted = {}
        const addables = []

        // Remove excess markers
        self.markers.forEach((marker, index) => {
          if (!marker) {
            this.markers.splice(index, 1)
            return
          }

          const markerResult = this.results.find(
            element => element.id === marker.resultId
          )
          if (!markerResult) {
            deleteMarker(marker)
            toBeDeleted[marker.resultId] = true
          } else {
            updateMarker(marker, markerResult)
            alreadyAdded[markerResult.id] = true
          }
        })

        // Remove the markers from the array
        this.markers = this.markers.filter(
          marker => !toBeDeleted[marker.resultId]
        )

        // Check elements that still need adding
        this.results.forEach(element => {
          if (!alreadyAdded[element.id]) {
            addables.push(element)
          }
        })

        // Add them
        addables.forEach(result => {
          const marker = createMarker(result, this)
          self.markers.push(marker)
        })

        if (!this.firstDraw) {
          this.firstDraw = true
        }
      }
    },

    mapBoundsChanged: debounce(function() {
      const bounds = this.gmap.getBounds()

      this.$store.dispatch('search/search', {
        query: {
          bounds: {
            northeast: {
              lat: bounds.getNorthEast().lat(),
              lng: bounds.getNorthEast().lng()
            },
            southwest: {
              lat: bounds.getSouthWest().lat(),
              lng: bounds.getSouthWest().lng()
            }
          }
        }
      })
    }, 500)
  }
}
</script>

<style lang="scss" scoped>
.map {
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  flex-grow: 1;
  position: relative;
  width: 100%;
  height: 100%;

  // Google Maps do not need alt
  img[alt=''],
  img:not([alt]) {
    border: none;
  }
}

.results {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: red;
  color: white;
}
</style>
