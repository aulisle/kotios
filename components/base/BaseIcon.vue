<template>
  <v-icon :color="color" v-bind="$attrs" v-on="$listeners">
    <slot />
  </v-icon>
</template>

<script>
export default {
  props: {
    color: { type: String, default: 'primary' }
  }
}
</script>

<style></style>
