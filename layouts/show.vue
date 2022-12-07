<template lang="pug">  
div
  TopBar(id="topBar") 
  el-container
    el-aside(id="aside" width="150px") 
      SideBar
    el-main
      nuxt
</template>

<style lang="scss">
.el-main {
  padding: 0;
}
</style>
