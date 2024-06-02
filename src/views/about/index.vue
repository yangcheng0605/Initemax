<template>
  <div class="about">
    <div class="top_banner about_banner"></div>
    <div class="about_introduce">
      <div class="new_title">
        <p class="SmileFont wow animate__fadeInUp" data-wow-offset="50">公司介绍</p>
      </div>
      <div class="swiper_box">
        <swiper :slides-per-view="perView_introduce" :navigation="true" @swiper="onSwiper">
          <swiper-slide v-for="item in about_contain" :key="item.id" ref="swiper_1">
            <div class="about_contain">
              <div>
                <p v-for="items in item.contain" :key="items.id">{{ items.text }}</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="home_silde">
          <div class="home_sildePre" @click="sildePre(1)"><img src="@/assets/img/arrow_yellow_l.png" alt="" /></div>
          <p class="progress">{{ swiper1_active }}/{{ about_contain.length }}</p>
          <div class="home_sildeNext" @click="sildeNext(1)"><img src="@/assets/img/arrow_yellow_r.png" alt="" /></div>
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
    </div>
    <div class="about_debris">
      <div class="new_title">
        <p class="SmileFont wow animate__fadeInUp" data-wow-offset="50">记忆碎片</p>
      </div>
    </div>
  </div>
</template>
<script>
import { getCurrentInstance, nextTick, onMounted, reactive, ref, toRefs } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css'

export default {
  name: 'about',
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const swiper_1 = ref()
    const { proxy } = getCurrentInstance()
    const state = reactive({
      modules: [Navigation],
      isMobile: false,
      swiper1: null,
      swiper2: null,
      swiper3: null,
      swiper4: null,
      swiper1_active: 1,
      swiper2_active: 1,
      swiper3_active: 1,
      swiper4_active: 1,
      gutter: [60, 30],
      colSpan: 3,
      currentType: 3,
      tags: [0],
      perView_introduce: 1,
      between: '0.79%',
      bannerList: [
        { id: 1, title: 'Spark More1', text: '去发现，无限可能', img: require('@/assets/img/about/swiper_1.png') },
        { id: 2, title: 'Spark More2', text: '去发现，无限可能', img: require('@/assets/img/about/swiper_2.png') },
        { id: 3, title: 'Spark More3', text: '去发现，无限可能', img: require('@/assets/img/about/swiper_1.png') },
        { id: 4, title: 'Spark More4', text: '去发现，无限可能', img: require('@/assets/img/about/swiper_1.png') }
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
        { id: 1, name: '为万科、融侨城、金辉集团等企业机构制作数条企业宣传片/产品TVC', img: require('@/assets/img/news/new_3.png') },
        { id: 2, name: '为万科、融侨城、金辉集团等企业机构制', img: require('@/assets/img/news/new_3.png') },
        { id: 3, name: '为万科、融侨城、金辉集团等企业机构制作数产品TVC', img: require('@/assets/img/news/new_3.png') },
        { id: 4, name: '团等企业机构制作数条企业宣传片/产品TVC', img: require('@/assets/img/news/new_3.png') }
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
        state.gutter = [20, 30]
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
    const onSwiper = swiper => {
      state.swiper1 = swiper
    }
    const onSwiper2 = swiper => {
      state.swiper2 = swiper
    }
    const onSwiper3 = swiper => {
      state.swiper3 = swiper
    }
    const onSwiper4 = swiper => {
      state.swiper4 = swiper
    }
    const sildePre = e => {
      state[`swiper${e}`].slidePrev(500, true)
      state[`swiper${e}_active`] = state[`swiper${e}`].activeIndex + 1
    }
    const sildeNext = e => {
      state[`swiper${e}`].slideNext(500, true)
      state[`swiper${e}_active`] = state[`swiper${e}`].activeIndex + 1
    }
    return {
      ...toRefs(state),
      onSwiper,
      onSwiper2,
      onSwiper3,
      onSwiper4,
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
.home_silde {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  .home_sildePre,
  .home_sildeNext {
    width: 3.125rem;
    height: 3.125rem;
    border-radius: 0.25rem;
    border: 1px solid #fff;
    z-index: 2;
    cursor: pointer;
    // position: absolute;
    position: relative;
    display: inline-block;
    img {
      width: 1.5rem;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .blackborder {
    border: 1px solid #232323 !important;
  }
  .progress {
    width: 7.625rem;
    height: 3.125rem;
    font-size: 2rem;
    line-height: 3rem;
  }
}
.swiper {
  // padding-right: 1.25rem;
  .swiper-wrapper {
    // margin-left: 1.25rem;
    .swiper-slide {
    }
    .swiper-slide:last-of-type {
      // margin-right: 1.25rem;
    }
  }
}
.about_banner {
  padding: 3.75rem 0;
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
}
.about_debris {
  padding: 6.25rem 2.5rem 12rem;
}
</style>
