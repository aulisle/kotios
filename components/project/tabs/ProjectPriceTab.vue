<template>
  <div>
    <h2>Mikä on kotini hinta?</h2>
    <project-p>
      Osallistavassa asuntohankkeessa kodin hinta määräytyy asukkaiden toiveiden
      ja <a href="#" @click="$emit('toWhy')">roolin</a> mukaan. Tarkkaa hinnan
      määrittelyä ennen asukkaiden ryhmäytymistä hankkeelle ei ole siis
      mahdollista antaa.
    </project-p>

    <project-p>
      Käännämme siis homman toisin päin. Emme kerro, paljonko kotisi tulee
      maksamaan, vaan kysymme millaisella budjetilla olet liikkeellä.
      Uudessakaupungissa keskineliöhinta uudiskohteille on kuitenkin noin 3
      000€/m² ja vuokrahinta noin 12€/m². Tähänkin voit vaikuttaa
      aktiivisuudellasi, roolillasi ja suunnitteluratkaisuilla.
    </project-p>
    <projct-p>Onko hinnasta kysyttävää? </projct-p>
    <project-p>
      <base-button>Ota yhteyttä hankeneuvojaamme</base-button>
    </project-p>

    <h2 class="new-section">
      Miten voin vaikuttaa kuukausittaisiin asumiskuluihini?
    </h2>
    <project-p>
      Suunnitteluratkaisut vaikuttavat tuotanto-, käyttö- ja
      ylläpitokustannuksiin. Tässä kohteessa kohteessa asukkaat päättävät
      suunnitteluratkaisut, joilla on suora vaikutus asumiskuluihin.
    </project-p>

    <project-p>
      Rahoitus- ja omistusmuoto ratkaisee paljon, millaset kuukausittaiset
      asumismenot sinulle tulee. Tontilla voidaan hyödyntää yhtä kolmesta
      omistusmuodosta. Ne ovat suora omistus, asunto-osuuskunta ja
      asumisosuuskunta. Rahoituksen oma pääoma, lainan takaisinmaksuaika ja
      korko.
    </project-p>

    <comparison-table>
      <comparison-table-heading
        :headings="['Suora omistus', 'Vuokralla omistajaksi', 'Vuokraoikeus']"
      />
      <comparison-table-row title="Asuntolaina">
        <comparison-table-cell>
          Henkilökohtainen
        </comparison-table-cell>
        <comparison-table-cell>
          Osuuskunnalla
        </comparison-table-cell>
        <comparison-table-cell>
          Osuuskunnalla
        </comparison-table-cell>
      </comparison-table-row>

      <comparison-table-row title="Lunastusoikeus">
        <comparison-table-cell>
          Jo lunastettu
        </comparison-table-cell>
        <comparison-table-cell>
          Olemassa
        </comparison-table-cell>
        <comparison-table-cell>
          Ei mahdollista
        </comparison-table-cell>
      </comparison-table-row>

      <comparison-table-row title="Kotisi kerryttää pääomaa">
        <comparison-table-cell>
          <base-icon>mdi-check</base-icon>
        </comparison-table-cell>
        <comparison-table-cell>
          <base-icon>mdi-check</base-icon>
        </comparison-table-cell>
        <comparison-table-cell>
          <base-icon>mdi-close</base-icon>
        </comparison-table-cell>
      </comparison-table-row>

      <comparison-table-row title="Omistettava">
        <comparison-table-cell>
          Asunto-osake
        </comparison-table-cell>
        <comparison-table-cell>
          Osuuskunnan jäsenyys
        </comparison-table-cell>
        <comparison-table-cell>
          Osuuskunnan jäsenyys
        </comparison-table-cell>
      </comparison-table-row>

      <comparison-table-row title="Alkupääoma kodin hinnasta">
        <comparison-table-cell>
          minimi 30%
        </comparison-table-cell>
        <comparison-table-cell>
          minimi 5%
        </comparison-table-cell>
        <comparison-table-cell>
          minimi 5%
        </comparison-table-cell>
      </comparison-table-row>
    </comparison-table>

    <!--<h2 class="new-section">
      Mistä hankintahinta muodostuu?
    </h2>

    <project-p>
      Kodin ostohinta muodostuu monesta tekijästä. Kun kotisi tehdään
      osallistavasti Kotios-palvelun kautta, niin monet näistä välikäsistä
      voidaan jättää pois.
    </project-p>

    <comparison-table>
      <comparison-table-heading :headings="headings" />
      <comparison-table-row title="Grynderin voittotavoite">
        <comparison-table-cell>
          €
        </comparison-table-cell>
        <comparison-table-cell>
          <base-icon>mdi-close</base-icon>
        </comparison-table-cell>
      </comparison-table-row>

      <comparison-table-row title="Grynderin riskikate">
        <comparison-table-cell>
          €
        </comparison-table-cell>
        <comparison-table-cell>
          <base-icon>mdi-close</base-icon>
        </comparison-table-cell>
      </comparison-table-row>

      <comparison-table-row title="Asunnonvälittäjän komissio">
        <comparison-table-cell>
          €
        </comparison-table-cell>
        <comparison-table-cell>
          <base-icon>mdi-close</base-icon>
        </comparison-table-cell>
      </comparison-table-row>

      <comparison-table-row title="Vuokranantajan voittotavoite">
        <comparison-table-cell>
          <base-icon>mdi-close</base-icon> - €
        </comparison-table-cell>
        <comparison-table-cell>
          <base-icon>mdi-close</base-icon>
        </comparison-table-cell>
      </comparison-table-row>

      <comparison-table-row title="Tontti">
        <comparison-table-cell>
          €
        </comparison-table-cell>
        <comparison-table-cell>
          €
        </comparison-table-cell>
      </comparison-table-row>

      <comparison-table-row title="Rahoitus">
        <comparison-table-cell>
          €
        </comparison-table-cell>
        <comparison-table-cell>
          €
        </comparison-table-cell>
      </comparison-table-row>

      <comparison-table-row title="Markkinointi">
        <comparison-table-cell>
          €
        </comparison-table-cell>
        <comparison-table-cell>
          €
        </comparison-table-cell>
      </comparison-table-row>

      <comparison-table-row title="Suunnittelu">
        <comparison-table-cell>
          €
        </comparison-table-cell>
        <comparison-table-cell>
          €
        </comparison-table-cell>
      </comparison-table-row>

      <comparison-table-row title="Rakennutus">
        <comparison-table-cell>
          €
        </comparison-table-cell>
        <comparison-table-cell>
          €
        </comparison-table-cell>
      </comparison-table-row>

      <comparison-table-row title="Kotios-palvelu">
        <comparison-table-cell>
          <base-icon>mdi-close</base-icon>
        </comparison-table-cell>
        <comparison-table-cell>
          €
        </comparison-table-cell>
      </comparison-table-row>
    </comparison-table>-->

    <project-p>
      Joka tapauksessa et joudu maksamaan esimerkiksi vuokranantajan
      voittotavoitteita.
    </project-p>
  </div>
</template>

<script>
import ProjectP from '../common/ProjectP'
import ComparisonTable from '@/components/common/comparisonTable/ComparisonTable'
import ComparisonTableHeading from '@/components/common/comparisonTable/ComparisonTableHeading'
import ComparisonTableRow from '@/components/common/comparisonTable/ComparisonTableRow'
import ComparisonTableCell from '@/components/common/comparisonTable/ComparisonTableCell'

export default {
  components: {
    ProjectP,
    ComparisonTable,
    ComparisonTableHeading,
    ComparisonTableRow,
    ComparisonTableCell
  },

  data() {
    return {
      headings: ['Valtatuotanto', 'Kotios']
    }
  }
}
</script>

<style lang="scss" scoped>
.new-section {
  margin-top: $u10;
}
</style>
