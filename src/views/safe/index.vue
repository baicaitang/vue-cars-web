<template>
  <div class="user-container">
    <Back column="安全设置"></Back>
    <ul class="group-links">
      <router-link to="/password" tag="a" class="arrow">
        修改登录密码
      </router-link>
      <router-link to="/fund-password" tag="a" class="arrow">
        设置资金密码
      </router-link>
      <router-link to="/phone-number" tag="a" class="arrow">
        绑定手机号
      </router-link>
      <router-link to="/bank" tag="a" class="arrow"> 绑定银行卡 </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Safe",
  data() {
    return {};
  },
  components: {},
};
</script>
<style lang="scss" scoped>
</style>