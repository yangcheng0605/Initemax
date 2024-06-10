<template>
  <div class="home" @wheel="handleMouseWheel">
    <!-- <swiper
      class="swiper-no-swiping pageSwiper"
      :direction="'vertical'"
      :slidesPerView="1"
      :mousewheel="mousewheel"
      :modules="modules"
      :speed="700"
      @swiper="e => onSwiper(e, 1)"
      @slideChange="e => onSlideChange(e)"
    >
      <swiper-slide class="pageSwiper_slide"> -->
    <div class="h_first">
      <div class="wow animate__fadeInUp" data-wow-offset="50">
        <p class="SmileFont title">Spark More</p>
        <p class="SmileFont subtitle">去发现，无限可能</p>
      </div>
    </div>
    <!-- </swiper-slide>
      <swiper-slide> -->
    <div class="h_second">
      <div class="s_top">
        <p class="SmileFont title">造光 IGNITEMAX</p>
        <p class="s_text">
          致力于艺术与科技的完美融合，利用影像让一切更有价值的企业 造光核心团队成员拥有多年创作经验与丰富执行资源 出身于华为、迈瑞千万级的视频供应商团队
          华为、大疆、传音、TCL、岚图、步步高、芝华仕等服务经验
        </p>
        <a-button type="link" class="s_btn">了解详情</a-button>
      </div>
      <div class="s_bottom">
        <swiper :modules="modules" slides-per-view="auto" loop centeredSlides :space-between="10" @swiper="e => onSwiper(e, 2)">
          <swiper-slide v-for="item in typeList" :key="item.id">
            <div class="type_box">
              <img class="type_bg" :src="item.img" alt="" />
              <p class="SmileFont">{{ item.name }}</p>
              <div class="black"></div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="home_silde">
          <div class="home_sildePre" @click="sildePre(2)"><img src="@/assets/img/arrow_yellow_l.png" alt="" /></div>
          <div class="home_sildeNext" @click="sildeNext(2)"><img src="@/assets/img/arrow_yellow_r.png" alt="" /></div>
        </div>
      </div>
    </div>
    <!-- </swiper-slide>
      <swiper-slide> -->
    <div class="h_third">
      <div class="h_types" v-if="!isMobile">
        <div :class="['type_box', currentType == item.id ? 'active' : '']" @click="chooseType(item.id)" v-for="item in typeList" :key="item.id">
          <img class="type_bg" :src="item.img" alt="" />
          <p class="SmileFont">{{ item.name }}</p>
          <div class="black" v-if="currentType !== item.id"></div>
        </div>
      </div>
      <div class="h_types" v-else>
        <p
          :class="['type_box_mb', 'SmileFont', currentType == item.id ? 'active' : '', item.id == currentType - 1 || item.id == currentType + 1 ? 'subactive' : '']"
          @click="chooseType(item.id)"
          v-for="item in typeList"
          :key="item.id"
        >
          {{ item.name }}
        </p>
      </div>
      <div class="h_tags">
        <swiper :slides-per-view="perView" :space-between="between" :navigation="true" @swiper="e => onSwiper(e, 3)">
          <swiper-slide v-for="item in tagList" :key="item.id">
            <p :class="['tag', tags.indexOf(item.id) > -1 ? 'active' : '']" @click="chooseTags(item)">{{ item.name }}</p>
          </swiper-slide>
        </swiper>
      </div>
      <div class="h_video">
        <div class="swiper_box">
          <swiper :modules="modules" slides-per-view="auto" centeredSlides loop @swiper="e => onSwiper(e, 4)" :speed="1000">
            <swiper-slide v-for="item in proList" :key="item.id">
              <div class="about_contain">
                <img :src="item.img" alt="" />
                <div class="content">
                  <p class="title SmileFont">{{ item.name }}</p>
                </div>
              </div>
            </swiper-slide>
            <div class="home_silde">
              <div class="home_sildePre blackborder" @click="sildePre(4)"><img src="@/assets/img/arrow_white_l.png" alt="" /></div>
              <div class="home_sildeNext blackborder" @click="sildeNext(4)"><img src="@/assets/img/arrow_white_r.png" alt="" /></div>
            </div>
          </swiper>
        </div>
      </div>
      <div class="btn_box">
        <a-button type="link" class="s_btn">了解详情</a-button>
      </div>
    </div>
    <!-- </swiper-slide>
    </swiper> -->
  </div>
</template>
<script>
import { getCurrentInstance, nextTick, onMounted, reactive, toRefs, h, computed } from 'vue'
import { useRouter } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Mousewheel, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css'
import { debounce } from 'lodash'

export default {
  name: 'IHome',
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const router = useRouter()
    const { proxy } = getCurrentInstance()
    const state = reactive({
      modules: [Mousewheel],
      bannerList: null,
      swiper1: null,
      swiper2: null,
      swiper3: null,
      swiper4: null,
      mousewheel: true,
      isMobile: false,
      curentPage: 1,
      curentIndex: 0,
      perView: 8,
      between: '0.79%',
      currentType: 3,
      tags: [0],
      typeList: [
        {
          id: 1,
          name: '造月',
          img: require('@/assets/img/type_h_1.png'),
          bgImg: require('@/assets/img/home/bg_1.png'),
          title:
            '致力于艺术与科技的完美融合，利用影像让一切更有价值的企业  造光核心团队成员拥有多年创作经验与丰富执行资源  出身于华为、迈瑞千万级的视频供应商团队  华为、大疆、传音、TCL、岚图、步步高、芝华仕等服务经验 '
        },
        {
          id: 2,
          name: '造暗',
          img: require('@/assets/img/type_h_2.png'),
          bgImg: require('@/assets/img/home/bg_2.png'),
          title: '造光核心团队成员拥有多年创作经验与丰富执行资源  出身于华为、迈瑞千万级的视频供应商团队  华为、大疆、传音、TCL、岚图、步步高、芝华仕等服务经验 '
        },
        {
          id: 3,
          name: '造光',
          img: require('@/assets/img/type_h_3.png'),
          bgImg: require('@/assets/img/home/bg_3.png'),
          title: '利用影像让一切更有价值的企业  造光核心团队成员拥有多年创作经验与丰富执行资源  出身于华为、迈瑞千万级的视频供应商团队  华为、大疆、传音、TCL、岚图、步步高、芝华仕等服务经验 '
        },
        {
          id: 4,
          name: '造火',
          img: require('@/assets/img/type_h_4.png'),
          bgImg: require('@/assets/img/home/bg_1.png'),
          title: '出身于华为、迈瑞千万级的视频供应商团队  华为、大疆、传音、TCL、岚图、步步高、芝华仕等服务经验 '
        },
        { id: 5, name: '造天', img: require('@/assets/img/type_h_5.png'), bgImg: require('@/assets/img/home/bg_2.png'), title: '华为、大疆、传音、TCL、岚图、步步高、芝华仕等服务经验 ' }
      ],
      secondList: [
        { id: 1, name: '造月', img: require('@/assets/img/type_1.png') },
        { id: 2, name: '造暗', img: require('@/assets/img/type_2.png') },
        { id: 3, name: '造光', img: require('@/assets/img/type_3.png') },
        { id: 4, name: '造火', img: require('@/assets/img/type_4.png') },
        { id: 5, name: '造天', img: require('@/assets/img/type_5.png') }
      ],
      tagList: [
        { id: 0, name: '全部' },
        { id: 1, name: '宣传片' },
        { id: 2, name: 'TVC' },
        { id: 3, name: '短视频' },
        { id: 4, name: '微电影' },
        { id: 5, name: 'CG动画' },
        { id: 6, name: '直播/发布会' },
        { id: 7, name: '其他' }
      ],
      proList: [
        { id: 1, name: '传音KeeKid 品牌宣传片', img: require('@/assets/img/product/SP_1.png') },
        { id: 2, name: '雅士电业 企业宣传片', img: require('@/assets/img/product/SP_2.png') },
        { id: 3, name: '创想40w 产品三维动画', img: require('@/assets/img/product/SP_3.png') },
        { id: 4, name: '绿联户外电源 产品宣传片', img: require('@/assets/img/product/SP_4.png') },
        { id: 5, name: '四季椰林 广告宣传片', img: require('@/assets/img/product/SP_5.png') },
        { id: 6, name: 'Aqara 造就数字地球 CG动画', img: require('@/assets/img/product/SP_6.png') },
        { id: 7, name: '传音KeeKid 品牌宣传片', img: require('@/assets/img/product/SP_1.png') },
        { id: 8, name: '雅士电业 企业宣传片', img: require('@/assets/img/product/SP_2.png') }
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
    const getPicList = () => {
      proxy.$api.picList('').then(res => {
        state.bannerList = res
      })
    }
    const handleMouseWheel = debounce(function (e) {
      const swiperelement = document.getElementsByClassName('swiper-no-swiping')[0]
      const element = document.getElementsByClassName('footer')[0]
      // if (e.deltaY > 0) {
      //   state.curentIndex += 1
      //   if (state.curentPage == 3 && state.curentIndex > 2) {
      //     element.scrollIntoView({ behavior: 'smooth' })
      //   } else {
      //     swiperelement.scrollIntoView({ behavior: 'smooth' })
      //   }
      // } else {
      //   if (state.curentPage == 2) {
      //     state.curentIndex = 1
      //   } else {
      //     state.curentIndex = state.curentIndex > 0 ? state.curentIndex - 1 : 0
      //   }
      //   swiperelement.scrollIntoView({ behavior: 'smooth' })
      // }
    }, 500) // 设置防抖的等待时间为200毫秒
    const onSlideChange = e => {
      state.curentPage = e.realIndex + 1
      // state.mousewheel = computed(() => (e.realIndex + 1 == 3 ? false : true))
      // state.modules = computed(() => (e.realIndex + 1 == 3 ? null : [Mousewheel]))
    }
    const handleResize = () => {
      const windowWidth = window.innerWidth
      if (windowWidth < 750) {
        state.colSpan = 8
        state.gutter = [40, 40]
        state.isMobile = true
        state.perView = 'auto'
        state.between = 10
      } else {
        state.colSpan = 3
        state.gutter = [60, 30]
        state.isMobile = false
        state.perView = 'auto'
        state.between = '0.79%'
      }
    }
    const chooseType = e => {
      state.currentType = e
    }
    const chooseTags = e => {
      var id = e.id
      var index = state.tags.indexOf(id)
      if (index > -1) {
        state.tags.splice(index, 1)
        if (state.tags.length <= 0) {
          state.tags = [0]
        }
      } else {
        state.tags.push(id)
      }
    }
    const onSwiper = (swiper, type) => {
      state[`swiper${type}`] = swiper
    }
    const sildePre = e => {
      state[`swiper${e}`].slidePrev(1000, true)
    }
    const sildeNext = e => {
      state[`swiper${e}`].slideNext(1000, true)
    }
    return {
      ...toRefs(state),
      onSwiper,
      sildePre,
      onSlideChange,
      handleMouseWheel,
      sildeNext,
      chooseType,
      chooseTags
    }
  }
}
</script>
<style lang="less">
.home {
  .h_first {
    padding: 25rem 0 26.5rem;
    height: 100%;
    background: url(../../assets/img/home/bg_1.png) no-repeat 100% / cover;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    .title {
      font-size: 6.25rem;
      line-height: 9.375rem;
      letter-spacing: 1.25rem;
      margin-bottom: 0.625rem;
    }
    .subtitle {
      font-size: 4rem;
      line-height: 6rem;
    }
  }
  .h_second {
    padding: 10rem 6.25rem 6.25rem 8.75rem;
    height: 100%;
    background: url(../../assets/img/home/bg_2.png) no-repeat center / cover;
    color: #fff;
    .s_top {
      margin-bottom: 4.125rem;
      .title {
        font-size: 5.625rem;
        line-height: 6.75rem;
      }
      .s_text {
        width: 42.5rem;
        font-size: 1.5rem;
        line-height: 2.25rem;
        margin: 1.875rem 0 3.125rem;
      }
    }
    .s_bottom {
      .type_box {
        text-align: center;
        // width: 10rem;
        // height: 14rem;
        // width: 12.5rem;
        // height: 17.5rem;
        border-radius: 1rem;
        width: 100%;
        height: 100%;
        transform: scale(0.8);
        border-radius: 0.8125rem;
        transition: 0.5s;
        p {
          top: 50%;
          transform: translateY(-50%);
        }
      }
      .swiper {
        .swiper-wrapper {
          align-items: center;
          .swiper-slide {
            // width: 27.85rem !important;
            // height: 11.875rem !important;
            // display: flex;
            // justify-content: center;
            // align-items: flex-end;
            width: 12.5rem !important;
            height: 17.5rem !important;
            &.swiper-slide-active {
              .type_box {
                transform: scale(1);
                // border: 0.375rem solid #ffffff;
                p {
                  font-size: 3.75rem;
                  line-height: 4.5rem;
                }
                .black {
                  opacity: 0;
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
  }
  .h_third {
    padding: 8.75rem 0 5rem;
    background: url(../../assets/img/home/bg_3.png) no-repeat center / cover;
    height: 100%;
    .h_types {
      padding: 0 11.875em;
      text-align: center;
    }
    .h_tags {
      margin: 3.125rem 8.2rem 3.125rem;
      padding: 0 11.875em;
      text-align: center;
      height: 4rem;
      .swiper {
        // padding-right: 1.25rem;
        .swiper-wrapper {
          // margin-left: 1.25rem;
          .swiper-slide {
            width: 9.375rem !important;
          }
          .swiper-slide:last-of-type {
            // margin-right: 1.25rem;
          }
        }
      }
      .tag {
        width: 9.375rem;
        height: 4rem;
        color: rgba(255, 255, 255, 0.7);
        border-radius: 2.25rem;
        font-size: 1.25rem;
        line-height: 4rem;
        border: 1px solid rgba(255, 255, 255, 0.7);
        transition: all 0.3s;
        text-align: center;
        box-sizing: border-box;
        cursor: pointer;
        &:not(:last-of-type) {
          margin-right: 0.625rem;
        }
        &:hover {
          border-color: #fff;
          background: #fff;
          color: #ff8a2c;
        }
        &.active {
          border-color: #fff;
          background: #fff;
          color: #ff8a2c;
        }
      }
    }
    .type_box {
      width: 15rem;
      height: 4rem;
      &.active {
        border-radius: 10px;
        border: 0.1875rem solid #ffffff;
      }
    }
    .h_video {
      padding: 0 0 3.75rem;
      position: relative;
      .swiper {
        .swiper-wrapper {
          align-items: center;
          z-index: 2;
          .swiper-slide {
            width: 62.5rem !important;
            height: 31.25rem !important;
            margin-right: 5.625rem;
            &.swiper-slide-active {
              .about_contain {
                img {
                  transform: scale(1);
                }
                .shadow {
                  opacity: 0;
                }
                .title {
                  font-size: 2rem;
                  line-height: 3rem;
                  opacity: 1;
                }
              }
            }
          }
        }
      }
      .about_contain {
        border-radius: 1.25rem;
        position: relative;
        height: 100%;
        .content {
          position: absolute;
          bottom: 3.125rem;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          color: #fff;
        }
        .title {
          opacity: 0;
          transition: 0.5s;
        }
        img {
          border-radius: 1.25rem;
          width: 100%;
          height: 100%;
          transform: scale(0.9);
          transition: 0.5s;
        }
      }
      .home_silde {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;
        width: 100%;
        .home_sildePre,
        .home_sildeNext {
          width: 3.75rem;
          height: 3.75rem;
          background: rgba(255, 138, 44, 0.8);
          border: none !important;
        }
        .home_sildePre {
          left: -36.5rem;
        }
        .home_sildeNext {
          right: -31rem;
        }
      }
    }
    .btn_box {
      text-align: center;
    }
  }
  .s_btn {
    width: 13.75rem;
    height: 4.5rem;
    border-radius: 2.25rem;
    border: 2px solid #fff;
    text-align: center;
    font-size: 1.5rem;
    line-height: 2.25rem;
    color: #fff;
  }
  .type_box {
    border-radius: 0.625rem;
    position: relative;
    cursor: pointer;
    display: inline-block;
    &:not(:last-of-type) {
      margin-right: 2.8125rem;
    }
    p {
      font-size: 2.25rem;
      line-height: 4rem;
      color: #fff;
      z-index: 1;
      position: absolute;
      width: 100%;
      top: 0;
    }
    .type_bg {
      border-radius: 0.625rem;
      width: 100%;
      height: 100%;
    }
    .black {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
      background: rgba(0, 0, 0, 0.5);
      transition: opacity 0.5s;
      border-radius: 0.8125rem;
      &:hover {
        opacity: 0;
      }
    }
  }
  .pageSwiper {
    width: 100%;
    height: 67.5rem;
  }
  .pageSwiper_slide {
    height: 100% !important;
  }
  .home_silde {
    .home_sildePre,
    .home_sildeNext {
      width: 2.5rem;
      height: 2.5rem;
      background: #fff;
      border-radius: 50%;
      img {
        width: 1.25rem;
      }
    }
  }
}
</style>
