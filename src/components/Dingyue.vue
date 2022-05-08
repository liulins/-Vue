<template id="dingyue">
    <div>
        <div class="dingyue_box1">
            <img src="src/assets/img/46.png" class="dingyue_box1_img1"/>
            <p class="dingyue_box1_p1">你还没有订阅任何节目!</p>
        </div>
        <div class="dingyue_box2">
            <p class="dingyue_box2_p1">
                <span class="dingyue_box2_span1">为你推荐</span>
                <span class="dingyue_box2_span2" @click="subscription">一键订阅  (6)</span>
                <span class="dingyue_box2_span4" @click="changeData">换一批</span>
                <img src="src/assets/img/21.png" @click="changeData" class="dingyue_box2_span3"/>
            </p>
            <div class="dingyue_box2_list">
                <ul>
                    <div class="dingyuelist_box1" v-for="(k,index) in newList" :key="index">
                        <img :src="k.img1" class="ruzhan_top_box1_1_img"/>
                        <p class="ruzhan_top_box1_1_p">
                            {{k.txt1}}
                        </p>
                    </div>
                </ul>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
    @import url(../assets/css/homepage.css);
    @import url(../assets/css/recommend.css);
    .van-dialog /deep/ {
        width: 40rem;
        font-size: 3rem;
    }
</style>
<script>
import {Test1} from '../request/api.js'
import { Dialog } from 'vant';
export default {
    data(){
        return{
            arrList7:[],
            // 处理后的list
            newList:[],
            // 截取第几组的开始参数
            timeStart:0,
            // 截取第几组的结束参数
            timeEnd:1,
            // 默认为0组
            group:0,
            // 一页展示list数量
            num:6,
            // 点击的次数
            clickNum:0,
        }
    },
    mounted() {
        this.getData()
        this.renderR()
    },
    methods: {
        // 获取数据
        getData(){
            var _this = this;
            Test1().then(function(res){
                _this.arrList7 = res.data.dingyuelist1
                // console.log(_this.arrList1)
            })
        },
        subscription(){
            let dingyue_box2_span2 = document.getElementsByClassName("dingyue_box2_span2")[0]
            Dialog.alert({
                message: '订阅成功！',
                theme: 'round-button',
            }).then(() => {
            // on close
            });
            dingyue_box2_span2.innerHTML = "已订阅"
        },
        changeData(){
            $(".recommend_box2_img1").css("animation","xuanzhuan 0.5s forwards running");
            setTimeout(function(){
                $(".recommend_box2_img1").css("animation","none")
            },1500)
            if(this.arrList7.length >4 && this.arrList7.length > this.num){
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
            var len = this.arrList7.length;
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
            this.newList = this.arrList7.slice(
                this.num * this.timeStart,
                this.num * this.timeEnd
            );
            console.log(this.newList);
            },
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
    }
}
</script>