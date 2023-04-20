<template lang="pug">
.center-box
  el-form.login-box(:model="form" :rules="rules" ref="form" label-width="100px" class="demo-ruleForm")
    el-form-item(label="帳號" class="label" prop="account")
      el-input(v-model.trim="form.account")
    el-form-item(label="密碼" class="label" prop="password")
      el-input(v-model.trim="form.password" show-password)
    .mid  
      el-button(type="primary" @click="login('form')" class="large") 一般登入
      el-button(type="primary" @click="loginWithEmail" class="large") 以Email登入
      el-button(@click="displayRegisterForm = true" class="large") 註冊
  //- register form
  el-dialog(title="註冊頁面" :visible.sync="displayRegisterForm" width="700px")
    el-form(:model="registerForm" :rules="rules" ref="registerForm" label-width="100px" class="demo-ruleForm")
      el-form-item(label="信箱" class="label" prop="email")
        el-input(v-model.trim="registerForm.email" hide-message-after-blur)
      el-form-item(label="密碼" class="label" prop="password")
        el-input(v-model.trim="registerForm.password" show-password)  
    div(slot="footer" class="dialog-footer")
      el-button(type="primary" @click="register" class="large") 註冊
      el-button(@click="displayRegisterForm = false" class="large") 取消             
</template>

<script>
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import messageMixin from '@/mixins/message'

export default {
  mixins: [messageMixin],
  async asyncData({ $axios }) {
    const loginSet = await require('@/data/account.json')
    return loginSet
  },
  data() {
    return {
      displayRegisterForm: false,
      form: {
        account: '',
        password: '',
      },
      registerForm: {
        email: '',
        password: '',
      },
      loginSet: [],
      rules: {
        email: [
          { required: true, trigger: 'blur', message: '請輸入信箱' },
          {
            type: 'email',
            message: '請輸入正確的信箱格式',
            trigger: ['blur', 'change'],
          },
        ],
        account: [{ required: true, trigger: 'blur', message: '請輸入帳號' }],
        password: [{ required: true, trigger: 'blur', message: '請輸入密碼' }],
      },
    }
  },
  computed: {
    loginCheck() {
      return this.loginSet.some(
        (e) =>
          e.account === this.form.account && e.password === this.form.password
      )
    },
  },
  mounted() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBqA1afh29knWoVvMzSeBFkRmGuXlGQDrc',
      authDomain: 'nick-is-so-handsome.firebaseapp.com',
      projectId: 'nick-is-so-handsome',
      storageBucket: 'nick-is-so-handsome.appspot.com',
      messagingSenderId: '75105878315',
      appId: '1:75105878315:web:84e31ed75510c34b66c56e',
      measurementId: 'G-MEHE1K720V',
    })
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
          this.$cookies.set('username', this.form.account)
        } else
          this.$message({
            message: '帳號或密碼錯誤！',
            type: 'error',
          })
      })
    },
    async loginWithEmail() {
      try {
        const loginMessage = await firebase
          .auth()
          .signInWithEmailAndPassword(this.form.account, this.form.password)
        const user = loginMessage.user.email
        this.$router.push('/')
        this.$cookies.set('ifLogin', true)
        this.$cookies.set('username', user)
      } catch (error) {
        this.$message({
          message: this.showApiMessage(error.message),
          type: 'error',
        })
      }
    },
    async register() {
      try {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(
            this.registerForm.email,
            this.registerForm.password
          )
        this.displayRegisterForm = false
        this.registerForm = {
          email: '',
          password: '',
        }
        this.$message({
          message: '註冊成功',
          type: 'success',
        })
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

<style lang="scss">
.login-box {
  width: 500px;
  border: 1px solid #ebebeb;
  padding: 20px;
  border-radius: 5px;
}
</style>
