import Vue from 'vue'
import dateFormat from 'dateformat'

Vue.filter('formatDate', (value, formatType) => {
  return dateFormat(value, formatType)
})

Vue.use(require('vue-cookies'))
