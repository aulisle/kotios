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
            {{ $t(`project.${phaseType.name}.${phaseType.phase}`) }}
          </v-card-title>
          <div v-view="viewHandler" class="progress">
            <transition name="expand">
              <div
                v-if="showProgress"
                class="bar"
                :style="{ width: progress(phaseType) }"
                :class="phaseType.name"
              />
            </transition>
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showProgress: false,
      phaseTypes: [
        {
          name: 'project',
          icon: 'account_tree',
          phase: 0
        },
        {
          name: 'plot',
          icon: 'layers',
          phase: 1
        },
        {
          name: 'group',
          icon: 'group',
          phase: 0
        }
      ]
    }
  },

  methods: {
    calcPercentage(curPhase, totalPhases) {
      return (curPhase + 0.05) / (totalPhases - 1 + 0.05)
    },
    progress(phaseType) {
      let percentage = 0
      if (phaseType.name === 'project') {
        percentage = this.calcPercentage(phaseType.phase, 4)
      } else if (phaseType.name === 'plot') {
        percentage = this.calcPercentage(phaseType.phase, 2)
      } else if (phaseType.name === 'group') {
        percentage = this.calcPercentage(phaseType.phase, 3)
      }

      return `${percentage * 100}%`
    },

    viewHandler(e) {
      if (e.percentInView > 0.98) {
        this.showProgress = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$plot-gradient: linear-gradient(
  to right top,
  #7e0dbc,
  #6209a7,
  #470592,
  #2b027c,
  #080067
);

$project-gradient: linear-gradient(
  to right top,
  #340dbc,
  #0027ac,
  #002f98,
  #003380,
  #003367
);

$group-gradient: linear-gradient(
  to left bottom,
  #6a113e,
  #89005c,
  #a30083,
  #b400b3,
  #b912eb
);

.expand-enter-active,
.expand-leave-active {
  transition: transform 1s ease-out;
  transform-origin: left center;
}

.expand-enter,
.expand-leave-to {
  transform: scaleX(0);
}

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
    background-image: $plot-gradient;
  }

  &.project {
    background-image: $project-gradient;
  }

  &.group {
    background-image: $group-gradient;
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
  position: relative;

  .card-type {
    margin-bottom: 0px;
    padding-bottom: 0px;
  }

  .card-title {
    margin-top: 0px;
    padding-top: 0px;
    text-align: right;
    display: block;
    white-space: nowrap;
  }
}

.phase-icon {
  color: white !important;
  font-size: 30px !important;
  line-height: 30px;
}

.progress {
  height: 5px;
  width: 100%;
  position: absolute;
  bottom: 0;

  .bar {
    position: absolute;
    background-color: $color-primary;
    top: 0;
    bottom: 0;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;

    &.plot {
      background-image: $plot-gradient;
    }

    &.project {
      background-image: $project-gradient;
    }

    &.group {
      background-image: $group-gradient;
    }
  }
}
</style>
