<template>
  <div class="products">
    <div class="top_banner new_banner">
      <img :src="bannerImg" alt="" />
      <div class="t_box">
        <p class="title SmileFont wow animate__fadeInUp" data-wow-offset="50"><span>创意之光</span> <span>璀璨影像</span></p>
      </div>
    </div>
    <div class="pro_hot">
      <div class="new_title">
        <p class="bottom_border SmileFont wow animate__fadeInUp" data-wow-offset="50">作品精选</p>
      </div>
      <div class="pro_types wow animate__fadeInUp" data-wow-offset="50" v-if="!isMobile">
        <div class="type_box hoverBox" @click="chooseType(item.cateId, index)" v-for="(item, index) in typeList" :key="index">
          <img class="type_bg" :src="item.pPath" alt="" />
          <p class="SmileFont">{{ item.cateName }}</p>
          <div class="black" v-if="currentType !== item.cateId"></div>
        </div>
      </div>
      <div class="pro_types wow animate__fadeInUp" data-wow-offset="50" v-else>
        <p
          :class="['type_box_mb', 'SmileFont', currentType == item.cateId ? 'active' : '', index == currentTypeIndex - 1 || index == currentTypeIndex + 1 ? 'subactive' : '']"
          @click="chooseType(item.cateId, index)"
          v-for="(item, index) in typeList"
          :key="index"
        >
          {{ item.cateName }}
        </p>
      </div>
      <div class="pro_tags wow animate__fadeInUp" data-wow-offset="50">
        <swiper :slides-per-view="perView" :space-between="between" :navigation="true">
          <swiper-slide v-for="item in tagList" :key="item.dictCode">
            <p :class="['tag', tags === item.dictCode ? 'active' : '']" @click="chooseTags(item)">{{ item.dictLabel }}</p>
          </swiper-slide>
        </swiper>
      </div>
      <div class="pro_list">
        <a-row :gutter="gutter" v-if="proList && proList.length > 0">
          <a-col :span="colSpan" class="pro_col wow animate__bounceIn" data-wow-offset="50" v-for="item in proList" :key="item.cId" @click="linkTo(item)">
            <div class="bgImg hoverBoxNoBorder">
              <img class="hoverImg" :src="item.proPath" alt="" />
            </div>
            <div class="pro_box">
              <p>{{ item.proName }}</p>
            </div>
          </a-col>
        </a-row>
        <div class="swiper_empty" v-else>
          <FrownOutlined />
          <p>暂无数据</p>
        </div>
      </div>
      <a-button type="link" class="themeBtn wow animate__fadeInUp" data-wow-offset="50" v-if="showButton && proList && proList.length > 0" @click="getProListByCate()">查看更多</a-button>
    </div>
    <div class="pro_industry">
      <div class="new_title">
        <p class="bottom_border SmileFont wow animate__fadeInUp" data-wow-offset="50">作品精选</p>
      </div>
      <div class="pro_service">
        <div class="ser_text wow animate__fadeInUp" data-wow-offset="50">
          <p>量身定制脚本 + 拍摄制作 + 客户满意服务标准 = 造光出品</p>
          <p>拥有上百家企业提供服务经验，更懂企业要什么，三分钟让您客户选择您</p>
        </div>
        <div class="ser_box" v-if="!isMobile">
          <div>
            <div class="ser_tag arrow_r wow animate__fadeInUp" data-wow-offset="50" v-for="item in serverList.filter((res, index) => index < 7)" :key="item.id">
              <img :src="item.img" alt="" />
              <p>{{ item.name }}</p>
            </div>
          </div>
          <div class="ser_center">
            <div><img class="arrow" src="@/assets/img/arrow_gray_t.png" alt="" /></div>
            <div><img class="arrow" src="@/assets/img/arrow_gray_b.png" alt="" /></div>
          </div>
          <div class="reverse">
            <div class="reverse_tag arrow_l wow animate__fadeInUp" data-wow-offset="50" v-for="item in serverList.filter((res, index) => index > 6)" :key="item.id">
              <img :src="item.img" alt="" />
              <p>{{ item.name }}</p>
            </div>
          </div>
        </div>
        <div class="ser_box wow animate__fadeInUp" data-wow-offset="50" v-else>
          <div>
            <div class="ser_tag arrow_r" v-for="item in serverList.filter((res, index) => index < 3)" :key="item.id">
              <img :src="item.img" alt="" />
              <p>{{ item.name }}</p>
            </div>
          </div>
          <div class="ser_center">
            <div></div>
            <div><img class="arrow" src="@/assets/img/arrow_gray_b.png" alt="" /></div>
          </div>
          <div class="reverse">
            <div class="reverse_tag arrow_l" v-for="item in serverList.filter((res, index) => index >= 3 && index < 6)" :key="item.id">
              <img :src="item.img" alt="" />
              <p>{{ item.name }}</p>
            </div>
          </div>
          <div class="ser_center">
            <div><img class="arrow" src="@/assets/img/arrow_gray_b.png" alt="" /></div>
            <div></div>
          </div>
          <div>
            <div class="ser_tag arrow_r" v-for="item in serverList.filter((res, index) => index >= 6 && index < 9)" :key="item.id">
              <img :src="item.img" alt="" />
              <p>{{ item.name }}</p>
            </div>
          </div>
          <div class="ser_center">
            <div></div>
            <div><img class="arrow" src="@/assets/img/arrow_gray_b.png" alt="" /></div>
          </div>
          <div class="reverse">
            <div class="reverse_tag arrow_l" v-for="item in serverList.filter((res, index) => index >= 9 && index < 12)" :key="item.id">
              <img :src="item.img" alt="" />
              <p>{{ item.name }}</p>
            </div>
          </div>
          <div class="ser_center">
            <div><img class="arrow" src="@/assets/img/arrow_gray_b.png" alt="" /></div>
            <div></div>
          </div>
          <div>
            <div class="ser_tag arrow_r" v-for="item in serverList.filter((res, index) => index >= 12 && index < 14)" :key="item.id">
              <img :src="item.img" alt="" />
              <p>{{ item.name }}</p>
            </div>
          </div>
        </div>
        <p class="ser_footer wow animate__fadeInUp" data-wow-offset="50" v-if="!isMobile">SERVICE PROCESS</p>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, getCurrentInstance, nextTick, onMounted, reactive, toRefs } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FrownOutlined } from '@ant-design/icons-vue'
import 'swiper/css/navigation'
import 'swiper/css'
import { useRoute } from 'vue-router'

export default {
  name: 'IProducts',
  components: {
    Swiper,
    SwiperSlide,
    FrownOutlined
  },
  setup() {
    let route = useRoute()
    const { proxy } = getCurrentInstance()
    const state = reactive({
      isMobile: false,
      swiper: null,
      bannerImg: null,
      gutter: [20, 20],
      colSpan: 8,
      currentType: null,
      currentTypeIndex: 2,
      pageNum: 1,
      pageSize: 5,
      showButton: true,
      tags: -1,
      perView: 8,
      between: '0.79%',
      typeList: [],
      tagList: [],
      proList: [],
      serverList: [
        { id: 1, name: '需求沟通', img: require('@/assets/img/product/s_1.png') },
        { id: 2, name: '确认合作', img: require('@/assets/img/product/s_2.png') },
        { id: 3, name: '支付首款', img: require('@/assets/img/product/s_3.png') },
        { id: 4, name: '创意策划', img: require('@/assets/img/product/s_4.png') },
        { id: 5, name: '制片执行', img: require('@/assets/img/product/s_5.png') },
        { id: 6, name: '后期制作', img: require('@/assets/img/product/s_6.png') },
        { id: 7, name: '初稿样片', img: require('@/assets/img/product/s_7.png') },
        { id: 8, name: '修改调整', img: require('@/assets/img/product/s_8.png') },
        { id: 9, name: '品控检核', img: require('@/assets/img/product/s_9.png') },
        { id: 10, name: '支付尾款', img: require('@/assets/img/product/s_10.png') },
        { id: 11, name: '交付成片', img: require('@/assets/img/product/s_11.png') },
        { id: 12, name: '服务调查', img: require('@/assets/img/product/s_12.png') },
        { id: 13, name: '售后跟踪', img: require('@/assets/img/product/s_13.png') },
        { id: 14, name: '再次合作', img: require('@/assets/img/product/s_14.png') }
      ]
    })

    onMounted(async () => {
      getBannerList()
      getProCategorySubList()
      getProCategoryList(res => {
        if (route.query.cateId) {
          state.currentType = parseInt(route.query.cateId) || ''
          getProListByCate(state.currentType)
        } else {
          getProListByCate()
        }
      })

      nextTick(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        var wow = new proxy.$wow.WOW({ boxClass: 'wow', animateClass: 'animated', offset: 0, mobile: true, live: true, callback: function () {}, scrollContainer: null, resetAnimation: true })
        wow.init()
      })
    })
    const getBannerList = () => {
      proxy.$api.bannerList({ pType: 2 }).then(res => {
        if (res && res.length > 0) {
          state.bannerImg = res[0].pPath
        }
      })
    }
    const getProCategoryList = callback => {
      proxy.$api.proCategoryList().then(res => {
        state.typeList = []
        if (res && res.length > 0) {
          state.typeList = res
          state.currentType = res[2].cateId
          typeof callback == 'function' && callback()
        }
      })
    }
    const getProCategorySubList = () => {
      proxy.$api.proCategorySubList().then(res => {
        if (res?.length > 0) {
          res.unshift({ dictCode: -1, dictLabel: '全部' })
          state.tagList = res
          state.tags = res[0].dictCode
        } else {
          state.tagList = []
        }
      })
    }
    const getProListByCate = currentType => {
      proxy.$api.proListByCate({ cId: currentType || state.currentType, proType: state.tags }, { pageNum: state.pageNum, pageSize: state.pageSize }).then(res => {
        if (res.rows && res.rows.length > 0) {
          state.proList = state.proList.concat(res.rows)
          state.pageNum += 1
          if (state.proList.length === res.total) {
            state.showButton = false
          } else {
            state.showButton = true
          }
        }
      })
    }
    const handleResize = () => {
      const windowWidth = window.innerWidth
      if (windowWidth < 750) {
        state.colSpan = 24
        state.gutter = [0, 20]
        state.isMobile = true
        state.perView = 'auto'
        state.between = 10
      } else {
        state.colSpan = 8
        state.gutter = [20, 20]
        state.isMobile = false
        state.perView = 'auto'
        state.between = '0.79%'
      }
    }
    const chooseType = (e, index) => {
      state.proList = []
      state.pageNum = 1
      state.currentType = e
      state.currentTypeIndex = index
      state.tags = -1
      getProListByCate()
    }
    const chooseTags = e => {
      state.proList = []
      state.pageNum = 1
      state.tags = e.dictCode
      getProListByCate()
    }
    const onSwiper = swiper => {
      state.swiper = swiper
    }
    const linkTo = function (e) {
      if (e && e.imageUrls) {
        window.open(e.imageUrls, '_blank')
      }
    }
    return {
      ...toRefs(state),
      onSwiper,
      chooseType,
      chooseTags,
      getProListByCate,
      linkTo
    }
  }
}
</script>
<style lang="less">
.new_title {
  text-align: center;
  margin-bottom: 3.75rem;
  & > p {
    padding-bottom: 1.75rem;
    font-size: 2.5rem;
    line-height: 3.75rem;
    display: inline-block;
  }
}
.pro_hot {
  padding: 7.5rem 11.875em 5.75rem;
  .pro_types {
    text-align: center;
    .type_box {
      width: 15rem;
      height: 4rem;
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
        &:hover {
          opacity: 0;
        }
      }
    }
  }
  .pro_tags {
    margin: 3.75rem 8.2rem 2.5rem;
    text-align: center;
    height: 4rem;
    .swiper {
      // padding-right: 1.25rem;
      .swiper-wrapper {
        // margin-left: 1.25rem;
        .swiper-slide {
          width: 9.375rem !important;
        }
      }
    }
    .tag {
      width: 9.375rem;
      height: 4rem;
      color: #232323;
      border-radius: 2.25rem;
      font-size: 1.25rem;
      line-height: 4rem;
      border: 1px solid rgba(35, 35, 35, 0.5);
      transition: all 0.3s;
      text-align: center;
      box-sizing: border-box;
      cursor: pointer;
      &:not(:last-of-type) {
        margin-right: 0.625rem;
      }
      &:hover {
        border-color: #ff8a2c;
        background: #ff8a2c;
        color: #fff;
      }
      &.active {
        border-color: #ff8a2c;
        background: #ff8a2c;
        color: #fff;
      }
    }
  }
  .pro_list {
    margin-bottom: 5rem;
    .pro_col {
      width: 31.25rem;
      height: 17.5rem;
      position: relative;
      overflow: hidden;
    }
    .bgImg {
      border-radius: 1.25rem;
      img {
        border-radius: 1.25rem;
        height: 100%;
      }
    }
    .pro_box {
      position: absolute;
      bottom: 0;
      width: calc(100% - 20px);
      height: 50%;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
      z-index: 2;
      padding: 0 0.625rem;
      transition: all 0.5s;
      border-radius: 1.25rem;
      p {
        width: calc(100% - 20px);
        text-align: center;
        position: absolute;
        bottom: 2.25rem;
        font-size: 1.5rem;
        line-height: 2.25rem;
        font-weight: 500;
        color: #fff;
      }
    }
  }
}
.pro_industry {
  padding: 7.5rem 18.75rem;
  background: url(../../assets/img/product/text_bg.png) no-repeat center / cover;
  color: #fff;
  .new_title {
    margin-bottom: 2.25rem;
  }
  .pro_service {
    font-size: 1.5rem;
    .ser_text {
      margin-bottom: 5rem;
      text-align: center;
      p {
        font-weight: 400;
        line-height: 3.125rem;
      }
    }
    .ser_box {
      font-size: 0;
      .ser_tag,
      .reverse_tag {
        font-size: 1.25rem;
        width: 7.5rem;
        height: 8.75rem;
        text-align: center;
        padding: 1.5rem 0 1.25rem;
        background: rgba(255, 255, 255, 0.5);
        box-shadow: 0px 0px 4px 0px rgba(255, 255, 255, 0.9), inset 0px -2px 4px 0px rgba(24, 90, 108, 0.5), inset 0px 2px 4px 0px rgba(255, 255, 255, 0.5);
        border-radius: 0.625rem;
        display: inline-block;
        position: relative;

        img {
          width: 3.5rem;
          height: 3.5rem;
          margin-bottom: 0.625rem;
          display: inline-block;
        }
        p {
          line-height: 1.875rem;
        }
      }
      .ser_tag {
        &.ser_tag:not(:last-of-type) {
          margin-right: 4.9rem;
        }
      }
      .reverse_tag {
        &.reverse_tag:not(:first-of-type) {
          margin-right: 4.9rem;
        }
      }
      .ser_center {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        div {
          width: 7.5rem;
          height: 6.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      .arrow_r {
        &:not(:last-of-type) {
          &::after {
            content: '';
            width: 1.5rem;
            height: 1.5rem;
            background: url(../../assets/img/arrow_gray_r.png) no-repeat 100%/100%;
            display: inline-block;
            position: absolute;
            right: -3.25rem;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }
      .arrow_l {
        &:not(:first-of-type) {
          &::after {
            content: '';
            width: 1.5rem;
            height: 1.5rem;
            background: url(../../assets/img/arrow_gray_l.png) no-repeat 100%/100%;
            display: inline-block;
            position: absolute;
            right: -3.25rem;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }
      .reverse {
        display: flex;
        flex-flow: row-reverse;
      }
      .arrow {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
    .ser_footer {
      line-height: 2.25rem;
      text-align: center;
      margin-top: 7.25rem;
      font-size: 1.5rem;
      letter-spacing: 1px;
    }
  }
}
</style>
