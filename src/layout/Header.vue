<template>
  <div class="shopify-section-header">
    <div class="header">
      <div class="desktop-only">
        <div :class="['main', transp ? 'transp' : 'main_white']">
          <div class="main_left">
            <a href="/#/"><img :src="transp ? logo_white : logo_black" /></a>
          </div>
          <div class="nav">
            <a-tabs v-model:activeKey="activeKey" @change="linkTo">
              <a-tab-pane :key="item.key" :tab="item.name" v-for="item in navList"></a-tab-pane>
            </a-tabs>
            <!-- <span :href="item.path" :class="item.active ? 'nav_active' : ''" @click="linkTo(item)" @mouseover="hoverTo(index)">{{ item.name }}</span> -->
            <div class="search" @click="search">
              <img :src="transp ? search_white : search_black" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="mobile-only">
        <div :class="['main', transp ? 'transp' : 'main_white']">
          <div class="main_center">
            <a href="/#/"><img :src="transp ? logo_white : logo_black" /></a>
          </div>
          <div class="main_Mright" @click="targetShowNav">
            <img class="close" v-if="show" src="@/assets/img/mb_nav_close.png" alt="" />
            <img v-else :src="transp ? mb_nav_white : mb_nav_black" alt="" />
          </div>
        </div>
        <div :class="['Main_popup', show ? 'Main_popup_active' : '']">
          <div class="Main_item">
            <!-- <a-collapse ghost accordion :expand-icon-position="'end'"> -->
            <p class="Mnav">
              <a href="/#/" @click="show = false">首页</a>
              <img src="@/assets/img/mb_arrow_b.png" alt="" />
            </p>
            <p class="Mnav">
              <a href="/#/products" @click="show = false">案例</a>
              <img src="@/assets/img/mb_arrow_b.png" alt="" />
            </p>
            <p class="Mnav">
              <a href="/#/news" @click="show = false">最新资讯</a>
              <img src="@/assets/img/mb_arrow_b.png" alt="" />
            </p>
            <p class="Mnav">
              <a href="/#/contact" @click="show = false">联系我们 </a>
              <img src="@/assets/img/mb_arrow_b.png" alt="" />
            </p>
            <p class="Mnav">
              <a href="/#/about" @click="show = false">关于我们</a>
              <img src="@/assets/img/mb_arrow_b.png" alt="" />
            </p>
            <!-- </a-collapse> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCurrentInstance, nextTick, onMounted, reactive, ref, toRefs, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Empty } from 'ant-design-vue'
import Storage from '@/utils/storage'
import '@/assets/style/header.less'
export default {
  name: 'Header',
  setup() {
    let router = useRouter()
    let route = useRoute()
    const { proxy } = getCurrentInstance()
    const state = reactive({
      show: false,
      transp: true,
      activeKey: 1,
      logo_white: require('@/assets/img/logo_w.png'),
      logo_black: require('@/assets/img/logo_b.png'),
      search_white: require('@/assets/img/search_w.png'),
      search_black: require('@/assets/img/search_b.png'),
      mb_nav_white: require('@/assets/img/mb_nav_w.png'),
      mb_nav_black: require('@/assets/img/mb_nav_b.png'),
      search: false,
      popIndex: null,
      navList: [
        { key: 0, name: '首页', path: '/', active: false },
        { key: 1, name: '案例', path: '/products', active: false },
        { key: 2, name: '关于我们', path: '/about', active: false },
        { key: 3, name: '联系我们', path: '/contact', active: false },
        { key: 4, name: '最新资讯', path: '/news', active: false }
      ]
    })
    onMounted(async () => {
      // getProductListByCate(1)
    })
    const getProductListByCate = id => {
      console.log(id)
    }
    const search = () => {
      state.search = true
    }
    const targetShowNav = () => {
      state.show = !state.show
    }
    const linkTo = e => {
      router.push({
        path: state.navList[e].path
      })
    }
    const hoverTo = e => {
      state.popIndex = e
      getProductListByCate(1)
    }
    const leaveTo = () => {
      state.popIndex = null
    }
    watch(
      route,
      e => {
        var path = e.fullPath
        const current = state.navList.filter(item => path === item.path)
        state.activeKey = current.key
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      },
      { immediate: true }
    )
    return {
      Empty,
      ...toRefs(state),
      targetShowNav,
      linkTo,
      hoverTo,
      search,
      leaveTo
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
