<template>
  <div class="phases">
    <v-card
      v-for="phaseType in phaseTypes"
      :key="phaseType.name"
      class="card"
      :elevation="0"
    >
      <div class="card-content">
        <div class="phase-icon-wrapper" :class="phaseType.name">
          <md-icon class="phase-icon">{{ phaseType.icon }}</md-icon>
        </div>
        <div class="card-column">
          <v-card-text class="card-type">
            {{ $t(`project.phases.${phaseType.name}`) }}
          </v-card-text>
          <v-card-title class="card-title">
            {{ phaseType.phase }}
          </v-card-title>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phaseTypes: [
        {
          name: 'project',
          icon: 'account_tree',
          phase: 'start'
        },
        {
          name: 'plot',
          icon: 'layers',
          phase: 'start'
        },
        {
          name: 'group',
          icon: 'group',
          phase: 'gathering'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.phases {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-column-gap: 30px;
  grid-row-gap: 30px;
}

.card {
  overflow: hidden;
}

.phase-icon-wrapper {
  background-color: $color-primary;
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;

  &.plot {
    background-image: linear-gradient(
      to right top,
      #7e0dbc,
      #6209a7,
      #470592,
      #2b027c,
      #080067
    );
  }

  &.project {
    background-image: linear-gradient(
      to right top,
      #340dbc,
      #0027ac,
      #002f98,
      #003380,
      #003367
    );
  }

  &.group {
    background-image: linear-gradient(
      to left bottom,
      #6a113e,
      #89005c,
      #a30083,
      #b400b3,
      #b912eb
    );
  }
}

.card-content {
  display: flex;
  justify-content: space-between;
}

.card-column {
  text-align: right;
  max-height: 90px;
  flex-grow: 1;

  .card-type {
    margin-bottom: 0px;
    padding-bottom: 0px;
  }

  .card-title {
    margin-top: 0px;
    padding-top: 0px;
    text-align: right;
    display: block;
  }
}

.phase-icon {
  color: white !important;
  font-size: 30px !important;
  line-height: 30px;
}
</style>
