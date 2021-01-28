<template>
  <div class="user-container">
    <Back column="积分详情"></Back>

    <div class="user-list">
      <span class="tit">总积分</span>

      <div class="con"><span class="integral">3000</span></div>
    </div>

    <div class="wrap">
      <div class="user-list">
        <span class="tit">首次注册</span>

        <div class="con">
          <div class="info">
            <div class="create-num">+50</div>
            <div class="time">2020-12-12 12:00:00</div>
          </div>
        </div>
      </div>

      <div class="user-list">
        <span class="tit">充值 送积分</span>

        <div class="con">
          <div class="info">
            <div class="create-num">+50</div>
            <div class="time">2020-12-12 12:00:00</div>
          </div>
        </div>
      </div>

      <div class="user-list">
        <span class="tit">充值 送积分</span>

        <div class="con">
          <div class="info">
            <div class="create-num">+50</div>
            <div class="time">2020-12-12 12:00:00</div>
          </div>
        </div>
      </div>

      <div class="user-list">
        <span class="tit">充值 送积分</span>

        <div class="con">
          <div class="info">
            <div class="create-num">+50</div>
            <div class="time">2020-12-12 12:00:00</div>
          </div>
        </div>
      </div>

      <button class="more">加载更多</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Grade-detail",
  data() {
    return {};
  },
  components: {},
};
</script>
<style lang="scss" scoped>
@import "./css/integral.scss";
</style>