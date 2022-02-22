<template>
  <div>
    <!-- 播放页面 -->
    <div class="play_top">
        <img src="src/assets/img/38.png" class="play_top_back"  @click="back"/>
        <div class="play_top_anniu">
          <a href="##" :class="index == 0 ? 'play_top_anniu1' : ''" @click="dian">声音</a>
          <a href="##" :class="index == 1 ? 'play_top_anniu1' : ''" @click="dians">评论</a>
        </div>
        <div class="play_box">
            <div class="swiper">
              <div class="swiper-wrapper">
                  <div class="swiper-slide" style="height:106rem;overflow:auto;background-image: linear-gradient(to bottom,#050542,rgb(71 71 147),#000056);">
                    <!-- 音乐播放 -->
                    <div class="play_box1">
                      <img src="src/assets/img/ia_100000018.webp" class="play_box1_img1"/>
                      <img src="src/assets/img/48.png" class="play_box1_img2"/>
                      <span class="play_box1_span1">461</span>
                    </div>
                    <p class="play_p1">
                      blackEYE004.特别节目_对于男人，我们不理解（girls'time!）
                    </p>
                    <p class="play_p2">
                      <span class="play_p2_span1">粉红救兵 ></span>
                      <span class="play_p2_span2">免费订阅</span>
                    </p>
                    <p class="play_p3">
                      <img src="src/assets/img/52.png" class="play_p3_img1"/>
                      <img src="src/assets/img/53.png" class="play_p3_img1"/>
                      <img src="src/assets/img/54.png" class="play_p3_img1"/>
                      <img src="src/assets/img/55.png" class="play_p3_img1"/>
                      <img src="src/assets/img/56.png" class="play_p3_img1" style="margin-right:0;"/>
                    </p>
                    <p class="play_p4">
                      <audio src="src/assets/audio/01.mp3" class="play_p4_music1" controls></audio>
                    </p>
                  </div>
                  <div class="swiper-slide" style="height:106rem;overflow:auto;">
                    <div class="play_box2">
                      <p class="play_box2_p1">
                        <span class="play_box2_p1_span1">评论区()</span>
                        <span class="play_box2_p1_span2">推荐 | 最新</span>
                      </p>
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
  @import url(../assets/css/homepage.css);
</style>
<script>
import "../assets/js/swiper.min.js"
  export default {
    data() {
      return {
        currentIndex : 0,
        index:0,
        kkl:'',
      };
    },
    methods: {
      // anniu(){
      //   console.log(this.activeIndex);
      // },
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