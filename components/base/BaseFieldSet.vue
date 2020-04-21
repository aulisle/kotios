<template>
  <div class="field-set">
    <label class="field-label">
      {{ title }}
    </label>
    <slot name="default" />
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true }
  }
}
</script>

<style lang="scss" scoped>
.field-set {
  width: 100%;
  background-color: $color-bg-1;
  padding: $u3;
  margin-bottom: $u3;
}

.field-label {
  display: block;
  margin-bottom: $u2;
  @include h4-primary;
}
</style>
