<template>
  <transition name="pop">
    <slot />
  </transition>
</template>

<style lang="scss" scoped>
.pop-enter-active,
.pop-leave-active {
  transition-property: opacity, transform;
  transition-duration: 200ms;
}

.pop-enter-active {
  transition-timing-function: ease-out;
}

.pop-leave-active {
  transition-timing-function: ease-in;
}

.pop-enter,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>
