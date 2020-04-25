<template>
  <validation-provider v-slot="{ errors }" :rules="rules">
    <v-text-field
      :outlined="outlined"
      v-bind="$attrs"
      :error-messages="errors"
      :error="errors.length > 0"
      :label="labelComp"
      @input="input"
      v-on="$listeners"
    />
  </validation-provider>
</template>

<script>
import Vue from 'vue'
import inputMixin from './inputMixin'

export default {
  mixins: [inputMixin],
  props: {
    outlined: { type: Boolean, default: true },
    rules: { type: [String, Array, Object], default: '' }
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
