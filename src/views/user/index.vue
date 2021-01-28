<template>
  <div class="user-container">
    <div class="user-info">
      <img alt="" src="../../assets/images/face.png" @click="toLogin" />

      <div class="meta">
        <h4 class="name">123456789@qq.com</h4>
        <span>
          文明驾驶分
          <s>0</s>
        </span>
      </div>
    </div>

    <ul class="group-links">
      <router-link to="/account" tag="a" class="arrow">
        <i class="icon icon-user-link-1"></i>
        我的账户
      </router-link>
      <router-link to="" tag="a" class="arrow">
        <i class="icon icon-user-link-2"></i>
        租车订单
      </router-link>
      <router-link to="/authentication" tag="a" class="arrow">
        <i class="icon icon-user-link-3"></i>
        实名认证
      </router-link>
      <router-link to="/safe" tag="a" class="arrow">
        <i class="icon icon-user-link-4"></i>
        安全设置
      </router-link>
      <router-link to="" tag="a" class="arrow">
        <i class="icon icon-user-link-5"></i>
        帮助中心
      </router-link>
    </ul>

    <button class="logout" @click="logout">登出</button>
  </div>
</template>
<script>
export default {
  name: "User",
  data() {
    return {};
  },
  components: {},
  methods: {
    toLogin() {
      this.$router.push({
        name: "Personal-login",
      });
    },
    logout() {
      this.$router.replace({
        name: "Login",
      });
    },
  },
};
</script>
<style lang="scss">
@import "./index.scss";
</style>