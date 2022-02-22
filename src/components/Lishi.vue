<template id="lishi">
    <div>
        <div class="lishi_box">
            <p class="lishi_box_p1">
                更早
            </p>
            <ul>
                <li v-for="(k,index) in arrList9" :key="index" class="datalist1_li">
                    <img :src="k.img" class="datalist1_img"/>
                    <div class="datalist1_right">
                        <p class="datalist1_right_p1">{{k.title}}</p>
                        <p class="datalist1_right_p2">{{k.txt}}</p>
                        <p class="datalist1_right_p3">
                            <img src="src/assets/img/22.png" class="datalist1_right_p3_img"/>
                            <span class="datalist1_right_p3_span">{{k.play}}</span>
                            <span class="datalist1_right_p3_span1">{{k.renqi}}</span>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<style>
  @import url(../assets/css/homepage.css);
  @import url(../assets/css/recommend.css);
</style>
<script>
import {Test1} from '../request/api.js'
export default {
    data(){
        return{
            arrList9:[]
        }
    },
    mounted() {
        this.getData()
    },
    methods:{
        getData(){
            var _this = this;
            Test1().then(function(res) {
                // res就是请求成功之后的到的数据
                _this.arrList9 = res.data.booklist2
                console.log(_this.arrList9)
            })
        },
    }
}
</script>