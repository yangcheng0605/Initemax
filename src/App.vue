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
      hidden: false,
      isScrolled: false
    })
    onMounted(async () => {
      window.addEventListener('scroll', handleScroll)
    })
    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll)
    })
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
