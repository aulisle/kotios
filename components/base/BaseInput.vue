<template>
  <v-text-field
    :outlined="outlined"
    v-bind="$attrs"
    @input="input"
    v-on="$listeners"
  />
</template>

<script>
import Vue from 'vue'

export default {
  props: {
    outlined: { type: Boolean, default: true }
  },

  methods: {
    input(value) {
      this.$emit('input', value)
      Vue.nextTick(() => {
        this.$forceUpdate()
      })
    }
  }
}
</script>

<style></style>
