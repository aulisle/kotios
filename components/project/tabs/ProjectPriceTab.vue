<template>
  <div>
    <div class="container-base">
      <h2>Mitä tämä maksaa?</h2>
      <project-p>
        Osallistavassa asuntohankkeessa kodin hinta määräytyy asukkaiden
        toiveiden ja roolin mukaan. Tarkkaa hinnan määrittelyä ennen asukkaiden
        ryhmäytymistä hankkeelle ei ole siis mahdollista antaa. Voimme kuitenkin
        luvata, että osallistamalla saat rahallesi enemmän vastinetta, kuin
        markkinoilta muuten.
      </project-p>

      <project-p>
        Käännämme ajattelun valtamallista toisin päin. Emme kerro, paljonko
        kotisi tulee maksamaan, vaan kysymme millaisella budjetilla olet
        liikkeellä. Uudessakaupungissa keskineliöhinta uudiskohteille on
        kuitenkin noin 3 000€/m² ja vuokrahinta noin 12€/m². Oman kotisi
        neliöhintaan voit vaikuttaa aktiivisuudellasi, roolillasi ja
        suunnitteluratkaisuilla.
      </project-p>
      <project-p>Onko sinulla kysyttävää hinnasta?</project-p>
      <project-p>
        <base-button class="contact-button" color="accent">
          Ota yhteyttä hankeneuvojaamme
        </base-button>
      </project-p>
    </div>
    <div class="total-price-section new-section container-base">
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

    <div class="purchase-price-section new-section container-base">
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
      <pricing-table class="desktop" />
    </div>
    <pricing-table class="mobile" />

    <div class="running-costs-section new-section container-base">
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

    <div class="financing-section new-section container-base">
      <h2 class="financing-title">Mitä rahoitusvaihtoehtoja minulla on?</h2>
      <project-p class="financing-paragraph">
        Myös rahoitus- ja omistusmuoto ratkaisee paljon, millaset
        kuukausittaiset asumismenot sinulle muodostuvat. Tällä hankkeella
        hyödynnetään <b>"vuokralla omistajaksi" asunto-osuuskunta-mallia</b>.
      </project-p>
      <finance-table class="desktop" />
    </div>

    <finance-table class="mobile-overflow" />
  </div>
</template>

<script>
import ProjectP from '../common/ProjectP'
import FinanceTable from './_components/PriceTabFinanceTable'
import PricingTable from './_components/PriceTabPricingTable'
export default {
  components: {
    ProjectP,
    FinanceTable,
    PricingTable
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

.total-price-end,
.running-costs-end {
  margin-top: $u5;
}

.desktop {
  display: none;
}

.mobile-overflow {
  max-width: 100vw;
  overflow-x: auto;
}

@include media-breakpoint-up(xl) {
  .new-section {
    margin-top: $u20;
  }
  .desktop {
    display: block;
  }

  .mobile,
  .mobile-overflow {
    display: none;
  }

  .total-price-section,
  .running-costs-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .total-price-start,
  .running-costs-start {
    margin-right: $u6;
    max-width: $u80;
  }

  .total-price-end,
  .running-costs-end {
    margin-top: 0;
    max-width: $u50;
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
}
</style>
