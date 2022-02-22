<template>
    <div class="mu_blindbox" id="mublindbox">
        <div class="mu_blindbox1" v-for="(k,index) in arrList1" :key="index">
            <img :src="k.img" class="mu_blindbox1_img">
            <span :class="k.span">{{k.top}}</span>
            <p class="mu_blindbox1_p1">{{k.name}}</p>
            <p class="mu_blindbox1_p2">
                <span class="mu_blindbox1_p2_span1">{{k.price}}</span>
                <span class="mu_blindbox1_p2_span2">{{k.sales}}人购买</span>
            </p>
            <p class="mu_blindbox1_p3">
                <span class="mu_blindbox1_p3_span1">{{k.promotion}}</span>
                <span class="mu_blindbox1_p3_span1">{{k.label}}</span>
            </p>
        </div>
        <p class="footer_title">加载完...</p>
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
            _this.arrList1=res.data.data10
            console.log(res.data.data10)
        })
       },
   }
}
</script>
<style>
.mu_blindbox1{width: 46%;height: 18rem;float: left;margin: 0.5rem;border-radius: 0.8rem;overflow: hidden;position: relative;}
.mu_blindbox1_img{width: 100%;height: 12rem;float: left;border-radius:0.5rem;}
.mu_blindbox1_span1{font-size: 12px;color: #fff;background: #EB3941;padding: 0.9rem 0.2rem 0.2rem 0.5rem;transform: rotate(45deg);
  position: absolute;top: -0.5rem;right: -10.5rem;text-align: center;}
.mu_blindbox1_span2{font-size: 12px;color: #fff;background: #00AAFE;padding: 0.8rem 0.2rem 0.2rem 0.5rem;transform: rotate(45deg);
  position: absolute;top: -0.5rem;right: -10.5rem;text-align: center;}

.mu_blindbox1_p1{font-size: 1rem;color: #333;font-weight: bold;float: left;margin: 0.5rem 0 0 0;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;width: 95%;}
.mu_blindbox1_p2{width: 100%;height: 1.5rem;float: left;margin: 0.5rem 0;}
.mu_blindbox1_p2_span1{font-size: 1.1rem;color: #333;}
.mu_blindbox1_p2_span2{font-size: 12px;color: #666;margin-left:0.5rem;}
.mu_blindbox1_p3{width: 100%;height: 1rem;float: left;}
.mu_blindbox1_p3_span1{font-size: 12px;color: #EF596C;background: #f1d5d4;float: left;padding: 0.1rem 0.2rem;border-radius: 0.2rem;margin-left: 0.2rem;}
.footer_title{width: 100%;height: 15rem; font-size:0.5rem;color: #666;text-align: center;float: left;margin: 1.5rem 0 5rem 0;}
</style>