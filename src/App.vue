<template>
  <div id="app">
      <!-- <HomeView></HomeView> -->
      <router-view class="home"></router-view>
      <FooterView></FooterView>
  </div>
</template>

<script>
  import HomeView from "./components/Home"
  import FooterView from "./components/Footer"
export default {
  name: 'app',
  data () {
    return {}
  },
  components:{
    HomeView,
    FooterView
  }
}
</script>

<style>
  @import url(assets/css/app.css);
</style>
