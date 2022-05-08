<template id="quanbu">
    <div class="quanbu">
         <div class="ertong">
            <div class="ertong_top">
                <img src="src/assets/img/41.png" class="ruzhan_top_nav_img1" @click="back"/>
                <span class="ertong_top_tit">全部频道</span>
            </div>
            <div class="ertong_con">
                <van-search v-model="value" placeholder="请输入搜索关键词" />
                <van-tree-select 
                    height="150vw" 
                    :items="items" 
                    :main-active-index.sync="active">
                    <template #content>
                        <div v-if="active === 0">
                            <ul class="list">
                                <li v-for="(k,index) in  classifyList1" :key="index">
                                    <img :src="k.img"/>
                                    <div class="middle">
                                        <p class="middle_1">
                                            {{k.title}}
                                        </p>
                                        <p class="middle_2">
                                            {{k.txt}}
                                        </p>
                                    </div>
                                    <span class="right" @click="subscription">
                                        + 关注
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div v-if="active === 1">
                            <ul class="list">
                                <li v-for="(k,index) in  classifyList2" :key="index">
                                    <img :src="k.img"/>
                                    <div class="middle">
                                        <p class="middle_1">
                                            {{k.title}}
                                        </p>
                                        <p class="middle_2">
                                            {{k.txt}}
                                        </p>
                                    </div>
                                    <span class="right">
                                        + 关注
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div v-if="active === 2">
                            <ul class="list">
                                <li v-for="(k,index) in  classifyList3" :key="index">
                                    <img :src="k.img"/>
                                    <div class="middle">
                                        <p class="middle_1">
                                            {{k.title}}
                                        </p>
                                        <p class="middle_2">
                                            {{k.txt}}
                                        </p>
                                    </div>
                                    <span class="right">
                                        + 关注
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div v-if="active === 3">
                            <ul class="list">
                                <li v-for="(k,index) in  classifyList4" :key="index">
                                    <img :src="k.img"/>
                                    <div class="middle">
                                        <p class="middle_1">
                                            {{k.title}}
                                        </p>
                                        <p class="middle_2">
                                            {{k.txt}}
                                        </p>
                                    </div>
                                    <span class="right">
                                        + 关注
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div v-if="active === 4">
                            <ul class="list">
                                <li v-for="(k,index) in  classifyList5" :key="index">
                                    <img :src="k.img"/>
                                    <div class="middle">
                                        <p class="middle_1">
                                            {{k.title}}
                                        </p>
                                        <p class="middle_2">
                                            {{k.txt}}
                                        </p>
                                    </div>
                                    <span class="right">
                                        + 关注
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div v-if="active === 5">
                            <ul class="list">
                                <li v-for="(k,index) in  classifyList6" :key="index">
                                    <img :src="k.img"/>
                                    <div class="middle">
                                        <p class="middle_1">
                                            {{k.title}}
                                        </p>
                                        <p class="middle_2">
                                            {{k.txt}}
                                        </p>
                                    </div>
                                    <span class="right">
                                        + 关注
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div v-if="active === 6">
                            <ul class="list">
                                <li v-for="(k,index) in  classifyList7" :key="index">
                                    <img :src="k.img"/>
                                    <div class="middle">
                                        <p class="middle_1">
                                            {{k.title}}
                                        </p>
                                        <p class="middle_2">
                                            {{k.txt}}
                                        </p>
                                    </div>
                                    <span class="right">
                                        + 关注
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div v-if="active === 7">
                            <ul class="list">
                                <li v-for="(k,index) in  classifyList8" :key="index">
                                    <img :src="k.img"/>
                                    <div class="middle">
                                        <p class="middle_1">
                                            {{k.title}}
                                        </p>
                                        <p class="middle_2">
                                            {{k.txt}}
                                        </p>
                                    </div>
                                    <span class="right">
                                        + 关注
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div v-if="active === 8">
                            <ul class="list">
                                <li v-for="(k,index) in  classifyList9" :key="index">
                                    <img :src="k.img"/>
                                    <div class="middle">
                                        <p class="middle_1">
                                            {{k.title}}
                                        </p>
                                        <p class="middle_2">
                                            {{k.txt}}
                                        </p>
                                    </div>
                                    <span class="right">
                                        + 关注
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div v-if="active === 9">
                            <ul class="list">
                                <li v-for="(k,index) in  classifyList10" :key="index">
                                    <img :src="k.img"/>
                                    <div class="middle">
                                        <p class="middle_1">
                                            {{k.title}}
                                        </p>
                                        <p class="middle_2">
                                            {{k.txt}}
                                        </p>
                                    </div>
                                    <span class="right">
                                        + 关注
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div v-if="active === 10">
                            <ul class="list">
                                <li v-for="(k,index) in  classifyList11" :key="index">
                                    <img :src="k.img"/>
                                    <div class="middle">
                                        <p class="middle_1">
                                            {{k.title}}
                                        </p>
                                        <p class="middle_2">
                                            {{k.txt}}
                                        </p>
                                    </div>
                                    <span class="right">
                                        + 关注
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div v-if="active === 11">
                            <ul class="list">
                                <li v-for="(k,index) in  classifyList12" :key="index">
                                    <img :src="k.img"/>
                                    <div class="middle">
                                        <p class="middle_1">
                                            {{k.title}}
                                        </p>
                                        <p class="middle_2">
                                            {{k.txt}}
                                        </p>
                                    </div>
                                    <span class="right">
                                        + 关注
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </template>
                </van-tree-select>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
    @import url(../assets/css/recommend.css);
    /deep/ .van-field__body .van-icon{
        font-size: 3rem;
    }
    /deep/ .van-tree-select__nav-item{
        padding: 3.4rem 2rem;
        font-size: 2.4rem;
    }
    /deep/ .van-sidebar-item--select::before{
        height: 4rem;
    }
    /deep/ .van-sidebar-item--select, .van-sidebar-item--select:active{
        color: #DE4936;
    }
    /deep/  .van-dialog{
        width: 42rem;
        height: 27rem;
    }
    /deep/ .van-dialog__message{
        font-size: 2rem;
    }
</style>>
<script>
import {Test1} from '../request/api.js'
import {Test2} from '../request/api.js'
import { Dialog } from 'vant';
import { ref } from 'vue';
export default {
    data(){
        return{
            arrList7:[],
            classifyList1:[],
            classifyList2:[],
            classifyList3:[],
            classifyList4:[],
            classifyList5:[],
            classifyList6:[],
            classifyList7:[],
            classifyList8:[],
            classifyList9:[],
            classifyList10:[],
            classifyList11:[],
            classifyList12:[],
            value: '',
            active: 0,
            items: [
                { text: '小说' },
                { text: '儿童' },
                { text: '相声小品' },
                { text: '评书' },
                { text: '娱乐' },
                { text: '悬疑' },
                { text: '人文' },
                { text: '国学' },
                { text: '头条' },
                { text: '音乐' },
                { text: '历史' },
                { text: '情感' },
            ],
        }
    },
    
    mounted() {
        this.getData()
        this.getList1()
        this.getList2()
        this.getList3()
        this.getList4()
        this.getList5()
        this.getList6()
        this.getList7()
        this.getList8()
        this.getList9()
        this.getList10()
        this.getList11()
        this.getList12()
    },
    methods: {
        // 获取数据
        getData(){
            var _this = this;
            Test1().then(function(res){
                _this.arrList7 = res.data.xueyingyu
            })
        },
        getList1(){
            var _this = this;
            Test2().then(function(res){
                _this. classifyList1 = res.data.classify1
            })
        },
        getList2(){
            var _this = this;
            Test2().then(function(res){
                _this. classifyList2 = res.data.classify2
            })
        },
        getList3(){
            var _this = this;
            Test2().then(function(res){
                _this. classifyList3 = res.data.classify3
            })
        },
        getList4(){
            var _this = this;
            Test2().then(function(res){
                _this. classifyList4 = res.data.classify4
            })
        },
        getList5(){
            var _this = this;
            Test2().then(function(res){
                _this. classifyList5 = res.data.classify5
            })
        },
        getList6(){
            var _this = this;
            Test2().then(function(res){
                _this. classifyList6 = res.data.classify6
            })
        },
        getList7(){
            var _this = this;
            Test2().then(function(res){
                _this. classifyList7 = res.data.classify7
            })
        },
        getList8(){
            var _this = this;
            Test2().then(function(res){
                _this. classifyList8 = res.data.classify8
            })
        },
        getList9(){
            var _this = this;
            Test2().then(function(res){
                _this. classifyList9 = res.data.classify9
            })
        },
        getList10(){
            var _this = this;
            Test2().then(function(res){
                _this. classifyList10 = res.data.classify10
            })
        },
        getList11(){
            var _this = this;
            Test2().then(function(res){
                _this. classifyList11 = res.data.classify11
            })
        },
        getList12(){
            var _this = this;
            Test2().then(function(res){
                _this. classifyList12 = res.data.classify12
            })
        },
        // 返回上一级
        back(){
            this.$router.go(-1)
        },
        // 订阅消息弹框
        subscription(){
            let right = document.getElementsByClassName("right")[0]
            Dialog({ message: '关注成功！' });
            right.innerHTML = "已关注"
        }
    },
}
</script>