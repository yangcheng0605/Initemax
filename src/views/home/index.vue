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
      <swiper-slide class="s_1">
        <div class="h_first wiper_1">
          <div :class="['title', homeIndex == 0 ? 'animateFadeInUp' : '']">
            <p class="SmileFont title">Spark More</p>
            <p class="SmileFont subtitle">去发现，无限可能</p>
          </div>
          <div class="downLoad" v-if="isMobile" @click="sildeNext(1)">
            <img src="@/assets/img/down.png" alt="" />
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="s_bg" :style="`background: url(${typeList[currentSceondIndex].bgImg}) no-repeat center / cover;`">
        <div class="h_second wiper_2">
          <div :class="['s_top', homeIndex == 1 ? 'animateFadeInUp' : '']">
            <p class="SmileFont title">造光 IGNITEMAX</p>
            <p class="s_text">
              <span>致力于艺术与科技的完美融合，利用影像让一切更有价值的企业</span>
              <span>造光核心团队成员拥有多年创作经验与丰富执行资源</span>
              <span>出身于华为、迈瑞千万级的视频供应商团队</span>
              <span>华为、大疆、传音、TCL、岚图、步步高、芝华仕等服务经验</span>
            </p>
          </div>
          <div :class="['s_bottom', homeIndex == 1 ? 'animateFadeInUp' : '']">
            <swiper :modules="modules" loop observer observeParents slides-per-view="auto" :space-between="0" centeredSlides @swiper="e => onSwiper(e, 2)" @slideChange="e => onSlideSecondChange(e)">
              <swiper-slide v-for="item in typeList" :key="item.id">
                <div class="type_box">
                  <img class="type_bg" :src="item.img" alt="" />
                  <p class="SmileFont">{{ item.name }}</p>
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
            <a-button type="link" class="s_btn themeBtn">了解详情</a-button>
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
            <div class="h_third s_bg" :style="`background: url(${secondList[currentTypeIndex].bgImg}) no-repeat center/cover;`">
              <div :class="['h_types', homeIndex == 2 ? 'animateFadeInUp' : '']">
                <div>
                  <p
                    :class="['type_box_mb', 'SmileFont', currentType == item.id ? 'active' : '', item.id == currentType - 1 || item.id == currentType + 1 ? 'subactive' : '']"
                    @click="chooseType(item.id, index)"
                    v-for="(item, index) in secondList"
                    :key="item.id"
                  >
                    {{ item.name }}
                  </p>
                </div>
              </div>
              <div :class="['h_tags', homeIndex == 2 ? 'animateFadeInUp' : '']">
                <swiper :slides-per-view="perView" :space-between="between" :navigation="true" @swiper="e => onSwiper(e, 3)">
                  <swiper-slide v-for="item in tagList" :key="item.id">
                    <p :class="['tag', tags === item.id ? 'active' : '']" @click="chooseTags(item)">{{ item.name }}</p>
                  </swiper-slide>
                </swiper>
              </div>
              <div :class="['h_video', homeIndex == 2 ? 'animateFadeInUp' : '']">
                <div class="swiper_box">
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
                    slidesPerView="auto"
                    centeredSlides
                    :speed="1000"
                    @swiper="e => onSwiper(e, 4)"
                    @slideChange="e => onSlideVideoChange(e)"
                  >
                    <swiper-slide v-for="(item, index) in proList" :key="item.id">
                      <div :class="['about_contain', currentVideoIndex === index ? 'hoverBox' : '']">
                        <img class="hoverImg" :src="item.img" alt="" />
                        <div class="play" v-if="currentVideoIndex === index">
                          <img src="@/assets/img/play.png" alt="" />
                        </div>
                      </div>
                    </swiper-slide>
                  </swiper>
                  <div class="home_silde" v-if="showSilde">
                    <div class="home_sildePre blackborder" @click="sildePre(4)"><img src="@/assets/img/arrow_white_l.png" alt="" /></div>
                    <div class="home_sildeNext blackborder" @click="sildeNext(4)"><img src="@/assets/img/arrow_white_r.png" alt="" /></div>
                  </div>
                  <div class="content">
                    <p class="title">{{ proList[currentVideoIndex].name }}</p>
                  </div>
                </div>
                <div class="btn_box">
                  <a-button type="link" class="s_btn themeBtn">了解详情</a-button>
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
      <div class="section s_1">
        <div class="h_first wiper_1">
          <div :class="['title', homeIndex == 0 ? 'animateFadeInUp' : '']">
            <p class="SmileFont title">Spark More</p>
            <p class="SmileFont subtitle">去发现，无限可能</p>
          </div>
        </div>
      </div>
      <div class="section s_bg" :style="`background: url(${typeList[currentSceondIndex].bgImg}) no-repeat center / cover;`">
        <div class="h_second wiper_2">
          <div :class="['s_top', homeIndex == 1 ? 'animateFadeInUp' : '']">
            <p class="SmileFont title">造光 IGNITEMAX</p>
            <p class="s_text">
              <span>致力于艺术与科技的完美融合，利用影像让一切更有价值的企业</span>
              <span>造光核心团队成员拥有多年创作经验与丰富执行资源</span>
              <span>出身于华为、迈瑞千万级的视频供应商团队</span>
              <span>华为、大疆、传音、TCL、岚图、步步高、芝华仕等服务经验</span>
            </p>
            <a-button type="link" class="s_btn themeBtn">了解详情</a-button>
          </div>
          <div :class="['s_bottom', homeIndex == 1 ? 'animateFadeInUp' : '']">
            <swiper
              class="swiper-no-swiping"
              loop
              centeredSlides
              observer
              observeParents
              :resistanceRatio="0"
              :loopedSlides="2"
              :slides-per-view="5"
              :space-between="0"
              @swiper="e => onSwiper(e, 2)"
              @slideChange="e => onSlideSecondChange(e)"
            >
              <swiper-slide v-for="item in typeList" :key="item.id">
                <div class="type_box">
                  <img class="type_bg" :src="item.img" alt="" />
                  <p class="SmileFont">{{ item.name }}</p>
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
      <div class="section s_bg" :style="`background: url(${secondList[currentTypeIndex].bgImg}) no-repeat center/cover;`">
        <div class="h_third">
          <div :class="['h_types', homeIndex == 2 ? 'animateFadeInUp' : '']">
            <div :class="['type_box', currentType == item.id ? 'active' : '']" @click="chooseType(item.id, index)" v-for="(item, index) in secondList" :key="item.id">
              <img class="type_bg" :src="item.img" alt="" />
              <p class="SmileFont">{{ item.name }}</p>
              <div class="black" v-if="currentType !== item.id"></div>
            </div>
          </div>
          <div :class="['h_tags', homeIndex == 2 ? 'animateFadeInUp' : '']">
            <swiper :slides-per-view="perView" :space-between="between" :navigation="true" @swiper="e => onSwiper(e, 3)">
              <swiper-slide v-for="item in tagList" :key="item.id">
                <p :class="['tag', tags === item.id ? 'active' : '']" @click="chooseTags(item)">{{ item.name }}</p>
              </swiper-slide>
            </swiper>
          </div>
          <div :class="['h_video', homeIndex == 2 ? 'animateFadeInUp' : '']">
            <div class="swiper_box">
              <swiper
                :modules="modules"
                slides-per-view="auto"
                centeredSlides
                loop
                @swiper="e => onSwiper(e, 4)"
                :speed="1000"
                @slideChangeTransitionStart="transitionStart"
                @slideChangeTransitionEnd="transitionEnd"
                @slideChange="e => onSlideVideoChange(e)"
              >
                <swiper-slide v-for="(item, index) in proList" :key="item.id">
                  <div :class="['about_contain', currentVideoIndex === index ? 'hoverBox' : '']">
                    <img class="hoverImg" :src="item.img" alt="" />
                    <div class="play">
                      <img src="@/assets/img/play.png" alt="" />
                    </div>
                    <div :class="['black_pop', currentVideoIndex == index ? 'show' : '']"></div>
                    <div class="content">
                      <p class="title SmileFont">{{ item.name }} {{ currentVideoIndex }} {{ index }}</p>
                    </div>
                  </div>
                </swiper-slide>
                <div class="home_silde" v-if="showSilde">
                  <div class="home_sildePre blackborder" @click="sildePre(4)"><img src="@/assets/img/arrow_white_l.png" alt="" /></div>
                  <div class="home_sildeNext blackborder" @click="sildeNext(4)"><img src="@/assets/img/arrow_white_r.png" alt="" /></div>
                </div>
              </swiper>
            </div>
            <div class="btn_box">
              <a-button type="link" class="s_btn themeBtn">了解详情</a-button>
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
import { getCurrentInstance, nextTick, onMounted, reactive, ref, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Mousewheel, FreeMode, EffectCoverflow } from 'swiper/modules'
import { debounce } from 'lodash'
import Footer from '@/layout/Footer.vue'
import PopHome from '@/components/pop_home.vue'
import 'swiper/css'

export default {
  name: 'IHome',
  components: {
    Footer,
    Swiper,
    SwiperSlide,
    PopHome
  },
  setup() {
    const router = useRouter()
    const { proxy } = getCurrentInstance()
    const fullpage = ref()
    const onfullpageChange = (m, n) => {
      // console.log('<p>afterSlideLoad - section:' + section.index + ' origin:' + origin.index + ' destination:' + destination.index + ' direction:' + direction + '  trigger:' + trigger + '</p>')
      state.homeIndex = n.index
    }
    const state = reactive({
      modules: [FreeMode, Mousewheel, EffectCoverflow],
      bannerList: null,
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
      stretch: 88,
      showAnimate: false,
      homeIndex: false,
      currentSceondIndex: 0,
      currentVideoIndex: 0,
      mousewheel: true,
      isMobile: false,
      showSilde: true,
      curentPage: 1,
      curentIndex: 0,
      perView: 8,
      between: '0.79%',
      currentType: 3,
      currentTypeIndex: 2,
      tags: 0,
      typeList: [
        {
          id: 1,
          name: '造光',
          img: require('@/assets/img/type_h_3.png'),
          bgImg: require('@/assets/img/home/bg_3.png'),
          title: '利用影像让一切更有价值的企业  造光核心团队成员拥有多年创作经验与丰富执行资源  出身于华为、迈瑞千万级的视频供应商团队  华为、大疆、传音、TCL、岚图、步步高、芝华仕等服务经验 '
        },
        {
          id: 2,
          name: '造火',
          img: require('@/assets/img/type_h_4.png'),
          bgImg: require('@/assets/img/home/bg_1.png'),
          title: '出身于华为、迈瑞千万级的视频供应商团队  华为、大疆、传音、TCL、岚图、步步高、芝华仕等服务经验 '
        },
        { id: 3, name: '造天', img: require('@/assets/img/type_h_5.png'), bgImg: require('@/assets/img/home/bg_2.png'), title: '华为、大疆、传音、TCL、岚图、步步高、芝华仕等服务经验 ' },
        {
          id: 4,
          name: '造月',
          img: require('@/assets/img/type_h_1.png'),
          bgImg: require('@/assets/img/home/bg_1.png'),
          title:
            '致力于艺术与科技的完美融合，利用影像让一切更有价值的企业  造光核心团队成员拥有多年创作经验与丰富执行资源  出身于华为、迈瑞千万级的视频供应商团队  华为、大疆、传音、TCL、岚图、步步高、芝华仕等服务经验 '
        },
        {
          id: 5,
          name: '造暗',
          img: require('@/assets/img/type_h_2.png'),
          bgImg: require('@/assets/img/home/bg_2.png'),
          title: '造光核心团队成员拥有多年创作经验与丰富执行资源  出身于华为、迈瑞千万级的视频供应商团队  华为、大疆、传音、TCL、岚图、步步高、芝华仕等服务经验 '
        },
        {
          id: 1,
          name: '造光',
          img: require('@/assets/img/type_h_3.png'),
          bgImg: require('@/assets/img/home/bg_3.png'),
          title: '利用影像让一切更有价值的企业  造光核心团队成员拥有多年创作经验与丰富执行资源  出身于华为、迈瑞千万级的视频供应商团队  华为、大疆、传音、TCL、岚图、步步高、芝华仕等服务经验 '
        },
        {
          id: 2,
          name: '造火',
          img: require('@/assets/img/type_h_4.png'),
          bgImg: require('@/assets/img/home/bg_1.png'),
          title: '出身于华为、迈瑞千万级的视频供应商团队  华为、大疆、传音、TCL、岚图、步步高、芝华仕等服务经验 '
        },
        { id: 3, name: '造天', img: require('@/assets/img/type_h_5.png'), bgImg: require('@/assets/img/home/bg_2.png'), title: '华为、大疆、传音、TCL、岚图、步步高、芝华仕等服务经验 ' },
        {
          id: 4,
          name: '造月',
          img: require('@/assets/img/type_h_1.png'),
          bgImg: require('@/assets/img/home/bg_1.png'),
          title:
            '致力于艺术与科技的完美融合，利用影像让一切更有价值的企业  造光核心团队成员拥有多年创作经验与丰富执行资源  出身于华为、迈瑞千万级的视频供应商团队  华为、大疆、传音、TCL、岚图、步步高、芝华仕等服务经验 '
        },
        {
          id: 5,
          name: '造暗',
          img: require('@/assets/img/type_h_2.png'),
          bgImg: require('@/assets/img/home/bg_2.png'),
          title: '造光核心团队成员拥有多年创作经验与丰富执行资源  出身于华为、迈瑞千万级的视频供应商团队  华为、大疆、传音、TCL、岚图、步步高、芝华仕等服务经验 '
        }
      ],
      secondList: [
        { id: 1, name: '造月', img: require('@/assets/img/type_1.png'), bgImg: require('@/assets/img/home/bg_1.png') },
        { id: 2, name: '造暗', img: require('@/assets/img/type_2.png'), bgImg: require('@/assets/img/home/bg_2.png') },
        { id: 3, name: '造光', img: require('@/assets/img/type_3.png'), bgImg: require('@/assets/img/home/bg_3.png') },
        { id: 4, name: '造火', img: require('@/assets/img/type_4.png'), bgImg: require('@/assets/img/home/bg_1.png') },
        { id: 5, name: '造天', img: require('@/assets/img/type_5.png'), bgImg: require('@/assets/img/home/bg_2.png') }
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
      })
      const watermarkDiv = document.querySelector('.fp-watermark')
      if (watermarkDiv) {
        watermarkDiv.remove()
      }
    })
    // getPicList()
    const getPicList = () => {
      proxy.$api.picList('').then(res => {
        state.bannerList = res
      })
    }
    const onSlideHomeChange = e => {
      state.homeIndex = e.realIndex
    }
    const onSlideChange = e => {
      state.curentPage = e.realIndex + 1
      console.log(e)
    }
    const onSlideSecondChange = e => {
      state.currentSceondIndex = e.realIndex
    }
    const onSlideVideoChange = e => {
      state.currentVideoIndex = e.realIndex
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
      console.log(state.stretch)
    }
    const chooseType = (e, index) => {
      state.currentType = e
      state.currentTypeIndex = index
    }
    const chooseTags = e => {
      var id = e.id
      state.tags = id
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
      chooseType,
      chooseTags
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
  .s_1 {
    background: url(../../assets/img/home/bg_1.png) no-repeat center / cover;
  }
  .s_bg {
    transition: 0.5s;
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
            margin: 0 1.25rem;
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
  // background: url(../../assets/img/home/bg_3.png) no-repeat center / cover;
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
      border-radius: 0.625rem;
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
              .title {
                font-size: 2rem;
                line-height: 3rem;
                opacity: 1;
              }
            }
          }
          &.swiper-slide-next,
          &.swiper-slide-prev {
            .about_contain img {
              border-radius: 1.25rem;
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
        z-index: 10;
      }
      .title {
        opacity: 0;
        transition: 0.5s;
      }
      .play {
        background: #fff;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 1.25rem;
        cursor: pointer;
        z-index: 11;
        img {
          width: 2.5rem;
          height: 2.5rem;
        }
      }
      .black_pop {
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
        height: 50%;
        width: 100%;
        position: absolute;
        bottom: 0;
        opacity: 0;
        transition: 0.3s;
        &.show {
          opacity: 1;
        }
      }
      & > img {
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
        transition: 0.3s;
        &:hover {
          background: rgba(255, 138, 44, 1);
        }
      }
      .home_sildePre {
        left: -36.5rem;
      }
      .home_sildeNext {
        right: -31rem;
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
@keyframes opacityAni {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
