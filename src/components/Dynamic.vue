<template>
    <div id="dynamic" class="dynamic">
        <div class="dynamicbox">
            <ul class="dynamicbox_ul">
                <li class="dynamicbox_ul_lis" v-for="(i,index) in dynamicarr" :key="index">
                    <img :src="i.imgs1" class="dynamicimgs">
                    <span class="dynamicname">{{i.names}}</span>
                    <span class="dynamictime">{{i.times}}</span>
                    <span class="dynamictext">{{i.texts}}</span>
                    <p class="dynamiccontent">
                        <img :src="i.imgs2" class="dynamiccontent_imgs">
                        <span class="dynamiccontent_title">{{i.title}}</span>
                        <span class="dynamiccontent_msg">{{i.msg}}</span>
                        <span class="dynamiccontent_lists">
                            <span class="dynamiccontent_lists_bofang">
                                <img src="src/assets/img/play.png" class="dynamiccontent_lists_bofang_img">
                                {{i.bofangs}}
                            </span>
                            <span class="dynamiccontent_lists_time">
                                <img src="src/assets/img/time.png" class="dynamiccontent_lists_time_img">
                                {{i.times1}}
                            </span>
                        </span>
                        <img src="src/assets/img/下载.png" class="dynamiccontent_install">
                    </p>
                    <span class="auter">快给作者一个赞吧<img src="src/assets/img/赞.png" class="auterimg"></span>
                    <span class="views">
                        <img src="src/assets/img/ia_100000003000.webp" class="views_hd">
                        评论一下
                        <img src="src/assets/img/applause.png" class="viewsapplause">
                        <img src="src/assets/img/笑哭.png" class="viewssmail">
                        <img src="src/assets/img/爱心.png" class="viewsheart">
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {Test1} from '../request/api.js'
export default({
    data() {
        return{
            dynamicarr:[]
        }
    },
    mounted(){
        this.getDatady();
    },
    methods:{
        getDatady(){
            var _this = this;
            Test1().then(function(res){
                _this.dynamicarr = res.data.arrDynamic
                console.log(_this.dynamicarr)
            })
        }
    }
})
</script>

<style>
@import url("../assets/css/dynamic.css");
</style>