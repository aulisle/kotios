<template>
  <div ref="gmap" class="map" />
</template>

<script>
export default {
  data() {
    return {
      location: {
        latitude: 60.395198,
        longitude: 22.289812
      }
    }
  },
  mounted() {
    // Only load if in browser
    if (process.client) {
      const self = this
      this.$gMapsLoader.load(google => {
        self.google = google

        const center = {
          lat: this.location.latitude,
          lng: this.location.longitude
        }

        self.gmap = new google.maps.Map(self.$refs.gmap, {
          center,
          zoom: 12,
          zoomControl: true,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: false
        })
      })
    }
  }
}
</script>

<style></style>
