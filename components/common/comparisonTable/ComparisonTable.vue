<template>
  <div class="comparison-table-wrapper">
    <h4 v-if="title && title !== ''" class="table-title">{{ title }}</h4>
    <table class="comparison-table">
      <slot />
    </table>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' }
  }
}
</script>

<style lang="scss" scoped>
.comparison-table-wrapper {
  width: 100%;
}
.comparison-table {
  width: 100%;
  border-collapse: collapse;
}
.table-title {
  padding: $u1;
  padding-left: $u3;
  margin: 0;
  font-weight: normal;
  text-transform: none;
  opacity: 0.5;
}
</style>
