<template>
  <div>
    <div class="hero">
      <h2 class="container-base">Yhteystiedot</h2>
    </div>
    <validation-observer
      ref="observer"
      v-slot="{ invalid }"
      tag="form"
      class="container-base form"
      @submit.prevent="send"
    >
      <p>
        Jos sinulla on kysyttävää, voit ottaa yhteyttä asiakaspalveluumme.
      </p>
      <base-input v-model="name" label="Nimesi" required rules="required" />
      <base-input
        v-model="email"
        label="Sähköpostiosoitteesi"
        required
        rules="required|email"
      />

      <base-textarea
        v-model="message"
        label="Viestisi"
        required
        rules="required"
        no-resize
      />

      <h3 v-if="sent">
        Viestisi on lähetetty! Kiitos yhteydenotostasi!
      </h3>

      <base-button
        color="accent"
        :disabled="invalid || sent || working"
        @click="send"
      >
        Lähetä
      </base-button>
    </validation-observer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
      working: false,
      sent: false
    }
  },

  methods: {
    async send() {
      const valid = await this.$refs.observer.validate()
      if (!valid) {
        return
      }

      this.working = true

      this.$axios
        .post('/api/contact', {
          email: this.email,
          name: this.name,
          message: this.message
        })
        .then(() => {
          this.sent = true
        })
        .finally(() => {
          this.working = false
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.hero {
  background-image: url(http://rentoasuminen.fi/wp-content/uploads/2018/04/rento_bg_mika_on_rento.jpg);
  background-size: cover;
  background-position: 50% 50%;
  display: flex;
  justify-content: center;

  h2 {
    text-align: center;
    color: $color-primary;
  }
}

.form {
  margin-top: $u5;
  max-width: $u100;
}
</style>
