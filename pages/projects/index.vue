<template>
  <div>
    <div class="hero">
      <h1>Avoimet hankkeet</h1>
    </div>
    <div class="container-base">
      <nuxt-link
        v-for="(project, idx) in projects"
        :key="project.id"
        :to="{ name: 'project-id', params: { id: project.id } }"
      >
        <div :class="`layout-${idx}`">
          <div class="layout-image-wrapper">
            <video
              v-if="project.video"
              autoplay
              muted
              loop
              class="layout-image"
            >
              <source :src="project.video" />
            </video>
            <img v-else :src="project.images[0]" class="layout-image" />
          </div>
          <div class="layout-text">
            <h2>{{ project.title }}</h2>
            <p>{{ project.address.line1 }}, {{ project.address.city }}</p>
            <base-button
              :to="{ name: 'project-id', params: { id: project.id } }"
              color="accent"
              >Lue lisää</base-button
            >
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('interestMap', ['projects'])
  }
}
</script>

<style lang="scss" scoped>
.hero {
  background: transparent;
  h1 {
    text-align: center;
    color: $color-primary;
  }
}
@include media-breakpoint-up(lg) {
  .layout-0,
  .layout-1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: $u15;
    margin-bottom: $u15;
    background-color: $color-bg-1;
    padding-right: $u10;
  }

  .layout-image-wrapper,
  .layout-image {
    width: $u60;
    height: $u40;
    object-fit: cover;
  }

  .layout-text {
    width: $u40;
    h2 {
      margin-bottom: 0;
    }
  }
}
</style>
