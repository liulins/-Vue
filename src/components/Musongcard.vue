<template>
    <div class="Mu_songcard" id="musongcard">
         <div class="mu_any_cont3" v-for="(k,index) in arrList1" :key="index">
             <div class="mu_any_cont31">
                 <img :src="k.img" alt="" class="mu_any_cont31_img">
             </div>
             <p class="mu_any_cont32_span2">{{k.name}}</p>
              <p class="mu_any_cont32_p3">{{k.lable}}</p>
             <p class="mu_any_cont3_p2">
                 <span class="mu_any_cont32_span8">{{k.text}}</span>
                 <span class="mu_any_cont32_span3"></span>
                 <span class="mu_any_cont32_span4">{{k.comtent}}</span>
                 <span class="mu_any_cont32_span5"></span>
                 </p>
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
            _this.arrList1=res.data.data8
            console.log(res.data.data8)
        })
       }
   }
}
</script>
<style>
.mu_any_cont3{width: 100%;height: 6rem;float: left;float: left;border: 0px solid red;position: relative;margin-top: 1rem;}
.mu_any_cont31_img{width: 6rem;height: 6rem;float: left;border-radius: 0.5rem;}
.mu_any_cont31{width: 6rem;height: 6rem;float: left;}
.mu_any_cont31_span1{font-size: 12px;color: #fff;}
.mu_any_cont31_p1{font-size:12px;color: #fff;width: 10rem;height: 2rem;position: absolute;bottom: 0rem;z-index: 20;
  left: 0rem;}
.mu_any_cont31_p1 span{display: inline-block; width: 1rem;height: 1rem;background: url(/src/assets/img/play3.png);
background-size: 1rem;position: relative;top: 0.2rem;}
.mu_any_cont3_p1{font-size:1rem;color: #333;font-weight: bold;float: left;margin:1rem 0 0 1rem;}
.mu_any_cont32_span8{font-size:12px; color: #666;position: absolute;left: 0;top: 0rem;}
.mu_any_cont32_span2{font-size: 1rem; color: #333;position: relative;top: 0.5rem;left: 1rem;}
.mu_any_cont32_span4{font-size: 12px; color: #333;position: absolute;top: 0rem;left:15rem;}
.mu_any_cont32_span3{display: inline-block; width: 1rem;height: 1rem;background: url(/src/assets/img/分享.png);
background-size:1rem;position: absolute;top: 0.1rem;left:17.3rem;}
.mu_any_cont3_p2{width: 70%;height: 2rem;font-size: 12px;color: #333;left:7rem;top:2rem; position: relative;}
.mu_any_cont32_span5{display: inline-block; width: 1rem;height: 1rem;background: url(/src/assets/img/评论.png);
background-size:1rem;position: absolute;top: 0.1rem;left: 13.8rem;}
.mu_any_cont32_p3{font-size:14px; color: #999;position: relative;top: 1rem;left: 1rem;}
.footer_title{width: 100%;height: 15rem;font-size:0.5rem;color: #666;text-align: center;float: left;margin-top: 1.5rem;}
</style>