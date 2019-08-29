<template>
  <div>
    <v-card :elevation="3" class="card">
      <v-card-title>
        Torppala
      </v-card-title>
      <v-card-text>
        <p class="desc">
          Torppala sijaitsee melko lähellä keskustaa ja samalla maalaismaisemien
          äärellä Aurajoen varrella. Asukkaat saavuttavat luonnonrauhan ja
          lenkkipolut omalta kotiovelta.
        </p>
        <p>
          <md-icon class="rento">nature</md-icon>joen varrella, metsän reunalla,
          pellon laidalla
        </p>
        <p>
          <md-icon class="rento">location_city</md-icon>lähiöelämää,
          pientaloasumista
        </p>
        <p><md-icon class="rento">timeline</md-icon>5km Kauppatorilta</p>
        <p><md-icon class="rento">timeline</md-icon>2km Torppalan koulu</p>

        <a href="#">
          <base-button class="md-primary read-more">Lue lisää</base-button>
        </a>
      </v-card-text>
      <div class="powered-by-hoods">
        Powered by Hoods
      </div>
    </v-card>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.powered-by-hoods {
  padding: 0px 20px 20px 20px;
  text-align: right;
}

.desc {
  text-align: justify;
}

.rento {
  color: $color-primary !important;
  margin-right: 10px;
}

.card {
  position: relative;
  .img {
    width: 100%;
  }
}

.read-more {
  margin: 0px;
}
</style>
