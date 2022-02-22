<template>
    <div class="mu_dingling" id="mudingling">
    <div class="mu_dingling1" v-for="(k,index) in arrList1" :key="index">
        <img :src="k.img" alt="" class="mu_dingling1_img">
        <div class="mu_dingling1_mid">
         <p class="mu_dingling_p1">{{k.name}}</p>
         <p class="mu_dingling_p2">
             <span class="mu_dingling_p2_span1">{{k.singer}}</span>
             <span class="mu_dingling_p2_span2">{{k.time}}</span>
             <span class="mu_dingling_p2_span3"></span>
             <span class="mu_dingling_p2_span4">{{k.play}}</span>
         </p>
        </div>
         <span class="mu_dingling_span1"></span>
    </div>
    <p class="footer_title">加载中...</p>
    </div>
</template>
<script>
 import {Test1} from '../request/api.js'
export default{
    data(){
        return{
            arrList1:[]
        }
    },
     mounted(){
        this.getData()
        },
     methods:{
       getData(){
        var _this=this;
        Test1().then(function(res){
            // res就是请求成功之后的数据
            _this.arrList1=res.data.data9
            console.log(res.data.data9)
        })
       },
   }
}
</script>
<style>
.mu_dingling1{width: 100%;height: 6rem;float: left;margin: 0.5rem 0;}
.mu_dingling1_img{width: 6rem;height: 6rem;border-radius: 0.5rem;float: left;}
.mu_dingling1_mid{width: 60%;height: 6rem;float: left;margin-top:1rem;}
.mu_dingling_p1{font-size: 1rem;color: #333;float: left;font-weight: bold;margin-left: 1rem;}
.mu_dingling_p2{font-size: 12px;color: #666;float: left;margin: 2rem 0 0 0rem;width: 100%;}
.mu_dingling_p2_span1{float: left;margin-left:1rem;}
.mu_dingling_p2_span2{float: left;margin-left:1rem;}
.mu_dingling_p2_span3{float: left;margin-left:1rem; display: inline-block;width: 1rem;height: 1rem;
background: url(/src/assets/img/耳机1.png);background-size:1rem;}
.mu_dingling_p2_span4{float: left;margin-left:0.5rem;}
.mu_dingling_span1{display: inline-block; width: 1.5rem;height: 1.5rem;background: url(/src/assets/img/列表点2.png);
background-size:1.5rem;float: right;margin: 1.5rem 0rem 0 0;}
.footer_title{width: 100%;height: 15rem;font-size:0.5rem;color: #666;text-align: center;float: left;margin-top: 1.5rem;}
</style>