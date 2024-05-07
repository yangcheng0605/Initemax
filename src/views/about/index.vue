<template>
  <div class="about">
    <div class="top_banner2">
      <img src="@/assets/img/about/about_banner.png" alt="">
      <div class="t_box">
        <p class="title AntonFont about_title">WHY EHONOS</p>
      </div>
    </div> 
    <div class="a_content">
      <div class="a_top_box">
        <div class="a_c_left wow animate__fadeInLeft" data-wow-offset="50">
          <!-- <img src="@/assets/img/about/example.png" alt=""> -->
          <video autoplay="autoplay" loop muted="muted" controls="controls"  poster="@/assets/img/video.jpg">
            <source src="../../assets/video.mp4" srcset="@/assets/img/video.jpg" type="video/mp4">
            您的浏览器不支持视频标签。
          </video>
        </div>
        <div class="a_c_right wow animate__fadeInRight" data-wow-offset="50">
          <div class="a_text_top">
            <p class="title AntonFont">WHO WE ARE</p>
            <img src="@/assets/img/about/www.png" alt="">
          </div>
          <div class="a_text_bottom">
            <p>
              Beauty and Beast Performance 650mAh and 8000 puffs yeah bro.Beauty and Beast Performance 650mAh and 8000 puffs yeah bro.Beauty and Beast Performance 650mAh and 8000 puffs yeah bro.Beauty and Beast Performance 650mAh and 8000 puffs yeah bro.Beauty and Beast Performance 650mAh and 8000 puffs yeah bro.Beauty and Beast Performance 650mAh and 8000 puffs yeah bro.Beauty and Beast Performance 650mAh and 8000 puffs yeah bro.Beauty and Beast Performance 650mAh and 8000 puffs yeah bro.Beauty and Beast Performance 650mAh and 8000 puffs yeah bro.
            </p>
            <br>
            <p>
              Beauty and Beast Performance 650mAh and 8000 puffs yeah bro.Beauty and Beast Performance 650mAh and 8000 puffs yeah bro.Beauty and Beast Performance 650mAh and 8000 puffs yeah bro.Beauty and Beast Performance 650mAh and 8000 puffs yeah bro.Beauty and Beast Performance 650mAh and 8000 puffs yeah bro.Beauty and Beast Performance 650mAh and 8000 puffs yeah bro.
            </p>
            <br>
            <p>
              Beauty and Beast Performance 650mAh and 8000 puffs yeah bro.Beauty and Beast Performance 650mAh and 8000 puffs yeah bro.Beauty and Beast Performance 650mAh and 8000 puffs yeah bro.
            </p>
            <p class="sub_title">Contact Us</p>
          </div>
        </div>
      </div>
      <a-row :gutter="30" class="a_bottom_box">
        <a-col class="gutter-row" :xs="24" :sm="24" :md="6">
          <img src="@/assets/img/about/credential_1.png" alt="">
          <!-- <div class="gutter-box wow animate__fadeInUp" data-wow-offset="50">
            <p class="a_title AntonFont">OUR PHILOSOPHY</p>
            <p class="a_bottom_text">Beauty and Beast Performance 650mAh and 8000 puffs yeah 8000 puffs yeah bro.Beauty and Beast Performance 650mAh puffs yeah 8000 puffs yeah bro.</p>
          </div> -->
        </a-col>
        <a-col class="gutter-row" :xs="24" :sm="24" :md="6">
          <img src="@/assets/img/about/credential_1.png" alt="">
          <!-- <div class="gutter-box wow animate__fadeInUp" data-wow-offset="50">
            <p class="a_title AntonFont">OUR VISION</p>
            <p class="a_bottom_text">Beauty and Beast Performance 650mAh and 8000 puffs yeah 8000 puffs yeah bro.Beauty and Beast Performance 650mAh puffs yeah 8000 puffs yeah bro.</p>
          </div> -->
        </a-col>
        <a-col class="gutter-row" :xs="24" :sm="24" :md="6">
          <!-- <div class="gutter-box wow animate__fadeInUp" data-wow-offset="50">
            <p class="a_title AntonFont">OUR VALUE</p>
            <p class="a_bottom_text">Beauty and Beast Performance 650mAh and 8000 puffs yeah 8000 puffs yeah bro.Beauty and Beast Performance 650mAh puffs yeah 8000 puffs yeah bro.</p>
          </div> -->
          <img src="@/assets/img/about/credential_2.png" alt="">
        </a-col>
        <a-col class="gutter-row" :xs="24" :sm="24" :md="6">
          <img src="@/assets/img/about/credential_2.png" alt="">
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script>
import { getCurrentInstance, nextTick, onMounted, reactive, toRefs } from 'vue';
  export default {
    name: "about",
    components: {
    },
    setup() {
      const { proxy } = getCurrentInstance();
      const state = reactive({
      })

      onMounted(async () => { 
        nextTick(() => {
          var wow = new proxy.$wow.WOW({boxClass: "wow",
              animateClass: "animated", 
              offset: 0, 
              mobile: true,
              live: true,
              callback: function () {
              },
              scrollContainer: null,
              resetAnimation: true,
            }
          )
          wow.init()
        })
      })

      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        ...toRefs(state),
        onSwiper,
        onSlideChange,
      };
    },
  };
</script>
<style lang="less">
.a_top_box{
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 5rem;
  margin-bottom: 3.75rem;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  .a_c_left{
    width: 50rem;
    height: 28.125rem;
    flex-shrink: 0;
    margin-right: 3.75rem;
    video{
      width: 100%;
      height: 100%;
    }
  }
  .a_c_right{
    font-size: 1rem;
  }
  .a_c_left{
    font-size: 0;
  }
  .a_text_top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.875rem;
    .title{
      font-size: 2.5rem;
      line-height: 2.5rem;
    }
    img{
      width: 4rem;
    }
  }
  .a_text_bottom{
    color: #111;
    font-size: 1rem;
    line-height: 1.25rem;
  }
}
.a_bottom_box{
  .a_bottom_text{
    font-size: .875rem;
    line-height: 1.125rem;
  }
  .a_title{
    font-size: 2rem;
    margin-bottom: .25rem;
    line-height: 2.5rem;
  }
}
</style>