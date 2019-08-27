<template>
  <md-field>
    <label>{{ title }}</label>
    <md-file :model="value" :accept="accept" @change="change" />
  </md-field>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    value: { validator: () => true, required: true },
    accept: { type: String, default: '*' }
  },

  methods: {
    change(event) {
      this.$emit('input', event.target.files[0])

      this.$nextTick(() => {
        this.$forceUpdate()
      })
    }
  }
}
</script>

<style></style>
