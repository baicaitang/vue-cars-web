<template>
  <div class="user-container">
    <Back column="实名认证"></Back>
    <div class="tags">
      <div class="active tag" id="t1" @click="changeTag">
        身份证上传
        <div class="line"></div>
      </div>
      <div class="tag" id="t2" @click="changeTag">
        驾驶证上传
        <div class="line"></div>
      </div>
    </div>
    <div class="tab-content">
      <div id="c1" class="cont show">
        <div class="upload">
          <Photo></Photo>
          <span>正面</span>
          <Photo></Photo>
          <span>反面</span>
          <Photo></Photo>
          <span>手持免冠</span>
        </div>
      </div>
      <div id="c2" class="cont">
        <div class="upload">
          <Photo></Photo>
          <span>正面</span>
          <Photo></Photo>
          <span>反面</span>
        </div>
      </div>
    </div>

    <button class="submit">提交身份认证</button>
  </div>
</template>
<script>
import Photo from "../../components/upload/photo.vue";
export default {
  name: "Authentication",
  data() {
    return {};
  },
  components: {
    Photo,
  },
  methods: {
    changeTag(e) {
      //   console.log(e);
      //   console.log(e.path[0].classList.add("active"));
      //   console.log(e.target.className.indexOf("active"));
      //不存在 -1 ->true ,存在 != -1 ->false
      let isShow = e.target.className.indexOf("active");

      var tabs = document
        .getElementsByClassName("tags")[0]
        .getElementsByClassName("tag");
      var contents = document
        .getElementsByClassName("tab-content")[0]
        .getElementsByTagName("div");

      //   console.log(tabs);
      //   console.log(tabs[0]);
      //   console.log(contents);
      let conts = [];
      conts.push(contents.c1);
      conts.push(contents.c2);
      //   console.log(conts);

      if (isShow == -1) {
        //   添加
        for (let i = 0; i < tabs.length; i++) {
          if (e.path[0] === tabs[i]) {
            e.path[0].classList.add("active");

            //展示
            conts[i].classList.add("show");
          } else {
            tabs[i].classList.remove("active");

            conts[i].classList.remove("show");
          }
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>