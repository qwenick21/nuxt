<template lang="pug">
el-row(class="mid") 
  span(class="sum") 共 {{ dataCount }} 筆       
  el-pagination(layout="prev, pager, next" :total="dataCount" :current-page.sync="currentPage")           
</template>

<script>
export default {
  props: {
    tablePage: { type: Number, default: 1 },
    tableCount: { type: Number, default: 0 },
  },
  data() {
    return {
      currentPage: this.tablePage,
    }
  },
  computed: {
    dataCount() {
      return this.tableCount
    },
  },
  watch: {
    currentPage(val) {
      this.$emit('update:tablePage', val)
    },
  },
}
</script>
