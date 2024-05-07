<template>
  <div id="shopify-section-footer" class="shopify-section">
    <section class="footer">
      <div class="desktop-only">
        <div class="footer-left">
          <div class="f_block">
            <img src="@/assets/img/logo_yellow.png" alt="" class="f_logo">
            <img src="@/assets/img/footer/mark_1.png" alt="" class="f_mark">
            <img src="@/assets/img/footer/mark_2.png" alt="" class="f_mark2">
          </div>
        </div>
        <div class="footer-right">
            <div class="footer_item2">
                <div class="fi2_left">
                    <div class="fi2_item">
                        <div class="ft_title"><a href="/#/products">Product</a></div>
                        <div class="fi2_text">
                            <div v-for="item in mpType" :key="item.cateId"><a :href="`/#/products?id=${item.cateId}`" >&gt; {{item.cateName || ''}}</a></div>
                        </div>
                    </div>
                    <div class="fi2_item">
                        <div class="ft_title"><a href="/#/wholesale">Wholesaler</a></div>
                    </div>
                    <div class="fi2_item">
                        <div class="ft_title"><a href="/#/about">About Us</a></div>
                        <div class="fi2_text">
                            <div><a href="/#/contact">&gt; Contact Us</a></div>
                            <div><a href="/#/about">&gt; Why Ehonos</a></div>
                        </div>
                    </div>
                </div>
                <div class="fi2_right">
                    <div class="ft_title">Follow Us</div>
                    <div class="fir2_text">
                      <div class="fir3_right">
                          <a class="icon_meida icon_face" href="#">
                          </a>
                          <a class="icon_meida icon_ins" href="#">
                          </a>
                          <a class="icon_meida icon_line" href="#">
                          </a>
                          <a class="icon_meida icon_youtube" href="#">
                          </a>
                      </div>
                    </div>
                    <div class="footerFlag">COPYRIGHT © 2024 EHONOS ALL RIGHTS RESERVED.</div>
                </div>
            </div>
        </div>
      </div>
      <div class="mobile-only">
        <div class="footer-top">
          <div class="f_t_content">
            <div class="f_block">
              <div>
                  <img src="@/assets/img/logo_yellow.png" alt="" class="f_logo">
                  <img src="@/assets/img/footer/mark_1.png" alt="" class="f_mark">
              </div>
              <img src="@/assets/img/footer/mark_2.png" alt="" class="f_mark2">
            </div>
            <div>
              <div class="Fnav" style="border-top:none">
                  <div>Follow Us</div>
              </div>
              <div class="fir3_right">
                  <a class="icon_meida icon_face_y" href="#">
                  </a>
                  <a class="icon_meida icon_ins_y" href="#">
                  </a>
                  <a class="icon_meida icon_line_y" href="#">
                  </a>
                  <a class="icon_meida icon_youtube_y" href="#">
                  </a>
                  <!-- <a class="icon_meida icon_face_y" target="_blank" href="https://www.facebook.com">
                  </a>
                  <a class="icon_meida icon_ins_y" target="_blank" href="https://www.instagram.com">
                  </a>
                  <a class="icon_meida icon_line_y" target="_blank" href="https://line.me/R/ti/p">
                  </a>
                  <a class="icon_meida icon_youtube_y" target="_blank" href="https://www.youtube.com">
                  </a> -->
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="Fnav">
            <a-collapse ghost accordion>
              <a-collapse-panel class="white_Mnav" header="PRODUCTS" :show-arrow="false">
                <template #extra><img class="headerExtra" src="@/assets/img/footer/open.png" alt=""> </template>
                <div class="Mnav_link">
                  <a :href="`/#/products?id=${item.cateId}`" v-for="item in mpType" :key="item.cateId">{{item.cateName || ''}}</a>
                </div>
              </a-collapse-panel>
            </a-collapse>
          </div>
          <div class="Fnav">
            <a href="/#/wholesale">WHOLESALE</a>
          </div>
          <div class="Fnav">
            <a-collapse ghost accordion>
              <a-collapse-panel class="white_Mnav" header="ABOUT US" :show-arrow="false">
                <template #extra><img class="headerExtra" src="@/assets/img/footer/open.png" alt=""> </template>
                <div class="Mnav_link">
                  <a href="/#/contact">Contact Us</a>
                  <a href="/#/about">Why Ehonos</a>
                </div>
              </a-collapse-panel>
            </a-collapse>
          </div>
          <!-- <div class="Fnav">
            <a href="/#/about">ABOUT US</a>
            <div class="Fnav_link">
              <a href="/#/contact">Contact Us</a>
              <a href="/#/about">Why Ehonos</a>
            </div>
          </div> -->
          <!-- <div class="Fnav">
            <a href="/#/products">PRODUCTS</a>
            <div class="Fnav_link">
              <a href="/#/products?type=1">New Arrivais</a>
              <a href="/#/products?type=2">Disposable Series</a>
              <a href="/#/products?type=3">Pod Series</a>
              <a href="/#/products?type=4">E-liquid</a>
              <a href="/#/products?type=5">Other</a>
            </div>
          </div> -->
          <div class="footerFlag">COPYRIGHT © 2024 EHONOS ALL RIGHTS RESERVED.</div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import "@/assets/style/footer.less"
import { getCurrentInstance, onMounted, reactive, ref, toRefs, watch } from 'vue';
import { PlusOutlined } from "@ant-design/icons-vue";
import { Empty } from "ant-design-vue";
import Storage from '@/utils/storage';
export default {
  name: "Footer",
  components: {
    PlusOutlined
  },
  setup() {
    const { proxy } = getCurrentInstance();
    const state = reactive({
      mpType:[
        { cateId: 2, cateName: 'New Arrivals'},
        { cateId: 3, cateName: 'Disposable Series'},
        { cateId: 4, cateName: 'Pod Series'},
        { cateId: 5, cateName: 'E-liquid'},
        { cateId: 6, cateName: 'Other'},
      ],
    })
    onMounted(async () => {
      // getCategoryList()
    })
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
    //   Storage.setItem('navActive', e.path)
    // }
    return {
      Empty,
      ...toRefs(state),
      // linkTo,
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
