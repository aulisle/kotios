<template>
  <div class="container-base step-4-layout">
    <h2 class="step-4-heading">
      Budjetin määrittäminen
    </h2>

    <p>
      Seuraavien tietojen avulla voimme suunnitella paremmin, millaisia
      rahoitus- ja omistusmalleja kohteessa voitaisiin hyödyntää.
    </p>

    <base-field-set title="Alkupääomasi">
      <p>Kuinka paljon sinulla on alkupääomaa kotisi hankintaan?</p>
      <div class="inline-input">
        <base-input
          v-model="startingCapitalModel"
          type="number"
          class="inline-input-field"
          flat
          :outlined="false"
        />
        <div class="input-value">000 €</div>
      </div>
    </base-field-set>

    <base-field-set title="Asumiseen käytettävä raha/kk">
      <p>
        Kuinka paljon asumisesi tulisi enintään maksaa kuukaudessa? Tähän kuuluu
        rahoituksen takaisinmaksu, vesi-, sähkö- ja lämmityskustannukset.
      </p>
      <div class="inline-input">
        <base-input
          v-model="moneyPerMonthModel"
          type="number"
          class="inline-input-field"
          flat
          :outlined="false"
        />
        <div class="input-value">€/kk</div>
      </div>
    </base-field-set>

    <div class="full-width bottom">
      <base-button block x-large color="accent" @click="finalise">
        Tallenna budjettisi
      </base-button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  filters: {
    toMoney(val) {
      if (typeof val === 'string') {
        val = parseFloat(val)
      }

      if (val < 1000) {
        return val.toFixed(0)
      } else {
        return `${(val / 1000).toFixed(1)}k`
      }
    }
  },
  computed: {
    ...mapState('defineDream', ['startingCapital', 'moneyPerMonth']),
    startingCapitalModel: {
      get() {
        return this.startingCapital
      },

      set(val) {
        if (typeof val === 'string') {
          val = parseInt(val)
        }

        // eslint-disable-next-line
        console.log('SET VALUE', val)

        this.$store.dispatch('defineDream/setValue', {
          field: 'startingCapital',
          value: val
        })
      }
    },
    moneyPerMonthModel: {
      get() {
        return this.moneyPerMonth
      },
      set(val) {
        if (typeof val === 'string') {
          val = parseInt(val)
        }

        this.$store.dispatch('defineDream/setValue', {
          field: 'moneyPerMonth',
          value: val
        })
      }
    }
  },

  fetch({ store, redirect }) {
    if (
      store.state.defineDream.type == null ||
      store.state.defineDream.finishedSteps < 2
    ) {
      redirect({ name: 'interest-map' })
    }
  },

  methods: {
    finalise() {
      this.$store.dispatch('defineDream/finishBudget').then(() => {
        this.$router.push({ name: 'dream-step-5' })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.step-4-layout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: $u10;
  margin-bottom: $u10;
}

.step-4-heading {
  margin-bottom: $u8;
}

.full-width {
  width: 100%;
  margin-top: $u3;
}

.inline-input {
  display: flex;
  align-items: center;

  .input-value {
    margin-bottom: $u1;
    min-width: $u10;
    margin-left: $u2;
    @include h4-primary;
  }

  .inline-input-field {
    max-width: $u10;
    margin-top: 0;
    padding-top: 0;
  }
}

@include media-breakpoint-up(md) {
  .bottom {
    max-width: 500px;
  }
}
</style>
