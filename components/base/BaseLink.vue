<template>
  <router-link :to="to"><slot /> </router-link>
</template>

<script>
export default {
  props: {
    to: { type: Object, required: true }
  }
}
</script>

<style></style>
