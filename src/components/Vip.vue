<template>
    <div class="music">
        <div class="music_1">
        <img src="src/assets/img/ia_100000000583.jpg" class="find_cont2">
        <div class="find_cont3_title">
            <span class="find_cont3_title_span1">08</span>
            <span class="find_cont3_title_span2">NOV</span>
            <span class="find_cont3_title_span3">周一</span>
            <span class="find_cont3_title_span4">更多歌单   ></span>
        </div> 
     <div class="find_cont3"> 
            <div class="find_cont31" v-for="(k,index) in arrList13" :key="index">
                <router-link :to="'/find/detial1/' + k.id + k.play" class="mu_router_link">
                <img :src="k.img"  class="find_cont31_img">
                <p class="find_cont31_p1">
                    <img src="src/assets/img/play3.png" class="find_cont31_p1_span"/>
                    <span style="float:left">{{k.play}}</span>
                    
                </p>
                <p class="find_cont31_p2">{{k.text}}</p>
                  </router-link> 
            </div>
         </div>
          <div class="music_cont4">
              <nav class="music_cont4_nav">
              <router-link to="/homepage/vip/Muany" class="mu_link" style="font-weight:bold;">排行榜</router-link>
              </nav>
              <router-view class="mu_bottom"></router-view>
          </div>
        </div>
    </div>
</template>
<script>
//  import "../assets/js/vue-router_3.0.2.js"
import {Test1} from '../request/api.js'
export default{
    props:["id"],
    data(){
        return{
            arrList13:[]
        }
    },
    mounted(){
        console.log(this.$route)
        this.getData()
        $('.mu_link').click(function(){
            var index=$(this).index()
            $('.mu_link').css("background","#f5f5f5")
            $('.mu_link').eq(index).css("background","#ccc")
        })
    },
    methods:{
       getData(){
        var _this=this;
        Test1().then(function(res){
            // res就是请求成功之后的数据
            _this.arrList13=res.data.data2
            console.log(res.data.data2)
        })
       },
   }
}
</script>
<style>
.music_1{overflow-y: auto;position: absolute;top: 16rem;width: 98%;}
.mu_link{text-decoration: none;color: #333;margin-left:1rem;background: #f5f5f5;border-radius: 0.5rem;font-size: 2.5rem;}
.music_cont4_nav{width: 100%;height: 2rem;}
.mu_router_link{text-decoration: none;}
/* @import url("../assets/css/swiper.min.css");*/
@import url("../assets/css/homepage.css"); 
</style>