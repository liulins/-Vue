<template id="account">
<!-- 账号页面 -->
    <div>
      <div class="play_top2">
        <img src="src/assets/img/38.png" class="play_top_back"  @click="back"/>
        <div class="play_top_anniu">
          <a href="##" :class="index == 0 ? 'play_top_anniu1' : ''" @click="dian">我的</a>
          <a href="##" :class="index == 1 ? 'play_top_anniu1' : ''" @click="dians">消息</a>
        </div>
        <div class="play_boxx">
            <div class="swiper">
              <div class="swiper-wrapper">
                  <div class="swiper-slide" style="height:106rem;overflow:auto;background-image: linear-gradient(rgb(243 236 133), rgb(255 253 223), rgb(249 244 171))">
                    <div class="swiper1_bg">
                      <p class="swiper1_bg_p1">
                        <span class="swiper1_bg_p1_imgs">
                          <img src="src/assets/img/ia_100000003000.webp"/>
                        </span>
                        <span class="swiper1_bg_p1_txt1">美少女战士 </span>
                        <span class="swiper1_bg_p1_txt2">详情 ></span>
                      </p>
                      <p class="swiper1_bg_p2">
                        <span class="swiper1_bg_p2_txt1">
                          <span class="swiper1_bg_p2_txt1_1">314</span>
                          <span class="swiper1_bg_p2_txt1_1">粉丝</span>
                        </span>
                      </p>
                      <p class="swiper1_bg_p2">
                        <span class="swiper1_bg_p2_txt1">
                          <span class="swiper1_bg_p2_txt1_1">1523</span>
                          <span class="swiper1_bg_p2_txt1_1">关注</span>
                        </span>
                      </p>
                      <p class="swiper1_bg_p2">
                        <span class="swiper1_bg_p2_txt1">
                          <span class="swiper1_bg_p2_txt1_1">0</span>
                          <span class="swiper1_bg_p2_txt1_1">作品</span>
                        </span>
                      </p>
                      <p class="swiper1_bg_p3">
                        <img src="src/assets/img/相机.png"/>
                        <span class="swiper1_bg_p3_txt">录音/直播</span>
                      </p>
                    </div>
                    <div class="swiper1_bg2">
                      <img src="src/assets/img/VIP.png"/>
                      <span class="swiper1_bg2_txt1">VIP首月仅6元</span>
                      <span class="swiper1_bg2_txt2">特邀限时专享 ></span>
                    </div>
                    <div class="swiper1_bg3">
                      <span class="swiper1_bg3_box1">
                        <img src="src/assets/img/订阅.png"/>
                        <span>订阅</span>
                      </span>
                      <span class="swiper1_bg3_box1">
                        <img src="src/assets/img/播放历史.png"/>
                        <span>历史</span>
                      </span>
                      <span class="swiper1_bg3_box1">
                        <img src="src/assets/img/购物车.png"/>
                        <span>购物车</span>
                      </span>
                      <span class="swiper1_bg3_box1">
                        <img src="src/assets/img/下载 (1).png"/>
                        <span>下载</span>
                      </span>
                      <span class="swiper1_bg3_box1">
                        <img src="src/assets/img/喜欢.png"/>
                        <span>喜欢</span>
                      </span>
                    </div>
                    <div class="swiper1_bg4">
                      <p class="swiper1_bg4_title">
                        精品好物
                        <span style="color:rgb(126 122 122);font-size:2rem;">
                          生活好物，尽情选购！
                        </span>
                      </p>
                      <div class="swiper1_bg4_con">
                        <div class="swiper1_bg4_con_tit">
                          <a href="##" class="swiper1_bg4_con_tit1">全部商品</a>
                          <a href="##">居家日用</a>
                          <a href="##">娱乐周边</a>
                        </div>
                        <div class="swiper1_bg4_con_txt">
                          <div class="swiper1_bg4_con_txt_box" v-for="(k,index) in accountList" :key="index">
                            <img :src="k.img"/>
                            <p class="swiper1_bg4_con_txt_box_p1">{{k.title}}</p>
                            <p class="swiper1_bg4_con_txt_box_p2">
                              <span class="swiper1_bg4_con_txt_box_p2_1">{{k.txt}}</span>
                              <span class="swiper1_bg4_con_txt_box_p2_2">{{k.sale}}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>  
                  <div class="swiper-slide" style="height:106rem;overflow:auto;">
                    <div class="play_box2-2">
                      
                      <div class="play_box2_p2">
                        <div class="play_box2_p2_1">
                          <img src="src/assets/img/ia_100000003000.webp" class="play_box2_p2_1_img"/>
                          <p class="play_box2_p2_1_p1">
                            <span class="play_box2_p2_1_p1_span1">美少女战士</span>
                            <span class="play_box2_p2_1_p1_span2">2021-11-16-22:16</span>
                          </p>
                          <p class="play_box2_p2_1_p2">
                            两个性别之间的不理解，好像在这几年愈演愈烈，一不小心就会演变为打拳。
                          </p>
                        </div>
                      </div>
                      <div class="play_box2_p3">
                        <img src="src/assets/img/ia_100000000510.jpg" class="play_box2_p3_img1"/>
                        <img src="src/assets/img/57.png" class="play_box2_p3_img2"/>
                        <input type="text" placeholder="发表图片评论，你就是热评区最靓的仔！" class="play_box2_p3_put1"/>
                        <!-- <button class="play_box2_p3_but">发 送</button> -->
                      </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
    </div>
    </div>
</template>
<style>
    @import url(../assets/css/demo01.css);
    @import url(../assets/css/account.css);
    @import url(../assets/css/homepage.css);
</style>
<script>
      import "../assets/js/swiper.min.js"
      import {Test1} from '../request/api.js'
  export default {
    data() {
      return {
        currentIndex : 0,
        index:0,
        kkl:'',
        accountList:[],
      };
    },
    methods: {
      // anniu(){
      //   console.log(this.activeIndex);
      // },
      getData(){
            var _this = this;
            Test1().then(function(res){
                _this.accountList = res.data.accountLists
                console.log(_this.accountList)
            })
        },
      dian(){
        this.index = 0
        this.kkl.slideTo(0,300,false)
      },
      dians(){
        this.index = 1
        this.kkl.slideTo(1,300,false)
      },
      // 返回上一级
        back(){
            this.$router.go(-1)
        }
    },
    mounted() {
      this.getData();
      var _this = this;
      var myswiper = new Swiper('.swiper', {
          pagination: '.swiper-pagination',
          // 点击按钮时对应盒子
          paginationClickable: true,
          // 前进按钮的css选择器或HTML元素。
          nextButton: '.swiper-button-next',
          // 后退按钮的css选择器或HTML元素
          prevButton: '.swiper-button-prev',
          // 两盒子之间的距离
          spaceBetween: 30,
          onSlideChangeStart: function (swiper) {
          //         console.log(swiper.activeIndex);
                  _this.index = swiper.activeIndex; 
                  console.log(_this.index)
           }
      });
      this.kkl = myswiper;
    },
  };
</script>