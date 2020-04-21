<template>
  <div class="marker" :class="`interest-${interest}`" />
</template>

<script>
export default {
  props: {
    interest: { type: Number, required: true }
  }
}
</script>

<style lang="scss" scoped>
$marker-size-0: $u4;
$marker-size-1: $u5;
$marker-size-2: $u6;
$marker-size-3: $u7;

.marker {
  position: relative;
  width: $marker-size-0;
  height: $marker-size-0;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
  background-color: transparentize($color-1, 0.4);
  border: 2px solid $color-1;
  border-radius: 50%;

  &.interest-1 {
    width: $marker-size-1;
    height: $marker-size-1;
  }

  &.interest-2 {
    width: $marker-size-2;
    height: $marker-size-2;
  }

  &.interest-3 {
    width: $marker-size-3;
    height: $marker-size-3;
  }
}
</style>
