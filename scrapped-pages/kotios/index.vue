<template>
  <div>
    <div class="hero">
      <div class="container-base">
        <h2>
          Turvallisuutta, helppoutta ja hauskuutta
        </h2>

        <hr />

        <h1 class="hero-title">
          Kotios
        </h1>

        <p>
          Kotios on digitaalinen alusta ja palvelukokonaisuus, joka tarjoaa
          osallistavia asuntohankkeita edistäviä ratkaisuja
        </p>
      </div>
    </div>

    <div>
      <div class="solutions-title">
        <div class="container-base">
          <div class="solutions-content">
            <h2>Ratkaisut</h2>
            <div>
              <p>
                Osallistavaa asuntohanketta ei voi toteuttaa ilman apuvoimia.
                Monet rakennuttamiseen liittyvät seikat vaativat asiantuntevaa
                osaamista. Kotios tarjoaa ratkaisuja, joilla voit osallistua
                hankkeeseen turvallisesti, helposti ja hauskasti, oli hanke
                millainen tahansa.
              </p>

              <p>
                Ratkaisuistamme voit valita juuri sinun hankkeellesi sopivan
                kokonaisuuden.
              </p>

              <nuxt-link :to="{ name: 'phenomenon' }" class="add-top-margin">
                Mitä ovat osallistavat asuntohankkeet?
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>

      <div class="feature-wrapper two">
        <div class="container-base feature wide-img">
          <img src="/what-is/kotios-polku.png" />
          <div>
            <h3>Kotios-polku</h3>
            <h4>Polku parempaan asumiseen</h4>
            <p>
              Kotios-polku on yksityiskohtaisesti suunniteltu ja hankkeellesi
              räätälöity toteutustapa. Sillä varmistetaan, että hankkeesi
              toteutuu turvallisesti, nopeasti ja mukavasti. Kotios-polulla
              keskityt vain oleelliseen — oman elämäsi suunnitteluun.
            </p>
          </div>
        </div>
      </div>

      <div class="feature-wrapper one">
        <div class="container-base feature">
          <v-card class="elevation-3 card">
            <h3>Kohde-esittelyt</h3>
            <h4>Löydä kontakteja ja rakenna ilmiötä</h4>
            <p>
              Kotios-tarjoaa ilmaisen esittelyalustan osallistavalle
              asuntohankkeellesi. Esittelemällä hankettasi voit löytää sille
              ihanat asukkaat ja kasvatat osallistavan asuntohankkeen ilmiötä.
            </p>

            <p>
              Tavoitteenamme on, että osallistavat asuntohankkeet eivät olisi
              vain marginaalista toimintaa, vaan niistä syntyisi oikea ilmiö.
            </p>
          </v-card>
        </div>
      </div>

      <div class="container-base feature">
        <img src="/what-is/consulting.jpg" />
        <div>
          <h3>Kotios-hankeneuvonta</h3>
          <h4>Autamme hankkeesi alkuun</h4>
          <p>
            Ilmainen Kotios-hankeneuvonta ohjeistaa ja auttaa siinä, kuinka voit
            voit tehdä osallistavasta ideastasi totta.
          </p>
        </div>
      </div>

      <div class="container-base feature">
        <div>
          <h3>Kotios-ammattilaiset</h3>
          <h4>Taattua laatua</h4>
          <p>
            Yhteistyökumppaneidemme joukosta löydät ammattilaiset, joita
            käytette apuna hankkeenne suunnittelussa ja toteutuksessa.
            Kotios-kumppaneiden laatu varmistetaan kouluttamalla, tukemalla ja
            seuraamalla tiiviisti heidän työskentelyään.
          </p>

          <base-button class="md-primary">
            Lue lisää kriteereistämme
          </base-button>
        </div>
        <img src="/what-is/architect.jpg" />
      </div>

      <div class="container-base feature">
        <img src="/what-is/grouping.jpg" />

        <div>
          <h3>Kotios-ryhmäytyminen - Tulossa talvella 2019</h3>
          <h4>Hankkeellesi ihanat asukkaat</h4>
          <p>
            Löydä hankkeellesi sopivat asukkaat Kotios-ryhmäytymistyökalun
            avulla. Sen avulla voit olla potentiaalisten asukkaiden kanssa
            mukavasti vuorovaikutuksessa.
          </p>
        </div>
      </div>

      <div class="feature-wrapper three">
        <div class="container-base feature">
          <v-card class="elevation-3 card">
            <h3>Kotios-suunnittelutyökalut - Tulossa myöhemmin</h3>
            <h4>Suunnittele reilusti</h4>
            <p>
              Kotios-suunnittelutyökalut on luotu juuri osallistavia
              asuntohankkeita varten. Niillä päätäminen demokraattisesti
              inspiroi ja innostaa.
            </p>
            <p>
              Suunnittelutyökaluihin kuuluu esimerkiksi verkkoalusta, jossa
              voidaan tehdä ja kerätä hanketta koskevia päätöksiä.
            </p>
          </v-card>
        </div>
      </div>

      <div class="container-base feature">
        <div>
          <h3>Kotios-projektinhallinta - Tulossa myöhemmin</h3>
          <h4>Varmista, että hankkeesi valmistuu ajallaan</h4>
          <p>
            Projektinhallinan avulla varmistat, että hankkeesi suunnitelmat
            toteutuvat myös käytännössä ja ajallaan.
          </p>
        </div>
        <img src="/what-is/project-management.jpg" />
      </div>

      <div class="container-base feature extra-bottom">
        <img src="/what-is/purchasing.jpg" />

        <div>
          <h3>Kotios-hankinnat - Tulossa myöhemmin</h3>
          <h4>Turvalliset hankinnat ja kilpailuttaminen</h4>
          <p>
            Helpot ja turvalliset hankinnat ja kilpailuttaminen osallistavalle
            asuntohankkeelle.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.hero {
  background-image: url('/what-is/hero-3.jpg');
  background-size: cover;
  background-position: 50% 50%;
  background-attachment: fixed;
  padding-top: 280px;
  padding-bottom: 280px;

  .container-base {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
  }

  h1 {
    font-size: 5rem;

    text-align: center;
    margin-bottom: 45px;
    padding-top: 0px;
    margin-top: 0px;
    text-transform: uppercase;
  }

  h2 {
    font-size: $font-xl;
    text-align: center;
    padding-bottom: $u2;
    font-weight: bold;
  }

  p {
    max-width: 700px;
    text-align: center;
    color: $color-text-alt;
    font-size: $font-l;
    line-height: 1.3;
  }

  hr {
    width: $u6;
    border-color: white;
    border-width: 2px;
    margin-bottom: $u2;
  }
}

.solutions-title {
  overflow: hidden;
  padding-top: 35px;
  position: relative;

  .container-base {
    display: flex;
  }

  .solutions-content {
    padding-top: $u15;
    padding-bottom: $u15;
    padding-left: $u4;
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .add-top-margin {
    margin-top: $u8;
  }

  .fake-margin {
    width: 50%;
  }

  img {
    width: 50%;
    position: absolute;
    left: 0;
  }

  h2 {
    font-size: $font-xxl;
    padding-bottom: $u3;
    font-weight: 900;
    color: $color-primary;
    text-transform: uppercase;
  }

  p {
    font-size: $font-m;
    max-width: 700px;
  }
}

.feature {
  display: flex;
  align-items: center;
  padding-top: $u15;

  img {
    width: 50%;
    max-height: 600px;
    object-fit: cover;
  }

  .card {
    padding: $u3;
  }

  > div {
    width: 50%;
  }

  img + div {
    padding-left: $u3;
  }

  h3 {
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: $tracking-wide;
    font-size: $font-m;
    padding-bottom: $u1;
  }

  h4 {
    font-size: $font-l;
    color: $color-primary;
  }

  &.wide-img {
    img {
      width: 65%;
      object-fit: contain;
      max-height: 700px;
    }
    > div {
      width: 45%;
    }
  }
}

.feature-wrapper {
  background-size: cover;
  background-position: 50% 50%;
  padding-top: 3vw;
  padding-bottom: 10vw;

  &.one {
    background-image: url('/what-is/feature-1.jpg');
  }

  &.two {
    background-color: white;
  }

  &.three {
    margin-top: 100px;
    background-image: url('/what-is/planning.jpg');
  }
}

.extra-bottom {
  margin-bottom: $u15;
}

.stepper {
  margin-top: $u3;
}
</style>
