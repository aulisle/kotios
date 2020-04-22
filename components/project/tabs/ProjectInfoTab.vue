<template>
  <div>
    <h2>Uudenlainen asunnonhankinta</h2>
    <project-p>
      Tälle upealle tontille Uudenkaupungin keskustasta rakennetaan koteja
      Kotios-palvelun avulla. Sen avulla sinä tulevana asukkaana pääset
      suurempaan rooliin kotisi hankinnassa. Kotios-menetelmät tarjoavat myös
      joustavat rahoitusmallit kuten asunto-osuuskunta-asumisen.
    </project-p>

    <h2>Ota ensiaskel kotisi hankintaan</h2>
    <project-p>
      Keräämme hankkeelle jäseniä. Hankkeen suunnittelu käynnistyy, kun ihmiset
      on koottu yhteen. Helpoin tapa ilmoittaa kiinnostuksesi kohteesta on
      lisätä se omalle unelmalistallesi. Kohteen lisääminen unelmalistalle ei
      sido sinua vielä mihinkään.
    </project-p>
    <base-button color="accent" @click="$emit('addDream')">
      Lisää kohde unelmalistallesi
    </base-button>
  </div>
</template>

<script>
import ProjectP from '../common/ProjectP'
export default {
  components: {
    ProjectP
  }
}
</script>

<style></style>
