<template id="tuijian_video">
    <div class="tuijian_video">
        <ul>
            <li class="tuijian_video_box1" v-for="(k,index) in arrList1" :key="index">
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
    </div>
</template>
<style>
  @import url(../assets/css/live.css);
</style>
<script>
import {Test1} from '../request/api.js'
export default {
    data(){
        return{
            arrList1:[]
        }
    },
    mounted() {
        this.getData()
    },
    methods: {
        getData(){
            var _this = this;
            Test1().then(function(res){
                _this.arrList1 = res.data.videolist
                console.log(_this.arrList1)
            })
        }
    },
}
</script>