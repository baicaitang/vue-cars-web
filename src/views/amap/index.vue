<template>
  <div class="amap-wrap">
    <!-- <div class="bg"></div> -->
    <el-amap vid="amapContainer" :events="events" class="amap-demo"> </el-amap>
  </div>
</template>
<script>
import { AMapManager, lazyAMapApiLoaderInstance } from "vue-amap";
export default {
  name: "Amap",
  data() {
    return {
      map: null,
      zoom: 15,
      events: {},
    };
  },
  mounted() {
    //使用amap插件
    lazyAMapApiLoaderInstance.load().then(() => {
      this.map = new AMap.Map("amapContainer", {
        center: new AMap.LngLat(113.402219, 22.785184),
        zoom: this.zoom, //初始化地图层级
      });
    });
  },
};
</script>
<style lang="scss">
.amap-wrap {
  height: 100vh;
}
.bg {
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
}
</style>