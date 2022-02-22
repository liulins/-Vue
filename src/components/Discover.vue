<template id="discover">
<!-- 发现页面 -->
    <div class="discover">
        <div class="melisten_nav">
          <router-link to="/discover/guanzhu"  class="homepage_fenlei_anniu">关注<span class="homepage_fenlei_line" style="top:7rem;"></span></router-link>
          
          <router-link to="/discover/quanzi"  class="homepage_fenlei_anniu">圈子<span class="homepage_fenlei_line" style="top:7rem;"></span></router-link>
          <router-link to="/discover/shipinfaxian"  class="homepage_fenlei_anniu">视频<span class="homepage_fenlei_line" style="top:7rem;"></span></router-link>
        </div>
        <div>
          <router-view class="discover_con"></router-view>
        </div>
    </div>
</template>
<style>
  @import url(../assets/css/homepage.css);
</style>