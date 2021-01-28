<template>
  <div class="user-container">
    <Back column="登录" register="注册"></Back>

    <div class="cars-form-ui">
      <el-form ref="form" :model="form">
        <el-form-item label="">
          <el-input v-model="form.comfirmName" placeholder="手机号"></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-input v-model="form.comfirmName" placeholder="密码"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit" class="btn-confirm"
            >登录</el-button
          >
        </el-form-item>

        <router-link tag="a" to="/personal-forget" class="forget"
          >忘记密码</router-link
        >
      </el-form>
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
.forget {
  color: #64676b;
  display: block;
  list-style: none;
  text-align: right;
}
</style>