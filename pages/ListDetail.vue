<template lang="pug">
div
  h1 {{ title }}
  el-form(ref="form" :model="form" :rules="rules" :disabled="readonly" label-width="120px" class="demo-ruleForm")
    el-form-item(label="訂單編號" class="label" prop="value")
      el-input(v-model="form.value" :disabled="true")
    el-form-item(label="訂購人" class="label" prop="person")
      el-input(v-model="form.person")
    el-form-item(label="訂單商品" class="label")
    el-table(:data="form.products" border stripe class="table")
      el-table-column(label="名稱")
        template(slot-scope="scope")
          el-form-item(label=" " :prop="'products.' + scope.$index + '.name'" :rules='rules.name' label-width="12px")
            el-input(v-model="scope.row.name")
      el-table-column(label="單價")
        template(slot-scope="scope")
          el-form-item(label=" " :prop="'products.' + scope.$index + '.price'" :rules='rules.price' label-width="12px")
            el-input(v-model.number="scope.row.price")
      el-table-column(label="數量")
        template(slot-scope="scope")
          el-form-item(label=" " :prop="'products.' + scope.$index + '.number'" :rules='rules.number' label-width="12px")
            el-input(v-model.number="scope.row.number")
      el-table-column
        template(slot="header")
          el-button(@click="addRow(form.products)" type="primary" icon="el-icon-plus" circle v-if="!readonly")
        template(slot-scope="scope")
          el-button(@click="deleteRow(scope.$index, form.products)" type="danger" icon="el-icon-delete" circle v-if="!readonly")
    el-form-item(label="訂單總計" class="label")
      span(v-amount="showPrice")
      i.info.el-icon-info {{ '滿10萬享95折優惠' }}
    el-form-item(label="付款方式" class="label" prop="payType")
      el-select(v-model="form.payType" placeholder="請選擇")
        el-option(v-for="item in payTypes" :key="item.value" :value="item.value" :label="item.label")
    el-form-item(label="備註" class="label" prop="note")
      el-input(v-model="form.note" type="textarea" maxlength="100" show-word-limit :autosize="{ minRows: 2}" resize="none")
  el-row(v-if="!readonly")
    el-button(type="primary" @click="onSubmit(form, 'form')" v-if="addFlag" class="large" icon="el-icon-plus") 新增
    el-button(type="primary" @click="onSubmit(form, 'form')" v-else class="large" icon="el-icon-check") 儲存
    el-button(@click="cancel" class='large' icon="el-icon-close") 取消
  el-row(v-else)
    el-button(@click="cancel" class='large' icon="el-icon-back") 返回
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  layout: 'front',
  data() {
    const validInteger = (rule, value, callback) => {
      if (Number.isInteger(value) && value > 0 && value < 100000000) {
        callback()
      } else {
        callback(new Error('请输入8位以內的的正整数'))
      }
    }
    return {
      now: Date.now(),
      form: {
        date: this.$options.filters.formatDate(this.now, 'yyyy - mm - dd'),
        value:
          'Happy' +
          this.$options.filters.formatDate(this.now, 'yyyymmddHHMMss'),
        person: '',
        note: '',
        sumPrice: 0,
        payType: '',
        products: [
          {
            name: '',
            price: 0,
            number: 0,
          },
        ],
      },
      // 表單驗證
      rules: {
        person: [
          { required: true, trigger: 'blur', message: '請輸入訂購人' },
          { max: 20, trigger: 'blur', message: '長度須在20字以內' },
        ],
        name: [
          { required: true, trigger: 'blur', message: '請輸入名稱' },
          { max: 20, trigger: 'blur', message: '長度須在20字以內' },
        ],
        price: [
          { required: true, trigger: 'blur', message: '請輸入單價' },
          { validator: validInteger, trigger: 'blur' },
        ],
        number: [
          { required: true, trigger: 'blur', message: '請輸入數量' },
          { validator: validInteger, trigger: 'blur' },
        ],
        payType: [
          { required: true, trigger: 'change', message: '請選擇付款方式' },
        ],
      },
      payTypes: [
        { value: '1', label: '現金' },
        { value: '2', label: '信用卡' },
        { value: '3', label: '轉帳' },
      ],
    }
  },

  computed: {
    ...mapState('data', ['detailData']),
    ...mapState('status', ['addFlag', 'readonly']),
    title() {
      if (this.addFlag) return '新增訂單'
      if (this.readonly) return '檢視訂單'
      return '編輯訂單'
    },
    showPrice() {
      let sum = this.form.products.reduce((temp, e) => {
        return temp + e.price * e.number
      }, 0)
      if (sum >= 100000) sum *= 0.95
      return sum
    },
  },
  watch: {
    showPrice(val) {
      this.form.sumPrice = val
    },
  },
  // observe lifecycle
  // beforeCreate() {
  //   console.log('--- beforeCreate ---')
  //   console.log('title:' + this.title)
  // },
  created() {
    if (this.addFlag) return
    this.form = JSON.parse(JSON.stringify(this.detailData))
    // console.log('--- Created ---')
    // console.log('title:' + this.title)
  },
  // beforeMount() {
  //   console.log('--- beforeMount ---')
  //   console.log('$el:' + this.$el)
  // },
  // mounted() {
  //   console.log('--- Mounted ---')
  //   console.log('$el:' + this.$el)
  // },
  // beforeUpdate() {
  //   alert('beforeUpdate!')
  // },
  // updated() {
  //   alert('updated!')
  // },
  // beforeDestroy() {
  //   alert('beforeDestroy!')
  // },
  // destroyed() {
  //   alert('destroyed!')
  // },

  methods: {
    ...mapActions('data', ['setTableData']),
    deleteRow(index, rows) {
      if (rows.length === 1) return
      rows.splice(index, 1)
    },
    addRow(rows) {
      if (rows.length > 9) {
        this.$message({
          message: '單筆訂單上限為10比商品資料！',
          type: 'warning',
        })
        return
      }
      rows.push({
        name: '',
        price: 0,
        number: 0,
      })
    },
    onSubmit(data, rulesData) {
      this.$refs[rulesData].validate((valid) => {
        if (!valid) {
          this.$message({
            message: '欄位驗證錯誤！',
            type: 'error',
          })
          return false
        } else {
          window.history.back()
          this.setTableData(data)
          this.$message({
            message: '儲存成功！',
            type: 'success',
          })
        }
      })
    },
    cancel() {
      window.history.back()
    },
  },
}
</script>
