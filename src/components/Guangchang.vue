<template id="guangchang">
    <div>
        <div class="quanzi_box" v-for="(k,index) in arrList13" :key="index" style="box-shadow: 2px 2px 14px rgb(228, 228, 75);background: #edffe1;">
            <p class="quanzi_box_tit">
                <img :src="k.img" class="quanzi_box_tit_img1"/>
                <span class="quanzi_box_tit_span1">{{k.txt1}}</span>
                <span class="quanzi_box_tit_span2">{{k.txt2}}</span>
            </p>
            <h3 class="quanzi_box_tit2">{{k.title}}</h3>
            <p class="quanzi_box_tit3">
                {{k.p}}
            </p>
            <p class="quanzi_box_tit5">
                <img :src="k.img2" class="quanzi_box_tit5_img1"/>
                <img :src="k.img3" class="quanzi_box_tit5_img1"/>
            </p>
            <p class="quanzi_box_tit4">
                <img src="src/assets/img/49.png" class="quanzi_box_tit4_img1"/>
                <span class="quanzi_box_tit4_span1">{{k.zan}}</span>
                <img src="src/assets/img/50.png" class="quanzi_box_tit4_img2"/>
                <span class="quanzi_box_tit4_span1">{{k.ping}}</span>
            </p>
        </div>
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
            arrList13:[]
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
                _this.arrList13 = res.data.quanzilist
                // console.log(_this.arrList1)
            })
        },
    },
}
</script>