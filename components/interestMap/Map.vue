<template>
  <div>
    <div ref="gmap" class="map" />
    <slot />
  </div>
</template>

<script>
import Marker from './Marker'
import { mapState, mapGetters } from 'vuex'
import { TYPES as DreamTypes } from '@/store/defineDream'
import Vue from 'vue'

let KotiosMarker = null

const createMarker = (result, self) => {
  if (KotiosMarker) {
    const marker = new KotiosMarker()
    marker.latlng = {
      lat: () => result.location.lat,
      lng: () => result.location.lng
    }
    marker.resultId = result.id
    marker.data = result
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
  name: 'InterestMap',

  data() {
    return {
      gmap: {},
      google: null,
      markers: [],
      firstDraw: false
    }
  },

  computed: {
    ...mapState('interestMap', ['boundingBox', 'mode']),
    ...mapGetters('interestMap', ['interests'])
  },

  watch: {
    gmap() {
      this.drawMarkers()
    },

    interests() {
      this.drawMarkers()
    }
  },

  mounted() {
    // Only load if in browser
    if (process.client) {
      const self = this

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

        self.gmap.addListener('center_changed', self.mapCenterChanged)
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

        self.gmap.fitBounds(bounds)
        self.gmap.panToBounds(bounds)

        KotiosMarker = () => {}

        KotiosMarker.prototype = new google.maps.OverlayView()

        KotiosMarker.prototype.remove = function() {
          if (this.div) {
            this.div.parentNode.removeChild(this.div)
            this.div = null
          }
        }

        KotiosMarker.prototype.getPosition = function() {
          return this.latlng
        }

        KotiosMarker.prototype.draw = function() {
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
                    data: selfie.data
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

          const markerResult = this.interests.find(
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
        this.interests.forEach(element => {
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

    mapCenterChanged() {
      const center = this.gmap.getCenter()
      const centerStoreValue = {
        lat: center.lat(),
        lng: center.lng()
      }
      this.$store.dispatch('interestMap/setCenter', centerStoreValue)

      if (this.mode === 'add') {
        this.$store.dispatch('defineDream/setType', DreamTypes.AREA)
        this.$store.dispatch('defineDream/setLocation', centerStoreValue)
      }
    },
    mapBoundsChanged() {
      const bounds = this.gmap.getBounds()
      this.$store.dispatch('interestMap/setBoundingBox', {
        northeast: {
          lat: bounds.getNorthEast().lat(),
          lng: bounds.getNorthEast().lng()
        },
        southwest: {
          lat: bounds.getSouthWest().lat(),
          lng: bounds.getSouthWest().lng()
        }
      })
    }
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
</style>
