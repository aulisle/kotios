<template>
  <div class="steps-container">
    <div class="steps-start">
      <h2>Vaiheet</h2>
      <project-p>
        Hanke aloitetaan asukkaiden ryhmäytymisellä. Kokoaminen aloitetaan ns.
        ydinryhmän muodostamisesta, eli noin 3-5 kotitaloudesta, jotka
        aktiivisesti toimivat hankkeen vetureina. Voit kysyä
        KOTIOS-neuvojaltamme lisää ydinryhmästä ja sen tehtävistä.
      </project-p>
      <project-p>
        Ydinryhmän myodostamisen jälkeen autamme heitä keräämään loputkin
        asukkaat.
      </project-p>
    </div>
    <div class="steps-end">
      <kotios-steps show-lengths class="steps" />
    </div>
  </div>
</template>

<script>
import ProjectP from '../common/ProjectP'
import KotiosSteps from '@/components/common/KotiosSteps'

export default {
  components: {
    ProjectP,
    KotiosSteps
  }
}
</script>

<style lang="scss" scoped>
.steps {
  align-items: flex-start;
}

@include media-breakpoint-up(xl) {
  .steps-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .steps-start {
    max-width: $u50;
  }
}
</style>
