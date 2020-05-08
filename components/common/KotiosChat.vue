<template>
  <div />
</template>

<script>
export default {
  mounted() {
    if (this.$Tawk_API) {
      this.$Tawk_API.showWidget()
    } else {
      this.$Tawk.$createChat(() => {})
    }
  },
  destroyed() {
    if (this.$Tawk_API && !this.$Tawk_API.isChatMaximized()) {
      this.$Tawk_API.hideWidget()
    }
  }
}
</script>

<style></style>
