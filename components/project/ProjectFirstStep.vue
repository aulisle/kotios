<template>
  <div>
    <h2>Ota ensiaskel kotisi hankintaan</h2>
    <project-p>
      Keräämme hankkeelle jäseniä. Hankkeen suunnittelu käynnistyy, kun ihmiset
      on koottu yhteen.
    </project-p>
    <project-p>
      Helpoin tapa ilmoittaa kiinnostuksesi kohteesta on joko lisätä se omalle
      unelmalistallesi tai ottamalla yhteyttä hankeneuvojaan.
    </project-p>
    <project-p>
      Unelmalista on oma listasi, johon voit kerätä kiinnostavia kohteita ja
      saat uutisia siinä olevista kohteista. Kohteen lisääminen unelmalistalle
      ei sido sinua vielä mihinkään.
    </project-p>
    <base-button
      color="accent"
      class="add-dream-button"
      @click="$emit('addDream')"
    >
      Lisää kohde unelmalistallesi
    </base-button>
  </div>
</template>

<script>
import ProjectP from './common/ProjectP'

export default {
  components: {
    ProjectP
  }
}
</script>

<style lang="scss" scoped>
.add-dream-button {
  margin-top: $u2;
}
</style>
