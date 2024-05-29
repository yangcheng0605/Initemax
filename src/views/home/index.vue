<template><div class="search">12313</div></template>
<script>
import { getCurrentInstance, nextTick, onMounted, reactive, toRefs, h } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'search',
  components: {},
  setup() {
    const router = useRouter()
    const { proxy } = getCurrentInstance()
    const state = reactive({
      bannerList: null
    })
    onMounted(async () => {
      getPicList()
      nextTick(() => {
        var wow = new proxy.$wow.WOW({ boxClass: 'wow', animateClass: 'animated', offset: 0, mobile: true, live: true, callback: function () {}, scrollContainer: null, resetAnimation: true })
        wow.init()
      })
    })
    const getPicList = () => {
      proxy.$api.picList('').then(res => {
        state.bannerList = res
      })
    }
    const linkToDetail = () => {
      //  router.push('/search?search=' + state.searchName)
    }

    return {
      ...toRefs(state),
      linkTo,
      ...toRefs(state),
      linkTo
    }
  }
}
</script>
<style lang="less">
.home {
  .home_block {
    .home_tag {
      width: 12.5rem;
      position: absolute;
      right: 7.5rem;
      top: -6.25rem;
      z-index: 10;
      animation: home_rotate 10s linear infinite;
    }
    .homt_pros {
      .title {
        line-height: 2.5rem;
      }
      .home_tab {
        margin: 0.812rem 0 3.75rem;
        .ant-tabs-nav {
          margin: 0;
          &::before {
            border: none;
          }
        }
        .ant-tabs-nav-wrap {
          padding: 0;
        }
        .ant-tabs-tab {
          padding: 9px 0;
          font-weight: 500;
          color: #111 !important;
          font-size: 1rem;
          .ant-tabs-tab-btn {
            letter-spacing: 0;
          }
          .ant-tabs-tab-btn:hover,
          .ant-tabs-tab-btn:focus {
            color: #111;
          }
        }
        .ant-tabs-tab-active .ant-tabs-tab-btn {
          color: #111 !important;
          text-shadow: none;
        }
        .ant-tabs-ink-bar {
          background: #111 !important;
        }
      }
    }
  }

  .swiper_box {
    position: relative;
    .home_sildePre,
    .home_sildeNext {
      width: 2.5rem;
      height: 2.5rem;
      position: absolute;
      z-index: 2;
      cursor: pointer;
    }
    .home_sildePre {
      background: url('../../assets/img/arrow_white_l.png') no-repeat 100% / contain;
    }
    .home_sildeNext {
      background: url('../../assets/img/arrow_white_r.png') no-repeat 100% / contain;
    }
  }
  .homeSwiper {
    .spin {
      width: 100%;
      height: 100vh;
      text-align: center;
      line-height: 100vh;
      .anticon-loading {
        font-size: 80px !important;
      }
    }
    .swiper_box {
      .home_sildePre,
      .home_sildeNext {
        bottom: 3.75rem;
      }
      .home_sildePre {
        left: 7.5rem;
      }
      .home_sildeNext {
        left: 12.5rem;
      }
      .home_sildePre:hover {
        background: url('../../assets/img/arrow_yellow_l.png') no-repeat 100% / contain;
      }
      .home_sildeNext:hover {
        background: url('../../assets/img/arrow_yellow_r.png') no-repeat 100% / contain;
      }
    }
  }
  .home_center {
    .swiper_box {
      .swiper {
        padding-right: 2.5rem;
      }
      .home_sildePre,
      .home_sildeNext {
        top: 50%;
      }
      .home_sildePre {
        left: -5rem;
      }
      .home_sildeNext {
        right: -5rem;
      }
    }
    .home_sildePre {
      background: url('../../assets/img/arrow_gray_l.png') no-repeat 100% / contain;
    }
    .home_sildeNext {
      background: url('../../assets/img/arrow_gray_r.png') no-repeat 100% / contain;
    }
  }
  .title {
    color: #111;
    font-size: 2.5rem;
  }
  .home_center {
    // background: #f5b81a url('../../assets/img/home/yellow_bg.png') no-repeat 100% / cover;
    position: relative;
    padding: 6.25rem 15rem 6.75rem;
    .proImg {
      height: 27.5rem;
      border-radius: 8px;
      // background: url('../../assets/img/product/bg_r.png') no-repeat 100% / cover;
      img {
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .home_bottom {
    background: #fef8e8;
    padding: 6.25rem 15rem 7.5rem;
    .home_b_top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 3.75rem;
      .title {
        line-height: 2.5rem;
      }
      img {
        width: 8.375rem;
      }
    }
    .home_imgs {
      display: flex;
      align-items: center;
      color: #fff;
      font-size: 2rem;
      .home_imgs_left {
        height: 37.5rem;
        position: relative;
      }
      .home_imgs_right {
        border-radius: 8px;
        width: 25rem;
        height: 37.5rem;
        margin-left: 2.5rem;
        flex-shrink: 0;
        position: relative;
      }
      .shade {
        background: linear-gradient(225deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        transition: all 0.5s;
        z-index: 10;
      }
    }
    .imgs_lr,
    .imgs_rl {
      display: flex;
      position: relative;
      img {
        height: 17.5rem;
      }
      .home_img_s,
      .home_img_r {
        border-radius: 8px;
      }
    }
    .hoverBox {
      position: relative;
      .img_text {
        position: absolute;
        left: 1.875rem;
        bottom: 1.5rem;
        line-height: 2.5rem;
        z-index: 12;
      }
    }
    .imgs_lr {
      margin-bottom: 2.5rem;
      .home_img_s {
        margin-right: 2.5rem;
      }
    }
    .imgs_rl {
      .home_img_r {
        margin-right: 2.5rem;
      }
    }
  }
  @keyframes home_rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
