import Vue from 'vue'

import moment from 'moment'

const getStartedDateEndedDate = (data) => {
  let started_at = moment(data.started_at, 'YYYY-MM-DD'),
      ended_at   = moment(data.ended_at, 'YYYY-MM-DD')
  
  return `${ started_at.format('MMM') } de ${ started_at.format('Y') } - ${ ended_at.format('MMM') } de ${ ended_at.format('Y') }`
}

Vue.filter('getStartedDateEndedDate', getStartedDateEndedDate)

export default {
  getStartedDateEndedDate
}