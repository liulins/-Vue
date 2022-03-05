<template id="ruzhan">
<!-- 入站必听 -->
    <div class="ruzhan" >
        入站
        <div class="ruzhan_top">
            <img src="src/assets/img/36.jpg" class="ruzhan_top_bg"/>
            <div class="ruzhan_top_bgs"></div>
        </div>
        <!-- 循环数组盒子 -->
        <div class="ruzhan_top_box1" v-for="(k,index) in arrList4" :key="index">
            <p class="ruzhan_top_box1_p1">
                <img src="src/assets/img/37.png" class="ruzhan_top_box1_p1_img1"/>
                <span class="ruzhan_top_box1_p1_span">{{k.tit}}</span>
                <a href="##" class="ruzhan_top_box1_p1_a">
                    更多  >
                </a>
            </p>
            <div class="ruzhan_top_box1_1" @click="detail(k.id)">
                <img :src="k.img1" class="ruzhan_top_box1_1_img"/>
                <p class="ruzhan_top_box1_1_p">
                    {{k.txt1}}
                </p>
            </div>
            <div class="ruzhan_top_box1_1">
                <img :src="k.img2" class="ruzhan_top_box1_1_img"/>
                <p class="ruzhan_top_box1_1_p">
                    {{k.txt2}}
                </p>
            </div>
            <div class="ruzhan_top_box1_1">
                <img :src="k.img3" class="ruzhan_top_box1_1_img"/>
                <p class="ruzhan_top_box1_1_p">
                    {{k.txt3}}
                </p>
            </div>
        </div>
        <!-- 顶部导航 -->
        <div class="ruzhan_top_nav">
            <img src="src/assets/img/41.png" class="ruzhan_top_nav_img1" @click="back"/>
            <span class="ruzhan_top_nav_span">入站必听</span>
            <img src="src/assets/img/42.png" class="ruzhan_top_nav_img2"/>
        </div>
        <!-- 底部导航 -->
        <div class="ruzhan_bottom_nav">
            <span class="ruzhan_bottom_nav_box">
                <img src="src/assets/img/40.png" class="ruzhan_bottom_nav_box1"/>
            </span>
        </div>
    </div>
</template>
<style>
@import url(../assets/css/recommend.css);
</style>
<script>
$(function(){
    $(".home").on("scroll",function(){
        var topp = $(".home").scrollTop();
        // console.log(topp);
        if(topp>20){
            $(".ruzhan_top_nav").css("background","wheat")
            $(".ruzhan_top_nav_span").css("opacity","1")
            // $(".ruzhan_top_nav").animate({background:"white"},2000)
        }
        // $(".ruzhan_top_nav").append("<span class='ruzhan_top_nav_span'>入站必听</span>")
        if(topp<20){
             $(".ruzhan_top_nav").css("background","transparent")
             $(".ruzhan_top_nav_span").css("opacity","0")
        }
    //    console.log(1)
    })
})
import {Test1} from '../request/api.js'
export default {
    data(){
        return{
            arrList4:[]
        }
    },
    mounted() {
        this.getData()
    },
    methods: {
        // 获取数据
        getData(){
            var _this = this;
            Test1().then(function(res){
                _this.arrList4 = res.data.ruzhanList1
                // console.log(_this.arrList1)
            })
        },
        // 滚动条事件
        handleScroll(e){
            console.log(1)
        },
        // 返回上一级
        back(){
            this.$router.go(-1)
        },
        // 获取详情页
        detail(id){
            this.$router.push({
                path:'/recommend/ruzhan',
                query:{
                    detail:id,
                },
            })
        }
    },
}
</script>