<template id="footer">
    <div class="footer" v-if="!$route.meta.TabbarShow">
        <router-link to="/homepage" class="footer_anniu"><img src="src/assets/img/05.png" class="footer_img1">首页</router-link>
        <router-link to="/melisten" class="footer_anniu"><img src="src/assets/img/06.png" class="footer_img1">我听</router-link>
        <router-link to="/play" class="footer_anniu"><img src="src/assets/img/51.png" class="img2">&nbsp;</router-link>
        <router-link to="/discover" class="footer_anniu"><img src="src/assets/img/08.png" class="footer_img1">发现</router-link>
        <router-link to="/account" class="footer_anniu" style="margin-right:0"><img src="src/assets/img/09.png" class="footer_img1">账号</router-link>
    </div>
</template>
<style>
@import url(../assets/css/footer.css);
</style>
