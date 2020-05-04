<template>
  <div class="index-page">
    <interested-bar />

    <div class="hero">
      <div class="container-base">
        <h1 class="tagline">
          Rikastuttavampi tapa hankkia koti
        </h1>

        <p class="description">
          Uusi asunto huippusijainnilla, sinun suunnittelemanasi ja
          markkinahintaa halvemmalla. Miltä kuulostaa?
        </p>
      </div>
    </div>

    <div class="container-base section-margin different-section">
      <div class="different-section-images">
        <img src="/about-us/stand-out.jpg" alt="Ihmiset ovat erilaisia" />
      </div>
      <div class="different-section-text">
        <h2>Ihmiset ovat erilaisia – miksi kotien pitäisi olla samanlaisia?</h2>
        <p>
          Nykypäivän rakennuskulttuuri ei aina vastaa asiakkaan yksilöllisiin
          tarpeisiin. KOTIOS haluaa muuttaa tätä kulttuuria paremmaksi ja nostaa
          asiakkaan rakennusprojektin kuninkaaksi. Mielestämme jokaisen tulisi
          pystyä toteuttamaan omat asumisen unelmansa, ja saada rahoilleen
          vastineeksi koti ja asuinympäristö, joilla on asukkaalle aito
          merkitys.
        </p>
        <p>
          KOTIOS-palvelu tarjoaa uudenlaisen
          <base-link :to="{ name: 'phenomenon' }">
            osallistavan asuntorakennuttamisen
          </base-link>
          mallin. Palvelumme tuo yhteen asukkaat, rakentajat, suunnittelijat ja
          kiinnostavat asuinpaikat. Pidämme huolen, että pääset itse ideoimaan,
          suunnittelemaan ja toteuttamaan yhdessä muiden samanhenkisten kanssa
          kodin, jossa toteutuvat juuri sinulle tärkeät asiat. Koko projektin
          ajan tukenasi on selkeä toimintamalli ja valikoitunut joukko osaavia
          ammattilaisia, joiden kanssa hankkeesi etenee hallitusti maaliin.
        </p>
      </div>
    </div>

    <div class="dark-bg">
      <div class="container-base section-margin steps-section">
        <div class="steps-start">
          <div class="steps-sticky">
            <h2 class="featured-heading">KOTIOS-polku</h2>
            <p>
              Osallistavassa kodinhankinnassa sinun ja perheesi rooli kasvaa. Et
              ole enää sivusta katsoja vaan pääset mukaan päättämään oman kotisi
              ratkaisuista. Me ja palveluntarjoajaverkostomme tukee sinua aina
              unelmoinnista muuttoon asti.
            </p>
          </div>
        </div>

        <kotios-steps large class="steps-end" />
      </div>
    </div>

    <div class="container-base employee-section">
      <h2>Keitä me olemme?</h2>

      <div class="employee-cards">
        <employee-card
          class="employee-card"
          first-name="Veli-Pekka"
          last-name="Rajala"
          image="https://aarnipuu.info/wp-content/uploads/2017/09/Passikuva-e1515416987328.jpg"
          role="Palveluidean kehittäjä ja KOTIOS-neuvoja"
          description="Veli-Pekka, tuttavammin VP, on kokenut osallistavan rakennushankkeen asiantuntija. Hän on jo vuodesta 2015 seuraannut, tutkinut ja pohtinut, kuinka osallistamista voitaisiin tehdä paremmin."
        />

        <employee-card
          class="employee-card"
          first-name="Aulis"
          last-name="Leinonen"
          image="https://kotios-bucket.s3.eu-north-1.amazonaws.com/assets/aulis_thumbnail.jpg"
          role="Digikehittäjä"
          description="Aulis vastaa KOTIOS-palvelun digitaalisten ratkaisuiden kehittämisestä. Hänen työskentelyään motivoi hänen unelmansa toteuttaminen; hän voisi toden teolla sanoa: 'Olin mukana Suomen rakennuttamisen isoimmassa muutoksessa.'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import KotiosSteps from '@/components/common/KotiosSteps'
import EmployeeCard from '@/components/front/EmployeeCard'
import InterestedBar from '@/components/common/InterestedBar'

export default {
  auth: false,

  components: { KotiosSteps, EmployeeCard, InterestedBar },

  head() {
    return {
      title: 'Etusivu'
    }
  }
}
</script>

<style scoped lang="scss">
.index-page {
  margin-bottom: $u20;
}

.hero {
  background: $color-primary;
  background-size: cover;
  background-position: 0% 100%;
  height: 80vh;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('/what-is/hero-3.jpg');
  background-size: cover;
  background-position: 50% 50%;

  .container-base {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .tagline,
  .description {
    text-align: center;
    color: $color-text-secondary;
  }

  .tagline {
    font-size: $font-xl;
    font-weight: 900;
    margin-bottom: $u2;
  }

  .description {
    max-width: $u50;
  }

  .hero-bg-img {
    position: absolute;
    width: 300px;
    z-index: 0;
  }

  .blobs {
    z-index: 0;
  }

  .container-base {
    z-index: 1;
  }

  .bg-img-top {
    left: -140px;
    top: -40px;
  }

  .bg-img-bottom {
    left: auto;
    right: -100px;
    top: auto;
    bottom: 50px;
  }

  @include media-breakpoint-up(lg) {
    .hero-bg-img {
      width: 500px;
    }
    .tagline {
      font-size: $font-3xl;
    }
  }

  @include media-breakpoint-up(xxl) {
    .hero-bg-img {
      width: 50vw;
    }

    .bg-img-top {
      top: -20vw;
    }

    .tagline {
      max-width: $u100;
    }
  }
}

.employee-card {
  margin-bottom: $u5;
}

.section-margin {
  margin-top: $u15;
}

.product-name {
  text-transform: uppercase;
  color: $color-primary;
  font-size: 3.5rem;
  letter-spacing: $tracking-wide;
}

.featured-heading {
  padding-top: 40px;
  padding-bottom: 30px;
}

.search-card {
  margin-top: 120px;
  margin-bottom: 120px;
  max-width: 600px;
  background-color: rgba(#fff, 1);
  background-image: url('/architecture-1857175_1280.jpg');
  background-size: cover;
  padding: 13px 20px;
}

.actions {
  display: flex;
  .md-field {
    width: initial;
    flex-grow: 1;
    margin-right: 20px;
  }
}

.search-title {
  margin-bottom: -10px;
  padding-top: 20px;
  padding-bottom: 0px;
}

.hero-logo {
  margin-left: -15px;
  margin-right: 20px;
}

.what-is-link {
  font-size: 1.5em;
}

.primary-color {
  color: $color-primary !important;
  font-size: $font-xl;
  position: absolute;
  margin-left: 5px;
}

.different-section-images {
  margin-bottom: $u5;
}

.steps-section {
  margin-top: $u5;
}

.employee-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax($u25, 1fr));
  grid-gap: $u8;
}

.employee-section {
  margin-top: $u5;
}

@include media-breakpoint-up(xl) {
  .different-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .different-section-images {
    width: $u60;
    margin-bottom: 0;
    margin-right: $u6;
  }

  .different-section-text {
    width: $u50;
  }

  .steps-section {
    display: flex;
    justify-content: space-between;
    margin-top: $u15;
  }

  .employee-section {
    margin-top: $u10;
  }

  .steps-start {
    max-width: $u50;
  }
  .steps-end {
    max-width: $u80;
  }

  .steps-sticky {
    position: sticky;
    top: 50%;
    margin-bottom: $u10;
  }
}
</style>
