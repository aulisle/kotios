<template>
  <div ref="gmap" class="map" />
</template>

<script>
import Marker from './Marker.vue'
import mockResults from './mockResults'

import Vue from 'vue'

let RentoMarker = null

const createMarker = (result, self) => {
  const marker = new RentoMarker()
  marker.latlng = {
    lat: () => result.location.latitude,
    lng: () => result.location.longitude
  }
  marker.hype = result.memberCount
  marker.resultId = result.id
  marker.title = result.title
  marker.setMap(self.gmap)
  return marker
}

const updateMarker = (marker, result) => {
  if (!result) {
    return
  }
  marker.hype = result.memberCount
  marker.title = result.title
  marker.latlng = {
    lat: () => result.location.latitude,
    lng: () => result.location.longitude
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
      results: mockResults,
      firstDraw: false,
      mapCenter: {
        latitude: 64.002306,
        longitude: 25.583254
      }
    }
  },

  computed: {},

  watch: {
    gmap() {
      this.drawMarkers()
    },
    results() {
      this.drawMarkers()
    }
  },

  mounted() {
    // Only load if in browser
    if (process.client) {
      const self = this
      //eslint-disable-next-line
      console.log('MAPS', this.$gMapsLoader)
      this.$gMapsLoader.load(google => {
        self.google = google
        LatLngBounds = google.maps.LatLngBounds
        LatLng = google.maps.LatLng

        const center = {
          lat: this.mapCenter.latitude,
          lng: this.mapCenter.longitude
        }

        //eslint-disable-next-line
        console.log('CENTER', center)

        self.gmap = new google.maps.Map(self.$refs.gmap, {
          center,
          zoom: 6,
          zoomControl: true,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: false
        })

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
          const hype = selfie.hype
          const resultId = selfie.resultId
          const title = selfie.title
          let div = this.div
          if (!div) {
            div = this.div = document.createElement('div')
            selfie.vueInstance = new Vue({
              router: self.$router,
              render: h =>
                h(Marker, {
                  props: {
                    title,
                    hype,
                    id: resultId
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

        let bounds = null
        // If not drawn yet
        if (!this.firstDraw && LatLngBounds) {
          bounds = new LatLngBounds()
        }

        // Add them
        addables.forEach(result => {
          const marker = createMarker(result, this)

          if (!this.firstDraw && LatLng && bounds) {
            const loc = new LatLng(
              result.location.latitude,
              result.location.longitude
            )
            bounds.extend(loc)
          }

          self.markers.push(marker)
        })

        if (this.results.length !== 0 && bounds) {
          this.gmap.fitBounds(bounds)
          this.gmap.panToBounds(bounds)
        }

        if (!this.firstDraw) {
          this.firstDraw = true
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.map {
  top: 0;
  left: 0;
  flex-grow: 1;
  position: relative;

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
