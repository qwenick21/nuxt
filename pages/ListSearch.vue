<template lang="pug">
div
  h1 {{ title }}
  .search-group
    //- --- with tool ---
    //- el-autocomplete(v-model.trim="inputNo" :fetch-suggestions="queryNo" placeholder="查詢編號" clearable class="search-input")
    //- el-button(@click="search" type="primary" class="large") 查詢
    el-input(v-model.trim="inputNo" placeholder="查詢編號" clearable)
      el-button(slot="append" icon="el-icon-search" @click="search")
    ul.list(v-if="showList")
      li(v-for="item in queryData" :key="item.value" @click="setInput(item.value)") {{ item.value }} 
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  layout: 'front',
  data() {
    return {
      title: '查詢表單',
      inputNo: '',
      showList: false,
      queryData: [],
    }
  },
  computed: {
    ...mapState('data', ['tableData']),
  },
  watch: {
    inputNo() {
      if (this.inputNo === '') this.showList = false
      else {
        this.showList = true
        this.queryNo()
      }
    },
  },

  methods: {
    ...mapActions('data', ['setDetailData']),
    ...mapActions('status', ['setAddFlag', 'setReadonly']),
    // with tool
    // queryNo(queryString, cb) {
    //   const queryData = this.tableData
    //   const results = queryString
    //     ? queryData.filter((e) => e.value.includes(queryString))
    //     : queryData
    //   cb(results)
    // },
    queryNo() {
      const queryLength = 10
      const resultData = this.tableData.filter((e) =>
        e.value.includes(this.inputNo)
      )
      this.queryData = resultData.slice(0, queryLength)
    },
    async setInput(value) {
      await (this.inputNo = value)
      await (this.showList = false)
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
      this.setDetailData(data)
      this.$router.push('/ListDetail')
    },
  },
}
</script>
