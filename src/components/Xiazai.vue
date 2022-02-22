<template id="xiazai">
    <div>
        <div class="xiazai_box1">
            <p class="xiazai_box1_p1">
                已占用0.00B / 96.35G
            </p>
            <div class="xiazai_box1_p2">
                <img src="src/assets/img/47.png" class="xiazai_box1_p2_img1"/>
                <p class="xiazai_box1_p2_p">没有下载记录</p>
            </div>
        </div>
        <div class="xiazai_box2">
            <p class="xiazai_box2_p1">
                —————  你可能感兴趣的内容  —————
            </p>
            <DataList1View class="recommend_datalist1"></DataList1View>
        </div>
    </div>
</template>
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
<style>
  @import url(../assets/css/recommend.css);
</style>