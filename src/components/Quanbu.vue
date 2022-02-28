<template id="quanbu">
    <div class="quanbu">
         <div class="ertong">
            <div class="ertong_top">
                <img src="src/assets/img/41.png" class="ruzhan_top_nav_img1" @click="back"/>
                <span class="ertong_top_tit">全部频道</span>
            </div>
            <div class="ertong_con">
                
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
                _this.arrList7 = res.data.xueyingyu
            })
        },
        // 返回上一级
        back(){
            this.$router.go(-1)
        }
    },
}
</script>