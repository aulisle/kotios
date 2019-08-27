<template>
  <div class="radio-group">
    <md-radio
      v-for="details in options"
      :key="details.value"
      :value="details.value"
      :model="value"
      @change="changeValue(details.value)"
    >
      {{ details.label }}
    </md-radio>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  props: {
    name: { type: String, required: true },

    // The options that can be selected
    options: { type: Array, required: true },

    // v-model value
    value: {
      required: true,
      validator: () => {
        return true
      }
    }
  },

  methods: {
    isChecked(value) {
      return this.value === value
    },

    changeValue(value) {
      this.$emit('input', value)

      Vue.nextTick(() => {
        this.$forceUpdate()
      })
    }
  }
}
</script>

<style></style>
