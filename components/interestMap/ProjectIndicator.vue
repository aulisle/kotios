<template>
  <nuxt-link
    class="project-marker"
    :to="{ name: 'project-id', params: { id: projectId } }"
  >
    <base-icon size="48" class="marker-icon">mdi-map-marker</base-icon>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    projectId: { type: String, required: true }
  }
}
</script>

<style lang="scss" scoped>
.project-marker {
  position: relative;
  border: none;
  background: transparent;

  .marker-icon {
    transform: translate(-50%, -100%);
  }
}
</style>
