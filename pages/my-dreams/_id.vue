<template>
  <div class="container-base">
    <h2>Unelmakohteesi</h2>
    <v-card v-for="(dream, idx) in dreams" :key="idx" class="card">
      <v-card-title>
        {{ dream._id }}
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dreams: []
    }
  },

  async asyncData({ $axios, params }) {
    return $axios.get(`/api/dreams/my-dreams/${params.id}`).then(({ data }) => {
      return {
        dreams: data
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.card {
  margin-top: $u4;
}
</style>
