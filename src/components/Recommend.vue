<template id="recommend">
    <div class="recommend">
        <div class="recommend_box1">
          <ul>
            <router-link to="/homepage/recommend/ruzhan" class="recommend_box1_li">
              <div class="recommend_box1_lis">
                <img src="src/assets/img/10.png" class="recommend_box1_img1"/>
              </div>
              <p class="recommend_box1_txt">入站必听</p>
            </router-link>
            <router-link to="/homepage/recommend/suibian" class="recommend_box1_li">
              <div class="recommend_box1_lis">
                <img src="src/assets/img/11.png" class="recommend_box1_img1"/>
              </div>
              <p class="recommend_box1_txt">随便听</p>
            </router-link>
            <router-link to="/homepage/recommend/zhumian" class="recommend_box1_li">
              <div class="recommend_box1_lis">
                <img src="src/assets/img/12.png" class="recommend_box1_img1"/>
              </div>
              <p class="recommend_box1_txt">助眠专注</p>
            </router-link>
            <router-link to="/homepage/recommend/ertong" class="recommend_box1_li">
              <div class="recommend_box1_lis">
                <img src="src/assets/img/13.png" class="recommend_box1_img1"/>
              </div>
              <p class="recommend_box1_txt">儿童故事</p>
            </router-link>
            <router-link to="/homepage/recommend/tingyinyue" class="recommend_box1_li" style="margin-right:0">
              <div class="recommend_box1_lis">
                <img src="src/assets/img/14.png" class="recommend_box1_img1"/>
              </div>
              <p class="recommend_box1_txt">听音乐</p>
            </router-link>
            <router-link to="/homepage/recommend/mianfei" class="recommend_box1_li">
              <div class="recommend_box1_lis">
                <img src="src/assets/img/15.png" class="recommend_box1_img1"/>
              </div>
              <p class="recommend_box1_txt">免费小说</p>
            </router-link>
            <router-link to="/homepage/recommend/xiangsheng" class="recommend_box1_li">
              <div class="recommend_box1_lis">
                <img src="src/assets/img/16.png" class="recommend_box1_img1"/>
              </div>
              <p class="recommend_box1_txt">相声评书</p>
            </router-link>
            <router-link to="/homepage/recommend/lishigushi" class="recommend_box1_li">
              <div class="recommend_box1_lis">
                <img src="src/assets/img/17.png" class="recommend_box1_img1"/>
              </div>
              <p class="recommend_box1_txt">历史故事</p>
            </router-link>
            <router-link to="/homepage/recommend/xueyingyu" class="recommend_box1_li">
              <div class="recommend_box1_lis">
                <img src="src/assets/img/18.png" class="recommend_box1_img1"/>
              </div>
              <p class="recommend_box1_txt">学英语</p>
            </router-link>

            <router-link to="/homepage/recommend/quanbu" class="recommend_box1_li" style="margin-right:0">
              <div class="recommend_box1_lis">
                <img src="src/assets/img/19.png" class="recommend_box1_img1"/>
              </div>
              <p class="recommend_box1_txt">全部分类</p>
            </router-link>
          </ul>
        </div>
        <!-- 路由出口 -->
        <router-view class="recommend_view"></router-view>
        <div class="recommend_box2">
          <div class="recommend_box2_tit">
            <p class="recommend_box2_p">
              <span class="recommend_box2_tit1">猜你喜欢</span>
              <span>
                <span class="recommend_box2_txt">换一批</span>
                <img src="src/assets/img/21.png" class="recommend_box2_img1"/>
              </span>
            </p>
            <DataList1View class="recommend_datalist1"></DataList1View>
          </div>
        </div>
        
    </div>
</template>
<style>
  @import url(../assets/css/recommend.css);
</style>
<script>
import DataList1View from '../components/DataList1'
export default {
  data() {
    return{
    }
  },
  components:{
    DataList1View
  }
}
</script>