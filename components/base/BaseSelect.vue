<template>
  <md-field>
    <label>{{ label }}</label>
    <md-select
      :value="value"
      :placeholder="placeholder"
      :type="type"
      :multiple="multiple"
      @input="input"
    >
      <md-option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </md-option>
    </md-select>
  </md-field>
</template>

<script>
import Vue from 'vue'

export default {
  props: {
    value: { type: [String, Array], required: true },
    options: { type: Array, required: true },
    placeholder: { type: String, default: '' },
    type: { type: String, default: 'text' },
    label: { type: String, default: '' },
    multiple: { type: Boolean, default: false }
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
