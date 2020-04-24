<template>
  <div>
    <h2>Mitä tämä maksaa?</h2>
    <project-p>
      Osallistavassa asuntohankkeessa kodin hinta määräytyy asukkaiden toiveiden
      ja <a href="#" @click="$emit('toWhy')">roolin</a> mukaan. Tarkkaa hinnan
      määrittelyä ennen asukkaiden ryhmäytymistä hankkeelle ei ole siis
      mahdollista antaa. Voimme kuitenkin luvata, että osallistamalla saat
      enemmän, kuin markkinoilta muuten.
    </project-p>

    <project-p>
      Käännämme siis ajattelun valtamallista toisin päin. Emme kerro, paljonko
      kotisi tulee maksamaan, vaan kysymme millaisella budjetilla olet
      liikkeellä. Uudessakaupungissa keskineliöhinta uudiskohteille on kuitenkin
      noin 3 000€/m² ja vuokrahinta noin 12€/m². Tähänkin voit vaikuttaa
      aktiivisuudellasi, roolillasi ja suunnitteluratkaisuilla.
    </project-p>
    <projct-p>Onko hinnasta kysyttävää?</projct-p>
    <project-p>
      <base-button class="contact-button">
        Ota yhteyttä hankeneuvojaamme
      </base-button>
    </project-p>

    <h2 class="new-section">
      Mistä kotini kokonaishinta muodostuu?
    </h2>
    <project-p>
      Vaikka emme voi antaa kotisi tarkkaa hintaa ennen kuin olet kertonut
      budjettisi, voimme kuitenkin avata, miten kotisi hinta muodostuu. Se
      voidaan jakaa kolmeen pääkuluun: hankintahinta, käyttö- ja
      ylläpitokustannukset sekä rahoituksesta johtuvat kulut.
    </project-p>

    <project-p>
      Hankintahintaan voit vaikuttaa ottamalla vastuuta ja osallistumalla
      enemmän. Käyttö- ja ylläpitokustannukset ovat suoraa seurausta
      suunnitteluratkaisuista ja rahoituksen hinta riippuu sinulle sopivasta
      maksutavasta.
    </project-p>

    <h2 class="new-section">
      Miten voin vaikuttaa kotini <u>hankintahintaan</u>?
    </h2>

    <project-p>
      Kodin hankintahinta muodostuu perinteisesti hankkeen aikana erinäisistä
      hankinnoista, riskikatteista ja voittotavoitteista. Kun kotisi tehdään
      osallistavasti Kotios-palvelun kautta, niin asukkaana voit ottaa
      turvallisesti välikäsien tehtäviä itsellesi ja näin säästää tuntuvasti.
      Sinua siis palkitaan omasta aktiivisuudestasi.
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
    </comparison-table>

    <h2 class="new-section">
      Miten voin vaikuttaa <u>käyttö- ja ylläpitokustannuksiin</u>?
    </h2>
    <project-p>
      Kotisi suunnitteluratkaisut vaikuttavat suoraan kuukausittaisiin
      asumiskuluihisi. Tässä kohteessa asukkaat päättävät suunnitteluratkaisut,
      joten sinulla on valta määrittää omat asumisenaikaiset kulusi. Tässä
      kuitenkin tulee kuitenkin muistaa, että tämä on yleensä hankinta- ja
      käyttö-/ylläpitokustannusten tasapainottelua.
    </project-p>

    <h2 class="new-section">Mitä rahoitusvaihtoehtoja minulla on?</h2>
    <project-p>
      Myös rahoitus- ja omistusmuoto ratkaisee paljon, millaset kuukausittaiset
      asumismenot sinulle muodostuvat. Tällä hankkeella hyödynnetään "vuokralla
      omistajaksi" asunto-osuuskunta-mallia.
    </project-p>

    <comparison-table>
      <comparison-table-heading
        :headings="['Omistusasuminen', 'Asunto-osuuskunta', 'Vuokra-asuminen']"
      />
      <comparison-table-row title="Asuntolaina">
        <comparison-table-cell>
          Asunto-yhtiöllä
        </comparison-table-cell>
        <comparison-table-cell>Osuuskunnalla</comparison-table-cell>
        <comparison-table-cell>
          Vuokranantajalla
        </comparison-table-cell>
      </comparison-table-row>
      <comparison-table-row title="Henkilökohtainen vastuu velasta">
        <comparison-table-cell>
          <base-icon>mdi-check</base-icon>
        </comparison-table-cell>
        <comparison-table-cell>
          <base-icon>mdi-close</base-icon>
        </comparison-table-cell>
        <comparison-table-cell>
          <base-icon>mdi-close</base-icon>
        </comparison-table-cell>
      </comparison-table-row>

      <comparison-table-row title="Lunastusoikeus">
        <comparison-table-cell>
          Jo lunastettu
        </comparison-table-cell>
        <comparison-table-cell>Olemassa </comparison-table-cell>
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

      <comparison-table-row title="Omistus">
        <comparison-table-cell>
          <base-icon>mdi-check</base-icon>
          <!--Asunto-osake-->
        </comparison-table-cell>
        <comparison-table-cell>
          <base-icon>mdi-check</base-icon>
          <!--Osuuskunnan jäsenyys, kunnes asunto on lunastettu. Sen jälkeen
          asunto-osake.-->
        </comparison-table-cell>
        <comparison-table-cell>
          <base-icon>mdi-close</base-icon>
          <!--Ei omistusta-->
        </comparison-table-cell>
      </comparison-table-row>

      <comparison-table-row title="Vaadittu alkupääoma">
        <comparison-table-cell>
          ~30% markkinahinnasta
        </comparison-table-cell>
        <comparison-table-cell> ~5% tuotantohinnasta</comparison-table-cell>
        <comparison-table-cell>
          ~2kk vuokra
        </comparison-table-cell>
      </comparison-table-row>

      <comparison-table-row title="Maksettava">
        <comparison-table-cell>
          Yhtiövastike + Grynderin velkajärjestely
        </comparison-table-cell>
        <comparison-table-cell>Vuokra + Lunastusosuus</comparison-table-cell>
        <comparison-table-cell>
          Vuokra
        </comparison-table-cell>
      </comparison-table-row>
    </comparison-table>
    <!--
    <project-p>
      Joka tapauksessa et joudu maksamaan esimerkiksi vuokranantajan
      voittotavoitteita.
    </project-p>
-->
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
.contact-button {
  margin-top: $u2;
}
</style>
