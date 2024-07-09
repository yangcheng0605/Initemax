<template>
  <div class="contact">
    <div class="top_banner">
      <img :src="bannerImg" alt="" />
      <div class="t_box" v-if="bannerInfo">
        <p class="title SmileFont wow animate__fadeInUp" data-wow-offset="50">{{ bannerInfo.pTitle }}</p>
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
              <div class="a_content_right hoverBox">
                <img class="hoverImg" src="@/assets/img/contact/address.png" alt="" />
              </div>
            </div>
          </a-tab-pane>
          <a-tab-pane :key="2" tab="在线留言">
            <div class="message">
              <p class="title SmileFont wow animate__fadeInLeft">请填写留言</p>
              <div>
                <a-form ref="formRef" layout="vertical" :rules="rules" :model="formState" @finish="handleFinish">
                  <a-row :gutter="gutter">
                    <a-col :span="colSpan">
                      <a-form-item label="姓名" name="gnName">
                        <a-input :maxlength="50" v-model:value="formState.gnName" placeholder="" />
                      </a-form-item>
                    </a-col>
                    <a-col :span="colSpan">
                      <a-form-item label="城市/地区" name="gnArea">
                        <a-input :maxlength="50" v-model:value="formState.gnArea" placeholder="" />
                      </a-form-item>
                    </a-col>
                    <a-col :span="colSpan">
                      <a-form-item label="电话" name="gnPhone">
                        <a-input type="number" :maxlength="15" v-model:value="formState.gnPhone" placeholder="" />
                      </a-form-item>
                    </a-col>
                    <a-col :span="colSpan">
                      <a-form-item label="公司" name="gnCompany">
                        <a-input :maxlength="50" v-model:value="formState.gnCompany" placeholder="" />
                      </a-form-item>
                    </a-col>
                    <a-col :span="colSpan">
                      <a-form-item label="职位" name="gnDept">
                        <a-input :maxlength="50" v-model:value="formState.gnDept" placeholder="" />
                      </a-form-item>
                    </a-col>
                    <a-col :span="colSpan">
                      <a-form-item label="邮箱" name="gnMail">
                        <a-input type="email" v-model:value="formState.gnMail" placeholder="" />
                      </a-form-item>
                    </a-col>
                    <a-col :span="mobile ? colSpan : 16">
                      <a-form-item label="您的留言" name="remark">
                        <a-textarea :maxlength="250" :rows="4" v-model:value="formState.remark" placeholder="说点什么好呢说" />
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
      <p class="gnMail">{{ contactModalOp.content }}</p>
      <a-button class="copyBtn" shape="round" :data-text="contactModalOp.content" @click="handleCopy">{{ contactModalOp.btn_text }}</a-button>
    </a-modal> -->
  </div>
</template>
<script>
import { getCurrentInstance, nextTick, onMounted, reactive, ref, toRefs, watch } from 'vue'
import { useRoute } from 'vue-router'
export default {
  name: 'IContact',
  components: {},
  setup() {
    let route = useRoute()
    let formRef = ref()
    const { proxy } = getCurrentInstance()
    const state = reactive({
      activeKey: 1,
      contactModal: false,
      bannerInfo: null,
      bannerImg: null,
      colSpan: 8,
      mobile: false,
      query: null,
      gutter: [30, 30],
      contactModalOp: {
        title: '',
        content: '',
        btn_text: ''
      },
      rules: {
        gnName: [{ required: true, message: '请输入姓名', trigger: 'change' }],
        gnArea: [{ required: true, message: '请输入城市/地区', trigger: 'change' }],
        gnPhone: [{ required: true, message: '请输入电话', trigger: 'change' }],
        gnCompany: [{ required: true, message: '请输入公司', trigger: 'change' }],
        gnDept: [{ required: true, message: '请输入职位', trigger: 'change' }],
        gnMail: [{ required: true, message: '请输入邮箱', trigger: 'change' }]
      },
      formState: {
        gnName: '',
        gnArea: '',
        gnPhone: '',
        gnCompany: '',
        gnDept: '',
        gnMail: '',
        remark: ''
      }
    })

    onMounted(async () => {
      getBannerList()
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
    const getBannerList = () => {
      proxy.$api.bannerList({ pType: 5 }).then(res => {
        if (res && res.length > 0) {
          state.bannerInfo = res[0]
          state.bannerImg = res[0].pPath
        }
      })
    }
    const handleFinish = () => {
      formRef.value
        .validate()
        .then(() => {
          proxy.$api.addGuestNeed(state.formState).then(res => {
            if (res.code === 0) {
              proxy.$message.success('提交成功')
              formRef.value.resetFields()
            } else {
              proxy.$message.error('res.msg')
            }
          })
        })
        .catch(error => {
          console.log('error', error)
        })
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
      formRef,
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
        border-radius: 1.25rem;
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
    textarea {
      height: 11.25rem !important;
    }
    .ant-input {
      border-radius: 0;
      height: 3.5rem;
      font-size: 1.25rem;
      line-height: 1.875rem;
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
