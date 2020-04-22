<template>
  <div ref="gmap" class="map" />
</template>

<script>
export default {
  props: {
    location: {
      type: Object,
      required: true
    }
  },

  mounted() {
    // Only load if in browser
    if (process.client) {
      const self = this
      this.$gMapsLoader.load(google => {
        self.google = google

        const center = {
          lat: this.location.lat,
          lng: this.location.lng
        }

        self.gmap = new google.maps.Map(self.$refs.gmap, {
          center,
          zoom: 12,
          zoomControl: true,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: true,
          rotateControl: false,
          fullscreenControl: false
        })

        new google.maps.Marker({
          position: center,
          map: self.gmap,
          title: 'Sijainti'
        })
      })
    }
  }
}
</script>

<style></style>
