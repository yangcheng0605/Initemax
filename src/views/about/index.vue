<template>
  <div class="about">
    <div class="top_banner2">
      <!-- <img src="@/assets/img/about/about_banner.png" alt="" /> -->
      <div class="t_box">
        <p class="title SmileFont about_title">WHY EHONOS</p>
      </div>
    </div>
    <div class="a_content">
      <div class="a_top_box">
        <div class="a_c_left wow animate__fadeInLeft" data-wow-offset="50"></div>
        <div class="a_c_right wow animate__fadeInRight" data-wow-offset="50">
          <div class="a_text_top">
            <p class="title SmileFont">WHO WE ARE</p>
            <!-- <img src="@/assets/img/about/www.png" alt=""> -->
          </div>
          <div class="a_text_bottom">
            <p>
              Shenzhen XingfanTechnology., Ltd.(EHONOS VAPE) is an innovative company dedicated to providing high-quality electronic cigarette products and comprehensive customer service.Since its
              establishment, Ehonos has been committed to integrating design, research and development, manufacturing, sales, marketing, and brand management.
            </p>
            <br />
            <p>
              With a focus on user experience, Ehonos adheres to a development strategy centered around users and guided by the market. We attach great importance to our professional research and
              development team and innovative talents, continuously improving our products and services, and enjoying a good reputation worldwide.
            </p>
            <!-- <p class="sub_title">联系我们</p> -->
          </div>
        </div>
      </div>
      <a-row :gutter="gutter" class="a_bottom_box">
        <a-col class="gutter-row" :xs="12" :sm="12" :md="6">
          <!-- <img src="@/assets/img/about/credential_1.png" alt=""> -->
          <!-- <div class="gutter-box wow animate__fadeInUp" data-wow-offset="50">
            <p class="a_title SmileFont">OUR PHILOSOPHY</p>
            <p class="a_bottom_text">Beauty and Beast Performance 650mAh and 8000 puffs yeah 8000 puffs yeah bro.Beauty and Beast Performance 650mAh puffs yeah 8000 puffs yeah bro.</p>
          </div> -->
        </a-col>
        <a-col class="gutter-row" :xs="12" :sm="12" :md="6">
          <!-- <img src="@/assets/img/about/credential_1.png" alt=""> -->
          <!-- <div class="gutter-box wow animate__fadeInUp" data-wow-offset="50">
            <p class="a_title SmileFont">OUR VISION</p>
            <p class="a_bottom_text">Beauty and Beast Performance 650mAh and 8000 puffs yeah 8000 puffs yeah bro.Beauty and Beast Performance 650mAh puffs yeah 8000 puffs yeah bro.</p>
          </div> -->
        </a-col>
        <a-col class="gutter-row" :xs="12" :sm="12" :md="6">
          <!-- <div class="gutter-box wow animate__fadeInUp" data-wow-offset="50">
            <p class="a_title SmileFont">OUR VALUE</p>
            <p class="a_bottom_text">Beauty and Beast Performance 650mAh and 8000 puffs yeah 8000 puffs yeah bro.Beauty and Beast Performance 650mAh puffs yeah 8000 puffs yeah bro.</p>
          </div> -->
          <!-- <img src="@/assets/img/about/credential_2.png" alt=""> -->
        </a-col>
        <a-col class="gutter-row" :xs="12" :sm="12" :md="6">
          <!-- <img src="@/assets/img/about/credential_2.png" alt=""> -->
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script>
import { getCurrentInstance, nextTick, onMounted, reactive, toRefs } from 'vue'
export default {
  name: 'about',
  components: {},
  setup() {
    const { proxy } = getCurrentInstance()
    const state = reactive({
      gutter: 30
    })

    onMounted(async () => {
      handleResize()
      window.addEventListener('resize', handleResize)
      nextTick(() => {
        var wow = new proxy.$wow.WOW({ boxClass: 'wow', animateClass: 'animated', offset: 0, mobile: true, live: true, callback: function () {}, scrollContainer: null, resetAnimation: true })
        wow.init()
      })
    })
    const handleResize = () => {
      const windowWidth = window.innerWidth
      if (windowWidth < 750) {
        state.gutter = [15, 15]
      } else {
        state.gutter = 30
      }
    }
    const onSwiper = swiper => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      ...toRefs(state),
      onSwiper,
      onSlideChange
    }
  }
}
</script>
<style lang="less">
.a_top_box {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 5rem;
  margin-bottom: 5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  .a_c_left {
    width: 50rem;
    height: 28.125rem;
    flex-shrink: 0;
    margin-right: 3.75rem;
    video {
      width: 100%;
      height: 100%;
    }
  }
  .a_c_right {
    font-size: 1rem;
    margin-top: 1.25rem;
  }
  .a_c_left {
    font-size: 0;
  }
  .a_text_top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.875rem;
    .title {
      font-size: 2.5rem;
      line-height: 2.5rem;
    }
    img {
      width: 4rem;
    }
  }
  .a_text_bottom {
    color: #111;
    font-size: 1rem;
    line-height: 1.5rem;
  }
}
.a_bottom_box {
  .a_bottom_text {
    font-size: 0.875rem;
    line-height: 1.125rem;
  }
  .a_title {
    font-size: 2rem;
    margin-bottom: 0.25rem;
    line-height: 2.5rem;
  }
}
</style>
