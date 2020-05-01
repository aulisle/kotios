<template>
  <div>
    <div class="hero">
      <h1>{{ this.$t('routes.projects') }}</h1>
    </div>
    <div class="container-base">
      <nuxt-link
        v-for="(project, idx) in projects"
        :key="project.id"
        :to="{ name: 'project-id', params: { id: project.id } }"
        class="project-card"
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
            >
              Lue lisää
            </base-button>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  head() {
    return {
      title: this.$t('routes.projects')
    }
  },

  computed: {
    ...mapGetters('interestMap', ['projects'])
  }
}
</script>

<style lang="scss" scoped>
.hero {
  background: $color-primary;
  margin-bottom: $u10;

  h1 {
    text-align: center;
    color: $color-text-secondary;
  }
}

.layout-0,
.layout-1 {
  margin-bottom: $u5;
}

.layout-image-wrapper {
  margin-bottom: $u2;
}

@include media-breakpoint-up(xl) {
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
    margin-bottom: 0;
  }

  .layout-image-wrapper {
    margin-right: $u6;
  }

  .layout-text {
    width: $u40;
    h2 {
      margin-bottom: 0;
    }
  }
}
</style>
