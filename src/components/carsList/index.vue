<template>
  <div class="">
    <section class="cars-item">
      <header>
        <h4 class="cars-logo">
          <img src="../../assets//images/cars-logo.png" alt="Mustang 2019款" />
          <span class="name">
            Mustang 2019款
          </span>
        </h4>
        <p class="cars-attr"><span>智能源汽车 5座</span></p>
      </header>
      <div class="cars-content">
        <div class="info">
          <div>
            <h4 class="car-number">粤 A743N8</h4>
            <ul class="car-electric active-li-9">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>

              <p class="distance">
                <sub>约</sub>
                <strong>600</strong>
                <sub>km</sub>
              </p>
            </ul>
          </div>
        </div>
        <img src="../../assets//images/pic001.jpg" alt="" />
      </div>
      <footer>
        <a href="javascript:void(0);" class="parking-link">某某停车场</a>
      </footer>
    </section>

    <section class="cars-item cars-detail" :style="`height:${height};`">
      <div class="scroll">
        <h4 class="column">
          某某停车场
          <i class="close"></i>
        </h4>
        <header>
          <h4 class="cars-logo">
            <img
              src="../../assets//images/cars-logo.png"
              alt="Mustang 2019款"
            />
            <span class="name">
              Mustang 2019款
            </span>
          </h4>
          <p class="cars-attr"><span>智能源汽车 5座</span></p>
        </header>

        <img width="100%" src="../../assets//images/pic001.jpg" alt="" />

        <div class="clearfix">
          <h4 class="pull-left fs-24">粤 A743N8</h4>

          <p class="distance pull-right">
            <sub>约</sub>
            <strong>600</strong>
            <sub>km</sub>
          </p>
        </div>

        <div class="car-electric-box">
          <div class="p-r">
            <span class="e-bg"></span>
            <span class="e-high" style="width:80%;"></span>
          </div>
        </div>

        <p class="color-main text-center info">
          取车约支付12.0元停车费，实际补贴12.0元
        </p>

        <ul class="cars-type-list">
          <li class="current">
            <h4 class="name">日租车</h4>
            <span class="price">￥300/1天</span>
          </li>
          <li>
            <h4 class="name">日租车</h4>
            <span class="price">￥300/1天</span>
          </li>
          <li>
            <h4 class="name">日租车</h4>
            <span class="price">￥300/1天</span>
          </li>
          <li>
            <h4 class="name">日租车</h4>
            <span class="price">￥300/1天</span>
          </li>
        </ul>

        <div class="clause">
          <span class="pull-left">参保《全面保障服务》用车更放心</span>
          <i class="current"></i>
        </div>

        <a href="javascript:void(0);" class="select-car-btn">预约用车</a>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "CarsList",
  data() {
    return {};
  },
  props: {
    height: {
      type: String,
      defult: "257px"
    }
  },
  components: {},
  methods: {}
};
</script>
<style lang="scss" scoped>
@import "./index";
</style>