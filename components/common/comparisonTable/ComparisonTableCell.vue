<template>
  <td class="cell" :class="{ negative, highlight }">
    <span class="heading"><slot /></span>
    <slot name="description" />
  </td>
</template>

<script>
export default {
  props: {
    negative: { type: Boolean, default: false },
    highlight: { type: Boolean, default: false }
  }
}
</script>

<style lang="scss" scoped>
.cell {
  text-align: center;
  padding: $u1 $u2;
  max-width: $u15;
  font-weight: 400;
  font-size: $font-xs;

  &:not(:nth-child(2)):not(.highlight) {
    border-left: 1px solid $color-text-faint;
  }
}

.heading {
  font-weight: bold;
  display: block;
}

.negative {
  color: $color-error;
}

.highlight {
  background-color: $color-primary;
  color: $color-text-secondary;
}

@include media-breakpoint-up(xl) {
  .cell {
    font-size: $font-m;
  }
}
</style>
