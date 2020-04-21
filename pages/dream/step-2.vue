<template>
  <div class="container-base step-2-layout">
    <success-tick />
    <h2>
      Kohde on lisätty
    </h2>
    <p>
      Olet nyt unelmoinnin alussa. Et siis sitoudu vielä mihinkään, mutta voit
      vaikuttaa hankkeen aloitukseen. Voit myös lisätä muita itsellesi
      kiinnostavia kohteita.
    </p>

    <h4 class="continue-dreaming-heading">
      Jatka unelmointia, kerro sinulle tärkeimmät asumisen kriteerit
    </h4>

    <p>
      Seuraavien tietojen avulla selvitämme, minkälaista asumista kohteessa
      halutaan. Ilmoituksilla tiedämme, että kohteella on kysyntää. Kun
      kohteella on riittävä määrä alustavia kiinnostuneita voimme yhdistää sinut
      myös muihin samankaltaisiin unelmoijiin ja hankkeenne voi alkaa.
    </p>

    <base-field-set v-if="type === 0" title="Kodin maksimietäisyys pisteestä">
      <div class="inline-input">
        <v-slider v-model="distanceModel" thumb-label :thumb-size="48">
          <template v-slot:thumb-label="{ value }"> {{ value }}km </template>
        </v-slider>
        <div class="input-value">{{ distance }}km</div>
      </div>
    </base-field-set>
    <base-field-set title="Valitse, mitkä ovat tärkeimpiä asumisessa">
      <div class="multiple-options">
        <base-button
          v-for="option in importantOptions"
          :key="option"
          :outlined="!importantSelected(option)"
          class="multiple-option"
          @click="toggleImportantOption(option)"
        >
          {{ $t(`dreams.importantOptions.${option}`) }}
        </base-button>
      </div>
    </base-field-set>

    <base-field-set title="Yhteystiedot">
      <p class="contact-info-text">
        Jotta voimme tulevaisuudessa yhdistää sinut samanlaisiin unelmoijiin,
        jätä sähköpostiosoitteesi. Saat sähköpostiisi myös listan lisäämistäsi
        kohteista.
      </p>
      <base-input
        v-model="$v.emailModel.$model"
        label="Sähköposti"
        :errors="emailErrors"
      />
    </base-field-set>

    <div class="full-width bottom">
      <base-button
        block
        x-large
        color="accent"
        :disabled="$v.invalid"
        @click="finalise"
      >
        Tallenna kohteen tarkemmat tiedot
      </base-button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SuccessTick from '@/components/dreams/SuccessTick.vue'
import { email, required } from 'vuelidate/lib/validators'
import { createEmailErrors } from '@/plugins/vuelidate'
export default {
  components: {
    SuccessTick
  },

  validations: {
    emailModel: {
      required,
      email
    }
  },

  data() {
    return {
      importantOptions: [
        'economy',
        'neighbours',
        'style',
        'owning',
        'customisation',
        'ecology',
        'functionality',
        'common-spaces'
      ]
    }
  },
  computed: {
    ...mapState('defineDream', [
      'type',
      'location',
      'distance',
      'importantAspects',
      'email'
    ]),
    emailErrors() {
      return createEmailErrors(this.$v.emailModel, this)
    },
    distanceModel: {
      get() {
        return this.distance
      },
      set(val) {
        this.$store.dispatch('defineDream/setValue', {
          field: 'distance',
          value: val
        })
      }
    },
    emailModel: {
      get() {
        return this.email
      },
      set(val) {
        this.$store.commit('defineDream/setValue', {
          field: 'email',
          value: val
        })
      }
    }
  },

  fetch({ store, redirect }) {
    if (
      store.state.defineDream.type == null ||
      store.state.defineDream.finishedSteps < 1
    ) {
      redirect({ name: 'interest-map' })
    }
  },

  methods: {
    importantSelected(option) {
      return this.importantAspects[option]
    },

    toggleImportantOption(option) {
      const options = JSON.parse(JSON.stringify(this.importantAspects))
      options[option] = !options[option]

      this.$store.dispatch('defineDream/setValue', {
        field: 'importantAspects',
        value: options
      })
    },

    finalise() {
      this.$store.commit('defineDream/setValue', {
        field: 'email',
        value: this.email
      })

      this.$store.dispatch('defineDream/finishSoftValues').then(() => {
        this.$router.push({ name: 'dream-step-3' })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.step-2-layout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: $u4;
  margin-bottom: $u10;

  h2,
  p {
    color: $color-primary;
    text-align: center;
  }

  .contact-info-text {
    text-align: left;
  }
}

.full-width {
  width: 100%;
  margin-top: $u3;
}

.multiple-options {
  margin: -$u1;
  display: flex;
  flex-wrap: wrap;
}

.multiple-option {
  margin: $u1;
  flex-grow: 0;
  flex-shrink: 0;
}

.inline-input {
  display: flex;

  .input-value {
    margin-top: 4px;
    min-width: $u5;
    @include h4-primary;
  }
}

.continue-dreaming-heading {
  margin-top: $u4;
  margin-bottom: $u2;
}

@include media-breakpoint-up(md) {
  .bottom {
    max-width: 500px;
  }
}
</style>
