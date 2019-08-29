<template>
  <div>
    <h2>Kohteen tulevat tapahtumat</h2>
    <p>
      Voit osallistua näihin tapahtumiin saadaksesi lisätietoa hankkeesta ja
      tavataksesi ryhmäläisiä.
    </p>
    <v-card v-for="(event, idx) in events" :key="idx" class="card">
      <div class="card-content">
        <div class="card-icon-wrapper">
          <md-icon class="card-icon">calendar_today</md-icon>
        </div>
        <div class="card-details">
          <v-card-title class="subject">{{ event.subject }}</v-card-title>
          <v-card-text class="date">{{ event.date }}</v-card-text>
          <v-card-text class="address">{{ event.address }}</v-card-text>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [
        {
          date: '13.8.2019',
          subject: 'Esittely',
          address: 'Kiinamyllynkatu 10 B2, 20520 TURKU'
        },
        {
          date: '16.8.2019',
          subject: 'I heart Pukki -kisakatsomo',
          address: 'Kiinamyllynkatu 10 B2, 20520 TURKU'
        },
        {
          date: '18.8.2019',
          subject: 'Esittely 2',
          address: 'Kiinamyllynkatu 10 B2, 20520 TURKU'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  overflow: hidden;
  margin-top: 20px;
}

.card-content {
  display: flex;
  justify-content: space-between;
}

.card-icon-wrapper {
  background-color: $color-primary;
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;

  .card-icon {
    color: white;
    font-size: 35px !important;
    line-height: 35px;
  }
}

.date,
.subject,
.address {
  padding-top: 0px;
  padding-bottom: 0px;
  text-align: right;
  justify-content: flex-end;
}

.card-details {
  padding-top: 5px;
}

.address {
  font-size: 0.9rem;
}
</style>
