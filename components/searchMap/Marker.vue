<template>
  <div
    v-on-click-outside="closeCard"
    class="marker-wrapper"
    :class="{ open: cardOpen, hovered: isHovered }"
  >
    <nuxt-link
      :to="{ name: 'project-id', params: { id } }"
      class="card-wrapper"
    >
      <transition name="slide-y-reverse-transition">
        <v-card v-if="cardOpen" class="card">
          <v-card-title class="card-title">
            {{ title }}
          </v-card-title>
        </v-card>
      </transition>
    </nuxt-link>
    <div class="marker" :style="{ 'z-index': hype }" @click="onClick">
      <div class="background">
        <md-icon class="icon">house</md-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as onClickOutside } from 'vue-on-click-outside'
import { mapState } from 'vuex'

export default {
  name: 'MapMarker',

  mixins: [onClickOutside],

  props: {
    id: { type: [String, Number], required: true },
    title: { type: String, required: true },
    hype: { type: Number, required: true }
  },

  data() {
    return {
      cardOpen: false
    }
  },

  computed: {
    ...mapState('search', ['hoveredId']),

    isHovered() {
      return this.hoveredId == this.id
    },

    animDuration() {
      return (10 / this.hype + 2).toString() + 's'
    }
  },

  methods: {
    onClick(evt) {
      evt.preventDefault()
      evt.stopPropagation()

      document.body.click()

      this.cardOpen = true

      // this.$router.push({ name: 'project-id', params: { id: this.id } })
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

$card-width: 200px;
$card-height: 120px;
$marker-size: 38px;

.card {
  position: absolute;
  max-width: $card-width;
  width: $card-width;
  height: $card-height;
  top: -$card-height - ($marker-size / 2) - 3px;
  left: -($card-width / 2);
}

.card-wrapper {
  position: relative;
}

.card-title {
  width: 100%;
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
</style>
