<template>
  <div class="user-container">
    <Back column="注册" login="登录"></Back>

    <div class="cars-form-ui">
      <el-form ref="form" :model="form">
        <el-form-item label="">
          <el-input v-model="form.comfirmName" placeholder="手机号"></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-input v-model="form.comfirmName" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-input
            v-model="form.comfirmName"
            placeholder="确认密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="">
          <button type="button" class="get-verificationCode">验证码</button>
          <el-input
            v-model="form.verificationCode"
            placeholder="验证码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" class="btn-confirm"
            >注册</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Register",
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
<style lang="scss" >
</style>