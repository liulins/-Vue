<template id="shipinfaxian">
    <div>
        <ul class="shipinfaxianss">
            <!-- 视频发现 -->
            <li class="shipinfaxian_box1" v-for="(k,index) in arrList12" :key="index">
                <div class="shipinfaxian_box1_imgs">
                    <img :src="k.img" class="shipinfaxian_box1_img"/>
                    <p class="shipinfaxian_box1_imgs_p1">
                        <span class="shipinfaxian_box1_imgs_p1_span">{{k.renqi}}</span>
                        <img src="src/assets/img/48.png" class="shipinfaxian_box1_imgs_p1_img"/>
                    </p>
                </div>
                <p class="shipinfaxian_box1_p1">
                    {{k.title}}
                </p>
                <p class="shipinfaxian_box1_p2">
                    <img :src="k.img2" class="shipinfaxian_box1_p2_img1"/>
                    <span class="shipinfaxian_box1_p2_span1">{{k.txt}}</span>
                    <span class="shipinfaxian_box1_p2_span2">{{k.play}}</span>
                    <img src="src/assets/img/49.png" class="shipinfaxian_box1_p2_img2"/>
                </p>
            </li>
        </ul>
    </div>
</template>
<style>
  @import url(../assets/css/homepage.css);
</style>
<script>
import {Test1} from '../request/api.js'
export default {
    data(){
        return{
            arrList12:[]
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
                _this.arrList12 = res.data.videolist4
                // console.log(_this.arrList1)
            })
        },
    },
}
</script>