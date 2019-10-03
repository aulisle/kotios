<template>
  <div
    v-on-click-outside="closeCard"
    class="marker-wrapper"
    :class="{ open: cardOpen, hovered: isHovered }"
  >
    <nuxt-link
      :to="{ name: 'project-id', params: { id: project.id } }"
      class="card-wrapper"
    >
      <v-slide-y-reverse-transition>
        <v-card v-if="cardOpen" class="card">
          <img :src="project.thumbnail" class="thumbnail" />
          <div>
            <v-card-title class="result-title">
              {{ project.title }}
            </v-card-title>
            <v-card-text>
              <p class="result-type">{{ projectType }}</p>
              <p class="result-phases">
                <span
                  v-for="phase in phaseTypes"
                  :key="phase.name"
                  class="phase-display"
                >
                  <md-icon>{{ phase.icon }}</md-icon>
                  {{ $t(`project.${phase.name}.${phase.phase}`) }}
                </span>
              </p>
              <p class="result-tagline">{{ project.tagline }}</p>
            </v-card-text>
          </div>
        </v-card>
      </v-slide-y-reverse-transition>
    </nuxt-link>
    <div class="marker" @click="onClick">
      <div class="background">
        <md-icon class="icon">house</md-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as onClickOutside } from 'vue-on-click-outside'
import { mapState } from 'vuex'
import { getPhaseTypes } from '../project/projectPhaseMixin'
import projectTypeMixin from '../project/projectTypeMixin'

export default {
  name: 'MapMarker',

  mixins: [onClickOutside, projectTypeMixin],

  props: {
    project: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      cardOpen: false
    }
  },

  computed: {
    ...mapState('search', ['hoveredId']),

    isHovered() {
      return this.hoveredId == this.project.id
    },

    phaseTypes() {
      return getPhaseTypes(this.project.phases)
    }
  },

  methods: {
    onClick(evt) {
      evt.preventDefault()
      evt.stopPropagation()

      document.body.click()

      this.cardOpen = true
    },

    closeCard() {
      this.cardOpen = false
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes entrance {
  0% {
    transform: scale(0.2);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.marker-wrapper {
  position: relative;

  &:hover,
  &.open,
  &.hovered {
    z-index: 10000 !important;
  }

  &.hovered {
    .background {
      background-color: $color-primary;
    }
    .icon {
      color: $color-text-alt;
    }
  }
}

$card-width: 400px;
$card-height: 450px;
$marker-size: 38px;

.card {
  position: absolute;
  max-width: $card-width;
  width: $card-width;
  height: $card-height;
  top: -$card-height - ($marker-size / 2) - 3px;
  left: -($card-width / 2);
  font-family: $font-stack-heading !important;

  img {
    width: $card-width;
    height: 200px;
    object-fit: cover;
  }
}

.card-wrapper {
  position: relative;
}

.card-title {
  width: 100%;
  font-weight: 800;
}

.marker {
  position: relative;
  width: $marker-size;
  height: $marker-size;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
}

.background {
  background-color: white;
  border: 1px solid $color-hr;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.2s;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation-name: entrance;
  animation-duration: 0.3s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;

  &:hover {
    transform: scale(1.2);
  }
}

.animation {
  position: absolute;
  content: '';
  width: 0px;
  height: 0px;
  border-radius: 50%;
  border: 4px solid $color-primary;
  animation-name: example;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  z-index: 0;
  box-sizing: border-box;
  pointer-events: none;
}

.icon {
  color: $color-text-secondary;
  font-size: 19px !important;
}

.result-phases {
  display: flex;
  flex-wrap: wrap;
}

.phase-display {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  line-height: 1;
}
</style>
