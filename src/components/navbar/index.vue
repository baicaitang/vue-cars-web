<template>
  <div class="navbar">
    <ul>
      <li><i class="icon icon-w-h-44 icon-help"></i></li>
      <li><i class="icon icon-w-h-44 icon-search"></i></li>
      <li><a href="javascript:void(0);" class="select-car-btn">选择车辆</a></li>
      <li><i class="icon icon-w-h-44 icon-location"></i></li>
      <li><i class="icon icon-w-h-44 icon-user" @click="toUser"></i></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  methods: {
    toUser() {
      this.$router.push({
        name: "User",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.navbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 86px;
  z-index: 10;
  text-align: center;

  li {
    display: inline-block;
  }
  .icon {
    margin: 0 17px;
    vertical-align: middle;
    cursor: pointer;
    background-color: $color-main;
    border-radius: 100px;
  }

  // .select-car-btn {
  //   display: block;
  //   width: 240px;
  //   height: 84px;
  //   border-radius: 100px;
  //   line-height: 84px;
  //   text-align: center;
  //   color: #fff;
  //   font-size: 26px;
  //   font-weight: 300;
  //   background-color: $color-main;
  // }
}
</style>