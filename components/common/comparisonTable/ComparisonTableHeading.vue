<template>
  <tr>
    <th class="heading empty" colspan="3"></th>
    <th
      v-for="(heading, idx) in headings"
      :key="idx"
      class="heading heading-item"
    >
      {{ heading }}
    </th>
  </tr>
</template>

<script>
export default {
  props: {
    headings: { type: Array, required: true }
  }
}
</script>

<style lang="scss" scoped>
.heading {
  padding: $u2;
  max-width: $u15;
}
.heading-item:not(:nth-child(2)) {
  border-left: 1px solid $color-text-faint;
}

.empty {
  background-color: $color-bg-1;
}
</style>
