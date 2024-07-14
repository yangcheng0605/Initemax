<template>
  <div class="about specialHeaderTop">
    <div class="about_banner">
      <div class="swiper_box" v-if="bannerImg && bannerImg.length > 0">
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
          <swiper-slide v-for="(item, index) in bannerImg" :key="index" @click="linkTo(item)">
            <div class="about_contain">
              <img :src="item.pPath" alt="" />
              <div class="content">
                <p class="title SmileFont animateFadeInUp_20">{{ item.pName }}</p>
                <p class="text SmileFont animateFadeInUp_20">{{ item.pTitle }}</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="home_silde">
          <div class="home_sildePre hoverSilde blackborder" @click="sildePre(1)">
            <div class="arrow_yellow_l"></div>
          </div>
          <p class="progress">{{ swiper1_active }}/{{ bannerImg.length }}</p>
          <div class="home_sildeNext hoverSilde blackborder" @click="sildeNext(1)">
            <div class="arrow_yellow_r"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- :style="`background: url(${introduceImg}) no-repeat center / cover;`" -->
    <div class="about_introduce">
      <div class="new_title">
        <p class="bottom_border SmileFont wow animate__fadeInUp" data-wow-offset="50">公司介绍</p>
      </div>
      <div class="swiper_box" v-if="about_contain && about_contain.length > 0">
        <swiper :slides-per-view="perView_introduce" loop :navigation="true" @swiper="e => onSwiper(e, 2)" @slideChange="e => onSlideChange(e, 2)">
          <swiper-slide v-for="(item, index) in about_contain" :key="index">
            <div class="about_contain wow animate__fadeInUp" data-wow-offset="50">
              <div>
                <p v-html="item"></p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="home_silde">
          <div class="home_sildePre blackborder hoverSilde" @click="sildePre(2)">
            <div class="arrow_yellow_l"></div>
          </div>
          <p class="progress">{{ swiper2_active }}/{{ about_contain.length }}</p>
          <div class="home_sildeNext blackborder hoverSilde" @click="sildeNext(2)">
            <div class="arrow_yellow_r"></div>
          </div>
        </div>
      </div>
      <div class="swiper_empty" v-else>
        <FrownOutlined />
        <p>暂无数据</p>
      </div>
    </div>
    <div class="about_brand">
      <div class="new_title">
        <p class="bottom_border SmileFont wow animate__fadeInUp" data-wow-offset="50">合作品牌</p>
      </div>
      <a-row :gutter="gutter">
        <a-col :span="colSpan" class="pro_col hoverBox wow animate__fadeInUp" data-wow-offset="50" v-for="item in brandList" :key="item.id">
          <img :src="item.img" alt="" />
        </a-col>
      </a-row>
    </div>
    <!-- :style="`background: url(${developsImg}) no-repeat center / cover;`" -->
    <div class="about_course">
      <div class="new_title">
        <p class="bottom_border SmileFont wow animate__fadeInUp" data-wow-offset="50">发展历程</p>
      </div>
      <div class="year_box">
        <div>
          <swiper
            class="swiper-no-swiping"
            :modules="modules"
            slides-per-view="auto"
            :space-between="0"
            :resistanceRatio="0"
            :loopedSlides="2"
            centeredSlides
            loop
            @swiper="e => onSwiper(e, 4)"
            v-if="courseList && courseList.length > 0"
          >
            <swiper-slide v-for="(item, index) in courseList" :key="index">
              <div class="year">
                <p class="SmileFont">{{ item.dIndex }}</p>
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
          :resistanceRatio="0"
          :loopedSlides="2"
          centeredSlides
          loop
          grabCursor
          :navigation="true"
          @swiper="e => onSwiper(e, 3)"
          @slideChange="e => onSlideChange(e, 3)"
          :controller="{ control: swiper4 }"
          v-if="courseList && courseList.length > 0"
        >
          <swiper-slide v-for="(item, index) in courseList" :key="index">
            <div class="about_contain">
              <div class="contain_top hoverBoxNoBorder">
                <img :src="item.dPath" alt="" />
                <!-- <img class="hoverImg" :src="item.dPath" alt="" /> -->
                <div class="shadow"></div>
              </div>
              <div class="name">{{ item.dDesc }}</div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="home_silde">
          <div class="home_sildePre blackborder hoverSilde" @click="sildePre(3)">
            <div class="arrow_yellow_l"></div>
          </div>
          <div class="home_sildeNext blackborder hoverSilde" @click="sildeNext(3)">
            <div class="arrow_yellow_r"></div>
          </div>
        </div>
        <!-- <div class="home_silde">
          <div class="home_sildePre" @click="sildePre(3)"><img src="@/assets/img/arrow_yellow_l.png" alt="" /></div>
          <div class="home_sildeNext" @click="sildeNext(3)"><img src="@/assets/img/arrow_yellow_r.png" alt="" /></div>
        </div> -->
      </div>
    </div>
    <div class="about_debris">
      <div class="new_title">
        <p class="bottom_border SmileFont wow animate__fadeInUp" data-wow-offset="50">造光碎片</p>
      </div>
      <div class="scroll-container">
        <div class="img_box scroll-content">
          <div class="top_down width_600" v-if="footerBannerList[0].pPath && footerBannerList[1].pPath">
            <img class="height_300 mb_20" :src="footerBannerList[0].pPath" alt="" />
            <img class="height_300" :src="footerBannerList[1].pPath" alt="" />
          </div>
          <div class="single width_560" v-if="footerBannerList[2].pPath">
            <img class="heighth_max" :src="footerBannerList[2].pPath" alt="" />
          </div>
          <div class="top_down" v-if="footerBannerList[3].pPath && footerBannerList[4].pPath && footerBannerList[5].pPath">
            <div class="left_right mb_20">
              <img class="width_560 height_360 mr_20" :src="footerBannerList[3].pPath" alt="" />
              <img class="width_560 height_360" :src="footerBannerList[4].pPath" alt="" />
            </div>
            <img class="width_1140 height_240" :src="footerBannerList[5].pPath" alt="" />
          </div>
        </div>
        <div class="img_box scroll-content2">
          <div class="top_down width_600" v-if="footerBannerList[0].pPath && footerBannerList[1].pPath">
            <img class="height_300 mb_20" :src="footerBannerList[0].pPath" alt="" />
            <img class="height_300" :src="footerBannerList[1].pPath" alt="" />
          </div>
          <div class="single width_560" v-if="footerBannerList[2].pPath">
            <img class="heighth_max" :src="footerBannerList[2].pPath" alt="" />
          </div>
          <div class="top_down">
            <div class="left_right mb_20" v-if="footerBannerList[3].pPath && footerBannerList[4].pPath && footerBannerList[5].pPath">
              <img class="width_560 height_360 mr_20" :src="footerBannerList[3].pPath" alt="" />
              <img class="width_560 height_360" :src="footerBannerList[4].pPath" alt="" />
            </div>
            <img class="width_1140 height_240" :src="footerBannerList[5].pPath" alt="" />
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
import { FrownOutlined } from '@ant-design/icons-vue'
import 'swiper/css/navigation'
import 'swiper/css'

export default {
  name: 'IAbout',
  components: {
    Swiper,
    SwiperSlide,
    FrownOutlined
  },
  setup() {
    const { proxy } = getCurrentInstance()
    const state = reactive({
      modules: [Autoplay, Navigation, Controller],
      isMobile: false,
      bannerImg: [],
      wow: null,
      introduceImg: null,
      developsImg: null,
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
      bannerList: [],
      about_contain: [],
      courseList: [],
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
        { id: 16, img: require('@/assets/img/about/brand_16.png') },
        { id: 17, img: require('@/assets/img/about/brand_17.png') },
        { id: 18, img: require('@/assets/img/about/brand_18.png') },
        { id: 19, img: require('@/assets/img/about/brand_19.png') },
        { id: 20, img: require('@/assets/img/about/brand_20.png') },
        { id: 21, img: require('@/assets/img/about/brand_21.png') },
        { id: 22, img: require('@/assets/img/about/brand_22.png') },
        { id: 23, img: require('@/assets/img/about/brand_23.png') },
        { id: 24, img: require('@/assets/img/about/brand_24.png') }
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
      getUsproList()
      // ;[6,7].forEach(ele => {
      //   getBannerList(ele)
      // })
      getFooterBannerList()
      getCompanyDeteil()
      getCompanyDevelops()
      nextTick(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        state.wow = new proxy.$wow.WOW({ boxClass: 'wow', animateClass: 'animated', offset: 0, mobile: true, live: true, callback: function () {}, scrollContainer: null, resetAnimation: true })
        // setTimeout(() => {
        //   wow.init()
        // }, 0)
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
    const getBannerList = pType => {
      proxy.$api.bannerList({ pType }).then(res => {
        if (res && res.length > 0) {
          switch (pType) {
            case 6:
              state.introduceImg = res[0].pPath
              break
            case 7:
              state.developsImg = res[0].pPath
              break
          }
          nextTick(() => {
            state.wow.init()
          })
        }
      })
    }
    const getUsproList = pType => {
      proxy.$api.usproList({ pType }).then(res => {
        if (res && res.length > 0) {
          state.bannerImg = res
        }
        nextTick(() => {
          state.wow.init()
        })
      })
    }
    const getFooterBannerList = pType => {
      proxy.$api.pieceList({ pType }).then(res => {
        if (res && res.length > 0) {
          state.footerBannerList = res
        }
        nextTick(() => {
          state.wow.init()
        })
      })
    }
    const getCompanyDeteil = () => {
      proxy.$api.companyDeteil().then(res => {
        if (res.details && res.details.length > 0) {
          state.about_contain = res.details
        }
        nextTick(() => {
          state.wow.init()
        })
      })
    }
    const getCompanyDevelops = () => {
      proxy.$api.companyDevelops().then(res => {
        if (res && res.length > 0) {
          state.courseList = res
        }
        nextTick(() => {
          state.wow.init()
        })
      })
    }
    const onSwiper = (swiper, type) => {
      state[`swiper${type}`] = swiper
    }
    const onSlideChange = (e, type) => {
      state[`swiper${type}_active`] = e.realIndex + 1
    }
    const sildePre = e => {
      state[`swiper${e}`].slidePrev(500, true)
      state[`swiper${e}_active`] = state[`swiper${e}`].realIndex + 1
    }
    const sildeNext = e => {
      state[`swiper${e}`].slideNext(500, true)
      state[`swiper${e}_active`] = state[`swiper${e}`].realIndex + 1
    }
    const linkTo = function (e) {
      if (e && e.pSPath) {
        window.open(e.pSPath, '_blank')
      }
    }
    return {
      ...toRefs(state),
      onSwiper,
      onSlideChange,
      linkTo,
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
    padding-bottom: 1.75rem;
    font-size: 2.5rem;
    line-height: 3.75rem;
    display: inline-block;
  }
}
.about_banner {
  padding: 2.5rem 0 3.75rem;
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
        font-size: 5rem;
        line-height: 7.5rem;
        letter-spacing: 1rem;
      }
      .text {
        font-size: 3.125rem;
        line-height: 4.6875rem;
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
          width: 75rem !important;
          height: 37.5rem !important;
          &.swiper-slide-active {
            img {
              transform: scale(1);
            }
          }
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
  // height: 100vh;
  height: 67.5rem;
  // background: url(../../assets/img/about/text_bg.png) no-repeat center/cover;
  // color: #fff;
  color: #232323;
  background: #fbfbfb;
  position: relative;
  .about_contain {
    padding: 0 27.5rem;
    text-align: center;
    p,span {
      font-size: 1.5rem !important;
      line-height: 2.6875rem;
      color: #232323;
    }
  }
  .home_silde {
    // margin-top: 5.625rem;
    position: absolute;
    bottom: 10rem;
    left: 50%;
    transform: translateX(-50%);
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
  // background: url(../../assets/img/product/text_bg.png) no-repeat 100% / 100%;
  // color: #fff;
  background: #fbfbfb;
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
                color: #232323;
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
      background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #000000 50%, rgba(255, 255, 255, 0) 100%);
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
                color: #232323;
                font-size: 1.5rem;
              }
            }
          }
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
      border-radius: 1.25rem;
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
        object-fit: cover;
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
