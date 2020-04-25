<template>
  <a :href="href" class="extrenal-link" target="_blank"><slot /></a>
</template>

<script>
export default {
  props: { href: { type: String, required: true } }
}
</script>

<style lang="scss" scoped>
.extrenal-link {
  color: $color-accent !important;
  &:hover {
    color: $color-accent-hover !important;
  }
}
</style>
