<template lang="pug">
div
  h1 {{ title }}  
  el-row(class="end")
    el-button(@click="addList" type="primary" class="large") 新增訂單
  el-table(:data="pageTableData" stripe class="table")
    el-table-column(prop="date" label="日期")
    el-table-column(prop="no" label="編號")
    el-table-column(prop="person" label="訂購人")
    el-table-column(prop="sumPrice" label="總金額")
    el-table-column(label="操作")
      template(slot-scope="scope")
        el-button(@click="checkRow(scope.$index, pageTableData, true)" type="info" icon="el-icon-view" circle) 
        el-button(@click="checkRow(scope.$index, pageTableData, false)" type="primary" icon="el-icon-edit" circle)
        el-button(@click="deleteRow(scope.$index, pageTableData)" type="danger" icon="el-icon-delete" circle)
  el-row(class="mid") 
    span(class="sum") 共 {{ dataCount }} 筆       
    el-pagination(layout="prev, pager, next" :total="dataCount" :current-page.sync="currentPage")       
</template>

<script>
export default {
  layout: 'front',
  data() {
    return {
      title: '允文的團購表單',
      pageSize: 10,
      currentPage: 1,
    }
  },
  computed: {
    dataCount() {
      return this.$store.getters['data/dataCount']
    },
    pageTableData() {
      return this.$store.state.data.tableData.slice(
        this.pageSize * (this.currentPage - 1),
        this.pageSize * this.currentPage
      )
    },
  },
  created() {
    this.currentPage = this.$store.state.data.page
  },
  destroyed() {
    this.$store.dispatch('data/setPage', this.currentPage)
  },

  methods: {
    deleteRow(index, rows) {
      this.$confirm('是否要將訂單 ' + rows[index].no + ' 刪除？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        confirmButtonClass: 'message',
        cancelButtonClass: 'message',
        customClass: 'message',
      }).then(() => {
        const totalIndex = this.pageSize * (this.currentPage - 1) + index
        this.$store.dispatch('data/deleteTableData', totalIndex)
        this.$message({
          message: '刪除成功！',
          type: 'success',
        })
      })
    },

    addList() {
      this.$store.dispatch('status/setAddFlag', true)
      this.$store.dispatch('status/setReadonly', false)
      this.$router.push('/ListDetail')
    },
    checkRow(index, rows, readonly) {
      this.$store.dispatch('status/setAddFlag', false)
      this.$store.dispatch('status/setReadonly', readonly)
      this.$store.dispatch('data/setData', rows[index])
      this.$router.push('/ListDetail')
    },
  },
}
</script>
