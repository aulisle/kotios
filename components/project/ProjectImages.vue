<template>
  <div
    v-viewer="{ movable: false, toolbar: false, title: false }"
    class="images"
  >
    <div v-if="video && video !== ''" class="video-container">
      <video autoplay muted loop class="hero-img">
        <source :src="video" />
      </video>
    </div>
    <button v-else class="hero-img">
      <img :src="images[0]" :alt="`Kuva ${title}`" />
    </button>
    <div class="thumbnails">
      <button v-for="(image, idx) in leftOverImgs" :key="idx">
        <img :src="image" :alt="`Kuva ${idx + 1}`" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    images: { type: Array, required: true },
    video: { validator: () => true, default: '' }
  },

  computed: {
    leftOverImgs() {
      if (this.video && this.video !== '') {
        return this.images
      }

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

.video-container {
  position: relative;
  h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    color: $color-text-secondary;
    text-shadow: 2px 2px 10px #000000f0;
  }
}

.hero-img {
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  overflow: hidden;
  position: relative;
  max-height: 85vh;
  object-fit: cover;

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
  margin-top: $u3;
  margin-bottom: $u10;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  img {
    margin-top: $u2;
    width: $u15;
    height: $u10;
    object-fit: contain;
    margin-right: $u1;
    margin-left: $u1;
    background: 1px solid darken(white, 5%);
  }
}

@include media-breakpoint-up(lg) {
  .thumbnails {
    img {
      width: $u20;
      height: $u10;
    }
  }
}
</style>
