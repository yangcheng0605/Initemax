<template>
  <div class="about">
    <div class="about_banner">
      <div class="swiper_box">
        <swiper
          :modules="modules"
          slides-per-view="auto"
          :space-between="0"
          grabCursor
          centeredSlides
          loop
          :navigation="true"
          @swiper="e => onSwiper(e, 1)"
          @slideChange="e => onSlideChange(e, 1)"
          :speed="1000"
        >
          <!-- :autoplay="{
            delay: 5000,
            disableOnInteraction: false
          }" -->
          <swiper-slide v-for="item in bannerList" :key="item.id">
            <div class="about_contain">
              <img :src="item.img" alt="" />
              <div class="content">
                <p class="title SmileFont">{{ item.title }}</p>
                <p class="text SmileFont">{{ item.text }}</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="home_silde">
          <div class="home_sildePre blackborder" @click="sildePre(1)"><img src="@/assets/img/arrow_yellow_l.png" alt="" /></div>
          <p class="progress">{{ swiper1_active }}/{{ bannerList.length }}</p>
          <div class="home_sildeNext blackborder" @click="sildeNext(1)"><img src="@/assets/img/arrow_yellow_r.png" alt="" /></div>
        </div>
      </div>
    </div>
    <div class="about_introduce">
      <div class="new_title">
        <p class="SmileFont wow animate__fadeInUp" data-wow-offset="50">公司介绍</p>
      </div>
      <div class="swiper_box">
        <swiper :slides-per-view="perView_introduce" grabCursor :navigation="true" @swiper="e => onSwiper(e, 2)" @slideChange="e => onSlideChange(e, 2)">
          <swiper-slide v-for="item in about_contain" :key="item.id">
            <div class="about_contain">
              <div>
                <p v-for="items in item.contain" :key="items.id">{{ items.text }}</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="home_silde">
          <div class="home_sildePre" @click="sildePre(2)"><img src="@/assets/img/arrow_yellow_l.png" alt="" /></div>
          <p class="progress">{{ swiper2_active }}/{{ about_contain.length }}</p>
          <div class="home_sildeNext" @click="sildeNext(2)"><img src="@/assets/img/arrow_yellow_r.png" alt="" /></div>
        </div>
      </div>
    </div>
    <div class="about_brand">
      <div class="new_title">
        <p class="SmileFont wow animate__fadeInUp" data-wow-offset="50">合作品牌</p>
      </div>
      <a-row :gutter="gutter">
        <a-col :span="colSpan" class="pro_col hoverBox wow animate__fadeInUp" data-wow-offset="50" v-for="item in brandList" :key="item.id">
          <img :src="item.img" alt="" />
        </a-col>
      </a-row>
    </div>
    <div class="about_course">
      <div class="new_title">
        <p class="SmileFont wow animate__fadeInUp" data-wow-offset="50">发展历程</p>
      </div>
      <div class="year_box">
        <div>
          <swiper class="swiper-no-swiping" :modules="modules" slides-per-view="auto" :space-between="0" centeredSlides loop @swiper="e => onSwiper(e, 4)" noSwiping>
            <swiper-slide v-for="item in courseList" :key="item.id">
              <div class="year">
                <p class="SmileFont">{{ item.year }}</p>
                <div class="circle"></div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="line"></div>
      </div>
      <!-- <div class=""></div> -->
      <div class="course_box">
        <swiper
          :modules="modules"
          slides-per-view="auto"
          :space-between="0"
          centeredSlides
          loop
          grabCursor
          :navigation="true"
          @swiper="e => onSwiper(e, 3)"
          @slideChange="e => onSlideChange(e, 3)"
          :controller="{ control: swiper4 }"
        >
          <swiper-slide v-for="item in courseList" :key="item.id">
            <div class="about_contain">
              <div class="contain_top">
                <img :src="item.img" alt="" />
                <div class="shadow"></div>
              </div>
              <div class="name">{{ item.name }}</div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="home_silde">
          <div class="home_sildePre" @click="sildePre(3)"><img src="@/assets/img/arrow_yellow_l.png" alt="" /></div>
          <div class="home_sildeNext" @click="sildeNext(3)"><img src="@/assets/img/arrow_yellow_r.png" alt="" /></div>
        </div>
      </div>
    </div>
    <div class="about_debris">
      <div class="new_title">
        <p class="SmileFont wow animate__fadeInUp" data-wow-offset="50">记忆碎片</p>
      </div>
      <div class="scroll-container">
        <div class="img_box scroll-content">
          <div class="top_down width_600">
            <img class="height_300 mb_20" src="@/assets/img/about/JYSP_1.png" alt="" />
            <img class="height_300" src="@/assets/img/about/JYSP_2.png" alt="" />
          </div>
          <div class="single width_560">
            <img class="heighth_max" src="@/assets/img/about/JYSP_3.png" alt="" />
          </div>
          <div class="top_down">
            <div class="left_right mb_20">
              <img class="width_560 height_360 mr_20" src="@/assets/img/about/JYSP_4.png" alt="" />
              <img class="width_560 height_360" src="@/assets/img/about/JYSP_5.png" alt="" />
            </div>
            <img class="width_max height_240" src="@/assets/img/about/JYSP_6.png" alt="" />
          </div>
        </div>
        <div class="img_box scroll-content2">
          <div class="top_down width_600">
            <img class="height_300 mb_20" src="@/assets/img/about/JYSP_1.png" alt="" />
            <img class="height_300" src="@/assets/img/about/JYSP_2.png" alt="" />
          </div>
          <div class="single width_560">
            <img class="heighth_max" src="@/assets/img/about/JYSP_3.png" alt="" />
          </div>
          <div class="top_down">
            <div class="left_right mb_20">
              <img class="width_560 height_360 mr_20" src="@/assets/img/about/JYSP_4.png" alt="" />
              <img class="width_560 height_360" src="@/assets/img/about/JYSP_5.png" alt="" />
            </div>
            <img class="width_max height_240" src="@/assets/img/about/JYSP_6.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getCurrentInstance, nextTick, onMounted, reactive, toRefs } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Controller } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css'

export default {
  name: 'IAbout',
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const { proxy } = getCurrentInstance()
    const state = reactive({
      modules: [Autoplay, Navigation, Controller],
      isMobile: false,
      swiper1: null,
      swiper2: null,
      swiper3: null,
      swiper4: null,
      swiper1_active: 1,
      swiper2_active: 1,
      swiper3_active: 1,
      gutter: [60, 30],
      colSpan: 3,
      currentType: 3,
      tags: [0],
      perView_introduce: 1,
      between: '0.79%',
      bannerList: [
        { id: 1, title: 'Spark More', text: '去发现，无限可能', img: require('@/assets/img/about/swiper_1.png') },
        { id: 2, title: 'Spark More', text: '去发现，无限可能', img: require('@/assets/img/about/swiper_2.png') },
        { id: 3, title: 'Spark More', text: '去发现，无限可能', img: require('@/assets/img/about/swiper_1.png') },
        { id: 3, title: 'Spark More', text: '去发现，无限可能', img: require('@/assets/img/about/swiper_2.png') }
      ],
      about_contain: [
        {
          id: 1,
          contain: [
            { id: 1, text: '自第一道光照耀在世界中，世界被日月星辰之光照亮' },
            { id: 2, text: '在古代，世界被先辈们造的焰光照亮' },
            { id: 3, text: '我们造光像起初一样，像我们先辈一样，造光去更新这个世界，如我们所造的影像之光与数字之光' },
            { id: 4, text: '相信未来不远的一天，我们所造的光将照耀在更新后的世界，如第一道光照耀在更新前的世界' }
          ]
        },
        {
          id: 2,
          contain: [
            { id: 1, text: '在古代，世界被先辈们造的焰光照亮' },
            { id: 2, text: '在这个世代，世界被我们造在芯片中的数字之光照亮' },
            { id: 3, text: '相信未来不远的一天，我们所造的光将照耀在更新后的世界，如第一道光照耀在更新前的世界' },
            { id: 4, text: '寻求渴望通过造光去更新世界的伙伴' }
          ]
        }
      ],
      courseList: [
        { id: 1, year: '2021', name: '为万科、融侨城、金辉集团等企业机构制作数条企业宣传片/产品TVC', img: require('@/assets/img/news/new_3.png') },
        { id: 2, year: '2022', name: '2022为万科、融侨城、金辉集团等企业机构制', img: require('@/assets/img/news/new_3.png') },
        { id: 3, year: '2023', name: '2023为万科、融侨城、金辉集团等企业机构制作数产品TVC', img: require('@/assets/img/news/new_3.png') },
        { id: 4, year: '2024', name: '2024团等企业机构制作数条企业宣传片/产品TVC', img: require('@/assets/img/news/new_3.png') }
      ],
      brandList: [
        { id: 1, img: require('@/assets/img/about/brand_1.png') },
        { id: 2, img: require('@/assets/img/about/brand_2.png') },
        { id: 3, img: require('@/assets/img/about/brand_3.png') },
        { id: 4, img: require('@/assets/img/about/brand_4.png') },
        { id: 5, img: require('@/assets/img/about/brand_5.png') },
        { id: 6, img: require('@/assets/img/about/brand_6.png') },
        { id: 7, img: require('@/assets/img/about/brand_7.png') },
        { id: 8, img: require('@/assets/img/about/brand_8.png') },
        { id: 9, img: require('@/assets/img/about/brand_9.png') },
        { id: 10, img: require('@/assets/img/about/brand_10.png') },
        { id: 11, img: require('@/assets/img/about/brand_11.png') },
        { id: 12, img: require('@/assets/img/about/brand_12.png') },
        { id: 13, img: require('@/assets/img/about/brand_13.png') },
        { id: 14, img: require('@/assets/img/about/brand_14.png') },
        { id: 15, img: require('@/assets/img/about/brand_15.png') },
        { id: 16, img: require('@/assets/img/about/brand_16.png') }
      ],
      footerBannerList: [
        { id: 1, img: require('@/assets/img/about/JYSP_1.png') },
        { id: 2, img: require('@/assets/img/about/JYSP_2.png') },
        { id: 3, img: require('@/assets/img/about/JYSP_3.png') },
        { id: 4, img: require('@/assets/img/about/JYSP_4.png') },
        { id: 5, img: require('@/assets/img/about/JYSP_5.png') },
        { id: 6, img: require('@/assets/img/about/JYSP_6.png') }
      ]
    })

    onMounted(async () => {
      nextTick(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        var wow = new proxy.$wow.WOW({ boxClass: 'wow', animateClass: 'animated', offset: 0, mobile: true, live: true, callback: function () {}, scrollContainer: null, resetAnimation: true })
        wow.init()
      })
    })
    const handleResize = () => {
      const windowWidth = window.innerWidth
      if (windowWidth < 750) {
        state.colSpan = 8
        state.gutter = [40, 40]
        state.isMobile = true
        state.perView_introduce = 'auto'
        state.between = 10
      } else {
        state.colSpan = 3
        state.gutter = [60, 30]
        state.isMobile = false
        state.perView_introduce = 1
        state.between = '0.79%'
      }
    }
    const onSwiper = (swiper, type) => {
      state[`swiper${type}`] = swiper
    }
    const onSlideChange = (e, type) => {
      state[`swiper${type}_active`] = e.realIndex + 1
    }
    const sildePre = e => {
      state[`swiper${e}`].slidePrev(1000, true)
      state[`swiper${e}_active`] = state[`swiper${e}`].realIndex + 1
    }
    const sildeNext = e => {
      state[`swiper${e}`].slideNext(1000, true)
      state[`swiper${e}_active`] = state[`swiper${e}`].realIndex + 1
    }
    return {
      ...toRefs(state),
      onSwiper,
      onSlideChange,
      sildePre,
      sildeNext
    }
  }
}
</script>
<style lang="less">
.new_title {
  text-align: center;
  margin-bottom: 5rem;
  & > p {
    padding-bottom: 1.25rem;
    font-size: 2.5rem;
    line-height: 3.75rem;
    display: inline-block;
    border-bottom: 0.5rem solid #ff8a2c;
  }
}
.about_banner {
  padding: 3.75rem 0;
  .about_contain {
    border-radius: 1.25rem;
    position: relative;
    .content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      color: #fff;
      .title {
        font-size: 6.25rem;
        line-height: 9.375rem;
        letter-spacing: 1.25rem;
      }
      .text {
        font-size: 4rem;
        line-height: 6rem;
        margin-top: 0.625rem;
      }
    }
    img {
      border-radius: 1.25rem;
      width: 100%;
      height: 100%;
      transform: scale(0.9);
      transition: 0.5s;
    }
  }
  .swiper_box {
    .swiper {
      // padding-right: 1.25rem;
      .swiper-wrapper {
        // margin-left: 1.25rem;
        align-items: center;
        .swiper-slide {
          width: 93.75rem !important;
          height: 50rem !important;
          &.swiper-slide-active {
            img {
              transform: scale(1);
            }
          }
        }
        .swiper-slide:last-of-type {
        }
      }
    }
  }
  .home_silde {
    margin-top: 1.875rem;
  }
}
.about_introduce {
  padding: 8.75rem 0 10rem;
  background: url(../../assets/img/about/text_bg.png) no-repeat 100%/100%;
  color: #fff;
  .about_contain {
    padding: 0 27.5rem;
    text-align: center;
    p {
      font-size: 1.5rem;
      line-height: 2.6875rem;
      color: #fff;
    }
  }
  .home_silde {
    margin-top: 5.625rem;
  }
}
.about_brand {
  padding: 6.25rem 16.875rem 12.625rem;
  img {
    width: 7.5rem;
    height: 7.5rem;
  }
}
.about_course {
  padding: 6.25rem 0;
  background: url(../../assets/img/product/text_bg.png) no-repeat 100% / 100%;
  color: #fff;
  .new_title {
    margin-bottom: 1.25rem;
  }
  .year_box {
    position: relative;
    & > div {
      padding: 0 18.5625rem;
    }
    .swiper {
      .swiper-wrapper {
        align-items: flex-end;
        .swiper-slide {
          width: 27.85rem !important;
          height: 11.875rem !important;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          &.swiper-slide-active {
            .year {
              p {
                color: #fff;
                transform: scale(1);
                line-height: 9rem;
              }
              .circle {
                margin-top: 0.75rem;
              }
            }
          }
        }
      }
    }
    .year {
      text-align: center;
      // margin-bottom: 1.4375rem;
      p {
        font-size: 6rem;
        line-height: 4.5rem;
        // font-size: 3rem;
        // line-height: 4.5rem;
        transition: 0.5s;
        color: #949494;
        transform: scale(0.5);
      }
      .circle {
        display: inline-block;
        width: 1.875rem;
        height: 1.875rem;
        background: #ffffff;
        border: 0.25rem solid #ff8a2c;
        border-radius: 50%;
        margin-top: 0.625rem;
      }
    }
    .line {
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #ffffff 50%, rgba(0, 0, 0, 0) 100%);
      position: absolute;
      bottom: 1.1rem;
    }
  }
  .course_box {
    padding: 0 18.5625rem;
    margin-top: 2.875rem;
    .swiper {
      .swiper-wrapper {
        align-items: center;
        .swiper-slide {
          width: 28.125rem !important;
          height: 24.5rem !important;
          &.swiper-slide-active {
            .about_contain {
              transform: scale(1);
              .shadow {
                opacity: 0;
              }
              .name {
                color: #fff;
                font-size: 1.5rem;
              }
            }
          }
        }
        .swiper-slide:last-of-type {
        }
      }
    }
  }
  .about_contain {
    border-radius: 1.25rem;
    position: relative;
    transform: scale(0.8);
    transition: 0.5s;
    .contain_top {
      position: relative;
      height: 18.75rem;
      .shadow {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 1.25rem;
      }
      img {
        border-radius: 1.25rem;
        width: 100%;
        height: 100%;
      }
    }
    .name {
      font-size: 1.3rem;
      color: #949494;
      margin-top: 1.25rem;
      line-height: 2.25rem;
      letter-spacing: 1px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
  }
  .home_silde {
    margin-top: 6.125rem;
    .home_sildePre,
    .home_sildeNext {
      margin: 0 0.3125rem;
    }
  }
}
.about_debris {
  padding: 6.25rem 0 12rem;
  .img_box {
    display: flex;
    width: auto;
    img {
      object-fit: cover;
      border-radius: 1.25rem;
    }
    .top_down {
      display: inline-flex;
      flex-flow: column;
      margin: 0 0.625rem;
      flex-shrink: 0;
    }
    .single {
      height: 38.75rem;
      margin: 0 0.625rem;
      flex-shrink: 0;
    }
    .left_right {
      display: inline-flex;
    }
    .width_max {
      width: 100%;
    }
    .heighth_max {
      height: 100%;
    }
    .width_600 {
      width: 37.5rem;
    }
    .width_560 {
      width: 35rem;
    }
    .width_1140 {
      width: 71.25rem;
    }
    .height_360 {
      height: 22.5rem;
    }
    .height_300 {
      height: 18.75rem;
    }
    .height_240 {
      height: 15rem;
    }
    .mb_20 {
      margin-bottom: 1.25rem;
    }
    .mr_20 {
      margin-right: 1.25rem;
    }
  }
  .scroll-container {
    overflow: hidden;
    position: relative;
    display: flex;
  }
  .scroll-content {
    width: 147.5rem;
    white-space: nowrap;
    animation: scroll-left 30s linear infinite;
  }
  .scroll-content2 {
    animation: scroll-left 30s linear infinite;
  }

  @keyframes scroll-left {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-147.5rem);
    }
  }
  @keyframes scroll-left2 {
    0% {
      transform: translateX(-147.5rem);
    }
    100% {
      transform: translateX(0);
    }
  }
}
</style>
