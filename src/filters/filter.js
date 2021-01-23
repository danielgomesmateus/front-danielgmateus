import Vue from 'vue'

import moment from 'moment'

moment.locale('pt-br')

const getStartedDateEndedDate = (data) => {
  let started_at = moment(data.started_at, 'YYYY-MM-DD'),
      ended_at   = moment(data.ended_at, 'YYYY-MM-DD')
  
  return `${ started_at.format('MMM') } de ${ started_at.format('Y') } - ${ ended_at.format('MMM') } de ${ ended_at.format('Y') }`
}

const getFormattedDateTime = (dateTime, format) => {
  return moment(dateTime).format(format)
}

Vue.filter('getStartedDateEndedDate', getStartedDateEndedDate)
Vue.filter('getFormattedDateTime', getFormattedDateTime)

export default {
  getStartedDateEndedDate,
  getFormattedDateTime
}