<template>
  <div class="home">
    <swiper
      class="pageSwiper"
      autoHeight
      :resistanceRatio="0"
      direction="vertical"
      :mousewheel="mousewheel"
      :observer="true"
      :observeParents="true"
      :speed="700"
      :modules="modules"
      @swiper="e => onSwiper(e, 1)"
      @slideChange="e => onSlideHomeChange(e)"
      v-if="isMobile"
    >
      <swiper-slide class="s_1" :style="`background: url(${bannerImg}) no-repeat center / cover;`">
        <div class="h_first wiper_1">
          <div :class="['title', homeIndex == 0 ? 'animateFadeInUp' : '']" v-if="bannerInfo">
            <p class="SmileFont title">{{ bannerInfo.pName }}</p>
            <p class="SmileFont subtitle">{{ bannerInfo.pTitle }}</p>
          </div>
          <div class="downLoad" v-if="isMobile" @click="sildeNext(1)">
            <img src="@/assets/img/down.png" alt="" />
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="s_bg" :style="`background: url(${bannerTypeList[currentSceondIndex]?.pPath}) no-repeat center / cover;`" v-if="bannerTypeList[currentSceondIndex]">
        <div class="h_second wiper_2">
          <div :class="['s_top', homeIndex == 1 ? 'animateFadeInUp' : '']">
            <p class="SmileFont title">{{ bannerTypeList[currentSceondIndex].cTitle }}</p>
            <p class="s_text">
              <span>{{ bannerTypeList[currentSceondIndex].cDesc }}</span>
            </p>
          </div>
          <div :class="['s_bottom', homeIndex == 1 ? 'animateFadeInUp' : '']">
            <swiper
              :modules="modules"
              loop
              observer
              :initialSlide="2"
              observeParents
              slides-per-view="auto"
              :space-between="0"
              centeredSlides
              @swiper="e => onSwiper(e, 2)"
              @slideChange="e => onSlideSecondChange(e)"
            >
              <swiper-slide v-for="(item, index) in bannerTypeList" :key="index">
                <div class="type_box">
                  <img class="type_bg" :src="item.pBanerPath" alt="" />
                  <p class="SmileFont">{{ item.cateName }}</p>
                  <div class="black"></div>
                </div>
              </swiper-slide>
            </swiper>
            <div class="home_silde">
              <div class="home_sildePre hoverSilde" @click="sildePre(2)">
                <div class="arrow_yellow_l"></div>
              </div>
              <div class="home_sildeNext hoverSilde" @click="sildeNext(2)">
                <div class="arrow_yellow_r"></div>
              </div>
            </div>
          </div>
          <div :class="['btn_box', homeIndex == 1 ? 'animateFadeInUp' : '']">
            <a-button type="link" class="s_btn themeBtn" @click="linkToPro">了解详情</a-button>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <swiper
          direction="vertical"
          slidesPerView="auto"
          :resistanceRatio="0"
          :modules="modules"
          :freeMode="true"
          @swiper="e => onSwiper(e, 5)"
          @slideChange="e => onSlideChange(e)"
          nested
          style="height: 100%"
        >
          <swiper-slide>
            <div class="h_third s_bg">
              <div class="bg_img">
                <swiper @swiper="e => onSwiper(e, 6)" :initialSlide="2" :effect="'fade'" :modules="modules">
                  <swiper-slide v-for="(item, index) in typeList" :key="index">
                    <img v-if="item" :src="item.pSPath" alt="" />
                  </swiper-slide>
                </swiper>
              </div>
              <div :class="['h_types', homeIndex == 2 ? 'animateFadeInUp' : '']">
                <div>
                  <p
                    :class="['type_box_mb', 'SmileFont', currentType == item.cateId ? 'active' : '', index == currentTypeIndex - 1 || index == currentTypeIndex + 1 ? 'subactive' : '']"
                    @click="chooseType(item.cateId, index)"
                    v-for="(item, index) in typeList"
                    :key="index"
                  >
                    {{ item.cateName }}
                  </p>
                </div>
              </div>
              <div :class="['h_tags', homeIndex == 2 ? 'animateFadeInUp' : '']">
                <swiper :slides-per-view="perView" :space-between="between" :navigation="true" @swiper="e => onSwiper(e, 3)">
                  <swiper-slide v-for="item in tagList" :key="item.dictValue">
                    <p :class="['tag', tags === item.dictValue ? 'active' : '']" @click="chooseTags(item)">{{ item.dictLabel }}</p>
                  </swiper-slide>
                </swiper>
              </div>
              <div :class="['h_video animateFadeIn']">
                <div class="swiper_box animateFadeIn" v-if="hasData && proList && proList.length > 0">
                  <swiper
                    :modules="modules"
                    :effect="'coverflow'"
                    :coverflowEffect="{
                      rotate: 0,
                      stretch: stretch,
                      depth: 60,
                      modifier: 2,
                      slideShadows: false
                    }"
                    loop
                    :initialSlide="2"
                    slidesPerView="auto"
                    centeredSlides
                    :speed="1000"
                    @swiper="e => onSwiper(e, 4)"
                    @slideChange="e => onSlideVideoChange(e)"
                  >
                    <swiper-slide v-for="(item, index) in proList" :key="index" @click="linkTo(item)">
                      <div :class="['about_contain', currentVideoIndex == index ? 'hoverBox' : '']">
                        <img class="cover hoverImg" :src="item.proPath" alt="" />
                        <img class="play" src="@/assets/img/play.png" alt="" v-if="currentVideoIndex == index" />
                      </div>
                    </swiper-slide>
                  </swiper>
                  <div class="home_silde" v-if="showSilde">
                    <div class="home_sildePre blackborder" @click="sildePre(4)"><img src="@/assets/img/arrow_white_l.png" alt="" /></div>
                    <div class="home_sildeNext blackborder" @click="sildeNext(4)"><img src="@/assets/img/arrow_white_r.png" alt="" /></div>
                  </div>
                  <div class="content">
                    <p class="title" v-if="proList[currentVideoIndex]">{{ proList[currentVideoIndex].proName }}</p>
                  </div>
                </div>
                <div class="swiper_empty animateFadeIn" v-if="!hasData">
                  <FrownOutlined />
                </div>
                <div class="btn_box" v-if="hasData && proList && proList.length > 0">
                  <a-button type="link" class="s_btn themeBtn" @click="linkToProDetail">了解详情</a-button>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <Footer></Footer>
          </swiper-slide>
        </swiper>
      </swiper-slide>
    </swiper>

    <full-page ref="fullpage" :options="options" id="fullpage" v-else>
      <div class="section" :style="`background: url(${bannerImg}) no-repeat center / cover;`">
        <div class="h_first wiper_1">
          <div :class="['title', homeIndex == 0 ? 'animateFadeInUp' : '']" v-if="bannerInfo">
            <p class="SmileFont title">{{ bannerInfo.pName }}</p>
            <p class="SmileFont subtitle">{{ bannerInfo.pTitle }}</p>
          </div>
          <div class="downLoad" @click="fullpageMove(2)">
            <img src="@/assets/img/pc_down.png" alt="" />
          </div>
        </div>
      </div>
      <div class="section s_bg" :style="`background: url(${bannerTypeList[currentSceondIndex].pPath}) no-repeat center / cover;`" v-if="bannerTypeList[currentSceondIndex]">
        <div class="h_second wiper_2">
          <div :class="['s_top', homeIndex == 1 ? 'animateFadeInUp' : '']">
            <p class="SmileFont title">{{ bannerTypeList[currentSceondIndex].cTitle || '' }}</p>
            <p class="s_text">
              <span>{{ bannerTypeList[currentSceondIndex].cDesc || '' }}</span>
            </p>
            <a-button type="link" class="s_btn themeBtn" @click="linkToPro">了解详情</a-button>
          </div>
          <div :class="['s_bottom', homeIndex == 1 ? 'animateFadeInUp' : '']">
            <swiper
              class="swiper-no-swiping"
              loop
              centeredSlides
              :modules="modules"
              :effect="'coverflow'"
              :coverflowEffect="{
                rotate: 0,
                stretch: 0,
                depth: 0,
                modifier: 1,
                slideShadows: false
              }"
              observer
              observeParents
              :space-between="0"
              :initialSlide="2"
              :loopedSlides="3"
              :resistanceRatio="0"
              slides-per-view="auto"
              @swiper="e => onSwiper(e, 2)"
              @slideChange="e => onSlideSecondChange(e)"
            >
              <swiper-slide v-for="(item, index) in bannerTypeList" :key="index">
                <div class="type_box">
                  <img class="type_bg" :src="item.pBanerPath" alt="" />
                  <p class="SmileFont">{{ item.cateName }}</p>
                  <div class="black"></div>
                </div>
              </swiper-slide>
            </swiper>
            <div class="home_silde">
              <div class="home_sildePre hoverSilde" @click="sildePre(2)">
                <div class="arrow_yellow_l"></div>
              </div>
              <div class="home_sildeNext hoverSilde" @click="sildeNext(2)">
                <div class="arrow_yellow_r"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section s_bg">
        <div class="bg_img">
          <swiper @swiper="e => onSwiper(e, 6)" :effect="'fade'" :initialSlide="2" :modules="modules">
            <swiper-slide v-for="(item, index) in typeList" :key="index">
              <img v-if="item" :src="item.pSPath" alt="" />
            </swiper-slide>
          </swiper>
        </div>
        <div class="h_third">
          <div :class="['h_types', homeIndex == 2 ? 'animateFadeInUp' : '']">
            <div :class="['type_box', currentType == item.cateId ? 'active' : '']" @click="chooseType(item.cateId, index)" v-for="(item, index) in typeList" :key="index">
              <img class="type_bg" :src="item.pBanerPath" alt="" />
              <p class="SmileFont">{{ item.cateName }}</p>
              <div class="black" v-if="currentType !== item.cateId"></div>
            </div>
          </div>
          <div :class="['h_tags', homeIndex == 2 ? 'animateFadeInUp' : '']">
            <swiper :slides-per-view="perView" :space-between="between" :navigation="true" @swiper="e => onSwiper(e, 3)">
              <swiper-slide v-for="item in tagList" :key="item.dictValue">
                <p :class="['tag', tags === item.dictValue ? 'active' : '']" @click="chooseTags(item)">{{ item.dictLabel }}</p>
              </swiper-slide>
            </swiper>
          </div>
          <div :class="['h_video', homeIndex == 2 ? 'animateFadeIn' : '']">
            <div class="swiper_box">
              <swiper
                :modules="modules"
                :effect="'coverflow'"
                :coverflowEffect="{
                  rotate: 0,
                  stretch: pcstretch,
                  depth: 0,
                  modifier: 1,
                  slideShadows: false
                }"
                loop
                slidesPerView="auto"
                centeredSlides
                :speed="1000"
                @swiper="e => onSwiper(e, 4)"
                @slideChangeTransitionStart="transitionStart"
                @slideChangeTransitionEnd="transitionEnd"
                @slideChange="e => onSlideVideoChange(e)"
                v-if="hasData && proList && proList.length > 0"
              >
                <swiper-slide class="animateFadeIn" v-for="(item, index) in proList" :key="index" @click="linkTo(item)">
                  <div :class="['about_contain']">
                    <img :class="['cover', currentVideoIndex == index ? 'hover' : '']" :src="item.proPath" alt="" />
                    <div :class="['play_box', currentVideoIndex == index ? 'animateFadeIn' : '']">
                      <img src="@/assets/img/play.png" alt="" />
                      <div class="black_pop">
                        <div class="content">
                          <p class="title" v-if="item">{{ item.proName }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </swiper-slide>
                <div class="home_silde" v-if="showSilde">
                  <div class="home_sildePre blackborder" @click="sildePre(4)"><img src="@/assets/img/arrow_white_l.png" alt="" /></div>
                  <div class="home_sildeNext blackborder" @click="sildeNext(4)"><img src="@/assets/img/arrow_white_r.png" alt="" /></div>
                </div>
              </swiper>
              <div class="swiper_empty" v-else>
                <FrownOutlined />
                <!-- <p>暂无数据</p> -->
              </div>
            </div>
            <div class="btn_box">
              <a-button type="link" class="s_btn themeBtn" @click="linkToProDetail">了解详情</a-button>
            </div>
          </div>
        </div>
      </div>
      <div class="section fp-auto-height">
        <Footer></Footer>
      </div>
    </full-page>
  </div>
  <PopHome :swiper1="swiper1" :isMobile="isMobile" :fullpage="fullpage"></PopHome>
</template>
<script>
import { getCurrentInstance, nextTick, onBeforeUnmount, onMounted, reactive, ref, toRefs, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Mousewheel, EffectFade, FreeMode, EffectCoverflow } from 'swiper/modules'
import { debounce } from 'lodash'
import Footer from '@/layout/Footer.vue'
import PopHome from '@/components/pop_home.vue'
import { FrownOutlined } from '@ant-design/icons-vue'
import 'swiper/css'

export default {
  name: 'IHome',
  components: {
    Footer,
    Swiper,
    SwiperSlide,
    PopHome,
    FrownOutlined
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const { proxy } = getCurrentInstance()
    const fullpage = ref()
    const onfullpageChange = (m, n) => {
      // console.log('<p>afterSlideLoad - section:' + section.index + ' origin:' + origin.index + ' destination:' + destination.index + ' direction:' + direction + '  trigger:' + trigger + '</p>')
      state.homeIndex = n.index
    }
    const state = reactive({
      modules: [FreeMode, EffectFade, Mousewheel, EffectCoverflow],
      bannerInfo: null,
      bannerImg: null,
      options: {
        resize: true,
        scrollingSpeed: 700,
        touchSensitivity: 100,
        loopHorizontal: false,
        onLeave: onfullpageChange
      },
      swiper1: null,
      swiper2: null,
      swiper3: null,
      swiper4: null,
      swiper5: null,
      swiper6: null,
      stretch: 88,
      pcstretch: -70,
      hasData: true,
      showAnimate: false,
      homeIndex: false,
      currentSceondIndex: 2,
      currentVideoIndex: 0,
      mousewheel: true,
      isMobile: false,
      showSilde: true,
      curentPage: 1,
      curentIndex: 0,
      perView: 8,
      between: '0.79%',
      currentType: null,
      currentTypeIndex: 0,
      tags: -1,
      typeList: [],
      bannerTypeList: [],
      tagList: [],
      proList: []
    })
    onMounted(async () => {
      getBannerList()
      getProCategoryList()
      getProCategorySubList()
      nextTick(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
      })
      const watermarkDiv = document.querySelector('.fp-watermark')
      if (watermarkDiv) {
        watermarkDiv.remove()
      }
      if (state.isMobile) {
        state.swiper1.slideTo(0)
      } else {
        if (fullpage.value) {
          fullpage.value.api.moveTo(1)
        }
      }
    })
    const preloadImage = src => {
      const img = new Image()
      img.src = src
      img.onload = () => {
        console.log(img.src)
      }
      // 预加载图片的路径
      const imageUrls = [require('@/assets/img/home/bg_1.webp'), require('@/assets/img/home/bg_2.webp'), require('@/assets/img/home/bg_3.webp')]
      imageUrls.forEach(preloadImage)
    }
    const getBannerList = () => {
      proxy.$api.bannerList({ pType: 1 }).then(res => {
        if (res && res.length > 0) {
          state.bannerImg = res[0].pPath
          state.bannerInfo = res[0]
        }
      })
    }
    const getProCategoryList = () => {
      proxy.$api.proCategoryList().then(res => {
        state.typeList = []
        state.bannerTypeList = []
        if (res && res.length > 0) {
          state.typeList = res
          state.currentType = res[2].cateId
          state.bannerTypeList = state.typeList.concat(res)
          getProListByCate()
        }
      })
    }
    const getProCategorySubList = () => {
      proxy.$api.proCategorySubList().then(res => {
        if (res?.length > 0) {
          res.unshift({ dictValue: -1, dictLabel: '全部' })
          state.tagList = res
          state.tags = res[0].dictValue
        } else {
          state.tagList = []
        }
      })
    }
    const getProListByCate = () => {
      proxy.$api.proListByCate({ cId: state.currentType, proType: state.tags }).then(res => {
        if (res.rows?.length > 0) {
          state.proList = res.rows
        } else {
          state.proList = []
        }
        if (state.proList && state.proList.length > 0) {
          state.hasData = true
        } else {
          state.hasData = false
        }
      })
    }
    const linkTo = function (e) {
      if (e && e.imageUrls) {
        window.open(e.imageUrls, '_blank')
      }
    }
    const linkToPro = function (e) {
      const currentBanner = state.bannerTypeList[state.currentSceondIndex]
      router.replace('/products?cateId=' + currentBanner.cateId)
    }
    const linkToProDetail = function (e) {
      router.replace('/products?cateId=' + state.currentType + '&dictValue=' + state.tags)
    }
    // const linkToDetail = function () {
    //   const currentVideo = state.proList[state.currentVideoIndex]
    //   if (currentVideo && currentVideo.imageUrls) {
    //     window.open(currentVideo.imageUrls, '_blank')
    //   }
    // }
    const onSlideHomeChange = e => {
      state.homeIndex = e.realIndex
    }
    const onSlideChange = e => {
      state.curentPage = e.realIndex + 1
    }
    const onSlideSecondChange = e => {
      state.currentSceondIndex = e.realIndex
    }
    const onSlideVideoChange = e => {
      state.currentVideoIndex = e.realIndex || 0
    }
    const transitionStart = () => {
      state.showSilde = false
    }
    const transitionEnd = () => {
      state.showSilde = true
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
        state.pcstretch = -(windowWidth / 27.43)
      }

      if (windowWidth > 413 && windowWidth < 550) {
        state.stretch = 100
      } else if (windowWidth > 375 && windowWidth < 413) {
        state.stretch = 98
      } else if (windowWidth > 360 && windowWidth <= 375) {
        state.stretch = 88
      } else {
        state.stretch = 87
      }
    }
    const chooseType = async (e, index) => {
      state.proList = []
      state.pageNum = 1
      state.currentType = e
      state.currentTypeIndex = index
      state.currentVideoIndex = 0
      state.tags = -1
      state.swiper6.slideTo(index)
      getProListByCate()
    }
    const chooseTags = e => {
      state.proList = []
      state.pageNum = 1
      state.currentVideoIndex = 0
      state.tags = e.dictValue
      getProListByCate()
      // var index = state.tags.indexOf(id)
      // if (index > -1) {
      //   state.tags.splice(index, 1)
      //   if (state.tags.length <= 0) {
      //     state.tags = [0]
      //   }
      // } else {
      //   state.tags.push(id)
      // }
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
    const fullpageMove = e => {
      fullpage.value.api.moveTo(e)
    }
    onBeforeUnmount(() => {
      if (state.isMobile) {
        state.swiper1.slideTo(0)
      } else {
        if (fullpage.value) {
          fullpage.value.api.moveTo(0)
        }
      }
    })
    return {
      ...toRefs(state),
      fullpage,
      onSwiper,
      sildePre,
      onSlideHomeChange,
      onfullpageChange,
      onSlideChange,
      onSlideSecondChange,
      onSlideVideoChange,
      transitionStart,
      transitionEnd,
      sildeNext,
      fullpageMove,
      chooseType,
      chooseTags,
      linkTo,
      linkToPro,
      linkToProDetail
    }
  }
}
</script>
<style lang="less">
.home {
  #fullPage {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .section {
    width: 100%;
    height: 100%;
    background: center top / cover no-repeat;
    position: relative;
    overflow: hidden;
  }
  .s_bg {
    transition: background 0.5s ease-out;
    .bg_img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      // object-fit: cover;
      // transition: 0.5s;
      z-index: -1;
      .swiper {
        height: 100%;
        img {
          height: 100%;
          object-fit: cover;
        }
      }
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
    &.ant-btn-link:not(:disabled):hover {
      color: #fff;
    }
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
      object-fit: cover;
      object-position: center;
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
      border-radius: 0.625rem;
    }
  }
  // .pageSwiper {
  //   width: 100%;
  //   // height: 67.5rem;
  //   height: 100vh;
  // }
  // .pageSwiper_slide {
  //   height: 100%;
  // }
  .home_silde {
    .home_sildePre,
    .home_sildeNext {
      width: 2.5rem;
      height: 2.5rem;
      background: #fff;
      border-radius: 50%;
      & > div {
        width: 1.25rem !important;
        height: 1.25rem !important;
      }
      img {
        width: 1.25rem;
      }
    }
  }
}

.h_first {
  height: 100vh;
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
  .downLoad {
    position: absolute;
    bottom: 5rem;
    width: 5rem;
    height: 5rem;
    animation: flash 2s infinite;
    cursor: pointer;
  }
}
.h_second {
  // padding: 10rem 6.25rem 6.25rem 8.75rem;
  padding: 0 4.25rem 0 8.75rem;
  height: 100%;
  color: #fff;
  overflow: hidden;
  .s_top {
    // margin-bottom: 4.125rem;
    position: absolute;
    top: 14.7%;
    .title {
      font-size: 5.625rem;
      line-height: 6.75rem;
    }
    .s_text {
      width: 42.5rem;
      font-size: 1.5rem;
      line-height: 2.25rem;
      margin: 1.875rem 0 3.125rem;
      span {
        display: block;
      }
    }
    .s_btn {
      margin: 0 !important;
    }
  }
  .s_bottom {
    width: 64rem;
    // float: right;
    position: absolute;
    bottom: 5%;
    right: 6.25rem;
    .type_box {
      text-align: center;
      // width: 12.5rem;
      // height: 17.5rem;
      border-radius: 1rem;
      width: 100%;
      height: 100%;
      transform: scale(0.8);
      border-radius: 0.8125rem;
      transition: 0.5s;
      p {
        width: 3rem;
        top: 50%;
        left: 50%;
        font-size: 3.75rem;
        transform: translate(-50%, -50%) scale(0.8);
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
          // width: 10rem !important;
          // height: 14rem !important;
          width: 12.5rem !important;
          height: 17.5rem !important;
          &.swiper-slide-active {
            // margin: 0 1.25rem;
            border-radius: 1rem;
            .type_box {
              transform: scale(1);
              border: 0.375rem solid #fff;
              transition: border 0.3s;
              // border: 0.375rem solid #ffffff;
              p {
                line-height: 4.5rem;
                transform: translate(-50%, -50%) scale(1);
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
      .home_sildeNext {
        margin-left: 1.25rem;
      }
    }
  }
}
.h_third {
  // padding: 8.75rem 0 5rem;
  padding: 7.3% 0 4.2%;
  // background: url(../../assets/img/home/bg_3.webp) no-repeat center / cover;
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
    top: 50%;
    transform: translateY(-50%);
    &.active {
      border-radius: 0.625rem;
      img {
        box-sizing: border-box;
        border: 0.1875rem solid #ffffff;
      }
    }
  }
  .h_video {
    padding: 0 0 3.75rem;
    position: relative;
    .swiper_box {
      height: 31.25rem !important;
    }
    .swiper {
      .swiper-wrapper {
        align-items: center;
        z-index: 2;
        .swiper-slide {
          width: 62.5rem !important;
          height: 31.25rem !important;
          // margin-right: 5.625rem;
          &.swiper-slide-active {
            .about_contain {
              .cover {
                transform: scale(1);
              }
            }
          }
          &.swiper-slide-next,
          &.swiper-slide-prev {
            .about_contain {
              .play_box {
                opacity: 0;
              }
            }
          }
        }
      }
    }
    .swiper_empty {
      line-height: 31.25rem !important;
      font-size: 80px;
      text-align: center;
      color: #ddd;
    }
    .about_contain {
      border-radius: 1.25rem;
      position: relative;
      height: 100%;
      overflow: hidden;
      transform-style: preserve-3d;
      &:hover .hover {
        transform: scale(1.1) !important;
      }
      & > .cover {
        border-radius: 1.25rem;
        width: 100%;
        height: 100%;
        transform: scale(0.9);
        transition: 0.5s;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -2;
      }
      .play {
        width: 2.5rem;
        height: 2.5rem;
        background: #fff;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 1.25rem;
        cursor: pointer;
        z-index: 1;
      }
      .play_box {
        z-index: 999;
        width: 100%;
        height: 100%;
        display: inline-block;
        text-align: center;
        cursor: pointer;
        text-align: center;
        line-height: 35rem;
        position: relative;
        transform-style: preserve-3d;
        .title {
          font-size: 2rem;
          line-height: 3rem;
          opacity: 1;
        }
        img {
          cursor: pointer;
          width: 2.5rem;
          height: 2.5rem;
          padding: 1.25rem;
          background: #fff;
          border-radius: 50%;
          display: inline-block;
        }
      }
      .black_pop {
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
        height: 50%;
        width: 100%;
        position: absolute;
        bottom: 0;
        .content {
          position: absolute;
          bottom: 3.125rem;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          color: #fff;
        }
      }
    }
    .home_silde {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 20;
      width: 100%;
      .home_sildePre,
      .home_sildeNext {
        width: 3.75rem;
        height: 3.75rem;
        background: rgba(255, 138, 44, 0.8);
        border: none !important;
        transition: 0.3s;
        &:hover {
          background: rgba(255, 138, 44, 1);
        }
      }
      .home_sildePre {
        left: -33.2rem;
      }
      .home_sildeNext {
        right: -33.2rem;
      }
    }
    .btn_box {
      margin-top: 3.75rem;
    }
  }
  .btn_box {
    text-align: center;
  }
}
.animateFadeInUp {
  animation-name: myfadeInUp;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.animateFadeIn {
  animation-name: fadeIn;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@keyframes myfadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
@keyframes opacityAni {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
