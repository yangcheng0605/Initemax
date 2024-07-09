<template>
  <nav>
    <Header :isScrolled="isScrolled"></Header>
    <main class="wrapper">
      <div id="shopify-section-home" class="shopify-section">
        <div class="homepage">
          <router-view />
        </div>
      </div>
    </main>
    <Footer v-if="!hidden"></Footer>
    <Pop v-if="!hidden"></Pop>
  </nav>
</template>
<script>
import { defineComponent, onBeforeUnmount, onMounted, reactive, toRefs, watch } from 'vue'
import Header from '@/layout/Header.vue'
import Footer from '@/layout/Footer.vue'
import Pop from '@/components/pop.vue'
import { useRoute } from 'vue-router'
import '@/assets/style/home.less'
export default defineComponent({
  components: {
    Header,
    Footer,
    Pop
  },
  props: {
    modalParam: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  setup() {
    let route = useRoute()
    const state = reactive({
      isMobile: false,
      hidden: false,
      isScrolled: false,
      navList: [
        { key: 0, name: '首页', path: '/', active: false },
        { key: 1, name: '案例', path: '/products', active: false },
        { key: 2, name: '关于我们', path: '/about', active: false },
        { key: 3, name: '最新资讯', path: '/news', active: false },
        { key: 4, name: '联系我们', path: '/contact', active: false }
      ]
    })
    onMounted(async () => {
      window.addEventListener('scroll', handleScroll)
      handleResize()
      window.addEventListener('resize', handleResize)
      // window.onresize = resizeHeight
    })
    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll)
    })
     const handleResize = () => {
      const windowWidth = window.innerWidth
      if (windowWidth < 750) {
        state.isMobile = true
      } else {
        state.isMobile = false
      }
    }
    const handleScroll = () => {
      if (window.scrollY > 0) {
        state.isScrolled = true
      } else {
        state.isScrolled = false
      }
    }
    watch(
      route,
      e => {
        var name = e.name
        if (['/', 'home'].indexOf(name) > -1) {
          state.hidden = true
        } else {
          state.hidden = false
        }
        if (state.isMobile) {
          window.scrollTo(0, 0);
        } else {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
        }
      },
      { immediate: true }
    )
    return {
      ...toRefs(state)
    }
  }
})
</script>
<style lang="less"></style>
