<template>
  <tr class="comparison-row">
    <th class="row-heading" colspan="3">
      {{ title }}
      <span v-if="description !== ''">
        {{ description }}
      </span>
      <v-dialog v-if="help" v-model="dialog" max-width="640">
        <template v-slot:activator="{ on }">
          <base-icon class="info-icon" color="text-secondary" v-on="on">
            mdi-information
          </base-icon>
        </template>
        <v-card class="info-card">
          <v-card-title>{{ title }}</v-card-title>
          <v-card-text>
            <p>{{ help }}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <base-button @click="dialog = false">
              Sulje
            </base-button>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </th>

    <slot />
  </tr>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    description: { type: String, default: '' },
    help: {
      default: null,
      validator: val => typeof val === 'string' || val == null
    }
  },
  data() {
    return {
      dialog: false
    }
  }
}
</script>

<style lang="scss" scoped>
.row-heading {
  text-align: left;
  padding: $u2;
  background-color: $color-bg-1;
  font-size: $font-xs;
}

.comparison-row:nth-child(even) {
  background-color: $color-bg-2;

  .row-heading {
    background-color: $color-bg-2;
  }
}

.info-icon {
  margin-left: $u1;
  opacity: 0.4;
  color: $color-primary !important;
}

@include media-breakpoint-up(xl) {
  .row-heading {
    font-size: $font-m;
  }
}
</style>
