<template>
  <div>
    <div class="beta-hero-container">
      <img src="/blobs/beta.svg" class="hero-bg" />
      <div class="container-base hero-text">
        <h2 class="beta-hero">Beta</h2>
      </div>
    </div>
    <div class="container-base text-area">
      <h3>Verkkosivustomme on vielä kehityksessä</h3>

      <p>
        Palvelumme verkkosivusto on vielä kehityksessä. Näiden sivujen sisältö
        ja toiminnallisuus saattaa muuttua varoittamatta. Jotkut toiminnot
        voivat myös vielä olla tynkiä.
      </p>
      <p>
        Palvelumme käyttö ja mielipiteesi kertominen vievät sinua kuitenkin
        lähemmäksi uuteen kotiisi muuttamista, joten sisään vain.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('routes.beta')
    }
  }
}
</script>

<style lang="scss" scoped>
.beta-hero-container {
  position: relative;
  overflow: hidden;
  display: flex;
}

.beta-hero {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-bg {
  position: absolute;
  z-index: 0;
}

.hero-text {
  z-index: 10;
}

.text-area {
  margin-bottom: $u20;
}

.hero-text {
  padding-top: $u20;
  padding-bottom: $u20;
}

.hero-bg {
  right: -$u10;
  bottom: $u15;
  width: $u80;
}

@include media-breakpoint-up(lg) {
  .hero-bg {
    right: -$u30;
    width: $u100;
    bottom: -$u10;
  }
  .hero-text {
    padding-top: $u30;
    padding-bottom: $u20;
  }

  .text-area {
    max-width: $u80;
  }
}
</style>
