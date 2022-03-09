<template id="ertong">
<!-- 儿童页面 -->
    <div class="ertong">
        <div class="ertong_top">
            <img src="src/assets/img/41.png" class="ruzhan_top_nav_img1" @click="back"/>
            <span class="ertong_top_tit">儿童故事免费听</span>
        </div>
        <div class="ertong_con">
            <ul>
                <li class="ertong_con_li" v-for="(k,index) in arrList6" :key="index" @click="jump(k.id)">
                    <div class="ertong_con_li_img1">
                        <img :src="k.img1" class="ertong_con_li_img2"/>
                    </div>
                    <div class="ertong_con_li_r">
                        <p class="ertong_con_li_r_p1">{{k.txt1}}</p>
                        <p class="ertong_con_li_r_p2">{{k.txt2}}</p>
                        <p class="ertong_con_li_r_p3">
                            <img src="src/assets/img/43.png" class="ertong_con_li_r_p3_img1"/>
                            <span class="ertong_con_li_r_p3_span1">{{k.listen}}</span>
                            <span class="ertong_con_li_r_p3_span2">{{k.people}}</span>
                            <img src="src/assets/img/44.png" class="ertong_con_li_r_p3_img2"/>
                        </p>
                        <div class="ertong_con_li_r_p4">
                            <img src="src/assets/img/45.png" class="ertong_con_li_r_p3_img3"/>
                        </div>
                    </div>
                </li>
            </ul>
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
            arrList6:[]
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
                _this.arrList6 = res.data.ertonglist1
                // console.log(_this.arrList1)
            })
        },
        // 返回上一级
        back(){
            this.$router.go(-1)
        },
        jump(id){
            this.$router.push({
                path:'/ertong',
                query:{
                    detail:id,
                },
            })
        }
    },
}
</script>