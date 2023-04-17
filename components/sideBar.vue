<template lang="pug">
el-menu(class= "el-menu-vertical-demo" :default-active="$route.path" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b")
  div(v-for="item in menu")
    nuxt-link(:to="item.route") 
      el-menu-item(:index="item.route")
        i(:class="item.icon")
          span(slot="title") {{ item.title }}
  nuxt-link(to="/Login") 
    el-menu-item(index="/Login" @click="logout")
      i(class="el-icon-s-unfold")
        span(slot="title") 登出                              
</template>

<script>
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import messageMixin from '@/mixins/message'

export default {
  mixins: [messageMixin],
  data() {
    return {
      menu: [
        {
          route: '/',
          icon: 'el-icon-s-home',
          title: '首頁',
        },
        {
          route: '/ListSearch',
          icon: 'el-icon-search',
          title: '查詢功能',
        },
        {
          route: '/CssShow',
          icon: 'el-icon-scissors',
          title: '美工展示',
        },
      ],
    }
  },
  methods: {
    async logout() {
      try {
        await firebase.auth().signOut()
        this.$cookies.set('ifLogin', false)
        this.$cookies.set('username', null)
      } catch (error) {
        this.$message({
          message: this.showApiMessage(error.message),
          type: 'error',
        })
      }
    },
  },
}
</script>
