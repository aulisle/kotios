<template>
  <tr>
    <th class="heading empty" colspan="3"></th>
    <th
      v-for="(heading, idx) in headingsComp"
      :key="idx"
      class="heading heading-item"
      :class="{ highlight: heading.highlight }"
    >
      {{ heading.title }}
    </th>
  </tr>
</template>

<script>
export default {
  props: {
    headings: { type: Array, required: true }
  },

  computed: {
    headingsComp() {
      return this.headings.map(el => {
        if (typeof el === 'string') {
          return {
            title: el,
            highlight: false
          }
        }

        return el
      })
    }
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

.highlight {
  background-color: $color-primary;
  color: $color-text-secondary;
}
</style>
