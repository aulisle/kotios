<template>
  <div class="featured">
    <v-card
      v-for="item in featured"
      :key="item._id"
      v-scroll-reveal
      class="featured-card"
      :elevation="3"
    >
      <nuxt-link
        class="featured-link"
        :to="{ name: 'project-id', params: { id: item.projectId } }"
      >
        <v-img :src="item.previewImageUrl" class="white--text">
          <div class="featured-text">
            <v-card-title>
              {{ item.title }}
            </v-card-title>
            <v-card-text>
              {{ item.contentType }}
            </v-card-text>
            <v-card-text>
              {{ item.description }}
            </v-card-text>
          </div>
        </v-img>
      </nuxt-link>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    featured: { type: Array, required: true }
  }
}
</script>

<style lang="scss" scoped>
$featured-margin-between: 20px;

.featured {
  display: flex;
  flex-wrap: wrap;
}

.featured-card {
  margin-bottom: #{$featured-margin-between};
  overflow: hidden;
  &:hover {
    transform: scale(1.02) !important;
  }
}

.featured-card:nth-child(odd) {
  margin-left: calc(#{$featured-margin-between} / 2);
}

.featured-card:nth-child(even) {
  margin-right: calc(#{$featured-margin-between} / 2);
}

.featured-card:nth-child(5n + 2),
.featured-card:nth-child(5n + 3),
.featured-card:nth-child(5n + 4),
.featured-card:nth-child(5n + 5) {
  width: calc(50% - #{$featured-margin-between} / 2);
  .v-image {
    height: 300px;
  }
}

.featured-card:nth-child(5n + 1) {
  width: 100%;
  .v-image {
    height: 300px;
  }
  margin-left: 0px;
  margin-right: 0px;
}

.featured-text {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 0) 0%,
    rgba(2, 0, 36, 0) 20%,
    rgba(0, 0, 0, 0.7) 60%,
    rgba(0, 0, 0, 0.7) 100%
  );
  height: 100%;
}

.featured-link:hover {
  text-decoration: none !important;
}
</style>
