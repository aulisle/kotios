<template>
  <md-switch :model="value" @change="toggle">
    <slot />
  </md-switch>
</template>

<script>
import Vue from 'vue'

export default {
  props: {
    value: { type: Boolean, required: true }
  },

  methods: {
    toggle() {
      this.$emit('input', !this.value)

      Vue.nextTick(() => {
        this.$forceUpdate()
      })
    }
  }
}
</script>

<style></style>
