<template>
  <div>
    <div class="map-top map-flex">
      <h3 class="map-heading">{{ title }}</h3>
    </div>
    <div class="map-top">
      <base-link :to="back" class="back-button" color="primary">
        <base-icon>mdi-arrow-left</base-icon>
      </base-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    back: { type: Object, required: true }
  }
}
</script>

<style lang="scss" scoped>
.map-top {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.map-flex {
  display: flex;
  justify-content: center;
}

.back-button {
  position: absolute;
  top: $u3;
  left: $u3;
}

.map-heading {
  position: absolute;
  top: $u3;
  right: auto;
  left: auto;
  padding-top: 0;
  margin-top: 0;
  @include h3-primary;
}
</style>
