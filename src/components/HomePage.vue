<template id="homepage">
    <div class="homepage">
        <div class="homepage_top">
            <div class="homepage_sec">
                <img src="src/assets/img/01.png" class="homepage_sec_img1"/>
                <div class="homepage_sec_box">
                     <div class="swiper-container2">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <span class="iconfont icon-sousuo" style="font-size: 25px;color: #777;float: left;"></span>
                                <span style="color: #333;margin-left: 0.5rem;">哪里都是你</span>
                                <span style="color: #999;margin-left: 0.8rem;">我怎么能够忘掉你的温柔...</span>
                            </div>
                            <div class="swiper-slide">
                                <span class="iconfont icon-sousuo" style="font-size: 25px;color: #777;float: left;"></span>
                                <span style="color: #333;margin-left: 0.5rem;">王靖雯不胖</span>
                                <span style="color: #999;margin-left: 0.8rem;">一曲入魂好声音</span>
                            </div>
                            <div class="swiper-slide">
                                <span class="iconfont icon-sousuo" style="font-size: 25px;color: #777;float: left;"></span>
                                <span style="color: #333;margin-left: 0.5rem;">漠河舞厅</span>
                                <span style="color: #999;margin-left: 0.8rem;">就让柳爽的声音陪你过寒冬</span>
                            </div>
                            <div class="swiper-slide">
                                <span class="iconfont icon-sousuo" style="font-size: 25px;color: #777;float: left;"></span>
                                <span style="color: #333;margin-left: 0.5rem;">一路生花</span>
                                <span style="color: #999;margin-left: 0.8rem;">希望许过的愿望能一路生花</span>
                            </div>
                            <div class="swiper-slide">
                                <span class="iconfont icon-sousuo" style="font-size: 25px;color: #777;float: left;"></span>
                                <span style="color: #333;margin-left: 0.5rem;">金玉良缘</span>
                                <span style="color: #999;margin-left: 0.8rem;">有时候失忆是最好的解脱...</span>
                            </div>
                        </div>
                        <!-- <div class="swiper-pagination"></div> -->
                    </div>
                </div>
                <input type="text" class="homepage_sec_put">
                <img src="src/assets/img/02.png" class="homepage_sec_img2"/>
                <img src="src/assets/img/03.png" class="homepage_sec_img3"/>
            </div>
            <div class="homepage_fenlei">
                <router-link to="/homepage/live" class="homepage_fenlei_anniu">直播<span class="homepage_fenlei_line"></span></router-link>
                <router-link to="/homepage/recommend" class="homepage_fenlei_anniu">推荐<span class="homepage_fenlei_line"></span></router-link>
                <router-link to="/homepage/vip" class="homepage_fenlei_anniu">VIP<span class="homepage_fenlei_line"></span></router-link>
                <router-link to="/homepage/novel" class="homepage_fenlei_anniu">小说<span class="homepage_fenlei_line"></span></router-link>
                <router-link to="/homepage/child" class="homepage_fenlei_anniu">儿童<span class="homepage_fenlei_line"></span></router-link>
                <router-link to="/homepage/podcast" class="homepage_fenlei_anniu">播客<span class="homepage_fenlei_line"></span></router-link>
                <!-- <router-link to="/homepage/crosstalk" class="homepage_fenlei_anniu">相声评书<span class="homepage_fenlei_line"></span></router-link>
                <router-link to="/homepage/broadcast" class="homepage_fenlei_anniu">广播<span class="homepage_fenlei_line"></span></router-link>
                <router-link to="/homepage/beijing" class="homepage_fenlei_anniu">北京<span class="homepage_fenlei_line"></span></router-link>
                <router-link to="/homepage/handpick" class="homepage_fenlei_anniu">精选<span class="homepage_fenlei_line"></span></router-link>
                <router-link to="/homepage/humanity" class="homepage_fenlei_anniu">人文<span class="homepage_fenlei_line"></span></router-link>
                <router-link to="/homepage/history" class="homepage_fenlei_anniu">历史<span class="homepage_fenlei_line"></span></router-link>
                <router-link to="/homepage/bestsellers" class="homepage_fenlei_anniu">畅销书<span class="homepage_fenlei_line"></span></router-link>
                <router-link to="/homepage/ebook" class="homepage_fenlei_anniu">电子书<span class="homepage_fenlei_line"></span></router-link> -->
                <div class="homepage_fenlei_all" @click="routeJump">
                    <img src="src/assets/img/04.png" class="homepage_sec_img4"/>
                </div>
            </div>
        </div>
        <div  class="homepage_con">
            <router-view class="hahaha"></router-view>
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
        return{}
    },
    mounted() {
        new Swiper('.swiper-container2',{
            pagination: '.swiper-pagination',
            //竖直方向的滑动
            direction: 'vertical',
            // 可视列数为一列
            slidesPerView: 1,
            // 点击按钮时对应图片
            paginationClickable: true,
            // 两张图片之间的距离
             spaceBetween: 30,
            // 是否开启鼠标控制Swiper切换。
            // 设置为true时，能使用鼠标滚轮控制slide滑动。
            mousewheelControl: true,
            autoplay:2500,
            loop:true
        })
    },
    methods:{
        routeJump(){
            this.$router.replace('/homepage/recommend/quanbu')
        }
    }
}
</script>