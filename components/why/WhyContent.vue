<template>
  <div>
    <div class="container-base meaningful-section">
      <div class="meaningful-text">
        <h3>Kodillasi on merkitystä</h3>
        <p>
          Ihminen kaipaa ympärilleen muita ihmisiä voidakseen hyvin. Länsimaiden
          vaurastuessa taloudellinen pääoma alkaa kuitenkin usein korvata
          sosiaalista pääomaa. Ihmiset ovat vauraampia kuin koskaan, mutta
          yksin. Nykyään ei tunnu enää löytyvän aikaa ystäville, naapureille ja
          muista huolehtimiselle, sillä ihmisillä on kiire rikastua ja korostaa
          yksilöllisiä saavutuksiaan.
        </p>
        <p>
          Kuvittele elämä, jossa teet rakastamaasi työtä. Mukavasta työstä
          saamallasi palkalla olet hankkinut itsellesi asunnon, jonka
          suunnittelussa ja toteutuksessa olet ollut mukana alusta asti. Asunto
          kuvastaa sinua ja unelmiasi. Se on sinun kotisi, jossa et kuitenkaan
          ole yksin, vaikka sinulla on oma yksityinen tilasi. Sinulle rakkaat
          ihmiset ovat saaneet suunnitella omat asuntonsa ja ovat sinun
          naapureitasi.
        </p>
        <p>
          Osallistumalla kotisi tekemiseen pääset lähemmäksi unelmiesi asumista.
        </p>

        <h3 class="kotios-paragraph">KotiOS</h3>
        <p>
          Unelmien toteuttaminen yksin on työlästä ja uhkarohkeaa. Tämän vuoksi
          Kotios-palvelu tarjoaa apua sinulle.
        </p>

        <base-button :to="{ name: 'index' }" color="accent">
          Lue lisää Kotioksesta
        </base-button>
      </div>
      <div class="meaningful-images">
        <img src="/uusikaupunki/sea.jpg" />
      </div>
    </div>

    <div class="stats-section">
      <div class="container-base stats-text">
        <h3 class="stats-heading">Et olisi ensimmäinen unelmiesi toteuttaja</h3>
        <p class="stats-paragraph">
          Tiesitkö, että suuri osa Helsingistä on rakennettu osallistamalla?
          Vuosien saatossa menetelmät ovat unohtuneet, mutta nyt ne ovat
          tekemässä paluuta.
        </p>
      </div>

      <div class="container-base stats-container">
        <div class="stat">
          <h3>8</h3>
          <h4>Suomessa viime vuonna valmistunutta osallistavaa hanketta</h4>
        </div>
        <div class="stat">
          <h3>+300</h3>
          <h4>Onnellista asujaa</h4>
        </div>
        <div class="stat">
          <h3>1</h3>
          <h4>Palvelu, joka yhdistää heidät kaikki</h4>
        </div>
      </div>
    </div>

    <div class="container-base activity-section">
      <div class="activity-images">
        <img src="/uusikaupunki/piggy-bank.jpg" />
      </div>
      <div class="activity-text">
        <h3>Säästä olemalla aktiivinen</h3>
        <p>
          Osallistavassa asuntohankkeessa olet mukana kotisi tekemisessä ja
          pystyt vaikuttamaan kotisi hintaan. Voimme luvata, että osallistumalla
          saat rahallesi enemmän vastinetta, kuin markkinoilta muuten.
        </p>
        <p>
          Kun kotisi tehdään osallistavasti Kotios-palvelun kautta, niin
          asukkaana voit ottaa turvallisesti erilaisia tehtäviä itsellesi ja
          näin säästää tuntuvasti. Sinua siis palkitaan omasta
          aktiivisuudestasi.
        </p>
      </div>
    </div>

    <div class="differences-section container-base">
      <h3>Kuinka osallistaminen eroaa valta-asuntotuotannosta?</h3>

      <comparison-table title="">
        <comparison-table-heading
          :headings="[
            'Valta-asuntotuotanto',
            { title: 'Osallistaminen', highlight: true }
          ]"
        />
        <comparison-table-row title="Sinun roolisi kodin hankinnassa">
          <comparison-table-cell>
            Passiivinen markkinaobjekti
          </comparison-table-cell>
          <comparison-table-cell highlight>
            Aktiivinen toimija
          </comparison-table-cell>
        </comparison-table-row>

        <comparison-table-row title="Kenellä on valta">
          <comparison-table-cell>
            Myyjällä
          </comparison-table-cell>
          <comparison-table-cell highlight>
            Sinulla
          </comparison-table-cell>
        </comparison-table-row>

        <comparison-table-row
          title="Kodin suunnittelu ja toteutus asukkaiden ehdoilla"
        >
          <comparison-table-cell>
            Ei
          </comparison-table-cell>
          <comparison-table-cell highlight>
            Kyllä
          </comparison-table-cell>
        </comparison-table-row>

        <comparison-table-row title="Kodin yksilöintimahdollisuudet">
          <comparison-table-cell>
            Asunnon pintamateriaalit yms.
          </comparison-table-cell>
          <comparison-table-cell highlight>
            Julkisivu, Yhteistilat, Pintamateriaalit, jne.
          </comparison-table-cell>
        </comparison-table-row>

        <comparison-table-row title="Mahdollisuus ottaa enemmän vastuuta">
          <comparison-table-cell>
            Ei
          </comparison-table-cell>
          <comparison-table-cell highlight>
            Kyllä
          </comparison-table-cell>
        </comparison-table-row>

        <comparison-table-row
          title="Asumismenot suunniteltu sinulle sopiviksi pitkällä aikavälillä"
        >
          <comparison-table-cell>
            Ei
          </comparison-table-cell>
          <comparison-table-cell highlight>
            Kyllä
          </comparison-table-cell>
        </comparison-table-row>

        <comparison-table-row title="Maksat vain oleellisesta">
          <comparison-table-cell>
            Ei
          </comparison-table-cell>
          <comparison-table-cell highlight>
            Kyllä
          </comparison-table-cell>
        </comparison-table-row>

        <comparison-table-row title="Yhteisöllisyys sisäänrakennettuna">
          <comparison-table-cell>
            Ei
          </comparison-table-cell>
          <comparison-table-cell highlight>
            Kyllä
          </comparison-table-cell>
        </comparison-table-row>
      </comparison-table>
    </div>
  </div>
</template>

<script>
import ComparisonTable from '@/components/common/comparisonTable/ComparisonTable'
import ComparisonTableHeading from '@/components/common/comparisonTable/ComparisonTableHeading'
import ComparisonTableRow from '@/components/common/comparisonTable/ComparisonTableRow'
import ComparisonTableCell from '@/components/common/comparisonTable/ComparisonTableCell'

export default {
  components: {
    ComparisonTable,
    ComparisonTableHeading,
    ComparisonTableRow,
    ComparisonTableCell
  }
}
</script>

<style lang="scss" scoped>
.stats-section {
  background-color: $color-primary;
  padding-top: $u8;
  padding-bottom: $u8;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h3,
  h4,
  p {
    color: $color-text-alt;
  }

  .stat {
    h3 {
      margin-bottom: 0;
      font-size: 40px;
      text-align: center;
    }

    h4 {
      text-align: center;
      width: $u30;
      margin-top: $u2;
    }

    margin-top: $u4;
  }

  .stats-heading,
  .stats-paragraph {
    text-align: center;
    max-width: $u60;
  }

  .stats-text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.meaningful-section {
  margin-top: $u8;
  margin-bottom: $u10;
}

.meaningful-images {
  img {
    margin-top: $u3;
    margin-left: $u5;
  }
}

.kotios-paragraph {
  margin-top: $u4;
}

.activity-section {
  margin-top: $u20;
  margin-bottom: $u10;
}

.stats-section {
  margin-top: $u20;
}

.stats-container {
  margin-top: $u5;
}

.differences-section {
  margin-top: $u15;
  margin-bottom: $u20;
}

@include media-breakpoint-up(lg) {
  .meaningful-section,
  .activity-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .meaningful-images {
    max-width: $u80;
    img {
      margin-top: $u3;
    }
  }

  .meaningful-text {
    max-width: $u40;
  }

  .activity-images {
    max-width: $u80;
  }

  .activity-text {
    max-width: $u40;
  }

  .stats-container {
    display: flex;
    justify-content: space-between;
  }
}
</style>
