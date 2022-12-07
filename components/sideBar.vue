<template lang="pug">
el-menu(:default-active="$route.path" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b")
  nuxt-link(to="/") 
    el-menu-item(index="/")
      i(class="el-icon-s-home")
        span(slot="title") 首頁  
  nuxt-link(to="/ListSearch")            
    el-menu-item(index="/ListSearch")  
      i(class="el-icon-search")  
        span(slot="title") 查詢功能  
  nuxt-link(to="/CssShow")
    el-menu-item(index="/CssShow")
      i(class="el-icon-scissors")
        span(slot="title") 美工展示             
</template>
