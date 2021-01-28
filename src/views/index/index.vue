<template>
  <div class="">
    <!-- <Login></Login> -->
    <!--cars dom渲染-->
    <Cars></Cars>
    <!--地图-->
    <Map></Map>
    <!--导航-->
    <Navbar></Navbar>
    <!--会员-->
    <div id="children-view" :class="{ open: show }">
      <!-- <div class="children-view" :class="[show ? 'open' : '']"> -->
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Map from "../amap/index";
import Cars from "../cars/index";
import Navbar from "@c/navbar";
import Login from "../login/index";
export default {
  name: "Index",
  data() {
    return {
      // show: false,
    };
  },
  components: {
    Map,
    Cars,
    Navbar,
    Login,
  },
  computed: {
    show() {
      const route = this.$route;
      // console.log(router);
      return route.name === "Index" ? false : true;
    },
  },
  watch: {
    // $route: {
    //   handler(newVal) {
    //     const routerName = newVal.name;
    //     this.show = routerName === "Index" ? false : true;
    //   },
    // },
  },
  mounted() {
    // 当鼠标指针移动到元素上方，并松开鼠标左键时，会发生 mouseup 事件
    document.addEventListener("mouseup", (e) => {
      // console.log(e.target);
      const userCon = document.getElementsByClassName("open");
      // const userCon = document.getElementById("children-view");
      // console.log(userCon[0]);
      // console.log(userCon[0].contains(e.target));
      if (userCon[0] && !userCon[0].contains(e.target)) {
        this.$router.push({
          name: "Index",
        });
      }
    });
  },
};
</script>
<style lang="scss">
#children-view {
  position: fixed;
  top: 0;
  right: -600px;
  bottom: 0;
  width: 410px;
  background-color: #34393f;
  z-index: 101;
  @include webkit(transition, all 0.3s ease 0s);
  @include webkit(box-shadow, -5px 0 38px 0 rgba(0, 0, 0, 0.4));
  // -webkit-transition: all 0.3s ease 0s;
  // -moz-transition: all 0.3s ease 0s;
  // -ms-transition: all 0.3s ease 0s;
  // -o-transition: all 0.3s ease 0s;
  // transition: all 0.3s ease 0s;
  &.open {
    right: 0;
  }
}
</style>