<template lang="pug">
div
  h1 {{ title }}
  el-row.end
    el-button(@click="addList" type="primary" class="large") 新增訂單
  el-table(:data="pageTableData" stripe class="table")
    el-table-column(prop="date" label="日期")
    el-table-column(prop="value" label="編號")
    el-table-column(prop="person" label="訂購人")
    el-table-column(label="總金額")
      template(slot-scope="scope")
        span(v-amount="scope.row.sumPrice")
    el-table-column(label="操作")
      template(slot-scope="scope")
        el-button(@click="checkRow(scope.$index, pageTableData, true)" type="info" icon="el-icon-view" circle)
        el-button(@click="checkRow(scope.$index, pageTableData, false)" type="primary" icon="el-icon-edit" circle)
        el-button(@click="deleteRow(scope.$index, pageTableData)" type="danger" icon="el-icon-delete" circle)
  PageBar(:tablePage.sync="currentPage" :tableCount="dataCount")
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

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
    ...mapState('data', ['tableData']),
    ...mapState('status', ['page']),
    ...mapGetters('data', ['dataCount']),
    pageTableData() {
      return this.tableData.slice(
        this.pageSize * (this.currentPage - 1),
        this.pageSize * this.currentPage
      )
    },
  },
  created() {
    this.currentPage = this.page
  },
  destroyed() {
    this.setPage(this.currentPage)
  },

  methods: {
    ...mapActions('data', ['setDetailData', 'deleteTableData']),
    ...mapActions('status', ['setAddFlag', 'setReadonly', 'setPage']),
    deleteRow(index, rows) {
      this.$confirm('是否要將訂單 ' + rows[index].value + ' 刪除？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        confirmButtonClass: 'message',
        cancelButtonClass: 'message',
        customClass: 'message',
      }).then(() => {
        const totalIndex = this.pageSize * (this.currentPage - 1) + index
        this.deleteTableData(totalIndex)
        this.$message({
          message: '刪除成功！',
          type: 'success',
        })
      })
    },
    addList() {
      this.setAddFlag(true)
      this.setReadonly(false)
      this.$router.push('/ListDetail')
    },
    checkRow(index, rows, readonly) {
      this.setAddFlag(false)
      this.setReadonly(readonly)
      this.setDetailData(rows[index])
      this.$router.push('/ListDetail')
    },
  },
}
</script>
