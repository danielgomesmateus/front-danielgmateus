import Vue from 'vue'

import moment from 'moment'

moment.locale('pt-br')

const getStartedDateEndedDate = (data) => {
  let started_at = moment(data.started_at, 'YYYY-MM-DD'),
      ended_at   = data.ended_at != null ? moment(data.ended_at, 'YYYY-MM-DD') : null
  
  if (data.ended_at != null) {
    return `${ started_at.format('MMM') } de ${ started_at.format('Y') } - ${ ended_at.format('MMM') } de ${ ended_at.format('Y') }`
  }
  return `${ started_at.format('MMM') } de ${ started_at.format('Y') } - Atualmente`
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