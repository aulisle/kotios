<template>
  <tr>
    <th class="heading" colspan="3"></th>
    <th v-for="(heading, idx) in headings" :key="idx" class="heading">
      {{ heading }}
    </th>
  </tr>
</template>

<script>
export default {
  props: {
    headings: { type: Array, required: true }
  }
}
</script>

<style lang="scss" scoped>
.heading {
  padding: $u2;
  max-width: $u15;
}
</style>
