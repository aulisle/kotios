<template>
  <div
    class="employee-card"
    @mouseenter="showDescription = true"
    @mouseleave="showDescription = false"
  >
    <img :src="image" />
    <h3 class="name">{{ firstName }} {{ lastName }}</h3>
    <p class="role">{{ role }}</p>

    <div class="description-position">
      <v-slide-y-transition>
        <div v-if="showDescription" class="description">
          {{ description }}
        </div>
      </v-slide-y-transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    role: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true }
  },

  data() {
    return {
      showDescription: false
    }
  }
}
</script>

<style lang="scss" scoped>
.employee-card {
  width: 100%;
  position: relative;

  img {
    width: 100%;
    height: $u50;
    object-fit: cover;
  }

  .name {
    margin-top: $u3;
  }

  .role {
    font-size: $font-m;
  }

  .description {
    position: absolute;
    bottom: 0;
    background-color: $color-accent;
    color: $color-text-alt;
    padding: $u3;
    left: 0;
    right: 0;
  }

  .description-position {
    position: relative;
    height: 0px;
    margin-top: -20px;
  }
}
</style>
