<template>
  <div class="container-base step-3-layout">
    <success-tick variant="front-bottom" />
    <h2>
      Kohde on lisätty unelmalistallesi
    </h2>

    <p>
      Olet nyt ilmoittanut alustavan kiinnostuksesi, joka ei sido sinua
      mihinkään. Saat myös uutisia kohteseen liittyen.
    </p>

    <div class="bottom">
      <p>Haluatko määrittää myös budjetin?</p>

      <base-button
        block
        x-large
        class="bottom-button"
        color="accent"
        :to="{ name: 'dream-step-4' }"
      >
        Jatka budjetin määritykseen
      </base-button>

      <base-button
        block
        outlined
        x-large
        :to="{ name: 'interest-map' }"
        class="bottom-button"
      >
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
      store.state.defineDream.finishedSteps < 2
    ) {
      redirect({ name: 'interest-map' })
    }
  }
}
</script>

<style lang="scss" scoped>
.step-3-layout {
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

  .bottom {
    margin-top: $u10;
    width: 100%;
  }

  .bottom-button {
    margin-top: $u1;
  }
}

@include media-breakpoint-up(md) {
  .bottom {
    max-width: 500px;
  }
}
</style>
