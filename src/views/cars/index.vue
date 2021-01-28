<template>
  <div class="cars-wrap">
    <div class="cars-swiper-wrap">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide>
          <Cars-Item height="550px"></Cars-Item>
        </swiper-slide>
        <swiper-slide>
          <Cars-Item height="550px"></Cars-Item>
        </swiper-slide>
        <swiper-slide>
          <Cars-Item></Cars-Item>
        </swiper-slide>
        <swiper-slide>
          <Cars-Item></Cars-Item>
        </swiper-slide>
      </swiper>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </div>

    <!-- <span @click="user">汽车列表</span> -->
  </div>
</template>
<script>
import CarsItem from "@c/carsList/index.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "Cars",
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 50,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  components: {
    CarsItem,
    Swiper,
    SwiperSlide
  },
  methods: {
    user() {
      this.$router.push({
        name: "User"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>