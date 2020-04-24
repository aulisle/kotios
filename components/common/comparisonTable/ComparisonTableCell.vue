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
  padding: $u1 $u2;
  max-width: $u15;
  &:not(:nth-child(2)) {
    border-left: 1px solid $color-text-faint;
  }
}

.heading {
  font-weight: bold;
  display: block;
}
</style>
