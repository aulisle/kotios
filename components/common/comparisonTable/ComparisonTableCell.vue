<template>
  <td class="cell">
    <span class="heading"><slot /></span>
    <slot name="description" />
  </td>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.cell {
  text-align: center;
  padding: $u1;
  max-width: $u15;
}

.heading {
  font-weight: bold;
  display: block;
}
</style>
