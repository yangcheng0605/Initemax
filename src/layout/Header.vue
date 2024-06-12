<template>
  <div class="shopify-section-header">
    <div :class="['header', transp ? '' : 'specialHeader']">
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
            <div class="search" @click="showSearch = true">
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
            <a href="/#/" class="Mnav" @click="show = false">
              <span>首页</span>
              <img src="@/assets/img/mb_arrow_b.png" alt="" />
            </a>
            <a href="/#/products" class="Mnav" @click="show = false">
              <span>案例</span>
              <img src="@/assets/img/mb_arrow_b.png" alt="" />
            </a>
            <a href="/#/news" class="Mnav" @click="show = false">
              <span>最新资讯</span>
              <img src="@/assets/img/mb_arrow_b.png" alt="" />
            </a>
            <a href="/#/contact" class="Mnav" @click="show = false">
              <span>联系我们 </span>
              <img src="@/assets/img/mb_arrow_b.png" alt="" />
            </a>
            <a href="/#/about" class="Mnav" @click="show = false">
              <span>关于我们</span>
              <img src="@/assets/img/mb_arrow_b.png" alt="" />
            </a>
            <!-- </a-collapse> -->
          </div>
        </div>
      </div>
    </div>
    <a-drawer height="auto" :closable="false" placement="top" :open="showSearch">
      <template #extra> </template>
      <div class="drawer_search">
        <div class="d_top">
          <p class="d_title">请输入您要查找的信息</p>
          <p class="d_close" @click="showSearch = false"><img src="@/assets/img/search_close.png" alt="" /></p>
        </div>
        <div class="d_bottom">
          <a-input v-model:value="searchName" placeholder="请输入一个关键词" @keydown.enter="search">
            <template #suffix>
              <img class="d_search_icon" src="@/assets/img/search_b.png" alt="" />
            </template>
          </a-input>
        </div>
      </div>
    </a-drawer>
  </div>
</template>

<script>
import { getCurrentInstance, h, onMounted, reactive, toRefs, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Empty } from 'ant-design-vue'
// import Storage from '@/utils/storage'
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
      searchName: '',
      logo_white: require('@/assets/img/logo_w.png'),
      logo_black: require('@/assets/img/logo_b.png'),
      search_white: require('@/assets/img/search_w.png'),
      search_black: require('@/assets/img/search_b.png'),
      mb_nav_white: require('@/assets/img/mb_nav_w.png'),
      mb_nav_black: require('@/assets/img/mb_nav_b.png'),
      showSearch: false,
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
      state.showSearch = false
      router.push('/search?search=' + state.searchName)
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
        var meta = e.meta
        state.transp = meta?.transp == 1 ? false : true
        const current = state.navList.filter(item => path === item.path)
        if (current && current.length > 0) {
          state.activeKey = current[0].key
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
        } else {
          state.activeKey = ''
        }
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
