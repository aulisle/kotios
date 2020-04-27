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
      <v-dialog v-if="help" v-model="dialog">
        <template v-slot:activator="{ on }">
          <base-icon class="info-icon" color="text-secondary" v-on="on">
            mdi-information
          </base-icon>
        </template>
      </v-dialog>
    </th>
  </tr>
</template>

<script>
export default {
  props: {
    headings: { type: Array, required: true },
    help: {
      default: null,
      validator: val => typeof val === 'string' || val == null
    }
  },
  data() {
    return {
      dialog: false
    }
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

.info-icon {
  margin-left: $u2;
  opacity: 0.4;
  color: $color-primary !important;
}
</style>
