<template>
  <div class="products">
    <div class="top_banner new_banner">
      <img src="@/assets/img/product/bg_top.png" alt="" />
      <div class="t_box">
        <p class="title SmileFont wow animate__fadeInUp" data-wow-offset="50"><span>创意之光</span> <span>璀璨影像</span></p>
      </div>
    </div>
    <div class="pro_hot">
      <div class="new_title">
        <p class="SmileFont wow animate__fadeInUp" data-wow-offset="50">作品精选</p>
        <div class="pro_types" v-if="!isMobile">
          <div v-for="item in typeList" :key="item.id"></div>
        </div>
        <div class="pro_tags">
          <div v-for="item in tagList" :key="item.id"></div>
        </div>
        <div class="pro_list">
          <div v-for="item in proList" :key="item.id"></div>
        </div>
      </div>
      <div class="swiper_box wow animate__fadeInUp" data-wow-offset="50" v-if="hotList && hotList.length > 0"></div>
    </div>
    <div class="pro_industry">
      <div class="new_title">
        <p class="SmileFont wow animate__fadeInUp" data-wow-offset="50">作品精选</p>
        <div class="pro_service"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { getCurrentInstance, nextTick, onMounted, reactive, toRefs } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css'

export default {
  name: 'products',
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const { proxy } = getCurrentInstance()
    const state = reactive({
      modules: [Navigation],
      isMobile: false,
      swiper: null,
      perView: 4,
      between: 40,
      typeList: [
        { id: 1, name: '造月', img: require('@/assets/img/type_1.png') },
        { id: 2, name: '造暗', img: require('@/assets/img/type_2.png') },
        { id: 3, name: '造光', img: require('@/assets/img/type_3.png') },
        { id: 4, name: '造火', img: require('@/assets/img/type_4.png') },
        { id: 5, name: '造天', img: require('@/assets/img/type_5.png') }
      ],
      tagList: [
        { id: 1, name: '全部' },
        { id: 2, name: '宣传片' },
        { id: 3, name: 'TVC' },
        { id: 4, name: '短视频' },
        { id: 5, name: '微电影' },
        { id: 6, name: 'CG动画' },
        { id: 7, name: '直播/发布会' },
        { id: 8, name: '其他' }
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
    const handleResize = () => {
      const windowWidth = window.innerWidth
      if (windowWidth < 750) {
        state.between = 24
        state.perView = 'auto'
        state.isMobile = true
      } else {
        state.between = 30
        state.perView = 'auto'
        state.isMobile = false
      }
    }
    const onSwiper = swiper => {
      state.swiper = swiper
    }
    const sildePre = e => {
      state.swiper.slidePrev(500, res => {})
    }
    const sildeNext = e => {
      state.swiper.slideNext(500, res => {})
    }
    return {
      ...toRefs(state),
      onSwiper,
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
  p {
    padding-bottom: 1.25rem;
    font-size: 2.5rem;
    line-height: 3.75rem;
    display: inline-block;
    border-bottom: 0.5rem solid #ff8a2c;
  }
}
.pro_hot {
  padding: 7.5rem 11.875em 5.75rem;
}
.pro_industry {
  padding: 7.5rem 18.75rem;
  background: url(../../assets/img/product/text_bg.png);
  color: #fff;
}
</style>
