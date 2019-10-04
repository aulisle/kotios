<template>
  <div v-viewer="{ movable: false, toolbar: false }" class="images">
    <button class="hero-img">
      <img :src="images[0]" />
    </button>
    <div class="thumbnails">
      <button v-for="(image, idx) in leftOverImgs" :key="idx">
        <img :src="image" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: { type: Array, required: true }
  },

  computed: {
    leftOverImgs() {
      if (!this.images || this.images.length < 2) {
        return []
      }

      return this.images.slice(1)
    }
  }
}
</script>

<style lang="scss" scoped>
.images {
  width: 100%;
  background-size: cover;
  background-position: 50% 50%;
  display: flex;
  flex-direction: column;
}

.hero-img {
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  overflow: hidden;
  position: relative;

  img {
    object-fit: cover;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 800px;
  }
}

.thumbnails {
  display: flex;
  height: 60px;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  img {
    width: 80px;
    height: 60px;
    object-fit: contain;
    margin-right: 10px;
    border: 1px solid darken(white, 10%);
  }
}
</style>
