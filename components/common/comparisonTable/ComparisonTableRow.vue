<template>
  <tr>
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
}
</style>
