<template lang="pug">
el-menu(default-active="1" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b")
  el-menu-item(index="1" @click="goHome")
    i(class="el-icon-s-home")
      span(slot="title") 首頁    
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push('/')
    },
  },
}
</script>
