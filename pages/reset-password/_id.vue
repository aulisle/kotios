<template>
  <div class="container">
    <reset-password-form />
  </div>
</template>

<script>
import ResetPasswordForm from '~/components/ResetPasswordForm.vue'

export default {
  head() {
    return {
      title: this.$createTitle(this.$t('routes.reset-password'))
    }
  },

  auth: 'guest',
  layout: 'guest',

  components: {
    ResetPasswordForm
  },

  asyncData({ params, $axios, error }) {
    return $axios
      .get(`/api/tokens/is-valid-reset-token/${params.id}`)
      .then(res => {
        if (!res.data.isValid || !res.data.isActivated) {
          return error({
            statusCode: 422,
            message:
              'Salasanan päivityslinkki ei ole kelvollinen tai tiliäsi ei ole aktivoitu.'
          })
        }
      })
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
