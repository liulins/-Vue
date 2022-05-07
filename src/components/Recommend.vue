<template id="recommend">
    <div class="recommend">
        <div class="recommend_box1">
          <ul>
            <router-link to="/homepage/recommend/ruzhan" class="recommend_box1_li">
              <div class="recommend_box1_lis">
                <img src="src/assets/img/10.png" class="recommend_box1_img1"/>
              </div>
              <p class="recommend_box1_txt">入站必听</p>
            </router-link>
            <router-link to="/homepage/recommend/suibian" class="recommend_box1_li">
              <div class="recommend_box1_lis">
                <img src="src/assets/img/11.png" class="recommend_box1_img1"/>
              </div>
              <p class="recommend_box1_txt">随便听</p>
            </router-link>
            <router-link to="/homepage/recommend/zhumian" class="recommend_box1_li">
              <div class="recommend_box1_lis">
                <img src="src/assets/img/12.png" class="recommend_box1_img1"/>
              </div>
              <p class="recommend_box1_txt">助眠专注</p>
            </router-link>
            <router-link to="/homepage/recommend/ertong" class="recommend_box1_li">
              <div class="recommend_box1_lis">
                <img src="src/assets/img/13.png" class="recommend_box1_img1"/>
              </div>
              <p class="recommend_box1_txt">儿童故事</p>
            </router-link>
            <router-link to="/homepage/recommend/tingyinyue" class="recommend_box1_li" style="margin-right:0">
              <div class="recommend_box1_lis">
                <img src="src/assets/img/14.png" class="recommend_box1_img1"/>
              </div>
              <p class="recommend_box1_txt">听音乐</p>
            </router-link>
            <router-link to="/homepage/recommend/mianfei" class="recommend_box1_li">
              <div class="recommend_box1_lis">
                <img src="src/assets/img/15.png" class="recommend_box1_img1"/>
              </div>
              <p class="recommend_box1_txt">免费小说</p>
            </router-link>
            <router-link to="/homepage/recommend/xiangsheng" class="recommend_box1_li">
              <div class="recommend_box1_lis">
                <img src="src/assets/img/16.png" class="recommend_box1_img1"/>
              </div>
              <p class="recommend_box1_txt">相声评书</p>
            </router-link>
            <router-link to="/homepage/recommend/lishigushi" class="recommend_box1_li">
              <div class="recommend_box1_lis">
                <img src="src/assets/img/17.png" class="recommend_box1_img1"/>
              </div>
              <p class="recommend_box1_txt">历史故事</p>
            </router-link>
            <router-link to="/homepage/recommend/xueyingyu" class="recommend_box1_li">
              <div class="recommend_box1_lis">
                <img src="src/assets/img/18.png" class="recommend_box1_img1"/>
              </div>
              <p class="recommend_box1_txt">学英语</p>
            </router-link>

            <router-link to="/homepage/recommend/quanbu" class="recommend_box1_li" style="margin-right:0">
              <div class="recommend_box1_lis">
                <img src="src/assets/img/19.png" class="recommend_box1_img1"/>
              </div>
              <p class="recommend_box1_txt">全部分类</p>
            </router-link>
          </ul>
        </div>
        <!-- 路由出口 -->
        <router-view class="recommend_view"></router-view>
        <div class="recommend_box2">
          <div class="recommend_box2_tit">
            <p class="recommend_box2_p">
              <span class="recommend_box2_tit1">猜你喜欢</span>
              <span>
                <span class="recommend_box2_txt" @click="changeData">换一批</span>
                <img src="src/assets/img/21.png" class="recommend_box2_img1" @click="changeData"/>
              </span>
            </p>
            <DataList1View class="recommend_datalist1" :arrlists = newList></DataList1View>
          </div>
        </div>
        
    </div>
</template>
<style>
  @import url(../assets/css/recommend.css);
</style>
<script>
import {Test1} from '../request/api.js'
import DataList1View from '../components/DataList1'
export default {
  data() {
    return{
      arrlists:[],
      // 处理后的list
      newList:[],
      // 截取第几组的开始参数
      timeStart:0,
      // 截取第几组的结束参数
      timeEnd:1,
      // 默认为0组
      group:0,
      // 一页展示list数量
      num:10,
      // 点击的次数
      clickNum:0,
    }
  },
  components:{
    DataList1View
  },
  mounted(){
    this.getData()
    this.renderR()
  },
  created(){
    // 判断用户是否登录
    if(!localStorage.getItem("username") && !localStorage.getItem("password")){
        this.$router.push('/login')
    }

    this.renderR()
    let this_ = this
    let timer = setTimeout(function(){
      this_.changeData()
    },1000)
  },
  methods:{
    // 获取总数据
    getData(){
      var _this = this;
      Test1().then(function(res) {
          // res就是请求成功之后的到的数据
          _this.arrlists = res.data.booklist1
          this.renderR();
          
      })
    },
    changeData(){
      $(".recommend_box2_img1").css("animation","xuanzhuan 0.5s forwards running");
      setTimeout(function(){
        $(".recommend_box2_img1").css("animation","none")
      },1500)
      if(this.arrlists.length >4 && this.arrlists.length > this.num){
        // 点击的时候获取分为几组
        this.listlen()
        // 每点击一次记录点击次数
        this.autoIncre();
        this.clear();
        this.renderR();
      }
    },
    // 计算数据的长度，共分为几组，如果不能除尽的话则加1
    listlen(){
      var len = this.arrlists.length;
      this.group = len / this.num;
      if(len % this.num != 0){
        this.group = parseInt(this.group) + 1;
      }
    },
    // 计算将点击次数哥开始截取的参数清空，如果点击此时大于当前数据的组数，则开始重新计算
    clear(){
      if(this.clickNum > this.group -1){
        this.timeStart = 0;
        this.timeEnd = 1;
        this.clickNum = 0;
      }
    },
    // 每点击一次，记录次数
    autoIncre(){
      this.clickNum ++;
      this.timeStart ++;
      this.timeEnd ++;
    },
    // 截取当前截取分组的数据
    renderR(){
      this.newList = this.arrlists.slice(
        this.num * this.timeStart,
        this.num * this.timeEnd
      );
      console.log(this.newList);
    },
    
  },

}
</script>