<template>
  <div id="shopify-section-footer" class="shopify-section wiper_4">
    <section class="footer">
      <div class="desktop-only">
        <div class="d_top">
          <div class="footer-left">
            <img src="@/assets/img/footer/f_logo.png" alt="" />
            <div class="f_block">
              <p>地址：广东省深圳市宝安区1065号F518时尚创意园F7栋401</p>
              <p>邮箱：ignitemax@ignitemax.cn</p>
              <p>电话：17722438807/4000-212-777</p>
            </div>
            <div class="f_media">
              <a class="icon_meida" @mouseenter="showQr(0)" @mouseleave="leaveQr(0)"><img src="@/assets/img/footer/icon_1.png" alt="" /></a>
              <a class="icon_meida" @mouseenter="showQr(1)" @mouseleave="leaveQr(1)"><img src="@/assets/img/footer/icon_2.png" alt="" /></a>
              <a class="icon_meida" @mouseenter="showQr(2)" @mouseleave="leaveQr(2)"><img src="@/assets/img/footer/icon_3.png" alt="" /></a>
              <a class="icon_meida" @mouseenter="showQr(3)" @mouseleave="leaveQr(3)"><img src="@/assets/img/footer/icon_4.png" alt="" /></a>
              <a class="icon_meida" @mouseenter="showQr(4)" @mouseleave="leaveQr(4)"><img src="@/assets/img/footer/icon_5.png" alt="" /></a>
              <div class="qr" :style="`left: calc(-4.375rem + ${showIndex * 3.75}rem)`" v-if="showQr"><img :src="qrUrl" alt="" /></div>
            </div>
          </div>
          <div class="footer-right">
            <div class="nav_list" v-for="item in navList" :key="item.id">
              <div class="ft_title">
                <a :href="item.path">{{ item.title }}</a>
              </div>
              <div class="nav_text">
                <div v-for="item2 in item.children" :key="item2.id">
                  <a :href="item2.path">{{ item2.name }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d_bottom">
          <p class="explain">版权说明<span>|</span>法律公告<span>|</span>隐私政策</p>
          <div class="footerFlag"><span>Copyright © 2024 zaoguang.com 版权所有</span><span>粤ICP备2020030570号</span><span>粤公网安备 44030502009783号</span></div>
        </div>
      </div>
      <div class="mobile-only">
        <div class="footer-top">
          <span class="Fnav" @click="navlinkTo('/')">
            <p @click="show = false">首页</p>
            <img src="@/assets/img/mb_arrow_w.png" alt="" />
          </span>
          <span class="Fnav" @click="navlinkTo('/products')">
            <p @click="show = false">案例</p>
            <img src="@/assets/img/mb_arrow_w.png" alt="" />
          </span>
          <span class="Fnav" @click="navlinkTo('/about')">
            <p @click="show = false">关于我们</p>
            <img src="@/assets/img/mb_arrow_w.png" alt="" />
          </span>
          <span class="Fnav" @click="navlinkTo('/news')">
            <p @click="show = false">最新资讯</p>
            <img src="@/assets/img/mb_arrow_w.png" alt="" />
          </span>
          <span class="Fnav" @click="navlinkTo('/contact')">
            <p @click="show = false">联系我们</p>
            <img src="@/assets/img/mb_arrow_w.png" alt="" />
          </span>
        </div>
        <div class="footer-bottom">
          <img class="f_logo" src="@/assets/img/footer/f_logo.png" alt="" />
          <div class="f_media">
            <a class="icon_meida"><img class="icon" data-id="0" src="@/assets/img/footer/icon_1.png" alt="" /></a>
            <a class="icon_meida"><img class="icon" data-id="1" src="@/assets/img/footer/icon_2.png" alt="" /></a>
            <a class="icon_meida"><img class="icon" data-id="2" src="@/assets/img/footer/icon_3.png" alt="" /></a>
            <a class="icon_meida"><img class="icon" data-id="3" src="@/assets/img/footer/icon_4.png" alt="" /></a>
            <a class="icon_meida"><img class="icon" data-id="4" src="@/assets/img/footer/icon_5.png" alt="" /></a>
            <div class="qr" :style="`left: calc(-0.10rem + ${showIndex * 3.75}rem)`" v-if="showQr && qrUrl"><img :src="qrUrl" alt="" /></div>
          </div>
          <div class="d_bottom">
            <p class="explain">版权说明<span>|</span>法律公告<span>|</span>隐私政策</p>
            <div class="footerFlag">
              <span>Copyright © 2024 zaoguang.com 版权所有</span>
              <span>粤ICP备2020030570号</span>
              <span>粤公网安备 44030502009783号</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import '@/assets/style/footer.less'
import { getCurrentInstance, onMounted, reactive, ref, toRefs, watch } from 'vue'
import { PlusOutlined } from '@ant-design/icons-vue'
import { Empty } from 'ant-design-vue'
import Storage from '@/utils/storage'
import { useRouter } from 'vue-router'
export default {
  name: 'Footer',
  components: {
    PlusOutlined
  },
  setup() {
    const { proxy } = getCurrentInstance()
    let router = useRouter()
    const state = reactive({
      navList: [
        {
          id: 1,
          title: '首页',
          children: [
            { key: 1, path: '/xxxx', name: '主营业务' },
            { key: 2, path: '/xxxx', name: '作品精选' }
          ]
        },
        {
          id: 2,
          title: '案例',
          children: [
            { key: 1, path: '/xxxx', name: '企业宣传片' },
            { key: 2, path: '/xxxx', name: 'TVC广告片' },
            { key: 3, path: '/xxxx', name: 'CG动画' },
            { key: 4, path: '/xxxx', name: '微电影' },
            { key: 5, path: '/xxxx', name: '直播/录播/发布会' },
            { key: 6, path: '/xxxx', name: '短枧频制作/代运营' }
          ]
        },
        {
          id: 3,
          title: '关于我们',
          children: [
            { key: 1, path: '/xxxx', name: '合作品牌' },
            { key: 2, path: '/xxxx', name: '荣誉奖项' },
            { key: 3, path: '/xxxx', name: '公司资质' },
            { key: 4, path: '/xxxx', name: '公司优势' },
            { key: 5, path: '/xxxx', name: '幕后花絮' },
            { key: 6, path: '/xxxx', name: '联系我们' }
          ]
        },
        {
          id: 4,
          title: '最新资讯',
          children: [
            { key: 1, name: '热门资讯' },
            { key: 2, name: '全部资讯' }
          ]
        }
      ],
      showQr: false,
      showIndex: null,
      qrUrl: null,
      qrList: [require('@/assets/img/qr.png')]
    })
    onMounted(async () => {
      // getCategoryList()
      document.addEventListener('click', clickshowQr)
    })
    const showQr = e => {
      state.showQr = true
      state.showIndex = e
      // state.qrUrl = state.qrList[e]
      state.qrUrl = require('@/assets/img/qr.png')
    }
    const leaveQr = e => {
      state.showQr = false
      state.showIndex = null
      state.qrUrl = null
    }
    const navlinkTo = e => {
      router.push(e)
    }
    const clickshowQr = e => {
      if (e.target.className == 'icon') {
        const id = e.target.dataset.id
        showQr(id)
      } else {
        leaveQr()
      }
      // state.showQr = true
      // state.showIndex = e
      // // state.qrUrl = state.qrList[e]
      // state.qrUrl = require('@/assets/img/qr.png')
    }
    // const getCategoryList = () => {
    //   proxy.$api.categoryList('').then(res=>{
    //     state.mpType = res
    //     Storage.setItem('navList', res)
    //   })
    // };
    // const linkTo = (e) => {
    //   router.push({
    //     path: e.path
    //   });
    // }
    return {
      Empty,
      ...toRefs(state),
      showQr,
      leaveQr,
      navlinkTo
    }
  }
}
</script>
<style scoped lang="less"></style>
