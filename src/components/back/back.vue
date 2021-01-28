<template>
  <div class="header-back">
    <div class="back">
      <i class="icon" @click="back"></i>
      <h4 class="title">{{ column }}</h4>
      <router-link tag="a" class="bar-login-register" :to="loginOrRegister">
        <span @click="toLoginRegister">{{ register ? register : login }}</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "Back",
  props: {
    column: {
      type: String,
      default: "",
    },
    register: {
      type: String,
      default: "",
    },
    login: {
      type: String,
      default: "",
    },
  },
  data() {
    return { loginOrRegister: "" };
  },
  methods: {
    back() {
      this.$router.back();
    },
    toLoginRegister() {
      if (this.register === "注册" && this.login === "") {
        this.loginOrRegister = "/personal-register";
      } else {
        this.loginOrRegister = "/personal-login";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.header-back {
  padding-bottom: 147px;
  position: relative;
  color: #fff;
}
.back {
  display: flex;
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  height: 40px;
  line-height: 40px;
}
.title {
  font-size: 16px;
  margin-left: 40px;
}
.icon {
  position: absolute;
  width: 40px;
  height: 40px;
  left: 0;
  top: 0;
  right: 0;
  // background-color: green;

  &:after {
    content: "";
    position: absolute;
    top: 14px;
    left: 0;
    display: block;
    width: 12px;
    height: 12px;
    border-top: 2px solid #00a3ff;
    border-left: 2px solid #00a3ff;
    @include webkit(transform, rotate(-45deg));
    cursor: pointer;
  }
}
</style>