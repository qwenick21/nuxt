<template lang="pug">
div
  el-row(class="end")
    el-col(:span="6") 
      i(class="el-icon-time") 當前時間: {{ now | formatDate('yyyy/mm/dd HH:MM:ss') }}   
    el-col(:span="6") 
      i(class="el-icon-message") 聯絡信箱: {{ email }}   
</template>

<script>
export default {
  data() {
    return {
      email: 'aa0975766121@gmail.com',
      now: Date.now(),
    }
  },
  created() {
    setInterval(() => {
      this.now = Date.now()
    }, 1000)
  },
}
</script>
