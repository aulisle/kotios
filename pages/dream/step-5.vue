<template>
  <div class="container-base step-5-layout">
    <success-tick variant="front-bottom" />
    <h2>Hienoa, budjettisi on tallennettu!</h2>

    <h3>Mitä seuraavaksi?</h3>
    <p>Rekryä muita. Jaa sivu sosiaalisessa mediassa.</p>
    <p>Ota meihin yhteyttä.</p>
    <p>Lisää toinen kohde.</p>

    <div class="full-width bottom">
      <base-button block x-large color="accent" :to="{ name: 'interest-map' }">
        Palaa kartalle
      </base-button>
    </div>
  </div>
</template>

<script>
import SuccessTick from '@/components/dreams/SuccessTick'
export default {
  components: { SuccessTick },
  fetch({ store, redirect }) {
    if (
      store.state.defineDream.type == null ||
      store.state.defineDream.finishedSteps < 3
    ) {
      redirect({ name: 'interest-map' })
    }
  }
}
</script>

<style lang="scss" scoped>
.step-5-layout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: $u4;
  margin-bottom: $u10;
}

@include media-breakpoint-up(md) {
  .bottom {
    max-width: 500px;
  }
}
</style>
