<template>
  <div class="user-container">
    <Back column="基本信息"></Back>

    <router-link to="/grade" tag="a" class="">
      <img
        class="group-img"
        alt=""
        src="../../assets/images/group/account-ad.png"
      />
    </router-link>

    <div class="user-list balance">
      <span class="tit">当前余额</span>

      <div class="con">
        <span class="price">2000.00</span>
        <router-link to="/recharge" tag="a" class="recharge"
          >去充值</router-link
        >
      </div>
    </div>

    <div class="user-list">
      <span class="tit">我的里程</span>

      <div class="con"><span class="km">30000公里</span></div>
    </div>

    <div class="user-list">
      <span class="tit">违章信息</span>

      <div class="con">
        <ul class="group-links">
          <router-link to="" tag="a" class="arrow">
            待处理违章<span class="det">10单</span></router-link
          >
          <router-link to="" tag="a" class="arrow">
            违章预存金<span class="det">￥200</span></router-link
          >
        </ul>
      </div>
    </div>

    <div class="user-list">
      <span class="tit">发票</span>

      <div class="con">
        <ul class="group-links">
          <router-link to="" tag="a" class="arrow">
            可开发票总额<span class="det">￥230</span></router-link
          >
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Account",
  data() {
    return {};
  },
  components: {},
};
</script>
<style lang="scss" scoped>
@import "./css/index.scss";
</style>