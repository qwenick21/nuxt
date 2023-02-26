import Vue from 'vue'

Vue.directive('amount', function (el, binding) {
  el.textContent = parseFloat(binding.value.toPrecision(12))
})
