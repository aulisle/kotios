<template>
  <section>
    <div class="hero">
      <h1 class="title">
        {{ error.statusCode }}
      </h1>

      <h2 class="info">
        {{ error.message }}
      </h2>

      <nuxt-link
        v-if="error.statusCode === 404"
        class="button"
        :to="{ name: 'index' }"
      >
        Etusivu
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    error: { type: [Error, Object], default: null }
  }
}
</script>

<style scoped>
.title {
  margin-top: 15px;
  font-size: 5em;
}
.info {
  font-weight: 300;
  color: #9aabb1;
  padding-top: 20px;
  margin-top: 20px;
}
.button {
  margin-top: 50px;
}
</style>
