<template>
    <div>
        <div class="re_d-nav" style="background:#333;float:none;margin-top: -1.5rem;height:10rem;">
            <img src="src/assets/img/38.png" class="re_d-nav_img1" @click="back"/>
            <img src="src/assets/img/39.png" class="re_d-nav_img2"/>
        </div>
        <div class="videos">
            <video-player 
                        class="video-player vjs-custom-skin"
                        ref="videoPlayer"
                        :playsinline="true"
                        :options="playerOptions"
                        @pause="onPlayerPause($event)"
                        @play="onPlayerPlay($event)"
                        @ended="onPlayerEnded($event)"
                        @statechanged="playerStateChanged($event)"
            ></video-player>

        </div>
    </div>
</template>
<style lang="less" scoped>
@import url(../assets/css/recommend.css);
  .videos {
    position: relative;
    // 采用/deep/ 实现样式穿透
    /deep/ .vjs-big-play-button {
      position: absolute;
      width: 80px;
      height: 80px;
      border: none;
      background-color: transparent;
      left: 40%;
      top: 40%;
      content: none;

      .vjs-icon-placeholder {
        font-size: 18rem;
        color: rgba(255, 255, 255, 0.7);
      }
    }
    /deep/ .video-js {
      height: calc(100vh - 50px);
    }
    /deep/ .video-js .vjs-tech{
        top: -2rem;
    }
  }
</style>
<script>
import { videoPlayer } from 'vue-video-player';
import {Test1} from '../request/api.js'
import {Test2} from '../request/api.js'
export default {
    name: 'Videos',
    props: ['video', 'index'],
    data() {
        return {
            a:"",
            playerOptions: {
                autoplay: true, // 如果true,浏览器准备好时开始回放。
                muted: false, // 默认情况下将会消除任何音频。
                loop: true, // 导致视频一结束就重新开始。
                preload: 'auto',
                language: 'zh-CN',
                fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                sources: [
                    {
                        src:"",
                        type: 'video/mp4', // 类型
                    },
                ],
                // poster: "../../static/images/test.jpg", //你的封面地址
                width: document.documentElement.clientWidth,
                notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
                controlBar: false,
            },
            playing: true,
            playBtn: '',
            videoListId:this.$route.query.detail,
            videoList:[]
        };
    },

    components: {
        videoPlayer,
    },
    created() {
        
    },

    methods: {
        getData(){
            var _this = this;
            Test1().then(function(res) {
                // res就是请求成功之后的到的数据
                _this.videoList = res.data.videoList
                console.log(res.data.videoList)
                _this.a = _this.videoList[_this.$route.query.detail].video;
                _this.playerOptions['sources'][0]['src'] = _this.videoList[_this.$route.query.detail].video;
            })
        },
        onPlayerPause(player){
            console.log(player)
            this.playing = false
        },
        // 状态监听
        playerStateChanged(playerCurrentState) {
            // console.log('播放器当前状态更新', playerCurrentState)
        },
        onPlayerPlay(player){
            console.log(player)
            this.playing = true
        },
        onPlayerEnded($event) {
            
        },
        onPlayerClick() {
            if (this.playing) {
                this.player.pause();
            } else {
                this.player.play();
            }
        },
        back(){
            this.$router.go(-1)
        }
    },

    mounted(){
         let _this = this;
        _this.getData()
        console.log(_this.$route.query.detail)
        // console.log(_this.videoList[_this.$route.query.detail].video)
    },
    computed:{
        player(){
            return this.$refs.videoPlayer.player
        }
    }
};
</script>