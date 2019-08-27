<template>
  <md-field :class="{ 'md-invalid': errors.length !== 0 }">
    <label>{{ label }}</label>
    <md-input
      :value="value"
      :placeholder="placeholder"
      :type="type"
      @input="input"
    />
    <span v-if="errors && errors.length > 0" class="md-error">
      {{ errors[0] }}
    </span>
  </md-field>
</template>

<script>
import Vue from 'vue'

export default {
  props: {
    value: { type: String, required: true },
    placeholder: { type: String, default: '' },
    type: { type: String, default: 'text' },
    label: { type: String, default: '' },
    errors: { type: Array, default: () => [] }
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
