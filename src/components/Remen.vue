<template id="remen">
<!-- 直播--热门 -->
    <div class="remen">
        <!-- 六组数据循环 -->
        <ul id="xunhuan1">
            <li class="tuijian_video_box1" v-for="(k,index) in arrList1" :key="index" @click="jump(k.id)">
                <img :src="k.img" class="tuijian_video_box1_img1"/>
                <div class="tuijian_video_box1_mes">{{k.title}}</div>
                <p class="tuijian_video_box1_p1">{{k.txt}}</p>
                <p class="tuijian_video_box1_p2">
                    <img :src="k.img2" class="tuijian_video_box1_img2"/>
                    <span class="tuijian_video_box1_span1">{{k.p1}}</span>
                    <img src="src/assets/img/24.gif" class="tuijian_video_box1_img3"/>
                    <span class="tuijian_video_box1_span2">{{k.num}}</span>
                </p>
            </li>
        </ul>
        <!-- 轮播1 -->
        <div class="remen_lunbo1">
            <div class="swiper-container1" style="width:100%;height:100%;">
                <div class="swiper-wrapper" style="width:100%;height:100%;">
                    <!-- 小盒子 -->
                    <div class="swiper-slide" style="width:100%;height:100%;">
                        <!-- Slide -->
                        <img src="src/assets/img/ia_100000001.webp" class="remen_lunbo1_img1"/>
                    </div>
                    <div class="swiper-slide">
                        <img src="src/assets/img/ia_100000002.webp" class="remen_lunbo1_img1"/>
                    </div>
                    <div class="swiper-slide">
                        <img src="src/assets/img/ia_100000003.webp" class="remen_lunbo1_img1"/>
                    </div>
                    <div class="swiper-slide">
                        <img src="src/assets/img/ia_100000004.webp" class="remen_lunbo1_img1"/>
                    </div>
                    <div class="swiper-slide">
                        <img src="src/assets/img/ia_100000005.webp" class="remen_lunbo1_img1"/>
                    </div>
                    <div class="swiper-slide">
                        <img src="src/assets/img/ia_100000006.webp" class="remen_lunbo1_img1"/>
                    </div>
                </div>
                <!-- 按钮 -->
                <div class="swiper-pagination"></div>
            </div>
        </div>
        <!-- 4组循环 -->
        <ul>
            <li class="tuijian_video_box1" v-for="(k,index) in arrList2" :key="index" @click="jump(k.id)">
                <img :src="k.img" class="tuijian_video_box1_img1" />
                <div class="tuijian_video_box1_mes">{{k.title}}</div>
                <p class="tuijian_video_box1_p1">{{k.txt}}</p>
                <p class="tuijian_video_box1_p2">
                    <img :src="k.img2" class="tuijian_video_box1_img2"/>
                    <span class="tuijian_video_box1_span1">{{k.p1}}</span>
                    <img src="src/assets/img/24.gif" class="tuijian_video_box1_img3"/>
                    <span class="tuijian_video_box1_span2">{{k.num}}</span>
                </p>
            </li>
        </ul>
        <!-- 聊天室 -->
        <div class="remen_liaotian">
            <P class="remen_liaotian_p1">
               <span>聊天室</span>
               <a href="/homepage/live/liaotian/" class="remen_liaotian_a1">
                   更多
                   <img src="src/assets/img/34.png" class="remen_liaotian_img1"/>
               </a>
            </P>
            <div class="remen_liaotian_box1">
                <div class="remen_liaotian_box1_l left_green">
                    <p class="remen_liaotian_box1_l_p1">
                        你的宝藏男孩在这里
                    </p>
                    <img class="remen_liaotian_box1_l_p11" src="src/assets/img/35.png">
                    <img class="remen_liaotian_box1_l_p2" src="src/assets/img/ia_100000002971.webp"/>
                    <img src="src/assets/img/24.gif" class="remen_liaotian_box1_l_p3"/>
                    <span class="remen_liaotian_box1_l_p4">1974</span>
                </div>
                <div class="remen_liaotian_box1_l right_pink">
                    <p class="remen_liaotian_box1_l_p1" style="color: rgb(219, 106, 68);width:95%">
                        悸动❤ 揉进你怀里
                    </p>
                    <img class="remen_liaotian_box1_l_p2" src="src/assets/img/ia_100000003000.webp"/>
                    <img src="src/assets/img/24.gif" class="remen_liaotian_box1_l_p3"/>
                    <span class="remen_liaotian_box1_l_p4">2840</span>
                </div>
            </div>
            <div class="remen_liaotian_box2">
                <div class="remen_liaotian_box2_1">
                    <p class="remen_liaotian_box2_1p">
                        锦鲤❤有幸遇见你
                    </p>
                    <img src="src/assets/img/ia_100000002999.webp" class="remen_liaotian_box2_1img"/>
                    <p class="remen_liaotian_box2_1p2">
                        <img src="src/assets/img/24.gif" class="remen_liaotian_box2_1img2"/>
                        <span class="remen_liaotian_box2_1p3">1030</span>
                    </p>
                </div>
                <div class="remen_liaotian_box2_1">
                    <p class="remen_liaotian_box2_1p">
                        迪士尼-招小朋友
                    </p>
                    <img src="src/assets/img/ia_100000003998.webp" class="remen_liaotian_box2_1img"/>
                    <p class="remen_liaotian_box2_1p2">
                        <img src="src/assets/img/24.gif" class="remen_liaotian_box2_1img2"/>
                        <span class="remen_liaotian_box2_1p3">45079</span>
                    </p>
                </div>
                <div class="remen_liaotian_box2_1" style="border-right:0">
                    <p class="remen_liaotian_box2_1p">
                        秀色可餐
                    </p>
                    <img src="src/assets/img/ia_100000003995.webp" class="remen_liaotian_box2_1img"/>
                    <p class="remen_liaotian_box2_1p2">
                        <img src="src/assets/img/24.gif" class="remen_liaotian_box2_1img2"/>
                        <span class="remen_liaotian_box2_1p3">2840</span>
                    </p>
                </div>
            </div>
        </div>
        <!-- 轮播2 -->
        <div class="remen_lunbo2">
            <div class="swiper-container3">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <p>
                            <span class="remen_lunbo2_p1">主播榜</span>
                            <img src="src/assets/img/ia_100000004000.webp" class="remen_lunbo2_img1"/>
                            <img src="src/assets/img/ia_100000004004.webp" class="remen_lunbo2_img2"/>
                            <img src="src/assets/img/ia_100000004003.webp" class="remen_lunbo2_img2"/>
                        </p>
                    </div>
                    <div class="swiper-slide">
                        <p>
                            <span class="remen_lunbo2_p1">排位赛周榜</span>
                            <img src="src/assets/img/ia_100000004002.webp" class="remen_lunbo2_img1"/>
                            <img src="src/assets/img/ia_100000004001.webp" class="remen_lunbo2_img2"/>
                            <img src="src/assets/img/ia_100000004000.webp" class="remen_lunbo2_img2"/>
                        </p>
                    </div>
                    <div class="swiper-slide">
                        <p>
                            <span class="remen_lunbo2_p1">娱乐派周榜</span>
                            <img src="src/assets/img/ia_100000003999.webp" class="remen_lunbo2_img1"/>
                            <img src="src/assets/img/ia_100000003998.webp" class="remen_lunbo2_img2"/>
                            <img src="src/assets/img/ia_100000003997.webp" class="remen_lunbo2_img2"/>
                        </p>
                    </div>
                    <div class="swiper-slide"><p>
                            <span class="remen_lunbo2_p1">亲密度周榜</span>
                            <img src="src/assets/img/ia_100000003996.webp" class="remen_lunbo2_img1"/>
                            <img src="src/assets/img/ia_100000003995.webp" class="remen_lunbo2_img2"/>
                            <img src="src/assets/img/ia_100000003994.webp" class="remen_lunbo2_img2"/>
                        </p></div>
                    <div class="swiper-slide">
                        <p>
                            <span class="remen_lunbo2_p1">神豪榜</span>
                            <img src="src/assets/img/ia_100000003993.webp" class="remen_lunbo2_img1"/>
                            <img src="src/assets/img/ia_100000003992.webp" class="remen_lunbo2_img2"/>
                            <img src="src/assets/img/ia_100000003017.webp" class="remen_lunbo2_img2"/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 数组循环 -->
        <!-- <VideoView class="tuijian_video" style="margin-top:0rem;margin-left:-1.5rem;width:100%;"></VideoView> -->
    </div>
</template>
<script>
$(function(){
    
})
import {Test1} from '../request/api.js'
import "../assets/js/swiper.min.js"
import VideoView from '../components/Video'
export default {
    data(){
        return{
            arrList1:[],
            arrList2:[]
        }
    },
    components:{
        VideoView
    },
    created(){
        // 判断li为第奇数个还是偶数个
        // $("li:even").css("border","1px solid red")
    },
    mounted() {
        this.getData()
        this.getData1()
        new Swiper('.swiper-container1', {
            pagination: '.swiper-pagination',
            // 点击按钮对应图片
            paginationClickable: true,
            // 两张图片之间的距离
            spaceBetween: 30,
            // 中心位置，设定为true时，活动块会居中，而不是默认状态下的居左。
            centeredSlides: true,
            // 自动切换的时间间隔（单位ms），不设定该参数slide不会自动切换。
            autoplay: 3000,
            // 用户操作swiper之后，是否禁止autoplay。默认为true：停止。
            // 如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
            // 操作包括触碰，拖动，点击pagination等。
            autoplayDisableOnInteraction: false,
            loop:true
        });
        new Swiper('.swiper-container3', {
            pagination: '.swiper-pagination',
            // 点击按钮对应图片
            paginationClickable: true,
            // 两张图片之间的距离
            spaceBetween: 30,
            // 中心位置，设定为true时，活动块会居中，而不是默认状态下的居左。
            centeredSlides: true,
            // 自动切换的时间间隔（单位ms），不设定该参数slide不会自动切换。
            autoplay: 3000,
            // 用户操作swiper之后，是否禁止autoplay。默认为true：停止。
            // 如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
            // 操作包括触碰，拖动，点击pagination等。
            autoplayDisableOnInteraction: false,
            loop:true
        });
        
    },
    methods: {
        getData(){
            var _this = this;
            Test1().then(function(res){
                _this.arrList1 = res.data.videoList2
                console.log(_this.arrList1)
            })
        },
        getData1(){
            var _this = this;
            Test1().then(function(res){
                _this.arrList2 = res.data.videoList3
                console.log(_this.arrList2)
            })
        },
        jump(id){
            this.$router.push({
                path:'/homepage/live/remen/videoDetail',
                query:{
                    detail:id,
                },
            })
        }
    },
}
</script>
<style>
    @import url(../assets/css/demo01.css);
    @import url(../assets/css/live.css);
</style>