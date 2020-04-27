<template>
  <div>
    <div class="hero">
      <div class="container-base">
        <h1 class="hero-title">
          Osallistavassa asuntohankkeessa asukkaat pääsevät vaikuttamaan
        </h1>
        <!--
        <p>
          Osallistava asuntohanke on vaihtoehto perinteisille
          tuotantokeskeisil­le toimintamalleille. Siinä asukkaat pääsevät
          hankkeen aikana vaikuttamaan ja päättämään ratkaisuista.
        </p>
        -->
      </div>
    </div>

    <!--<div class="container-base key-points">
      <h2 class="models-header">Yksilöllinen, halvempi, hauskempi</h2>

      <div class="grid key-points-grid">
        <div>
          <v-icon class="point-icon">mdi-snowflake</v-icon>

          <h3>Yksilöllinen</h3>

          Mahdollisuutesi saada tarpeitasi vastaava asunto, jota ei löydy
          markkinoilta valmiina.
        </div>
        <div>
          <v-icon class="point-icon">mdi-cart-plus</v-icon>
          <h3>
            Rahaa elämiseen
          </h3>
          Hanketyypit, joissa asukkaat toimivat rakennuttajina voivat olla jopa
          20% edullisempia, kuin muu asuntotuotanto sekä rakennus- että
          asumisvaiheessa.
        </div>
        <div>
          <v-icon class="point-icon">mdi-home-heart</v-icon>
          <h3>
            Taloudellista ja ekologista
          </h3>
          Olet alusta asti mukana kotisi ratkaisujen suunnittelussa ja
          tekijöiden valinnassa. Voit vaikuttaa siihen, että kotisi rakennetaan
          mahdollisimman järkevästi.
        </div>
      </div>
    </div>-->

    <why-content />
  </div>
</template>

<script>
import WhyContent from '@/components/why/WhyContent'

export default {
  components: {
    WhyContent
  }
}
</script>

<style lang="scss" scoped>
.hero {
  background-image: url('/what-is/hero.jpg');
  background-attachment: fixed;

  background-size: cover;
  padding-top: 300px;
  padding-bottom: 300px;

  .container-base {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-size: $font-xxl;
    text-align: center;
  }

  p {
    max-width: 700px;
    text-align: center;
    color: $color-text-alt;
    font-size: $font-l;
    line-height: 1.3;
  }
}

.models,
.key-points {
  padding-top: 150px;
  padding-bottom: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.key-points {
  padding-bottom: 80px;
}

.models-header {
  font-size: $font-xxl;
  font-weight: 800;
}

.models-description {
  text-align: center;
  max-width: 700px;
  margin-top: 25px;
  font-size: $font-m;
}

.grid {
  margin-top: 70px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 20px;

  .md-button {
    margin-left: 0px;
  }
  .project-type {
    font-size: $font-m;
  }

  h3 {
    font-size: $font-l;
    margin-bottom: 25px;
  }

  &.key-points-grid {
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    justify-items: center;
    text-align: center;
    font-size: $font-m;
    margin-top: 100px;

    h3 {
      text-align: center;
    }

    .point-icon {
      color: $color-primary;
      font-size: 5rem !important;
      margin-bottom: 30px;
    }
  }
}

.quote {
  display: flex;
  align-items: center;
  margin-top: 80px;

  img {
    width: 40%;
  }

  .quote-text {
    margin-left: 30px;
    font-size: $font-xl;
  }
}

.why-kotios {
  margin-top: 80px;
  margin-bottom: 50px;
}
</style>
