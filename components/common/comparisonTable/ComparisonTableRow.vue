<template>
  <tr class="comparison-row">
    <th class="row-heading" colspan="3">
      {{ title }}
      <span v-if="description !== ''">
        {{ description }}
      </span>
    </th>
    <slot />
  </tr>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    description: { type: String, default: '' }
  }
}
</script>

<style lang="scss" scoped>
.row-heading {
  text-align: left;
  padding: $u2;
  background-color: $color-bg-1;
}

.comparison-row:nth-child(even) {
  background-color: $color-bg-2;

  .row-heading {
    background-color: $color-bg-2;
  }
}
</style>
