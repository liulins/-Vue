<template>
    <div class="mu_any" id="muany" style="position:relative;top:4rem;">
        <div class="mu_any1" v-for="(k1,index) in arrList16" :key="index" >
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
            _this.arrList16=res.data.data5
            console.log(res.data.data6)
        })
       },
   }
}
 </script>
 
<style>
@import url(../assets/css/homepage.css);
</style>