<template>
  <v-btn v-bind="$attrs" :color="color" v-on="$listeners"><slot /></v-btn>
</template>

<script>
export default {
  props: {
    color: { type: String, default: 'primary' }
  }
}
</script>

<style></style>
