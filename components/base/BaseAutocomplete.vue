<template>
  <md-autocomplete
    :value="value"
    :md-options="options"
    :class="{ 'md-invalid': errors.length !== 0 }"
    :disabled="disabled"
    :md-input-placeholder="placeholder"
    @input="input"
    @md-selected="select"
    @md-opened="evt => $emit('opened', evt)"
  >
    <label>{{ label }}</label>

    <template slot="md-autocomplete-item" slot-scope="{ item }">
      <slot :item="item">{{ item }}</slot>
    </template>

    <span v-if="errors && errors.length > 0" class="md-error">
      {{ errors[0] }}
    </span>
  </md-autocomplete>
</template>

<script>
import Vue from 'vue'

export default {
  props: {
    value: { type: String, required: true },
    options: { type: Array, default: () => [] },
    placeholder: { type: String, default: '' },
    type: { type: String, default: 'text' },
    label: { type: String, default: '' },
    errors: { type: Array, default: () => [] },
    disabled: { type: Boolean, default: false }
  },

  methods: {
    input(value) {
      // eslint-disable-next-line
      console.log('INPUT', value)
      this.$emit('input', value)
      Vue.nextTick(() => {
        this.$forceUpdate()
      })
    },
    select(value) {
      // eslint-disable-next-line
      console.log('SELECT', value)
      this.$emit('select', value)
      Vue.nextTick(() => {
        this.$forceUpdate()
      })
    }
  }
}
</script>

<style></style>
