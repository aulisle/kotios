<template>
  <div v-on-click-outside="close" class="dropdown-root">
    <slot name="activator" :on="on" />
    <v-slide-y-transition>
      <div v-show="open" class="dropdown-content">
        <slot />
      </div>
    </v-slide-y-transition>
  </div>
</template>

<script>
import { mixin as onClickOutside } from 'vue-on-click-outside'

export default {
  mixins: [onClickOutside],
  props: {
    active: { type: Boolean, default: false }
  },
  data() {
    return {
      open: false
    }
  },
  computed: {
    on() {
      return { click: this.onActivate }
    }
  },
  watch: {
    active(isActive) {
      this.open = isActive
    }
  },

  methods: {
    onActivate() {
      this.open = !this.open
      this.$emit('update:active', this.open)
    },
    close() {
      this.open = false
    }
  }
}
</script>

<style lang="scss" scoped>
.dropdown-root {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  position: absolute;
  right: 0;
  margin-top: $u1;
  z-index: 10000;
}
</style>
