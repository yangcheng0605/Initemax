<template>
  <div class="products productsDetail">1111</div>
</template>
<script>
import { getCurrentInstance, onMounted, nextTick, reactive, toRefs, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const { proxy } = getCurrentInstance()
    const state = reactive({
      id: '',
      perView: 2,
      between: 30,
      modules: [Navigation],
      swiper: null,
      imageUrls: null,
      isMobile: false,
      proList: [],
      proData: { proSPath: null, proPath: null }
    })

    onMounted(async () => {
      handleResize()
      window.addEventListener('resize', handleResize)
      nextTick(() => {
        var wow = new proxy.$wow.WOW({ boxClass: 'wow', animateClass: 'animated', offset: 0, mobile: true, live: true, callback: function () {}, scrollContainer: null, resetAnimation: true })
        wow.init()
      })
    })
    const getProductList = id => {
      proxy.$api.productList(id).then(res => {
        state.proData = res
        state.imageUrls = res.imageUrls && res.imageUrls.split(',')
        getProductListByCate(1)
      })
    }
    const getProductListByCate = id => {
      proxy.$api.productListByCate(id).then(res => {
        state.proList = res
      })
    }
    const handleResize = () => {
      const windowWidth = window.innerWidth
      if (windowWidth < 750) {
        state.between = 15
        state.perView = 'auto'
        state.isMobile = true
      } else {
        state.between = 30
        state.perView = 5
        state.isMobile = false
      }
    }
    const onSwiper = swiper => {
      state.swiper = swiper
    }
    const linkTo = res => {
      router.push('/productsDetail?id=' + res.proId)
    }
    watch(
      route,
      e => {
        const query = e.query
        if (query.id) {
          state.id = parseInt(query.id) || null
          getProductList(query.id)
        }
      },
      { immediate: true }
    )
    return {
      ...toRefs(state),
      onSwiper,
      linkTo
    }
  }
}
</script>
<style lang="less"></style>
