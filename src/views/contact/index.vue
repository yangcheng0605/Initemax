<template>
  <div class="contact">
    <div class="top_banner">
      <img src="@/assets/img/contact/bg_top.png" alt="" />
      <div class="t_box">
        <p class="title SmileFont wow animate__fadeInUp" data-wow-offset="50">联系我们</p>
      </div>
    </div>
    <div id="content" class="bottom_contain">
      <div class="contact_nav nav">
        <a-tabs v-model:activeKey="activeKey" :centered="mobile ? true : false">
          <a-tab-pane :key="1" tab="联系方式">
            <div class="a_content">
              <div class="a_content_left">
                <p class="title SmileFont">联系我们</p>
                <div>
                  <ul>
                    <li><img src="@/assets/img/contact/img_1.png" alt="" /> <span>广东省深圳市宝安区1065号F518时尚创意园F7栋401 </span></li>
                    <li><img src="@/assets/img/contact/img_3.png" alt="" /> <span>ignitemax@ignitemax.cn</span></li>
                    <li><img src="@/assets/img/contact/img_2.png" alt="" /> <span>17722438807/4000-212-777</span></li>
                  </ul>
                </div>
              </div>
              <div class="a_content_right">
                <img class="hoverImg" src="@/assets/img/contact/address.png" alt="" />
              </div>
            </div>
          </a-tab-pane>
          <a-tab-pane :key="2" tab="在线留言">
            <div class="message">
              <p class="title SmileFont wow animate__fadeInLeft">请填写留言</p>
              <div>
                <a-form layout="vertical" :model="formState" @finish="handleFinish">
                  <a-row :gutter="gutter">
                    <a-col :span="colSpan">
                      <a-form-item label="姓名">
                        <a-input v-model:value="formState.name" placeholder="" />
                      </a-form-item>
                    </a-col>
                    <a-col :span="colSpan">
                      <a-form-item label="城市/地区">
                        <a-input v-model:value="formState.country" placeholder="" />
                      </a-form-item>
                    </a-col>
                    <a-col :span="colSpan">
                      <a-form-item label="电话">
                        <a-input v-model:value="formState.phone" placeholder="" />
                      </a-form-item>
                    </a-col>
                    <a-col :span="colSpan">
                      <a-form-item label="公司">
                        <a-input v-model:value="formState.company" placeholder="" />
                      </a-form-item>
                    </a-col>
                    <a-col :span="colSpan">
                      <a-form-item label="职位">
                        <a-input v-model:value="formState.job" placeholder="" />
                      </a-form-item>
                    </a-col>
                    <a-col :span="colSpan">
                      <a-form-item label="邮箱">
                        <a-input v-model:value="formState.email" placeholder="" />
                      </a-form-item>
                    </a-col>
                    <a-col :span="mobile ? colSpan : 16">
                      <a-form-item label="您的留言">
                        <a-textarea :rows="4" v-model:value="formState.remark" placeholder="说点什么好呢说" />
                      </a-form-item>
                    </a-col>
                    <a-col class="submit" :span="colSpan">
                      <a-form-item>
                        <a-button type="link" class="themeBtn hoverBtn" html-type="submit">立即提交</a-button>
                      </a-form-item>
                    </a-col>
                  </a-row>
                </a-form>
              </div>
            </div>
          </a-tab-pane>
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
import { getCurrentInstance, nextTick, onMounted, reactive, toRefs, watch } from 'vue'
import { useRoute } from 'vue-router'
export default {
  name: 'IContact',
  components: {},
  setup() {
    let route = useRoute()
    const { proxy } = getCurrentInstance()
    const state = reactive({
      activeKey: 1,
      contactModal: false,
      colSpan: 8,
      mobile: false,
      query: null,
      gutter: [30, 30],
      contactModalOp: {
        title: '',
        content: '',
        btn_text: ''
      },
      formState: {
        name: '',
        country: '',
        phone: '',
        company: '',
        job: '',
        email: '',
        remark: ''
      }
    })

    onMounted(async () => {
      nextTick(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        var wow = new proxy.$wow.WOW({ boxClass: 'wow', animateClass: 'animated', offset: 0, mobile: true, live: true, callback: function () {}, scrollContainer: null, resetAnimation: true })
        wow.init()
        if (state.query && state.query.form == 'home') {
          const node = document.getElementById('content')
          if (node) {
            const rect = node.getBoundingClientRect()
            const offsetTop = rect.top + window.pageYOffset
            console.log(offsetTop)
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            })
          }
        }
      })
    })

    const handleFinish = () => {
      console.log(state.formState)
    }
    const handleResize = () => {
      const windowWidth = window.innerWidth
      if (windowWidth < 750) {
        state.colSpan = 24
        state.gutter = 20
        state.mobile = true
      } else {
        state.colSpan = 8
        state.gutter = [80, 20]
        state.mobile = false
      }
    }
    watch(
      route,
      e => {
        state.query = e.query
      },
      { immediate: true }
    )
    return {
      ...toRefs(state),
      handleFinish
    }
  }
}
</script>
<style lang="less">
.bottom_contain {
  .contact_nav {
    .ant-tabs {
      width: 100%;
      .ant-tabs-nav {
        padding: 0 15rem 0;
        box-shadow: 0px 8px 18px 0px rgba(35, 35, 35, 0.1);
        z-index: 2;
        .ant-tabs-tab {
          margin-left: 5rem !important;
        }
      }
    }
  }
  .a_content {
    padding: 5rem 15rem 5.625rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fbfbfb;
    .a_content_left {
      width: 37.5rem;
      margin-right: 2.5rem;
      padding: 6.18rem 0 7rem 4.375rem;
      flex-shrink: 0;
      background: #fff;
      border-radius: 1.25rem;
      .title {
        font-size: 2.5rem;
        line-height: 3.75rem;
        margin-bottom: 3.75rem;
      }
      ul li {
        display: flex;
        align-items: center;
        font-size: 1.125rem;
        &:not(:last-of-type) {
          margin-bottom: 1.875rem;
        }
        img {
          width: 2.25rem;
          height: 2.25rem;
          margin-right: 1.25rem;
        }
      }
    }
    .a_content_right {
      overflow: hidden;
      border-radius: 1.25rem;
      img {
      }
    }
  }
  .message {
    padding: 3.75rem 15rem 4rem 20rem;
    .title {
      font-size: 2.5rem;
      line-height: 3.75rem;
      margin-bottom: 2.5rem;
    }
    .ant-form-item-label > label {
      color: #666;
      font-size: 1.25rem;
      font-weight: 400;
      line-height: 1.875rem;
    }
    .ant-input {
      border-radius: 0;
      border: 1px solid #cfcfcf;
    }
    .submit {
      position: relative;
      .ant-form-item {
        position: absolute;
        right: 40px;
        bottom: 0;
      }
    }
  }
}
</style>
