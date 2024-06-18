<template>
  <div class="pop pop_box">
    <div class="pop_block pop_top" @click="showContact">
      <img src="@/assets/img/contact.png" alt="" />
      <p v-if="!isMobile">联系方式</p>
    </div>
    <div class="pop_block pop_bottom" @click="toTop">
      <img src="@/assets/img/back.png" alt="" />
      <p v-if="!isMobile">返回顶部</p>
    </div>
  </div>
</template>
<script>
import { onMounted, reactive, nextTick, toRefs } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'IPop',
  components: {},
  props: {
    swiper1: {
      type: Object
    },
    fullpage: {
      type: Object
    },
    isMobile: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    let router = useRouter()
    const state = reactive({
      isMobile: false
    })
    onMounted(async () => {
      nextTick(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
      })
    })
    const handleResize = () => {
      const windowWidth = window.innerWidth
      if (windowWidth < 750) {
        state.isMobile = true
      } else {
        state.isMobile = false
      }
    }
    const showContact = () => {
      if (props.isMobile) {
        props.swiper1.slideTo(2)
      } else {
        props.fullpage.api.moveTo(4)
      }
      // const node = document.getElementById('shopify-section-footer')
      // if (node) {
      //   const rect = node.getBoundingClientRect()
      //   const offsetTop = rect.top + window.pageYOffset
      //   window.scrollTo({
      //     top: offsetTop,
      //     behavior: 'smooth'
      //   })
      // }
    }
    const toTop = () => {
      if (props.isMobile) {
        props.swiper1.slideTo(0)
      } else {
        props.fullpage.api.moveTo(1)
      }
    }
    return {
      ...toRefs(state),
      showContact,
      toTop
    }
  }
}
</script>
<style lang="less">
.pop_box {
  position: fixed;
  right: 0.625rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-flow: column;
  z-index: 10;
  .pop_block {
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 0.25rem;
    padding: 0.625rem 0.75rem;
    margin-bottom: 0.625rem;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.5);
    font-size: 0.75rem;
    color: #fff;
    line-height: 0.75rem;
    text-align: center;
    transition: background 0.3s;
    &:hover {
      background: #ff8a2c !important;
    }
    img {
      width: 2.25rem;
      height: 2.25rem;
      display: inline-block;
    }
    p {
      margin-top: 0.25rem;
    }
  }
  .pop_theme {
    background: #ff8a2c !important;
  }
}
</style>
