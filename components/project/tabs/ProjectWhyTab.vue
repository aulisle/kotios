<template>
  <div>
    <div class="exhange-activity">
      <h2>Vaihda aktiivisuutesi eduiksi</h2>
      <p>
        Kotios auttaa vaihtamaan aktiivisuuttasi taloudellisiksi eduiksi ja
        yksilöllisiksi ratkaisuiksi, turvallisesti. Tee niin paljon kuin haluat
        ja valitse oma paikkasi Kotios-kirjosta.
      </p>
      <img src="/what-is/tradeoff.svg" class="tradeoff-img" />
    </div>

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
        Voit vaihtaa aktiivisuuttasi taloudelliseksi eduiksi ottamalla suuremman
        roolin kotisi tuotannossa.
      </div>
      <div>
        <v-icon class="point-icon">mdi-home-heart</v-icon>
        <h3>
          Taloudellista ja ekologista
        </h3>
        Olet alusta asti mukana kotisi ratkaisujen suunnittelussa ja tekijöiden
        valinnassa. Voit vaikuttaa siihen, että kotisi rakennetaan
        mahdollisimman järkevästi.
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.grid {
  margin-top: 70px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 20px;

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

.exhange-activity {
  margin-top: $u10;
  margin-bottom: $u10;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    max-width: $u80;
    text-align: center;
  }
}

@include media-breakpoint-up(lg) {
  .tradeoff-img {
    width: $u50;
  }
}
</style>
