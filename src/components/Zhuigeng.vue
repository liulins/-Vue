<template id="zhuigeng">
    <div>
        <p class="zhuigeng_tit">昨天</p>
        <DataList1View class="recommend_datalist1" :arrlists = arrlists></DataList1View>
    </div>
</template>
<style>
  @import url(../assets/css/recommend.css);
</style>
<script>
import {Test1} from '../request/api.js'
import DataList1View from '../components/DataList1'
export default {
  data() {
    return{
      arrlists:[]
    }
  },
  mounted(){
    this.getData()
  },
  components:{
    DataList1View
  },
  methods:{
    // 获取总数据
    getData(){
      var _this = this;
      Test1().then(function(res) {
          // res就是请求成功之后的到的数据
          _this.arrlists = res.data.booklist3
      })
    },
  }
}
</script>