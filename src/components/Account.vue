<template id="account">
<!-- 账号页面 -->
    <div>
      <div class="play_top2">
        <img src="src/assets/img/41.png" class="play_top_back"  @click="back"/>
        <div class="play_top_anniu">
          <a href="##" :class="index == 0 ? 'play_top_anniu1' : ''" @click="dian">我的</a>
          <a href="##" :class="index == 1 ? 'play_top_anniu1' : ''" @click="dians">设置</a>
        </div>
        <div class="play_boxx">
            <div class="swiper">
              <div class="swiper-wrapper">
                  <div class="swiper-slide" style="height:113rem;overflow:auto;background-image: linear-gradient(rgb(246 224 182), rgb(255, 253, 223), rgb(249, 244, 171))">
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
                      <span class="swiper1_bg3_box1" @click="shopCar">
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
                          <div class="swiper1_bg4_con_txt_box" v-for="(k,index) in accountList" :key="index" @click="jumpPage(k.id)">
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
                  <div class="swiper-slide" style="height:113rem;overflow:auto;background:#eee;">
                    <div class="accountLogin1">
                      <p class="accountLogin1_tit">
                        我的信息
                      </p>
                      <van-cell-group>
                        <van-cell title="账号与安全" is-link @click="security"/>
                        <van-cell title="隐私管理" is-link to="/account/admin/privacyManage"/>
                        <van-cell title="收听偏好设置" is-link  to="/account/admin/listenLike"/>
                      </van-cell-group>
                    </div>
                    <div class="accountLogin1">
                      <p class="accountLogin1_tit">
                        播放下载设置
                      </p>
                      <van-cell-group>
                        <van-cell title="音质选择" is-link />
                        <van-cell center title="记住上次播放进度">
                          <template #right-icon>
                            <van-switch v-model="checked1" size="16" />
                          </template>
                        </van-cell>
                        <van-cell center title="被其他应用中断后继续播放">
                          <template #right-icon>
                            <van-switch v-model="checked2" size="16" />
                          </template>
                        </van-cell>
                        <van-cell center title="禁止部分蓝牙设备连接后自动播放">
                          <template #right-icon>
                            <van-switch v-model="checked3" size="16" />
                          </template>
                        </van-cell>
                        <van-cell center title="允许非WIFI网络下载">
                          <template #right-icon>
                            <van-switch v-model="checked4" size="16" />
                          </template>
                        </van-cell>
                        <van-cell center title="哄睡模式" label="收听儿童分类节目时用“哄睡模式”代替“定时关闭”">
                          <template #right-icon>
                            <van-switch v-model="checked5" size="16" />
                          </template>
                        </van-cell>
                      </van-cell-group>
                    </div>
                    <div class="accountLogin1">
                      <p class="accountLogin1_tit">
                        关于
                      </p>
                      <van-cell-group>
                        <van-cell title="检查更新" is-link />
                        <van-cell title="隐私政策" is-link />
                        <van-cell title="隐私政策摘要" is-link />
                        <van-cell title="儿童隐私政策" is-link />
                        <van-cell title="关于有声读物" is-link />
                      </van-cell-group>
                    </div>
                    <div class="accountLogin2">
                      <button @click="remoteLogin">退出登录</button>
                    </div>
                  </div>
              </div>
            </div>
        </div>
    </div>
    </div>
</template>
<style lang="less" scoped>
    @import url(../assets/css/demo01.css);
    @import url(../assets/css/account.css);
    @import url(../assets/css/homepage.css);
    
    /deep/ .van-switch--on{
      background-color: #ffa600;
    }
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
        checked1:true,
        checked2:false,
        checked3:true,
        checked4:false,
        checked5:false,
      };
    },
    methods: {
      getData(){
            var _this = this;
            Test1().then(function(res){
                _this.accountList = res.data.accountLists
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
      },
      jumpPage(id){
        this.$router.push({
            path:'/account/shopdetail',
            query:{
                detail:id,
            },
        })
      },
      shopCar(){
        this.$router.push("/account/shopCar")
      },
      remoteLogin(){
        localStorage.removeItem("username")
        localStorage.removeItem("password")
        this.$router.push('/login')
      },
      security(){

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
    created(){
      // 判断用户是否登录
      if(!localStorage.getItem("username") && !localStorage.getItem("password")){
          this.$router.push('/login')
      }
    }
  };
</script>