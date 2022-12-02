<template lang="pug">
el-menu(default-active="1" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b")
  el-menu-item(index="1" @click="goHome")
    i(class="el-icon-s-home")
      span(slot="title") 首頁 
  el-menu-item(index="2" @click="goSearch")
    i(class="el-icon-search")
      span(slot="title") 查詢功能        
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push('/')
    },
    goSearch() {
      this.$router.push('/ListSearch')
    },
  },
}
</script>
