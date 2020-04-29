<template>
  <div />
</template>

<script>
export default {
  fetch({ store }) {
    store.commit('interestMap/setMode', 'browse')
  }
}
</script>

<style lang="scss" scoped>
.map-top {
  left: $margin-page;
  right: $margin-page;
  top: $u10;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
}

.add-button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
