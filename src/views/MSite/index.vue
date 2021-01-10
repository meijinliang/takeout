<template>
  <div>
    <!-- 头部 -->
    <HeaderTop :title="title">
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </HeaderTop>
    <!-- 轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">slider1</div>
        <div class="swiper-slide">slider2</div>
        <div class="swiper-slide">slider3</div>
      </div>
      <!-- 分页器 -->
      <div class="swiper-pagination"></div>
      <!-- 导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>
<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
import { Swiper } from 'swiper'
import '../../../node_modules/swiper/swiper.min.css'
export default {
  data () {
    return {
      title: '定位地点'
    }
  },
  components: {
    HeaderTop,
  },
  mounted () {
    this.swiperInit()
  },
  methods: {
    swiperInit () {
      var mySwiper = new Swiper('.swiper-container', {
        // autoplay: true,//可选选项，自动滑动
        loop: true, //循环播放
        // direction: 'vertical', // 垂直切换选项 默认横向切换
        // 分页器
        pagination: {
          el: '.swiper-pagination'
        },
        // 前后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
// @import "../../../node_modules/swiper/swiper.min.css";
.swiper-container {
  height: 100px;
  width: 100%;
  margin-top: 45px;
  background-color: red;
}
</style>