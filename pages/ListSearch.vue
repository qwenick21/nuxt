<template lang="pug">
div
  h1 {{ title }}
  el-row
    el-autocomplete(v-model="inputNo" :fetch-suggestions="queryNo" placeholder="查詢編號" clearable class="search-input") 
    el-button(@click="search" type="primary" class="large") 查詢
</template>

<script>
export default {
  layout: 'front',
  data() {
    return {
      title: '查詢表單',
      inputNo: '',
    }
  },

  methods: {
    queryNo(queryString, cb) {
      const tableData = this.$store.state.data.tableData
      const results = queryString
        ? tableData.filter((e) => e.no.includes(queryString))
        : tableData
      // failed because autocomplete catches value of results' value
      cb(results)
    },
    search() {},
  },
}
</script>
