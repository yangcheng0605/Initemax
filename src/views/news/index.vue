<template>
  <div class="news">
    <div class="top_banner new_banner">
      <img src="@/assets/img/news/bg_top.png" alt="" />
      <div class="t_box" v-if="bannerInfo">
        <p class="title SmileFont animateFadeInUp_20">
          <span>{{ bannerInfo.pName }}</span>
        </p>
      </div>
    </div>
    <div class="news_hot">
      <div class="new_title">
        <p class="bottom_border SmileFont wow animate__fadeInUp">热门资讯</p>
      </div>
      <div class="swiper_box wow animate__fadeInUp" data-wow-offset="50" v-if="hotList && hotList.length > 0">
        <swiper :slides-per-view="perView" :space-between="between" :navigation="true" @swiper="onSwiper">
          <swiper-slide v-for="item in hotList" :key="item.nId" @click="linkTo(item)">
            <div class="hot_contain">
              <div :class="['hoverBox', hoverImgStatus ? 'hoverImgBox' : '']" @mouseenter="hoverImgStatus = true" @mouseleave="hoverImgStatus = false">
                <img :class="['hoverImg', hoverImgStatus ? 'hoverImgs' : '']" :src="item.imageUrl" alt="" />
              </div>
              <div>
                <p class="hot_name line_clamp_2" :title="item.nDesc">{{ item.nDesc }}</p>
                <p class="hot_date">{{ handleTime(item.aTime) }}</p>
                <div class="hot_tags">
                  <span v-for="item2 in item.tags" :key="item2.tId">{{ item2.tName }}</span>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="home_silde">
          <div class="home_sildePre hoverSilde" @click="sildePre">
            <div class="arrow_yellow_l"></div>
          </div>
          <div class="home_sildeNext hoverSilde" @click="sildeNext">
            <div class="arrow_yellow_r"></div>
          </div>
        </div>
      </div>
      <div class="swiper_empty" v-else>
        <FrownOutlined />
        <p>暂无数据</p>
      </div>
    </div>
    <div class="news_industry">
      <div class="new_title">
        <p class="bottom_border SmileFont wow animate__fadeInUp" data-wow-offset="50">行业资讯</p>
      </div>
      <ul v-if="newsList && newsList.length > 0">
        <li v-for="item in newsList" :key="item.nId" class="animateFadeInUp_20">
          <div class="hoverBox">
            <img class="hoverImg" :src="item.imageUrl" alt="" />
          </div>
          <div class="li_box">
            <p class="li_date">{{ handleTime(item.aTime) }}</p>
            <p class="li_name line_clamp_2" :title="item.nDesc">{{ item.nDesc }}</p>
            <p class="li_text line_clamp_2" v-if="!isMobile" :title="item.nDetail">{{ item.nDetail }}</p>
            <a-button type="link" class="subBtn themeBtn hoverBtn" @click="linkTo(item)">查看全部</a-button>
          </div>
        </li>
      </ul>
      <div class="swiper_empty" v-else>
        <FrownOutlined />
        <p>暂无数据</p>
      </div>
      <a-button type="link" class="themeBtn hoverBtn wow animate__fadeInUp" data-wow-offset="50" v-if="showButton && newsList && newsList.length > 0" @click="getNewsList()">查看全部</a-button>
    </div>
  </div>
</template>
<script>
import { getCurrentInstance, nextTick, onMounted, reactive, toRefs } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FrownOutlined } from '@ant-design/icons-vue'
import 'swiper/css/navigation'
import 'swiper/css'

export default {
  name: 'INews',
  components: {
    Swiper,
    SwiperSlide,
    FrownOutlined
  },
  setup() {
    const { proxy } = getCurrentInstance()
    const state = reactive({
      isMobile: false,
      wow: null,
      swiper: null,
      bannerInfo: null,
      bannerImg: null,
      hoverImgStatus: false,
      perView: 4,
      between: 40,
      pageNum: 1,
      pageSize: 6,
      showButton: true,
      hotList: [],
      newsList: []
    })

    onMounted(async () => {
      getBannerList()
      getNewsList()
      getHotList()
      nextTick(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        state.wow = new proxy.$wow.WOW({ boxClass: 'wow', animateClass: 'animated', offset: 0, mobile: true, live: true, callback: function () {}, scrollContainer: null, resetAnimation: true })
        // setTimeout(() => {
        // wow.init()
        // }, 200)
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
    const getBannerList = () => {
      proxy.$api.bannerList({ pType: 3 }).then(res => {
        if (res && res.length > 0) {
          state.bannerInfo = res[0]
          state.bannerImg = res[0].pPath
        }
        nextTick(() => {
          state.wow.init()
        })
      })
    }
    const getHotList = () => {
      proxy.$api.newsList({ hotStatus: 1, pageNum: 1, pageSize: 9999 }).then(res => {
        if (res.rows && res.rows.length > 0) {
          state.hotList = res.rows
          nextTick(() => {
            state.wow.init()
          })
        }
      })
    }
    const getNewsList = () => {
      proxy.$api.newsList({ hotStatus: 0, pageNum: state.pageNum, pageSize: state.pageSize }).then(res => {
        if (res.rows && res.rows.length > 0) {
          state.newsList = state.newsList.concat(res.rows)
          state.pageNum += 1
          if (state.newsList.length === res.total) {
            state.showButton = false
          } else {
            state.showButton = true
          }
        }
      })
    }
    const handleTime = time => {
      const date = new Date(time)
      const year = date.getFullYear() // 年份
      const month = String(date.getMonth() + 1).padStart(2, '0') // 月份（转为字符串，并补0）
      const day = String(date.getDate()).padStart(2, '0') // 日期（转为字符串，并补0）
      const formattedDate = `${year}-${month}-${day}`
      return formattedDate
    }
    const onSwiper = swiper => {
      state.swiper = swiper
    }
    const sildePre = e => {
      state.swiper.slidePrev(500)
    }
    const sildeNext = e => {
      state.swiper.slideNext(500)
    }
    const linkTo = function (e) {
      if (e && e.aAddress) {
        window.open(e.aAddress, '_blank')
      }
    }
    return {
      ...toRefs(state),
      onSwiper,
      sildePre,
      sildeNext,
      handleTime,
      getNewsList,
      linkTo
    }
  }
}
</script>
<style lang="less">
.new_title {
  text-align: center;
  margin-bottom: 5rem;
  p {
    padding-bottom: 1.75rem;
    font-size: 2.5rem;
    line-height: 3.75rem;
    display: inline-block;
    // border-bottom: 0.5rem solid #ff8a2c;
  }
}
.news_hot {
  padding: 7.5rem 10rem 11.25rem;
  .hot_contain {
    font-size: 1.5rem;
    color: #666;

    img {
      width: 100%;
      height: 18.75rem;
      overflow: hidden;
      border-radius: 0.625rem;
      object-fit: cover;
    }
    .hot_name {
      height: 4.5rem;
      font-weight: 500;
      line-height: 2.25rem;
      color: #232323;
      margin-top: 1.875rem;
    }
    .hot_date {
      margin: 1.75rem 0;
      line-height: 2.25rem;
    }
    .hot_tags {
      span {
        width: 8.75rem;
        text-align: center;
        display: inline-block;
        line-height: 2.25rem;
        border-radius: 0.625rem;
        border: 1px solid #ff8a2c;
        padding: 0.625rem 0;
        box-sizing: border-box;
        &:not(:last-of-type) {
          margin-right: 0.9375rem;
        }
      }
    }
  }
  .swiper_box {
    position: relative;
    .swiper {
      // padding-right: 1.25rem;
      .swiper-wrapper {
        // margin-left: 1.25rem;
        .swiper-slide {
          width: 28.125rem !important;
        }
        .swiper-slide:last-of-type {
          // margin-right: 1.25rem;
        }
      }
    }
    .home_sildePre,
    .home_sildeNext {
      border: 1px solid #232323;
      z-index: 2;
      position: absolute;
      top: -5rem;
      right: 0;
    }
    .home_sildePre {
      right: 3.75rem;
    }
  }
  .swiper_empty {
  }
}
.news_industry {
  padding: 7.5rem 15rem 10rem;
  background: #fbfbfb;
  // background: url(../../assets/img/news/bg.png);
  // color: #fff;
  color: #232323;
  ul li {
    display: flex;
    &:not(:last-of-type) {
      margin-bottom: 2.5rem;
    }

    img {
      width: 28.75rem;
      height: 14.375rem;
      object-fit: cover;
    }
    .li_box {
      margin-left: 2.5rem;
      .li_date {
        font-size: 1.25rem;
        line-height: 2.5rem;
      }
      .li_name {
        font-size: 2rem;
        line-height: 3rem;
        font-weight: 500;
      }
      .li_text {
        font-size: 1rem;
        height: 4rem;
        line-height: 2rem;
        margin: 0.625rem 0 0.75rem;
      }
      .subBtn {
        width: 11.25rem;
        height: 3.5rem;
        font-size: 1rem;
        line-height: 1.5rem;
        margin: 0;
        transition: 0.5s;
      }
    }
  }
  .themeBtn {
    margin-top: 6.25rem;
  }
}
.news {
  .hoverBox {
    flex-shrink: 0;
    border-radius: 0.625rem;
    img {
      border-radius: 0.625rem;
    }
  }
}
</style>
