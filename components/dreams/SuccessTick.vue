<template>
  <div class="success-tick">
    <img :src="`/blobs/${variant}.svg`" class="success-bg" />
    <base-icon :size="120" color="secondary" class="success-tick-icon">
      mdi-check
    </base-icon>
  </div>
</template>

<script>
export default {
  props: { variant: { type: String, default: 'pink-2' } }
}
</script>

<style lang="scss" scoped>
.success-tick {
  position: relative;
  margin-top: $u5;
  margin-bottom: $u5;

  .success-tick-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
