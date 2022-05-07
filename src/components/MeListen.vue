<template id="melisten">
    <div class="melisten">
        <div class="melisten_nav">
          <router-link to="/melisten/zhuigeng"  class="homepage_fenlei_anniu">追更<span class="homepage_fenlei_line" style="top:7rem;"></span></router-link>
          <router-link to="/melisten/dingyue"  class="homepage_fenlei_anniu">订阅<span class="homepage_fenlei_line" style="top:7rem;"></span></router-link>
          <router-link to="/melisten/lishi"  class="homepage_fenlei_anniu">历史<span class="homepage_fenlei_line" style="top:7rem;"></span></router-link>
          <router-link to="/melisten/xiazai"  class="homepage_fenlei_anniu">下载<span class="homepage_fenlei_line" style="top:7rem;"></span></router-link>
        </div>
        <div>
          <router-view class="melisten_con"></router-view>
        </div>
    </div>
</template>
<style>
  @import url(../assets/css/homepage.css);
</style>
<script>
export default {
  created(){
    // 判断用户是否登录
    if(!localStorage.getItem("username") && !localStorage.getItem("password")){
        this.$router.push('/login')
    }
  }
}
</script>