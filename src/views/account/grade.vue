<template>
  <div class="user-container">
    <Back column="会员等级"></Back>

    <div class="user-list">
      <div class="con">
        <ul class="group-links">
          <router-link to="/grade-detail" tag="a" class="arrow">
            总积分<span class="det">积分详细</span></router-link
          >

          <div class="bar p-r">
            <span class="e-bg"></span>
            <span class="e-high" style="width: 80%"></span>
          </div>

          <div class="progress">
            <span class="prev">Lv.1会员 100分</span>
            <span class="next">Lv.1会员 200分</span>
          </div>
        </ul>
      </div>
    </div>

    <div class="user-list">
      <span class="tit">可用车型</span>

      <div class="con">
        <ul class="cars-type">
          <li>
            <img alt="" src="../../assets/images/cars/cars-type-b.png" />
          </li>
          <li>
            <img alt="" src="../../assets/images/cars/cars-type-a.png" />
          </li>
          <li>
            <img alt="" src="../../assets/images/cars/cars-type-b.png" />
          </li>
          <li>
            <img alt="" src="../../assets/images/cars/cars-type-b.png" />
          </li>

          <li>
            <img alt="" src="../../assets/images/cars/cars-type-b.png" />
          </li>
          <li>
            <img alt="" src="../../assets/images/cars/cars-type-b.png" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Grade",
  data() {
    return {};
  },
  components: {},
};
</script>
<style lang="scss" scoped>
@import "./css/grade.scss";
</style>