<template>
  <div class="search">
    <div class="search_top wow animate__fadeInUp" data-wow-offset="50">
      <p class="title SmileFont">搜索结果</p>
      <div class="search_input">
        <a-input v-model:value="searchName" placeholder="请输入一个关键词" @keydown.enter="search">
          <template #suffix>
            <img class="d_search_icon" src="@/assets/img/search_b.png" alt="" />
          </template>
        </a-input>
      </div>
    </div>
    <div class="search_bottom">
      <p class="resultNum">共 {{ total }} 条搜索结果</p>
      <ul>
        <li v-for="item in dataList" :key="item.id" class="wow animate__fadeInUp" data-wow-offset="50">
          <div class="r_text">
            <p class="title">{{ item.title }}</p>
            <p class="subtitle">类目-{{ item.type }}</p>
          </div>
          <a-button type="link" class="subBtn" @click="linkTo(item)">查看全部</a-button>
        </li>
      </ul>
    </div>
    <div class="moreBtn">
      <a-button type="link" class="btn" @click="more()">查看更多</a-button>
    </div>
  </div>
</template>
<script>
import { getCurrentInstance, nextTick, onMounted, reactive, toRefs } from 'vue'
import { useRoute, useRouter } from 'vue-router'
export default {
  name: 'contact',
  components: {},
  setup() {
    let router = useRouter()
    let route = useRoute()
    const { proxy } = getCurrentInstance()
    const state = reactive({
      searchName: '',
      total: 3,
      dataList: [
        { id: 1, title: '搜索结果相关标题标题标题标题标题', type: '案例' },
        { id: 2, title: '搜索结果相关标题标', type: '案例' },
        { id: 3, title: '搜索结果相关标题标题标题标题标题', type: '案例' },
        { id: 4, title: '搜索结题标题', type: '案例' },
        { id: 5, title: '搜索结果相关标题标题标题标题标题', type: '案例' },
        { id: 6, title: '搜索结果相关标题标题标题标题标题', type: '案例' }
      ]
    })

    onMounted(async () => {
      nextTick(() => {
        var wow = new proxy.$wow.WOW({ boxClass: 'wow', animateClass: 'animated', offset: 0, mobile: true, live: true, callback: function () {}, scrollContainer: null, resetAnimation: true })
        wow.init()
      })
      state.searchName = route.query.search || ''
      // search()
    })
    const search = () => {
      // proxy.$api.productListByCate({searchName: state.searchName}).then(res => {
      //   state.dataList = res
      // })
    }
    const linkTo = function (e) {
      console.log(e)
    }

    return {
      ...toRefs(state),
      linkTo,
      search
    }
  }
}
</script>
<style lang="less">
.search {
  .search_top {
    padding: 4.687rem 15rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #232323;
    background: #fbfbfb;
    .title {
      font-size: 2.5rem;
      line-height: 3.75rem;
      font-size: 2.5rem;
    }
    .search_input {
      font-size: 1.125rem;
      width: 30rem;
      height: 3.125rem;
      line-height: 3.125rem;
      .ant-input-affix-wrapper {
        border: 1px solid #999 !important;
        border-radius: 25px;
        box-shadow: none;
        &:focus {
          box-shadow: none;
        }
      }
      .d_search_icon {
        width: 1.125rem;
      }
    }
  }
  .search_bottom {
    padding: 3.75rem 15rem 3.75rem;
    font-size: 1.5rem;
    color: #232323;
    .resultNum {
      font-size: 1rem;
      line-height: 1rem;
      border-bottom: 1px solid #cfcfcf;
      padding-bottom: 20px;
    }
    ul li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.875rem 0;
      width: 100%;
      border-bottom: 1px solid #cfcfcf;
      .r_text {
        width: 80%;
        .title {
          line-height: 2.25rem;
          margin-bottom: 0.625rem;
          width: 70%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .subtitle {
          font-size: 1.125rem;
          color: #666;
          line-height: 1.125rem;
        }
      }
      .subBtn {
        width: 11.25rem;
        height: 3.5rem;
        border-radius: 2.25rem;
        border: 1px solid #ff8a2c;
        padding: 1rem 3.625rem;
        font-size: 1rem;
        line-height: 1.5rem;
        color: #ff8a2c;
      }
    }
  }
  .moreBtn {
    text-align: center;
    padding-bottom: 6.25rem;
    .btn {
      width: 13.75rem;
      height: 4.5rem;
      border-radius: 2.25rem;
      border: 1px solid #ff8a2c;
      padding: 1rem 3.625rem;
      font-size: 1.5rem;
      line-height: 2.25rem;
      color: #ff8a2c;
    }
  }
}
</style>
