<template>
  <div class="user-container">
    <Back column="添加银行卡"></Back>

    <div class="cars-form-ui">
      <el-form ref="form" :model="form">
        <el-form-item label="">
          <el-input v-model="form.comfirmName" placeholder="开户名"></el-input>
        </el-form-item>

        <div class="bank-select" @click="isShow">
          <div :class="[bank ? 'selected' : '']">
            {{ bank ? bank : "请选择开户银行" }}
          </div>
        </div>
        <div class="option" v-if="show">
          <div
            class="bank-option"
            v-for="(item, i) in form.selectBank"
            :key="i"
            @click="selectBank(item.value)"
          >
            {{ item.value }}
          </div>
        </div>

        <el-form-item label="">
          <el-input v-model="form.phone" placeholder="预留手机号"></el-input>
        </el-form-item>
        <el-form-item label="">
          <button type="button" class="get-verificationCode">获取验证码</button>
          <el-input
            v-model="form.verificationCode"
            placeholder="手机验证码"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" class="btn-confirm">确定</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Add-bank-card",
  data() {
    return {
      show: false,
      bank: "",
      form: {
        oldName: "",
        newName: "",
        comfirmName: "",
        verificationCode: "",
        phone: "",
        selectBank: [
          { value: "中国银行", label: "中国银行" },
          { value: "建设银行", label: "建设银行" },
          { value: "交通银行", label: "交通银行" },
          { value: "工商银行", label: "工商银行" },
          { value: "农业银行", label: "农业银行" },
        ],
      },
    };
  },
  components: {},
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    isShow() {
      if (this.show) {
        this.show = !this.show;
      } else {
        this.show = !this.show;
      }
    },
    selectBank(val) {
      this.bank = val;
      this.show = !this.show;
    },
  },
};
</script>
<style lang="scss" >
</style>