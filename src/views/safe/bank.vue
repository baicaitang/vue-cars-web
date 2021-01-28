<template>
  <div class="user-container">
    <Back column="绑定银行卡"></Back>

    <div class="binding">
      <div class="type">
        <img
          alt=""
          class="zg-b"
          src="../../assets/images/bank-type/zhongguo-bank.png"
        />
        <div class="bankname">中国银行</div>
        <div class="banknum">3568<span>****</span><span>****</span>8888</div>
      </div>
      <div class="type">
        <img
          alt=""
          class="js-b"
          src="../../assets/images/bank-type/jianshe-bank.png"
        />
        <div class="bankname">建设银行</div>
        <div class="banknum">3568<span>****</span><span>****</span>8888</div>
      </div>
    </div>

    <router-link to="/add-bank-card" tag="a" class="add-bank-card">
      <i></i>
    </router-link>
  </div>
</template>
<script>
import Photo from "../../components/upload/photo.vue";
export default {
  name: "Bank",
  data() {
    return {};
  },
  components: {
    Photo,
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
</style>