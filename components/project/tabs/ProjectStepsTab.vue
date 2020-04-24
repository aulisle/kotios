<template>
  <div>
    <h2>Vaiheet</h2>
    <project-p>
      Hanke aloitetaan asukkaiden ryhmäytymisellä. Kokoaminen aloitetaan ns.
      ydinryhmän muodostamisesta, eli noin 3-5 kotitaloudesta, jotka
      aktiivisesti toimivat hankkeen vetureina. Voit kysyä hankeneuvojaltamme
      lisää ydinryhmästä ja sen tehtävistä.
    </project-p>
    <project-p>
      Ydinryhmän myodostamisen jälkeen autamme heitä keräämään loputkin
      asukkaat.
    </project-p>

    <kotios-steps show-lengths class="steps" />
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
</style>
