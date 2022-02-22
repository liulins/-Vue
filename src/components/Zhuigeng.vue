<template id="zhuigeng">
    <div>
        <p class="zhuigeng_tit">昨天</p>
        <DataList1View class="recommend_datalist1"></DataList1View>
    </div>
</template>
<style>
  @import url(../assets/css/recommend.css);
</style>
<script>
import DataList1View from '../components/DataList1'
export default {
  data() {
    return{}
  },
  components:{
    DataList1View
  }
}
</script>