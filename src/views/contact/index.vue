<template>
  <div class="contact">
    <div class="top_banner">
      <img src="@/assets/img/contact/bg_top.png" alt="" />
      <div class="t_box">
        <p class="title SmileFont">联系我们</p>
      </div>
    </div>
    <div class="bottom_contain">
      <div class="contact_nav nav">
        <a-tabs v-model:activeKey="activeKey">
          <a-tab-pane :key="1" tab="联系方式">
            <div class="a_content">
              <div class="a_content_left">
                <p class="title SmileFont wow animate__fadeInLeft">联系我们</p>
                <div>
                  <ul>
                    <li><img src="@/assets/img/contact/img_1.png" alt="" /> <span>广东省深圳市宝安区1065号F518时尚创意园F7栋401 </span></li>
                    <li><img src="@/assets/img/contact/img_2.png" alt="" /> <span>ignitemax@ignitemax.cn</span></li>
                    <li><img src="@/assets/img/contact/img_3.png" alt="" /> <span>17722438807/4000-212-777</span></li>
                  </ul>
                </div>
              </div>
              <div class="a_content_right">
                <img src="@/assets/img/contact/address.png" alt="" />
              </div>
            </div>
          </a-tab-pane>
          <a-tab-pane :key="2" tab="在线留言"> 2 </a-tab-pane>
        </a-tabs>
      </div>
    </div>
    <!-- <a-modal class="contact_pop" v-model:open="contactModal" :width="480" title="" :closable="false" :footer="null" centered>
      <div class="pop_top">
        <span class="title SmileFont">{{ contactModalOp.title }}</span>
        <img :src="contactModalOp.url" alt="" />
      </div>
      <p class="email">{{ contactModalOp.content }}</p>
      <a-button class="copyBtn" shape="round" :data-text="contactModalOp.content" @click="handleCopy">{{ contactModalOp.btn_text }}</a-button>
    </a-modal> -->
  </div>
</template>
<script>
import { getCurrentInstance, nextTick, onMounted, reactive, toRefs } from 'vue'
export default {
  name: 'contact',
  components: {},
  setup() {
    const { proxy } = getCurrentInstance()
    const state = reactive({
      activeKey: 1,
      contactModal: false,
      contactModalOp: {
        title: '',
        content: '',
        btn_text: ''
      }
    })

    onMounted(async () => {
      nextTick(() => {
        var wow = new proxy.$wow.WOW({ boxClass: 'wow', animateClass: 'animated', offset: 0, mobile: true, live: true, callback: function () {}, scrollContainer: null, resetAnimation: true })
        wow.init()
      })
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>
<style lang="less">
.bottom_contain {
  padding: 0 15rem 0;
  .contact_nav {
    .ant-tabs .ant-tabs-tab {
      margin-left: 5rem !important;
    }
  }
  .a_content {
    padding: 5rem 0 5.625rem;
    // min-height: 550px;
    .a_content_left {
      .title {
        font-size: 2.5rem;
        line-height: 2.5rem;
      }
    }
  }
}
</style>
