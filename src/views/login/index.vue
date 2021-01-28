<template>
  <div class="login-wrap">
    <div class="login-container">
      <div class="tit">
        <span>登录</span>

        <div class="close"></div>
      </div>
      <div class="login-form-ui">
        <el-form ref="form" :model="form">
          <el-form-item label="">
            <el-input
              v-model="form.comfirmName"
              placeholder="请输入用户名（邮箱）"
            ></el-input>
          </el-form-item>
          <el-form-item label="">
            <el-input v-model="form.comfirmName" placeholder="密码"></el-input>
          </el-form-item>

          <el-form-item label="">
            <button type="button" class="get-verificationCode">
              获取验证码
            </button>
            <el-input
              v-model="form.verificationCode"
              placeholder="验证码"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit" class="btn-confirm"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        oldName: "",
        newName: "",
        comfirmName: "",
        verificationCode: "",
      },
    };
  },
  components: {},
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>