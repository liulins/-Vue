<template id="datalist1">
    <div class="datalist1">
       <ul>
           <li v-for="(k,index) in this.arrlists" :key="index" class="datalist1_li" @click="jumpPage(k.id)">
               <img :src="k.img" class="datalist1_img"/>
               <div class="datalist1_right">
                   <p class="datalist1_right_p1">{{k.title}}</p>
                   <p class="datalist1_right_p2">{{k.txt}}</p>
                   <p class="datalist1_right_p3">
                       <img src="src/assets/img/22.png" class="datalist1_right_p3_img"/>
                       <span class="datalist1_right_p3_span">{{k.play}}</span>
                       <span class="datalist1_right_p3_span1">{{k.renqi}}</span>
                   </p>
               </div>
               <a href="##" class="datalist1_del" @click.stop="delate(index)">×</a>
           </li>
       </ul>
    </div>
</template>

<style>
  @import url(../assets/css/recommend.css);
</style>

<script>
// import {Test1} from '../request/api.js'
export default {
    props:{
        arrlists: {
            type: Array,
            // required: false,
        }
    },
    data(){
        return{
            // arrList:[]
        }
    },
    mounted() {
        // this.getData();
        console.log(this.arrlists)
    },
    created(){
        // console.log(this.$router)
    },
    methods:{
        // getData(){
        //     var _this = this;
        //     Test1().then(function(res) {
        //         // res就是请求成功之后的到的数据
        //         _this.arrList = res.data.booklist1
        //         console.log(_this.arrList)
        //     })
        // },
        jumpPage(id){
            this.$router.push({
                path:'/recommend',
                query:{
                    detail:id,
                },
            })
        },
        delate(index){
            // alert(1)
            // console.log(index)
            // $(".datalist1 ul li").css("display","none")
            console.log(this.arrlists)
            this.arrlists.splice(index,1)
        }
    }
}
</script>