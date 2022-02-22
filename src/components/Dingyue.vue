<template id="dingyue">
    <div>
        <div class="dingyue_box1">
            <img src="src/assets/img/46.png" class="dingyue_box1_img1"/>
            <p class="dingyue_box1_p1">你还没有订阅任何节目!</p>
        </div>
        <div class="dingyue_box2">
            <p class="dingyue_box2_p1">
                <span class="dingyue_box2_span1">为你推荐</span>
                <span class="dingyue_box2_span2">一键订阅  (6)</span>
                <span class="dingyue_box2_span4">换一批</span>
                <img src="src/assets/img/21.png" class="dingyue_box2_span3"/>
            </p>
            <div class="dingyue_box2_list">
                <ul>
                    <div class="dingyuelist_box1" v-for="(k,index) in arrList7" :key="index">
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
<style>
  @import url(../assets/css/homepage.css);
  @import url(../assets/css/recommend.css);
</style>
<script>
import {Test1} from '../request/api.js'
export default {
    data(){
        return{
            arrList7:[]
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
                _this.arrList7 = res.data.dingyuelist1
                // console.log(_this.arrList1)
            })
        },
    },
}
</script>