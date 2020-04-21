<template>
  <div>{{ dreams }}</div>
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

<style></style>
