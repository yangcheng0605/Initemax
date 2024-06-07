<template>
  <div class="news">
    <div class="top_banner new_banner">
      <img src="@/assets/img/news/bg_top.png" alt="" />
      <div class="t_box">
        <p class="title SmileFont wow animate__fadeInUp" data-wow-offset="50"><span>洞悉前沿资讯</span> <span>让视频效益最大化</span></p>
      </div>
    </div>
    <div class="news_hot">
      <div class="new_title">
        <p class="SmileFont wow animate__fadeInUp" data-wow-offset="50">热门资讯</p>
      </div>
      <div class="swiper_box wow animate__fadeInUp" data-wow-offset="50" v-if="hotList && hotList.length > 0">
        <swiper :slides-per-view="perView" :space-between="between" :navigation="true" @swiper="onSwiper">
          <swiper-slide v-for="item in hotList" :key="item.id">
            <div class="hot_contain">
              <div class="hoverBox">
                <img class="hoverImg" :src="item.img" alt="" />
              </div>
              <div>
                <p class="hot_name line_clamp_2" :title="item.name">{{ item.name }}</p>
                <p class="hot_date">{{ item.date }}</p>
                <div class="hot_tags">
                  <span v-for="item2 in item.tags" :key="item2.id">{{ item2.name }}</span>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="home_silde">
          <div class="home_sildePre" @click="sildePre"><img src="@/assets/img/arrow_yellow_l.png" alt="" /></div>
          <div class="home_sildeNext" @click="sildeNext"><img src="@/assets/img/arrow_yellow_r.png" alt="" /></div>
        </div>
      </div>
    </div>
    <div class="news_industry">
      <div class="new_title">
        <p class="SmileFont wow animate__fadeInUp" data-wow-offset="50">行业资讯</p>
      </div>
      <ul>
        <li v-for="item in newsList" :key="item.id" class="wow animate__fadeInUp" data-wow-offset="50">
          <div class="hoverBox">
            <img class="hoverImg" :src="item.img" alt="" />
          </div>
          <div class="li_box">
            <p class="li_date">{{ item.date }}</p>
            <p class="li_name line_clamp_2" :title="item.name">{{ item.name }}</p>
            <p class="li_text line_clamp_2" v-if="!isMobile" :title="item.contain">{{ item.contain }}</p>
            <a-button type="link" class="subBtn">查看全部</a-button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { getCurrentInstance, nextTick, onMounted, reactive, toRefs } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css/navigation'
import 'swiper/css'

export default {
  name: 'INews',
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const { proxy } = getCurrentInstance()
    const state = reactive({
      isMobile: false,
      swiper: null,
      perView: 4,
      between: 40,
      hotList: [
        {
          id: 1,
          date: '2024/1/31',
          name: '造光2024年造光2024年造光2024年造光2024年造光2024年造光2024年',
          img: require('@/assets/img/news/new_3.png'),
          tags: [
            { id: 1, name: 'TAG标签' },
            { id: 2, name: '5G' },
            { id: 3, name: '政治' }
          ]
        },
        {
          id: 2,
          date: '2024/2/11',
          name: '造光22024年发大大大财',
          img: require('@/assets/img/news/new_3.png'),
          tags: [
            { id: 1, name: 'TAG标签' },
            { id: 2, name: '5G' }
          ]
        },
        {
          id: 3,
          date: '2024/3/21',
          name: '造大财，造光2024年发大大大财',
          img: require('@/assets/img/news/new_3.png'),
          tags: [{ id: 1, name: '5G' }]
        },
        {
          id: 4,
          date: '2024/4/4',
          name: '造光2024年发大大大造光2024年发大大大财，造光2024年发大大大财财，造光2024年发大大大财',
          img: require('@/assets/img/news/new_3.png'),
          tags: [{ id: 1, name: 'Tag' }]
        },
        {
          id: 5,
          date: '2024/5/3',
          name: '造光大大大财，造光2024年发大大大财',
          img: require('@/assets/img/news/new_3.png'),
          tags: [{ id: 1, name: '5G' }]
        }
      ],
      newsList: [
        { id: 1, date: '2024/1/31', name: '造光2024年', contain: '内容部分展示内容部分展展示内容部分', img: require('@/assets/img/news/new_4.png') },
        {
          id: 2,
          date: '2024/2/11',
          name: '造光22024年发大大大财',
          contain:
            '内容部分展示内容部分展示内容部分展示内容部分展示内容部分展示内容部分展展示内容部分展展示内容部分展展示内容部分展展示内容部分展展示内容部分展展示内容部分展展示内容部分展展示容部分展展示容部分展展示容部分展展示内容部分展展示内容部分',
          img: require('@/assets/img/news/new_4.png')
        },
        {
          id: 3,
          date: '2024/3/21',
          name: '造大财，造光2024年发大大大财',
          contain:
            '内容部分展示内容部分展示内容部分展示内容部分展示内容部分展示内容部分展展示内容部分展展示内容部分展展示内容部分展展示内容部分展展示内容部分展展示内容部分展展示内容部分展展示容部分展展示容部分展展示容部分展展示内容部分展展示内容部分',
          img: require('@/assets/img/news/new_4.png')
        },
        {
          id: 4,
          date: '2024/4/4',
          name: '造光2024年发大大大造光2024年发大大大财，造光2024年发大大大财财，造光2024年发大大大财',
          contain:
            '内容部分展示内容部分展示内容部分展示内容部分展示内容部分展示内容部分展展示内容部分展展示内容部分展展示内容部分展展示内容部分展展示内容部分展展示内容部分展展示内容部分展展示容部分展展示容部分展展示容部分展展示内容部分展展示内容部分',
          img: require('@/assets/img/news/new_4.png')
        },
        {
          id: 5,
          date: '2024/5/3',
          name: '造光大大大财，造光2024年发大大大财',
          contain:
            '内容部分展示内容部分展示内容部分展示内容部分展示内容部分展示内容部分展展示内容部分展展示内容部分展展示内容部分展展示内容部分展展示内容部分展展示内容部分展展示内容部分展展示容部分展展示容部分展展示容部分展展示内容部分展展示内容部分',
          img: require('@/assets/img/news/new_4.png')
        }
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
      state.swiper.slidePrev(500)
    }
    const sildeNext = e => {
      state.swiper.slideNext(500)
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
.news_hot {
  padding: 7.5rem 10rem 11.25rem;
  .hot_contain {
    font-size: 1.5rem;
    color: #666;
    img {
      width: 100%;
      height: 18.75rem;
      overflow: hidden;
      border-radius: 0.5rem;
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
}
.news_industry {
  padding: 7.5rem 15rem 10rem;
  background: url(../../assets/img/news/bg.png);
  color: #fff;
  ul li {
    display: flex;
    &:not(:last-of-type) {
      margin-bottom: 2.5rem;
    }
    .hoverBox {
      flex-shrink: 0;
    }
    img {
      width: 28.75rem;
      height: 14.375rem;
      border-radius: 0.5rem;
    }
    .li_box {
      margin-left: 2.5rem;
      .li_date {
        font-size: 1.25rem;
        line-height: 2.5rem;
      }
      .li_name {
        font-size: 3rem;
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
        border-radius: 36px;
        border: 1px solid #ff8a2c;
        padding: 1rem 3.625rem;
        font-size: 1rem;
        line-height: 1.5rem;
        color: #ff8a2c;
      }
    }
  }
}
</style>
