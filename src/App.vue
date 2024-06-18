<template>
  <nav>
    <Header></Header>
    <main class="wrapper">
      <div id="shopify-section-home" class="shopify-section">
        <div class="homepage">
          <router-view />
        </div>
      </div>
    </main>
    <Footer v-if="!hidden"></Footer>
    <Pop v-if="!hidden"></Pop>
    <Minors></Minors>
  </nav>
</template>
<script>
import { defineComponent, onMounted, reactive, toRefs, watch } from 'vue'
import Header from '@/layout/Header.vue'
import Footer from '@/layout/Footer.vue'
import Minors from '@/layout/Minors.vue'
import Pop from '@/components/pop.vue'
import { useRoute } from 'vue-router'
import '@/assets/style/home.less'
export default defineComponent({
  components: {
    Header,
    Footer,
    Minors,
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
      hidden: false
    })
    onMounted(async () => {})
    watch(
      route,
      e => {
        var name = e.name
        if (['/', 'home'].indexOf(name) > -1) {
          state.hidden = true
        } else {
          state.hidden = false
        }
        console.log(state.hidden)
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
