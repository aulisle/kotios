<template>
  <router-link class="base-link" :to="to"><slot /> </router-link>
</template>

<script>
export default {
  props: {
    to: { type: Object, required: true }
  }
}
</script>

<style lang="scss" scoped>
.base-link {
  color: $color-accent !important;
  &:hover {
    color: $color-accent-hover !important;
  }
}
</style>
