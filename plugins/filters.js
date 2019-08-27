import moment from 'moment'
import Vue from 'vue'

moment.locale('fi')

Vue.filter('toDate', date => {
  if (!date) {
    return 'ei päivämäärää'
  }

  const momentDate = moment(date)
  return momentDate.format('l')
})
