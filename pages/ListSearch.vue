<template lang="pug">
div
  h1 {{ title }}
  el-row
    el-autocomplete(v-model.trim="inputNo" :fetch-suggestions="queryNo" placeholder="查詢編號" clearable class="search-input") 
    el-button(@click="search" type="primary" class="large") 查詢
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  layout: 'front',
  data() {
    return {
      title: '查詢表單',
      inputNo: '',
    }
  },
  computed: {
    ...mapState('data', ['tableData']),
  },

  methods: {
    ...mapActions('data', ['setData']),
    ...mapActions('status', ['setAddFlag', 'setReadonly']),
    queryNo(queryString, cb) {
      const queryData = this.tableData
      const results = queryString
        ? queryData.filter((e) => e.value.includes(queryString))
        : queryData
      cb(results)
    },
    search() {
      if (this.inputNo === '') {
        this.$message({
          message: '請輸入編號！',
          type: 'error',
        })
        return
      }
      const data = this.tableData.find((e) => e.value === this.inputNo)
      if (data === undefined) {
        this.$message({
          message: '查無編號！',
          type: 'info',
        })
        return
      }
      this.setAddFlag(false)
      this.setReadonly(false)
      this.setData(data)
      this.$router.push('/ListDetail')
    },
  },
}
</script>
