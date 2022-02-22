<template>
    <div class="mu_live" di="mulive">
        <div class="mu_live1" v-for="(k,index) in arrList1" :key="index">
            <img :src="k.img" class="mu_live_img">
            <p class="mu_live_p1">{{k.label}}</p>
            <p class="mu_live_p2">{{k.title}}</p>
            <p class="mu_live_p3">{{k.text}}</p><br>
            <p class="mu_live_p4">{{k.name}}</p>
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
            _this.arrList1=res.data.data7
            console.log(res.data.data7)
        })
       },
   }
}
</script>

<style>
.mu_live1{width: 40%;height: 14rem;float: left;margin: 0.5rem 1rem;position: relative;}
.mu_live_img{width: 12rem;height: 12rem;top: 0rem;border-radius: 0.5rem;float: left;}
.mu_live_p1{font-size: 0.5rem;color: #fff;padding: 0 0.5rem;background: #EB3941;border-radius: 0.5rem 0 0.5rem 0;
  position: absolute;top: 0rem;left: 0rem;}
.mu_live_p2{width: 8rem; font-size:12px;color: #fff;position:absolute;top: 10rem;left: 1rem;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;}
.mu_live_p3{font-size:0.9rem;color: #333;font-weight: bold;}
.mu_live_p4{font-size:0.5rem;color: #666;margin-top:-1rem;}
.footer_title{width: 100%;height: 15rem;font-size:0.5rem;color: #666;text-align: center;float: left;margin-top: 1.5rem;}
</style>