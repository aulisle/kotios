<template>
  <div>
    <h2>Mitä tämä maksaa?</h2>
    <project-p>
      Osallistavassa asuntohankkeessa kodin hinta määräytyy asukkaiden toiveiden
      ja <a href="#" @click="$emit('toWhy')">roolin</a> mukaan. Tarkkaa hinnan
      määrittelyä ennen asukkaiden ryhmäytymistä hankkeelle ei ole siis
      mahdollista antaa. Voimme kuitenkin luvata, että osallistamalla saat
      rahallesi enemmän vastinetta, kuin markkinoilta muuten.
    </project-p>

    <project-p>
      Käännämme ajattelun valtamallista toisin päin. Emme kerro, paljonko kotisi
      tulee maksamaan, vaan kysymme millaisella budjetilla olet liikkeellä.
      Uudessakaupungissa keskineliöhinta uudiskohteille on kuitenkin noin 3
      000€/m² ja vuokrahinta noin 12€/m². Oman kotisi neliöhintaan voit
      vaikuttaa aktiivisuudellasi, roolillasi ja suunnitteluratkaisuilla.
    </project-p>
    <project-p>Onko sinulla kysyttävää hinnasta?</project-p>
    <project-p>
      <base-button class="contact-button" color="accent">
        Ota yhteyttä hankeneuvojaamme
      </base-button>
    </project-p>

    <div class="total-price-section new-section">
      <div class="total-price-start">
        <img src="/uusikaupunki/piggy-bank.jpg" />
      </div>
      <div class="total-price-end">
        <h2>
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
      </div>
    </div>
    <div class="purchase-price-section new-section">
      <h2 class="purchase-price-title">
        Miten voin vaikuttaa kotini <u>hankintahintaan</u>?
      </h2>

      <project-p class="purchase-price-paragraph">
        Kodin hankintahinta muodostuu perinteisesti hankkeen aikana erinäisistä
        hankinnoista, riskikatteista ja voittotavoitteista. Kun kotisi tehdään
        osallistavasti Kotios-palvelun kautta, niin asukkaana voit ottaa
        turvallisesti välikäsien tehtäviä itsellesi ja näin säästää tuntuvasti.
        Sinua siis palkitaan omasta aktiivisuudestasi.
      </project-p>

      <comparison-table title="Kotioksella et maksa turhasta">
        <comparison-table-heading :headings="headings" />
        <comparison-table-row
          title="Grynderin voittotavoite"
          help="Grynderillä tarkoitetaan valta-asuntotuotannossa rakennuttavaa yritystä. Tyypillisesti grynderi on rakennusliike."
        >
          <comparison-table-cell>
            <base-icon>mdi-close</base-icon>
          </comparison-table-cell>
          <comparison-table-cell highlight>
            <base-icon color="white">mdi-minus</base-icon>
          </comparison-table-cell>
        </comparison-table-row>

        <comparison-table-row title="Grynderin riskikate">
          <comparison-table-cell>
            <base-icon>mdi-close</base-icon>
          </comparison-table-cell>
          <comparison-table-cell highlight>
            <base-icon color="white">mdi-minus</base-icon>
          </comparison-table-cell>
        </comparison-table-row>

        <comparison-table-row title="Asunnonvälittäjän komissio">
          <comparison-table-cell>
            <base-icon>mdi-close</base-icon>
          </comparison-table-cell>
          <comparison-table-cell highlight>
            <base-icon color="white">mdi-minus</base-icon>
          </comparison-table-cell>
        </comparison-table-row>

        <comparison-table-row title="Tontti">
          <comparison-table-cell>
            <base-icon>mdi-close</base-icon>
          </comparison-table-cell>
          <comparison-table-cell highlight>
            <base-icon color="white">mdi-close</base-icon>
          </comparison-table-cell>
        </comparison-table-row>

        <comparison-table-row title="Rahoitus">
          <comparison-table-cell>
            <base-icon>mdi-close</base-icon>
          </comparison-table-cell>
          <comparison-table-cell highlight>
            <base-icon color="white">mdi-close</base-icon>
          </comparison-table-cell>
        </comparison-table-row>

        <comparison-table-row title="Markkinointi">
          <comparison-table-cell>
            <base-icon>mdi-close</base-icon>
          </comparison-table-cell>
          <comparison-table-cell highlight>
            <base-icon color="white">mdi-close</base-icon>
          </comparison-table-cell>
        </comparison-table-row>

        <comparison-table-row title="Suunnittelu">
          <comparison-table-cell>
            <base-icon>mdi-close</base-icon>
          </comparison-table-cell>
          <comparison-table-cell highlight>
            <base-icon color="white">mdi-close</base-icon>
          </comparison-table-cell>
        </comparison-table-row>

        <comparison-table-row title="Rakennutus">
          <comparison-table-cell>
            <base-icon>mdi-close</base-icon>
          </comparison-table-cell>
          <comparison-table-cell highlight>
            <base-icon color="white">mdi-close</base-icon>
          </comparison-table-cell>
        </comparison-table-row>

        <comparison-table-row
          title="Kotios-palvelu"
          help="Kotios-palvelun hinnoittelu perustuu sen kautta tilattujen palveluntarjoajien välityspalkkioon. Tarkka palvelun hinta riippuu tekemistänne hankinnoista ja niiden suuruuksista. Esimerkiksi ryhmäytyminen on hankkeellenne ilmaista. Käytännössä palvelun kokonaishinta on noin 0,5%-3% välillä kotisi hankintakustannuksista."
        >
          <comparison-table-cell>
            <base-icon>mdi-minus</base-icon>
          </comparison-table-cell>
          <comparison-table-cell highlight>
            <base-icon color="white">mdi-close</base-icon>
          </comparison-table-cell>
        </comparison-table-row>
      </comparison-table>
    </div>

    <div class="running-costs-section new-section">
      <div class="running-costs-start">
        <h2>Miten voin vaikuttaa <u>käyttö- ja ylläpitokustannuksiin</u>?</h2>
        <project-p>
          Kotisi suunnitteluratkaisut vaikuttavat suoraan kuukausittaisiin
          asumiskuluihisi. Tässä kohteessa asukkaat päättävät
          suunnitteluratkaisut, joten sinulla on valta määrittää omat
          asumisenaikaiset kulusi. Tässä kuitenkin tulee kuitenkin muistaa, että
          tämä on yleensä hankinta- ja käyttö-/ylläpitokustannusten
          tasapainottelua.
        </project-p>
      </div>
      <div class="running-costs-end">
        <img src="/uusikaupunki/coffee.jpg" />
      </div>
    </div>

    <div class="financing-section new-section">
      <h2 class="financing-title">Mitä rahoitusvaihtoehtoja minulla on?</h2>
      <project-p class="financing-paragraph">
        Myös rahoitus- ja omistusmuoto ratkaisee paljon, millaset
        kuukausittaiset asumismenot sinulle muodostuvat. Tällä hankkeella
        hyödynnetään <b>"vuokralla omistajaksi" asunto-osuuskunta-mallia</b>.
      </project-p>

      <comparison-table
        title="Asunto-osuuskunnalla otat vähemmän henkilökohtaista lainaa"
      >
        <comparison-table-heading
          :headings="[
            'Omistusasuminen',
            { title: 'Asunto-osuuskunta', highlight: true },
            'Vuokra-asuminen'
          ]"
        />
        <comparison-table-row title="Asuntolaina">
          <comparison-table-cell>
            Asunto-yhtiöllä
          </comparison-table-cell>
          <comparison-table-cell highlight>Osuuskunnalla</comparison-table-cell>
          <comparison-table-cell>
            Vuokranantajalla
          </comparison-table-cell>
        </comparison-table-row>
        <comparison-table-row title="Henkilökohtainen vastuu velasta">
          <comparison-table-cell>
            <base-icon>mdi-minus</base-icon>
          </comparison-table-cell>
          <comparison-table-cell highlight>
            <base-icon color="white">mdi-minus</base-icon>
          </comparison-table-cell>
          <comparison-table-cell>
            <base-icon>mdi-minus</base-icon>
          </comparison-table-cell>
        </comparison-table-row>

        <comparison-table-row title="Lunastusoikeus">
          <comparison-table-cell>
            Jo lunastettu
          </comparison-table-cell>
          <comparison-table-cell highlight>Olemassa </comparison-table-cell>
          <comparison-table-cell>
            Ei mahdollista
          </comparison-table-cell>
        </comparison-table-row>

        <comparison-table-row title="Kotisi kerryttää pääomaa">
          <comparison-table-cell>
            <base-icon>mdi-check</base-icon>
          </comparison-table-cell>
          <comparison-table-cell highlight>
            <base-icon color="white">mdi-check</base-icon>
          </comparison-table-cell>
          <comparison-table-cell>
            <base-icon>mdi-minus</base-icon>
          </comparison-table-cell>
        </comparison-table-row>

        <comparison-table-row title="Omistus">
          <comparison-table-cell>
            <base-icon>mdi-check</base-icon>
            <!--Asunto-osake-->
          </comparison-table-cell>
          <comparison-table-cell highlight>
            <base-icon color="white">mdi-check</base-icon>
            <!--Osuuskunnan jäsenyys, kunnes asunto on lunastettu. Sen jälkeen
          asunto-osake.-->
          </comparison-table-cell>
          <comparison-table-cell>
            <base-icon>mdi-minus</base-icon>
            <!--Ei omistusta-->
          </comparison-table-cell>
        </comparison-table-row>

        <comparison-table-row title="Vaadittu alkupääoma">
          <comparison-table-cell>
            ~30% markkinahinnasta
          </comparison-table-cell>
          <comparison-table-cell highlight
            >~5% tuotantohinnasta</comparison-table-cell
          >
          <comparison-table-cell>
            ~2kk vuokra
          </comparison-table-cell>
        </comparison-table-row>

        <comparison-table-row title="Maksettava">
          <comparison-table-cell>
            Yhtiövastike + Grynderin velkajärjestely
          </comparison-table-cell>
          <comparison-table-cell highlight
            >Vuokra + Lunastusosuus</comparison-table-cell
          >
          <comparison-table-cell>
            Vuokra
          </comparison-table-cell>
        </comparison-table-row>
      </comparison-table>
    </div>
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
      headings: [
        'Lisää hintaa valtatuotannossa',
        { title: 'Lisää hintaa Kotios-kodissa', highlight: true }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.new-section {
  margin-top: $u20;
}
.contact-button {
  margin-top: $u2;
}

.purchase-price,
.financing {
  &-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &-title {
    text-align: center;
    margin-bottom: $u4;
  }

  &-paragraph {
    text-align: center;
    margin-bottom: $u4;
  }
}

@include media-breakpoint-up(lg) {
  .total-price-section,
  .running-costs-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .total-price-start,
  .running-costs-start {
    max-width: $u80;
  }

  .total-price-end,
  .running-costs-end {
    max-width: $u50;
  }
}
</style>
