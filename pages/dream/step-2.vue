<template>
  <div class="container-base step-2-layout">
    <h2 class="heading">
      Kohteen lisääminen unelmalistalle
    </h2>

    <p class="continue-info">
      Seuraavien tietojen avulla selvitämme, minkälaista asumista haluat
      kyseisellä paikalla ja millaisista tiedoista olet kiinnostunut.
    </p>

    <p class="continue-info">
      Ilmoituksilla tiedämme myös, että kohteella on kysyntää. Kun kohteella on
      riittävä määrä alustavia kiinnostuneita voimme yhdistää sinut myös muihin
      samankaltaisiin unelmoijiin ja hankkeenne voi alkaa.
    </p>

    <div class="new-section" />

    <validation-observer
      ref="observer"
      v-slot="{ invalid }"
      tag="form"
      class="form"
      @submit.prevent="finalise"
    >
      <base-field-set v-if="type === 0" title="Kodin maksimietäisyys pisteestä">
        <base-input
          v-model="titleModel"
          label="Kohteen nimi"
          hint="Anna kohteelle tai alueelle kuvaava nimi"
          rules="required"
          required
        />
      </base-field-set>

      <base-field-set v-if="type === 0" title="Kodin maksimietäisyys pisteestä">
        <div class="inline-input">
          <base-input
            v-model="distanceModel"
            type="number"
            class="inline-input-field"
            flat
            :outlined="false"
          />
          <div class="input-value">km</div>
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
          v-model="emailModel"
          label="Sähköposti"
          rules="required|email"
          required
        />

        <p class="contact-info-text">
          Lähettämällä lomakkeen tiedot pääset automaattisesti mukaan myös
          Asiakas- ja markkinointirekisteriimme, johon kuuluvana saat
          ensimmäisten joukossa tietoa uusista kohteistamme ja sitä kautta
          mahdollisuuden vaikuttaa niiden kehittämiseen.
          <base-external-link href="/data-privacy">
            Lue lisää täältä.
          </base-external-link>
        </p>

        <base-checkbox
          v-model="acceptTermsAndConditions"
          label="Kyllä, hyväksyn tietojeni liittämisen Asiakas- ja markkinointirekisteriin"
          rules="true"
          required
        />
      </base-field-set>

      <div class="full-width bottom">
        <base-button
          block
          x-large
          color="accent"
          :disabled="invalid"
          @click="finalise"
        >
          Tallenna kohde unelmalistallesi
        </base-button>
      </div>
    </validation-observer>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
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
      ],
      acceptTermsAndConditions: false
    }
  },
  computed: {
    ...mapState('defineDream', [
      'type',
      'location',
      'distance',
      'importantAspects',
      'email',
      'title'
    ]),

    distanceModel: {
      get() {
        return this.distance
      },

      set(val) {
        if (typeof val === 'string') {
          val = parseInt(val)
        }
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
    },

    titleModel: {
      get() {
        return this.title
      },
      set(val) {
        this.$store.dispatch('defineDream/setValue', {
          field: 'title',
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

    async finalise() {
      const valid = await this.$refs.observer.validate()
      if (!valid) {
        return
      }

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

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.heading {
  margin-top: $u10;
  margin-bottom: $u8;
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
  align-items: center;

  .input-value {
    min-width: $u10;
    margin-left: $u2;
    margin-bottom: $u2;
    @include h4-primary;
  }

  .inline-input-field {
    max-width: $u10;
    margin-top: 0;
    padding-top: 0;
  }
}

.continue-dreaming-heading {
  margin-top: $u8;
  margin-bottom: $u2;
  text-align: left;
  align-self: flex-start;
}

.continue-info {
  max-width: $u50;
}

.new-section {
  margin-top: $u7;
}

.add-info {
  max-width: $u50;
}

@include media-breakpoint-up(md) {
  .bottom {
    max-width: 500px;
  }
}
</style>
