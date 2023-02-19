<template lang="pug">
.center-box
  el-form.login-box(:model="form" :rules="rules" ref="form" label-width="100px" class="demo-ruleForm")
    el-form-item.label(label="帳號" prop="account")
      el-input(v-model.trim="form.account")
    el-form-item.label(label="密碼" prop="password")
      el-input(v-model.trim="form.password" show-password)
    .mid  
      el-button.large(type="primary" @click="login('form')") 登入    
</template>

<script>
export default {
  data() {
    return {
      form: {
        account: '',
        password: '',
      },
      rules: {
        account: [
          { required: true, trigger: 'blur', message: '請輸入帳號' },
          { max: 20, trigger: 'blur', message: '長度須在20字以內' },
        ],
        password: [
          { required: true, trigger: 'blur', message: '請輸入密碼' },
          { max: 20, trigger: 'blur', message: '長度須在20字以內' },
        ],
      },
    }
  },
  computed: {
    loginCheck() {
      return (
        this.form.account === 'qwenick21' && this.form.password === 'aaaa1234'
      )
    },
  },
  methods: {
    login(rulesData) {
      this.$refs[rulesData].validate((valid) => {
        if (!valid) {
          this.$message({
            message: '欄位驗證錯誤！',
            type: 'error',
          })
          return false
        } else if (this.loginCheck) {
          this.$router.push('/')
          this.$cookies.set('ifLogin', true)
        } else
          this.$message({
            message: '帳號或密碼錯誤！',
            type: 'error',
          })
      })
    },
  },
}
</script>

<style lang="scss">
.login-box {
  width: 500px;
  border: 1px solid #ebebeb;
  padding: 20px;
  border-radius: 5px;
}
</style>
