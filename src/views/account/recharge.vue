<template>
  <div class="user-container">
    <Back column="充值"></Back>
    <div class="btn-wrap">
      <el-button class="btn">100</el-button>
      <el-button class="btn">200</el-button>
      <el-button class="btn">400</el-button>
      <el-button class="btn">500</el-button>
      <el-button class="btn">
        <svg class="btn-sup" width="35px" height="31px">
          <path
            fill-rule="evenodd"
            fill="rgb(255, 0, 0)"
            d="M10.000,-0.000 L35.000,-0.000 L-0.000,31.000 C-0.000,31.000 -0.000,18.523 -0.000,13.000 L-0.000,10.000 C-0.000,4.477 4.477,-0.000 10.000,-0.000 Z"
          />
          <text x="-8" y="20" fill="#fff" class="sup-text">首充</text>
        </svg>
        1000

        <div class="btn-give"><span>送</span><span>100</span></div>
      </el-button>
      <el-button class="btn">2000</el-button>
    </div>

    <el-input
      class="recharge-input"
      v-model="input"
      placeholder="请输入充值金额"
    ></el-input>

    <div class="user-list">
      <span class="tit">支付类型</span>

      <div class="con">
        <ul class="group-links">
          <router-link to="" tag="a" class="seleted">
            微信 <i class="el-icon-circle-check"></i
          ></router-link>
          <router-link to="" tag="a" class="seleted">
            支付宝 <i class="el-icon-circle-check"></i
          ></router-link>
        </ul>
      </div>
    </div>

    <button class="confirm-recharge">确认充值</button>
  </div>
</template>
<script>
export default {
  name: "Recharge",
  data() {
    return { input: "" };
  },
  components: {},
};
</script>
<style lang="scss" scoped>
@import "./css/recharge.scss";
</style>