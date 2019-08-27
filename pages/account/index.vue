<template>
  <md-content>
    <div class="form-column">
      <h1>{{ $t('routes.account') }}</h1>
      <template v-if="!working">
        <div class="form-main">
          <base-input v-model="email" disabled :label="$t('settings.email')" />

          <h2 class="heading-no-bold">{{ $t('settings.pic') }}</h2>
          <div class="pic-wrapper">
            <div v-if="user && user.pic" class="pic-container">
              <img :src="user.pic" />
            </div>
            <md-empty-state
              v-else
              md-icon="add_photo_alternate"
              :md-label="$t('settings.add-pic')"
              :md-description="$t('settings.add-pic-description')"
            >
              <base-file v-model="file" :title="$t('settings.set-pic')" />
            </md-empty-state>

            <base-file
              v-if="user && user.pic"
              v-model="file"
              :title="$t('settings.set-pic')"
            />
          </div>
        </div>
        <div class="form-main">
          <base-button
            class="md-raised md-primary b-full-width"
            :disabled="$v.$invalid"
            @click="save"
          >
            {{ $t('settings.save-changes') }}
          </base-button>

          <router-link
            :to="{ name: 'account-change-password' }"
            class="b-full-width md-button button-margin"
          >
            <base-button class="b-full-width md-button">
              {{ $t('settings.change-password') }}
            </base-button>
          </router-link>
        </div>

        <div>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <div v-on="on">
                Normaali sisäänkirjautuminen <md-icon>info</md-icon>
                <md-icon>{{
                  !!user.canLocalLogin ? 'check' : 'clear'
                }}</md-icon>
              </div>
            </template>
            <span
              >Aseta tunnuksellesi salasana, jotta voit kirjautua sisään
              sisäänkirjautumislomakkeella</span
            >
          </v-tooltip>
        </div>
        <div>
          Google-sisäänkirjautuminen:
          <md-icon>{{ !!user.googleConnected ? 'check' : 'clear' }}</md-icon>
        </div>
        <div>
          Facebook-sisäänkirjautuminen:
          <md-icon>{{ !!user.fbConnected ? 'check' : 'clear' }}</md-icon>
        </div>
      </template>
      <transition-pop>
        <div v-if="working" class="loader">
          <md-progress-spinner md-mode="indeterminate" />
        </div>
      </transition-pop>
    </div>
  </md-content>
</template>

<script>
import { mapGetters } from 'vuex'
import { required, email } from 'vuelidate/lib/validators'

export default {
  middleware: 'auth',

  head() {
    return {
      title: this.$createTitle(this.$t('routes.account'))
    }
  },

  data() {
    return {
      email: '',
      file: null,
      working: false
    }
  },

  validations: {
    email: {
      required,
      email
    }
  },

  computed: {
    ...mapGetters('user', ['user'])
  },

  watch: {
    user(newUser) {
      this.email = newUser.email
    }
  },

  created() {
    this.email = this.user.email
  },

  methods: {
    save() {
      this.$v.$touch()

      if (this.$v.$invalid) {
        return
      }

      this.working = true

      return Promise.all([this.saveEmail(), this.savepic()])
        .then(() => {
          this.$toast.success(this.$t('settings.settings-saved'))
        })
        .catch(() => {})
        .finally(() => {
          this.working = false
        })
    },

    saveEmail() {
      return this.$store
        .dispatch('user/changeEmail', {
          email: this.email,
          $axios: this.$axios
        })
        .catch(err => {
          if (err.response.status === 409) {
            this.$toast.error(this.$t('settings.email-error'))
            throw err
          }

          this.$toast.error(this.$t('settings.error-saving', { err }))
          throw err
        })
    },

    savepic() {
      if (!this.file) {
        return new Promise(resolve => resolve())
      }

      return this.$store
        .dispatch('user/updatePic', {
          $axios: this.$axios,
          pic: this.file
        })
        .then(() => {})
        .catch(err => {
          if (err.response.status === 413) {
            this.$toast.error(this.$t('settings.pic-too-large'))
            throw err
          }

          this.$toast.error(this.$t('settings.pic-error', { err: err.message }))
          throw err
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.heading-no-bold {
  font-weight: normal;
}

.pic-container {
  display: flex;
  width: 100%;
  max-height: 200px;
  justify-content: center;
  align-items: center;

  img {
    display: block;
    max-height: 200px;
    width: auto;
    height: auto;
    border-radius: $border-radius;
  }
}

.pic-wrapper {
  padding: 24px 0px;
}

.loader {
  display: flex;
  justify-content: center;
  padding: 50px;
}
</style>
