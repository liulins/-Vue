<template>
    <div class="mu_any" id="muany" style="position:relative;top:4rem;">
        <div class="mu_any1" v-for="(k1,index) in arrList14" :key="index" >
            <span class="mu_any1_span1">
                <img src="src/assets/img/添加.png"/>
            </span>
            <img :src="k1.img" alt="" class="mu_any1_img">
            <div class="mu_any1_div1">
                <p class="mu_any_div1_p1">{{k1.name}}</p>
                <p class="mu_any_div1_p2">{{k1.text}}</p>
            </div>
            <span class="mu_any1_span2"></span>
            <span class="mu_any1_span3">
                <img src="/src/assets/img/列表-点.png"/>
            </span>
        </div>
        <div class="mu_any_more">
            <span>
                <img src="/src/assets/img/查看更多.png"/>
            </span>查看更多</div>
        <div class="mu_any_title1">有声电台<span>更多 ></span></div>
         <div class="find_cont3"> 
            <div class="find_cont31" v-for="(k,index) in arrList15" :key="index">
                <img :src="k.img"  class="find_cont31_img">
                <p class="find_cont31_p1">
                    <span>
                        <img src="/src/assets/img/play3.png" class="find_cont31_p1_span"/>    
                    </span>{{k.play}}
                </p>
                <p class="find_cont31_p2">{{k.text}}</p>
            </div>
         </div>
         <div class="mu_any_cont3" v-for="(k,index) in arrList16" :key="index">
             <div class="mu_any_cont31">
                 <img :src="k.img" alt="" class="mu_any_cont31_img">
                 <span class="mu_any_cont31_span1">{{k.kind}}</span>
                  <p class="mu_any_cont31_p1">
                    <span>
                        <img src="/src/assets/img/play3.png"/>  
                    </span>{{k.play}}
                </p>
             </div>
             <p class="mu_any_cont3_p1">{{k.text}}</p>
             <p class="mu_any_cont3_p2">
                 <span class="mu_any_cont32_span1">
                     <img src="/src/assets/img/ia_100000003013.webp"/>
                 </span>
                 <span class="mu_any_cont32_span2">{{k.name}}</span>
                 <span class="mu_any_cont32_span3">
                    <img src="/src/assets/img/42.png"/>
                </span>
                 <span class="mu_any_cont32_span4">{{k.comtent}}</span>
                 <span class="mu_any_cont32_span5"></span>
                 </p>
         </div>
         <p class="footer_title">加载更多... </p>
    </div>
</template>
<script>
import {Test1} from '../request/api.js'
export default{
    data(){
        return{
            arrList14:[],
            arrList15:[],
            arrList16:[]
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
            _this.arrList14=res.data.data3
            _this.arrList15=res.data.data4
            _this.arrList16=res.data.data5
            console.log(res.data.data3)
        })
       },
   }
}
</script>
<style>
.mu_any1{width: 98%;height: 10rem;border: 0px red solid;float: left;margin: 0.5rem 0 3rem 0.3rem;padding-bottom: 1rem;border-bottom: 1px solid #ddd;}
.mu_any1_span1{display: inline-block;background-size:1rem;float: left;margin: 1.2rem 0 0 0;}
.mu_any1_span1 img{width: 3rem;height: 3rem;float: left;margin-right: 2rem;margin-left: 1rem;margin-top: 2rem;}
.mu_any1_img{ width: 10rem;height: 10rem;float: left;margin: 0 0 0 6rem;}
.mu_any1_div1{width: 50%;height: 3rem;float: left;margin: 0 0 0 1rem;}
.mu_any_div1_p1{font-size: 2.6rem;color: #333;}
.mu_any_div1_p2{font-size: 2.2rem;margin: 0.4rem 0 0 0;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;}
.mu_any1_span3 img{width: 3rem;height: 3rem;background-size:1rem;float:right;
     margin: 3rem 1rem 0 0;}
.mu_any_more{width: 100%;height: 5rem;font-size: 2.5rem;color: #333;font-weight: bold;float: left;margin-top: 0rem;}
.mu_any_more span img{display: inline-block; width: 4rem;height: 4rem;background: url(/src/assets/img/列表2.png);
background-size:2rem;float: left;margin: -0.3rem 1rem 0 22rem;}
.mu_any_title1{width: 100%;height: 4rem;font-size: 2.5rem;color: #333;font-weight: bold;float: left;margin-left: 2rem;}
.mu_any_title1 span{font-size: 2.2rem;color: #333;float: right;font-weight: 500;margin-top:0rem;margin-right: 2rem;}
.mu_any_cont3{width: 100%;height: 17rem;float: left;border: 0px solid red;position: relative;margin-top: 1rem;margin-left: 2rem;}
.mu_any_cont31_img{width: 16rem;height: 16rem;float: left;border-radius: 2.5rem;}
.mu_any_cont31{width: 6rem;height: 6rem;float: left;}
.mu_any_cont31_span1{font-size: 2.2rem;color: #fff;background:rgba(0,0,0,0.5);border-radius:1rem;position: absolute;
      top: 0.3rem;left: 0.5rem;z-index: 20;padding: 0.2rem 0.5rem;}
.mu_any_cont31_p1{font-size:2.2rem;color: #fff;width: 10rem;height: 2rem;position: absolute;bottom: 2.3rem;z-index: 20;
  left: 2rem;}
.mu_any_cont31_p1 span img{display: inline-block; width: 2rem;height: 2rem;
background-size: 1rem;position: relative;top: 0rem;left: -1rem;}
.mu_any_cont3_p1{font-size:2.6rem;color: #333;font-weight: bold;float: left;margin:1rem 0 0 13rem;}
.mu_any_cont32_span1 img{display:inline-block;width: 5rem;height: 5rem;
background-size:1rem; border: 0px solid red;position: absolute;top: -2rem;left: -19rem;border-radius: 5rem;}
.mu_any_cont32_span2{font-size: 2rem; color: #333;position: absolute;top: -1rem;left: -13.5rem;}
.mu_any_cont32_span4{font-size: 2rem; color: #333;position: absolute;top: -1rem;left:15rem;}
.mu_any_cont32_span3 img{display: inline-block; width: 3rem;height: 3rem;
background-size:1rem;position: absolute;top: -1.3rem;left:10.3rem;}
.mu_any_cont3_p2{width: 70%;height: 2rem;font-size: 2rem;color: #333;left:38rem;top: 10rem; position: relative;}
.mu_any_cont32_span5{display: inline-block; width: 1rem;height: 1rem;background: url(/src/assets/img/评论.png);
background-size:1rem;position: absolute;top: 0.1rem;left: 13.8rem;}
.footer_title{width: 100%;height: 8rem; font-size:2rem;color: #666;text-align: center;float: left;margin: 1.5rem 0 5rem 0;}
</style>