<template>
  <div>
    <div class="hero">
      <div class="container-base">
        <h2>
          Turvallisuutta, helppoutta ja hauskuutta
        </h2>

        <hr />

        <h1 class="hero-title">
          Rento
        </h1>
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
                Rento tarjoaa ratkaisuja, joilla voit osallistua hankkeeseen
                turvallisesti, helposti ja hauskasti, oli hanke millainen
                tahansa.
              </p>
              <p>
                Olemme jakaneet tarjontamme palveluihin, joista voit vapaasti
                valita juuri sinun hankkeellesi sopivan kokonaisuuden.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div v-scroll-reveal class="feature-wrapper two">
        <div class="container-base feature">
          <img src="/what-is/rento-polku.png" />
          <div>
            <h3>Rento-polku</h3>
            <h4>Polku parempaan asumiseen</h4>
            <p>
              Rento-polku on yksityiskohtaisesti suunniteltu ja hankkeellesi
              räätälöity menetelmä hankkeen toteuttamiselle. Sillä varmistetaan,
              että hankkeesi toteutuu turvallisesti, nopeasti ja hauskasti.
              Rento-polulla keskityt vain oleelliseen - oman elämäsi
              suunnitteluun.
            </p>
          </div>
        </div>
      </div>

      <div v-scroll-reveal class="feature-wrapper one">
        <div class="container-base feature">
          <v-card class="elevation-3 card">
            <h3>Kohde-esittelyt</h3>
            <h4>Löydä kontakteja ja rakenna ilmiötä</h4>
            <p>
              Rento-tarjoaa ilmaisen esittelyn osallistavalle
              asuntohankkeellesi. Esittelemälläsi hanketta voit löytää sille
              ihanat asukkaat ja luot osallistavan asuntohankkeen ilmiötä.
            </p>

            <p>
              Tavoitteenamme on, että osallistavat asuntohankkeet eivät olisi
              vain marginaalista toimintaa, vaan niistä syntyisi oikea ilmiö.
            </p>
          </v-card>
        </div>
      </div>

      <div v-scroll-reveal class="container-base feature">
        <img src="/what-is/consulting.jpg" />
        <div>
          <h3>Rento-hankeneuvonta</h3>
          <h4>Autamme hankkeesi alkuun</h4>
          <p>
            Ilmainen Rento-hankeneuvonta ohjeistaa ja auttaa siinä, kuinka voit
            tehdä osallistavasta ideastasi totta.
          </p>
        </div>
      </div>

      <div v-scroll-reveal class="container-base feature">
        <div>
          <h3>Rento-ammattilaiset</h3>
          <h4>Taattua laatua</h4>
          <p>
            Yhteistyökumppaneidemme joukosta löydät ammattilaiset, jotka tukevat
            hankkeenne etenemistä. Rento-kumppaneiden laatu varmistetaan
            kouluttamalla ja tukemalla tiiviisti heitä.
          </p>

          <base-button class="md-primary">
            Lue lisää kriteereistämme
          </base-button>
        </div>
        <img src="/what-is/architect.jpg" />
      </div>

      <div v-scroll-reveal class="container-base feature">
        <img src="/what-is/grouping.jpg" />

        <div>
          <h3>Rento-ryhmäytyminen - Tulossa syksyllä 2019</h3>
          <h4>Hankkeellesi ihanat asukkaat</h4>
          <p>
            Löydä hankkeellesi sopivat asukkaat Rento-ryhmäytymistyökalun
            avulla. Sen avulla voit olla mukavasti potentiaalisten asukkaiden
            kanssa vuorovaikutuksessa.
          </p>
        </div>
      </div>

      <div v-scroll-reveal class="feature-wrapper three">
        <div class="container-base feature">
          <v-card class="elevation-3 card">
            <h3>Rento-suunnittelutyökalut - Tulossa 2020</h3>
            <h4>Suunnittele reilusti</h4>
            <p>
              Rento-suunnittelutyökalut on luotu juuri osallistavia
              asuntohankkeita sopivaksi. Niillä demokraattisesti päätäminen
              inspiroi ja innostaa.
            </p>
          </v-card>
        </div>
      </div>

      <div v-scroll-reveal class="container-base feature">
        <div>
          <h3>Rento-projektinhallinta - Tulossa 2020</h3>
          <h4>Varmista, että hankkeesi valmistuu ajallaan</h4>
          <p>
            Projektinhallinan avulla seuraat projektin etenemistä ja varmistat,
            että eri valmistuvat ajallaan.
          </p>
        </div>
        <img src="/what-is/project-management.jpg" />
      </div>

      <div v-scroll-reveal class="container-base feature extra-bottom">
        <img src="/what-is/purchasing.jpg" />

        <div>
          <h3>Rento-hankinnat - Tulossa</h3>
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
    padding-bottom: 18px;
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
    width: 50px;
    border-color: white;
    border-width: 2px;
    margin-bottom: 12px;
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
    padding-top: 100px;
    padding-bottom: 100px;
    padding-left: 35px;
    text-align: center;
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
    padding-bottom: 30px;
    font-weight: 900;
    color: $color-primary;
    text-transform: uppercase;
  }

  p {
    font-size: $font-m;
  }
}

.feature {
  display: flex;
  align-items: center;
  padding-top: 100px;

  img {
    width: 50%;
    max-height: 600px;
    object-fit: cover;
  }

  .card {
    padding: 30px;
  }

  > div {
    width: 50%;
  }

  img + div {
    padding-left: 35px;
  }

  h3 {
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: $tracking-wide;
    font-size: $font-m;
    padding-bottom: 10px;
  }

  h4 {
    font-size: $font-l;
    color: $color-primary;
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
  margin-bottom: 100px;
}

.stepper {
  margin-top: 35px;
}
</style>
