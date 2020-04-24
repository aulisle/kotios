<template>
  <div class="tabs-wrapper">
    <div class="tabs-left">
      <template v-for="(item, idx) in description">
        <h2 v-if="item.type === 'h2'" :key="idx">
          {{ item.text }}
        </h2>
        <project-p v-if="item.type === 'p'" :key="idx">
          {{ item.text }}
        </project-p>
      </template>
    </div>
    <div class="tabs-right">
      <div class="tabs-right-content">
        <v-card>
          <v-card-title>Kiinnostuitko?</v-card-title>
          <v-card-text>
            <project-p>
              Unelmalista on oma listasi, johon voit kerätä kiinnostavia
              kohteita. Saat sähköpostiisi myös kiinnostavia uutisia niistä.
              Kohteen lisääminen unelmalistalle ei sido sinua vielä mihinkään.
            </project-p>
            <base-button color="accent" block @click="$emit('addDream')">
              Lisää kohde unelmalistallesi</base-button
            >
          </v-card-text>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectP from '../common/ProjectP'
export default {
  components: {
    ProjectP
  },

  props: {
    description: { type: Array, required: true }
  }
}
</script>

<style lang="scss" scoped>
h2:not(:first-child) {
  margin-top: $u8;
}

@include media-breakpoint-up(lg) {
  .tabs-wrapper {
    display: flex;
  }

  .tabs-left {
    flex-grow: 1;
    flex-shrink: 1;
    width: $u100;
  }

  .tabs-right {
    width: $u50;
    margin-left: $u3;
  }

  .tabs-right-content {
    position: sticky;
    top: $u20;
  }
}
</style>
