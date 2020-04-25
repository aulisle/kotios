<template>
  <validation-provider v-slot="{ errors }" :rules="rules">
    <v-checkbox
      v-bind="$attrs"
      :error-messages="errors"
      :error="errors.length > 0"
      :label="labelComp"
      v-on="$listeners"
    />
  </validation-provider>
</template>

<script>
import inputMixin from './inputMixin'

export default {
  mixins: [inputMixin],

  model: {
    prop: 'inputValue',
    event: 'change'
  },

  props: {
    rules: { type: [String, Array, Object], default: '' }
  }
}
</script>

<style></style>
