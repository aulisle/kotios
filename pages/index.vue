<template>
  <div class="index-page">
    <div class="hero">
      <div class="blobs">
        <img src="/blobs/front-top.svg" class="hero-bg-img bg-img-top" />
        <img src="/blobs/front-bottom.svg" class="hero-bg-img bg-img-bottom" />
      </div>

      <div class="container-base">
        <h1 class="tagline">
          Fiksumpi tapa hankkia koti
        </h1>

        <p class="description">
          Uusi asunto huippusijainnilla, sinun suunnittelemanasi ja
          markkinahintaa halvemmalla. Miltä kuulostaa?
        </p>
      </div>
    </div>

    <div class="container-base section-margin">
      <h2>
        Ihmiset ovat erilaisia – miksi kotien pitäisi olla samanlaisia?
      </h2>
      <p>
        Kotios auttaa sinua luomaan itsellesi unelmakodin, jota et saisi
        valmiina markkinoilta. Tämä on mahdollista vain osallistamalla.
        Palvelumme yhdistää samanhenkiset asukkaat ja tukee rakennuttamisen
        kaikissa vaiheissa aina unelmoinnista muuttoon saakka.
      </p>
    </div>

    <div class="container-base section-margin">
      <h2 class="featured-heading">Miten se toimii?</h2>
      <p>
        Osallistavassa kodinhankinnassa sinun ja perheesi rooli kasvaa. Et ole
        enää sivusta katsoja vaan pääset mukaan päättämään oman kotisi
        ratkaisuista. Tuemme sinua aina unelmoinnista muuttoon asti.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  auth: false,

  components: {},

  head() {
    return {
      title: this.$createTitle(this.$t('routes.index'))
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
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

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
    font-size: 5rem;
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
  }

  @include media-breakpoint-up(xxl) {
    .hero-bg-img {
      width: 50vw;
    }

    .bg-img-top {
      top: -20vw;
    }
  }
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
</style>
