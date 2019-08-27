<template>
  <div class="container">
    <h1>Tilisi on aktivoitu!</h1>
  </div>
</template>

<script>
export default {
  auth: 'guest',
  layout: 'guest',

  head() {
    return {
      title: this.$createTitle(this.$t('routes.activate'))
    }
  },

  components: {},

  asyncData({ params, $axios, error }) {
    if (process.server) {
      return $axios
        .post(`/api/user/activate`, {
          tokenId: params.id
        })
        .then(() => {})
        .catch(e => {
          // eslint-disable-next-line
        console.log('ERROR', e)
          return error({
            statusCode: 422,
            message:
              'Aktivointilinkki ei ole kelvollinen tai tilisi on jo aktivoitu.'
          })
        })
    } else {
      return new Promise(resolve => resolve({}))
    }
  }
}
</script>

<style scoped lang="scss">
$user-margin: 10px 0px;
.title {
  margin: 30px 0;
}
.users {
  list-style: none;
  margin: 0;
  padding: 0;
}

.user {
  margin: $user-margin;
}
</style>
