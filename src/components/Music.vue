<template>
    <div class="music">
        <div class="music_1">
         <div class="nav_right">
                <span class="nav_top_logo1"></span>
                <span class="nav_top_logo2"></span>
                <span class="nav_top_logo3"></span>
                </div>
            <div class="find_cont1">
            <router-link to="/find/music/mustorehouse">
            <div>
                <span class="find_cont1_span1"></span>
                <p>乐库</p>
            </div>
            </router-link>
           <router-link to="/find/music/muyourlike">
           <div>
                <span class="find_cont1_span2"></span>
                <p>猜你喜欢</p>
           </div>
           </router-link>
            <router-link to="/find/music/murecommend">
            <div>
                <span class="find_cont1_span3"></span>
                <p>每日推荐</p>
            </div>
            </router-link>
            <router-link to="/find/music/murank">
            <div>
                <span class="find_cont1_span4"></span>
                <p>排行榜</p>
            </div>
            </router-link>
            <router-link to="/find/music/mumore">
             <div>
                <span class="find_cont1_span5"></span>
                <p>更多</p>
            </div>
            </router-link>
        </div>
        <img src="src/assets/img/20211108220006.jpg" class="find_cont2">
        <div class="find_cont3_title">
            <span class="find_cont3_title_span1">08</span>
            <span class="find_cont3_title_span2">NOV</span>
            <span class="find_cont3_title_span3">周一</span>
            <span class="find_cont3_title_span4">更多歌单   ></span>
        </div> 
     <div class="find_cont3"> 
            <div class="find_cont31" v-for="(k,index) in arrList" :key="index">
                <router-link :to="'/find/detial1/' + k.id + k.play" class="mu_router_link">
                <img :src="k.img"  class="find_cont31_img">
                <p class="find_cont31_p1">
                    <span></span>{{k.play}}
                </p>
                <p class="find_cont31_p2">{{k.text}}</p>
                  </router-link> 
            </div>
         </div>
          <div class="music_cont4">
              <nav class="music_cont4_nav">
              <router-link to="/Find/Music/Muany" class="mu_link">全部</router-link>
              <router-link to="/Find/Music/Munewsong" class="mu_link">新歌</router-link>
              <router-link to="/Find/Music/Mulive" class="mu_link">直播</router-link>
              <router-link to="/Find/Music/Musongcard" class="mu_link">唱片</router-link>
              <router-link to="/Find/Music/Mudingling" class="mu_link">铃声</router-link>
              <router-link to="/Find/Music/Mublindbox" class="mu_link">潮玩盲盒</router-link>
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
            arrList:[]
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
            _this.arrList=res.data.data2
            console.log(res.data.data2)
        })
       },
   }
}
</script>
<style>
.music_1{overflow-y: auto;}
.mu_link{text-decoration: none;color: #333;margin-left:1rem;background: #f5f5f5;border-radius: 0.5rem;}
.music_cont4_nav{width: 100%;height: 2rem;}
.mu_router_link{text-decoration: none;}
/* @import url("../assets/css/swiper.min.css");
@import url("../assets/css/find.css"); */
</style>