<template>
  <v-tooltip top>
    <template v-slot:activator="{ on }">
      <div
        class="marker"
        :style="{ 'z-index': hype }"
        v-on="on"
        @click="onClick"
      >
        <div class="background">
          <md-icon>comment</md-icon>
        </div>
      </div>
    </template>
    <span>
      {{ title }}
    </span>
  </v-tooltip>
</template>

<script>
export default {
  name: 'MapMarker',

  props: {
    id: { type: [String, Number], required: true },
    title: { type: String, required: true },
    hype: { type: Number, required: true }
  },

  computed: {
    animDuration() {
      return (10 / this.hype + 2).toString() + 's'
    }
  },

  methods: {
    onClick(evt) {
      evt.preventDefault()
      evt.stopPropagation()

      this.$router.push({ name: 'project-id', params: { id: this.id } })
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

@keyframes example {
  0% {
    width: 48px;
    height: 48px;
    opacity: 0;
  }

  10% {
    width: 48px;
    height: 48px;
    opacity: 1;
  }

  100% {
    width: 100px;
    height: 100px;
    opacity: 0;
  }
}

.marker {
  position: relative;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);

  &:hover {
    z-index: 10000 !important;
  }
}

.background {
  background-color: $color-primary;
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
    transform: scale(1.3);
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
</style>
