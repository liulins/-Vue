<template>
    <div>
        <!-- 推荐页面的猜你喜欢的详情页-->
        <div class="re_d">
            <div class="re_d-nav">
                <img src="src/assets/img/38.png" class="re_d-nav_img1" @click="back"/>
                <img src="src/assets/img/39.png" class="re_d-nav_img2"/>
            </div>
            <div class="re_d-tit">
                <img :src="detailList[this.recdetail].img" class="re_d-tit_img1"/>
                <p class="re_d-tit_p1">{{detailList[this.recdetail].title}}</p>
                <p class="re_d-tit_p2">
                    <span class="re_d-tit_p2_span1">{{detailList[this.recdetail].txt}}</span>
                </p>
                <p class="re_d-tit_p3">
                    <img :src="detailList[this.recdetail].img"/>
                    <span>{{detailList[this.recdetail].txt}}</span>
                </p>
            </div>
            <div class="re_d-grade">
                <div class="re_d-grade1">
                    <p class="re_d-grade1_p1">9.5</p>
                    <p class="re_d-grade1_p2">评分</p>
                </div>
                <div class="re_d-grade1">
                    <p class="re_d-grade1_p1">9.5亿</p>
                    <p class="re_d-grade1_p2">播放量</p>
                </div>
                <div class="re_d-grade1">
                    <p class="re_d-grade1_p1">9.5亿</p>
                    <p class="re_d-grade1_p2">播放量</p>
                </div>
                <div class="re_d-grade2">
                    + 订阅
                </div>
            </div>
            <div class="re_d-rec">
                作者：短线交易之父，指标创建者，最好的交易记录，12哥月从1万做到110万作者：短线交易之父，指标创建者，最好的交易记录，12哥月从1万做到110万作者：短线交易之父，指标创建者，最好的交易记录，12哥月从1万做到110万
            </div>
        </div>
        <div class="re_txt">
            <div class="re_txt_tit">
                <div class="re_txt_tit_btn">
                    <img src="src/assets/img/播放.png" class="re_txt_tit_btn1"/>
                    <span>全部播放</span>
                </div>
                <div class="re_txt_tit_total">
                    共58集
                    <img src="src/assets/img/34.png"/>
                </div>
            </div>
            <div class="re_txt_txt">
                <ul>
                    <li class="re_txt_txt_li">
                        <p class="re_txt_txt_li_p1">
                            祝福大家：赚取暴利，接受亏损,取暴利，接受亏损
                        </p>
                        <span class="re_txt_txt_li_span1">2017-07</span>
                        <p class="re_txt_txt_li_p2">
                            <span class="re_txt_txt_li_p2_1">
                                <img src="src/assets/img/22.png"/>
                                <span>4062</span>
                            </span>
                        </p>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>
<style>
    @import url(../assets/css/recommend.css);
</style>
<script>
import {Test1} from '../request/api.js'
export default {
    data(){
        return{
            recdetail:this.$route.query.detail,
            detailList:[]
        }
    },
    methods:{
        file(){
            return this.$route.query.detail;
        },
        getData(){
            var _this = this;
            Test1().then(function(res) {
                // res就是请求成功之后的到的数据
                _this.detailList = res.data.recDetail
                console.log(_this.detailList)
            })
        },
        back(){
            this.$router.go(-1)
        }
    },
    created(){

    },
    mounted(){
        this.getData()
    }
}
</script>