<template>
  <div>
    <!-- 播放页面 -->
    <div class="play_top">
        <img src="src/assets/img/38.png" class="play_top_back"  @click="back"/>
        <div class="play_top_anniu">
          <a href="##" :class="index == 0 ? 'play_top_anniu1' : ''" @click="dian">声音</a>
          <a href="##" :class="index == 1 ? 'play_top_anniu1' : ''" @click="dians">评论</a>
        </div>
        <div class="play_box">
            <div class="swiper">
              <div class="swiper-wrapper">
                  <div class="swiper-slide" style="height:112.9rem;overflow:auto;background-image: linear-gradient(to bottom,#050542,rgb(71 71 147),#000056);">
                    <!-- 音乐播放 -->
                    <div class="play_box1">
                      <img src="src/assets/img/ia_100000018.webp" class="play_box1_img1"/>
                      <img src="src/assets/img/48.png" class="play_box1_img2"/>
                      <span class="play_box1_span1">461</span>
                    </div>
                    <p class="play_p1">
                      blackEYE004.特别节目_对于男人，我们不理解（girls'time!）
                    </p>
                    <p class="play_p2">
                      <span class="play_p2_span1">粉红救兵 ></span>
                      <span class="play_p2_span2">免费订阅</span>
                    </p>
                    <p class="play_p3">
                      <img src="src/assets/img/52.png" class="play_p3_img1"/>
                      <img src="src/assets/img/53.png" class="play_p3_img1"/>
                      <img src="src/assets/img/54.png" class="play_p3_img1"/>
                      <img src="src/assets/img/55.png" class="play_p3_img1"/>
                      <img src="src/assets/img/56.png" class="play_p3_img1" style="margin-right:0;"/>
                    </p>
                    <van-divider class="line">有声读物</van-divider>
                    <div class="play_p4">
                      <div id="app-cover">
                        <!-- <div id="bg-artwork"></div> -->
                        <!-- <div id="bg-layer"></div> -->
                        <div id="player">
                          <div id="player-track">
                            <div id="album-name"></div>
                            <div id="track-name"></div>
                            <div id="track-time">
                              <div id="current-time"></div>
                              <div id="track-length"></div>
                            </div>
                            <div id="s-area">
                              <div id="ins-time"></div>
                              <div id="s-hover"></div>
                              <div id="seek-bar"></div>
                            </div>
                          </div>
                          <div id="player-content">
                            <div id="album-art">
                              <img src="src/assets/img/ia_100000018.webp" class="active" id="_1">
                              <div id="buffer-box">Buffering ...</div>
                            </div>
                            <div id="player-controls">
                              <div class="control">
                                <div class="button" id="play-previous">
                                  <i class="fas fa-backward"></i>
                                </div>
                              </div>
                              <div class="control">
                                <div class="button" id="play-pause-button">
                                  <i class="fas fa-play"></i>
                                </div>
                              </div>
                              <div class="control">
                                <div class="button" id="play-next">
                                  <i class="fas fa-forward"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- <audio src="src/assets/audio/01.mp3" class="play_p4_music1" controls></audio> -->
                    </div>
                  </div>
                  <div class="swiper-slide" style="height:112.9rem;overflow:auto;">
                    <div class="play_box2">
                      <p class="play_box2_p1">
                        <span class="play_box2_p1_span1">评论区()</span>
                        <span class="play_box2_p1_span2">推荐 | 最新</span>
                      </p>
                      <div class="play_box2_p2">
                        <ul id="comment_box">
                          <li class="play_box2_p2_1">
                              <img src="src/assets/img/ia_100000003000.webp" class="play_box2_p2_1_img"/>
                              <p class="play_box2_p2_1_p1">
                                <span class="play_box2_p2_1_p1_span1">美少女战士</span>
                                <span class="play_box2_p2_1_p1_span2">2021-11-16-22:16</span>
                              </p>
                              <p class="play_box2_p2_1_p2">
                                两个性别之间的不理解，好像在这几年愈演愈烈，一不小心就会演变为打拳。
                              </p>
                          </li>
                        </ul>
                        
                      </div>
                      <div class="play_box2_p3">
                        <img src="src/assets/img/ia_100000000510.jpg" class="play_box2_p3_img1"/>
                        <img src="src/assets/img/57.png" class="play_box2_p3_img2"/>
                        <input type="text" placeholder="发表图片评论，你就是热评区最靓的仔！" class="play_box2_p3_put1" id="btn_send"/>
                        <button class="play_box2_p3_but" id="play_box2_p3_but" @click="send">发 送</button>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import "../assets/js/swiper.min.js"
import { Toast } from 'vant';
$(function () {
  var playerTrack = $("#player-track"),
    bgArtwork = $("#bg-artwork"),
    bgArtworkUrl,
    albumName = $("#album-name"),
    trackName = $("#track-name"),
    albumArt = $("#album-art"),
    sArea = $("#s-area"),
    seekBar = $("#seek-bar"),
    trackTime = $("#track-time"),
    insTime = $("#ins-time"),
    sHover = $("#s-hover"),
    playPauseButton = $("#play-pause-button"),
    i = playPauseButton.find("i"),
    tProgress = $("#current-time"),
    tTime = $("#track-length"),
    seekT,
    seekLoc,
    seekBarPos,
    cM,
    ctMinutes,
    ctSeconds,
    curMinutes,
    curSeconds,
    durMinutes,
    durSeconds,
    playProgress,
    bTime,
    nTime = 0,
    buffInterval = null,
    tFlag = false,
    albums = [
      "Dawn",
      "Me & You",
      "Electro Boy",
      "Home",
      "Proxy (Original Mix)"
    ],
    trackNames = [
      "Skylike - Dawn",
      "Alex Skrindo - Me & You",
      "Kaaze - Electro Boy",
      "Jordan Schor - Home",
      "Martin Garrix - Proxy"
    ],
    albumArtworks = ["_1"],
    trackUrl = [
      // "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/2.mp3"
      "src/assets/audio/01.mp3"
    ],
    playPreviousTrackButton = $("#play-previous"),
    playNextTrackButton = $("#play-next"),
    currIndex = -1;
   let audio = new Audio()

  function playPause() {
    setTimeout(function () {
      if (audio.paused) {
        playerTrack.addClass("active");
        albumArt.addClass("active");
        checkBuffering();
        i.attr("class", "fas fa-pause");
        audio.play();
        $(".play_p4").css("margin-top","9rem")
      } else {
        playerTrack.removeClass("active");
        albumArt.removeClass("active");
        clearInterval(buffInterval);
        albumArt.removeClass("buffering");
        i.attr("class", "fas fa-play");
        audio.pause();
        $(".play_p4").css("margin-top","2.5rem")
      }
    }, 300);
  }

  function showHover(event) {
    seekBarPos = sArea.offset();
    seekT = event.clientX - seekBarPos.left;
    seekLoc = audio.duration * (seekT / sArea.outerWidth());

    sHover.width(seekT);

    cM = seekLoc / 60;

    ctMinutes = Math.floor(cM);
    ctSeconds = Math.floor(seekLoc - ctMinutes * 60);

    if (ctMinutes < 0 || ctSeconds < 0) return;

    if (ctMinutes < 0 || ctSeconds < 0) return;

    if (ctMinutes < 10) ctMinutes = "0" + ctMinutes;
    if (ctSeconds < 10) ctSeconds = "0" + ctSeconds;

    if (isNaN(ctMinutes) || isNaN(ctSeconds)) insTime.text("--:--");
    else insTime.text(ctMinutes + ":" + ctSeconds);

    insTime.css({ left: seekT, "margin-left": "-21px" }).fadeIn(0);
  }

  function hideHover() {
    sHover.width(0);
    insTime.text("00:00").css({ left: "0px", "margin-left": "0px" }).fadeOut(0);
  }

  function playFromClickedPos() {
    audio.currentTime = seekLoc;
    seekBar.width(seekT);
    hideHover();
  }

  function updateCurrTime() {
    nTime = new Date();
    nTime = nTime.getTime();

    if (!tFlag) {
      tFlag = true;
      trackTime.addClass("active");
    }

    curMinutes = Math.floor(audio.currentTime / 60);
    curSeconds = Math.floor(audio.currentTime - curMinutes * 60);

    durMinutes = Math.floor(audio.duration / 60);
    durSeconds = Math.floor(audio.duration - durMinutes * 60);

    playProgress = (audio.currentTime / audio.duration) * 100;

    if (curMinutes < 10) curMinutes = "0" + curMinutes;
    if (curSeconds < 10) curSeconds = "0" + curSeconds;

    if (durMinutes < 10) durMinutes = "0" + durMinutes;
    if (durSeconds < 10) durSeconds = "0" + durSeconds;

    if (isNaN(curMinutes) || isNaN(curSeconds)) tProgress.text("00:00");
    else tProgress.text(curMinutes + ":" + curSeconds);

    if (isNaN(durMinutes) || isNaN(durSeconds)) tTime.text("00:00");
    else tTime.text(durMinutes + ":" + durSeconds);

    if (
      isNaN(curMinutes) ||
      isNaN(curSeconds) ||
      isNaN(durMinutes) ||
      isNaN(durSeconds)
    )
      trackTime.removeClass("active");
    else trackTime.addClass("active");

    seekBar.width(playProgress + "%");

    if (playProgress == 100) {
      i.attr("class", "fa fa-play");
      seekBar.width(0);
      tProgress.text("00:00");
      albumArt.removeClass("buffering").removeClass("active");
      clearInterval(buffInterval);
    }
  }

  function checkBuffering() {
    clearInterval(buffInterval);
    buffInterval = setInterval(function () {
      if (nTime == 0 || bTime - nTime > 1000) albumArt.addClass("buffering");
      else albumArt.removeClass("buffering");

      bTime = new Date();
      bTime = bTime.getTime();
    }, 100);
  }

  function selectTrack(flag) {
    if (flag == 0 || flag == 1) ++currIndex;
    else --currIndex;

    if (currIndex > -1 && currIndex < albumArtworks.length) {
      if (flag == 0) i.attr("class", "fa fa-play");
      else {
        albumArt.removeClass("buffering");
        i.attr("class", "fa fa-pause");
      }

      seekBar.width(0);
      trackTime.removeClass("active");
      tProgress.text("00:00");
      tTime.text("00:00");

      let currAlbum = albums[currIndex];
      let currTrackName = trackNames[currIndex];
      let currArtwork = albumArtworks[currIndex];

      audio.src = trackUrl[currIndex];

      nTime = 0;
      bTime = new Date();
      bTime = bTime.getTime();

      if (flag != 0) {
        audio.play();
        playerTrack.addClass("active");
        albumArt.addClass("active");

        clearInterval(buffInterval);
        checkBuffering();
      }

      albumName.text(currAlbum);
      trackName.text(currTrackName);
      albumArt.find("img.active").removeClass("active");
      $("#" + currArtwork).addClass("active");

      bgArtworkUrl = $("#" + currArtwork).attr("src");

      bgArtwork.css({ "background-image": "url(" + bgArtworkUrl + ")" });
    } else {
      if (flag == 0 || flag == 1) --currIndex;
      else ++currIndex;
    }
  }

  function initPlayer() {
    // audio = new Audio();
  //  let audio = new Audio()

    selectTrack(0);

    audio.loop = false;

    playPauseButton.on("click", playPause);

    sArea.mousemove(function (event) {
      showHover(event);
    });

    sArea.mouseout(hideHover);

    sArea.on("click", playFromClickedPos);

    $(audio).on("timeupdate", updateCurrTime);

    playPreviousTrackButton.on("click", function () {
      selectTrack(-1);
    });
    playNextTrackButton.on("click", function () {
      selectTrack(1);
    });
  }

  initPlayer();
});

export default {
  data() {
    return {
      currentIndex : 0,
      index:0,
      kkl:'',
      li_length:"",
    };
  },
  methods: {
    dian(){
      this.index = 0
      this.kkl.slideTo(0,300,false)
    },
    dians(){
      this.index = 1
      this.kkl.slideTo(1,300,false)
    },
    // 返回上一级
    back(){
        this.$router.go(-1)
    },
    send(){
      let content = $("#btn_send").val()
      if(content.length === 0){
        Toast('请输入内容！');
        return;
      }
      let newLi = document.createElement("li")
      newLi.className = "play_box2_p2_1"
      let head = document.createElement("img")
      head.setAttribute("src","src/assets/img/ia_100000003000.webp")
      head.className = "play_box2_p2_1_img"
      newLi.appendChild(head)

      let oP = document.createElement("p")
      oP.className = "play_box2_p2_1_p1"
      let oName = document.createElement("span")
      oName.className = "play_box2_p2_1_p1_span1"
      oName.innerHTML = "美少女战士"
      oP.appendChild(oName)

      let oTime = document.createElement("span")
      oTime.className = "play_box2_p2_1_p1_span2"
      let now_year = new Date().getFullYear()
      let now_mouth = new Date().getMonth() + 1
      let now_Date = new Date().getDate()
      let now_hour = new Date().getHours() < 10 ? "0" + new Date().getHours() : new Date().getHours()
      let now_minute = new Date().getMinutes() < 10 ? "0" + new Date().getMinutes() : new Date().getMinutes()
      oTime.innerHTML = now_year+"-"+now_mouth+"-"+now_Date + "-" + now_hour+":"+ now_minute
      oP.appendChild(oTime)

      newLi.appendChild(oP)

      let oComment = document.createElement("p")
      oComment.className = "play_box2_p2_1_p2"
      oComment.innerHTML = content
      newLi.appendChild(oComment)

      let commentBox = document.getElementById("comment_box")
      commentBox.appendChild(newLi)

      let put_btn = document.getElementById("btn_send")
      console.log(put_btn.value)
      put_btn.value = ""
    }
  },
  mounted() {
    var _this = this;
    var myswiper = new Swiper('.swiper', {
        pagination: '.swiper-pagination',
        // 点击按钮时对应盒子
        paginationClickable: true,
        // 前进按钮的css选择器或HTML元素。
        nextButton: '.swiper-button-next',
        // 后退按钮的css选择器或HTML元素
        prevButton: '.swiper-button-prev',
        // 两盒子之间的距离
        spaceBetween: 30,
        onSlideChangeStart: function (swiper) {
        //         console.log(swiper.activeIndex);
                _this.index = swiper.activeIndex; 
                // console.log(_this.index)
         }
    });
    this.kkl = myswiper;
  },
  created(){
    // 判断用户是否登录
    if(!localStorage.getItem("username") && !localStorage.getItem("password")){
        this.$router.push('/login')
    }
  }
};
</script>
<style lang="less" scoped>
  @import url(../assets/css/demo01.css);
  @import url(../assets/css/homepage.css);
  @import url("https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/font-awesome/5.3.0/css/all.min.css");
 
  *:focus {
    outline: none;
  }
  #app-cover {
    /* position: absolute; */
    /* top: 50%; */
    /* right: 0; */
    /* left: 0; */
    width: 100%;
    height: 100%;
    /* margin: -4px auto; */
  }

  #bg-artwork {
    position: fixed;
    top: -30px;
    right: -30px;
    bottom: -30px;
    left: -30px;
    background-image: url("https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    filter: blur(40px);
    -webkit-filter: blur(40px);
    z-index: 1;
  }

  #bg-layer {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #fff;
    opacity: 0.51;
    z-index: 2;
  }

  #player {
    position: relative;
    height: 100%;
    z-index: 3;
    top: 5rem;
  }

  #player-track {
    position: absolute;
    top: 0;
    height: 14rem;
    right: 15px;
    left: 15px;
    padding: 1.3rem 4.5rem 10px 3.9rem;
    background-color: #e7e7ff;
    border-radius: 3rem;
    transition: 0.3s ease top;
    z-index: 1;
  }

  #player-track.active {
    top: -13rem;
  }

  #album-name {
    color: #54576f;
    font-size: 17px;
    font-weight: bold;
  }

  #track-name {
    color: #acaebd;
    font-size: 13px;
    margin: 2px 0 13px 0;
  }

  #track-time {
    height: 3.3rem;
    margin-bottom: 3px;
    overflow: hidden;
  }

  #current-time {
    float: left;
  }

  #track-length {
    float: right;
  }

  #current-time,
  #track-length {
    color: transparent;
    font-size: 11px;
    background-color: #ffe8ee;
    border-radius: 10px;
    transition: 0.3s ease all;
  }

  #track-time.active #current-time,
  #track-time.active #track-length {
    color: #f86d92;
    background-color: transparent;
  }

  #s-area,
  #seek-bar {
    position: relative;
    height: 1.3rem;
    border-radius: 2.1rem;
  }

  #s-area {
    background-color: #ffe8ee;
    cursor: pointer;
  }

  #ins-time {
    position: absolute;
    top: -29px;
    color: #fff;
    font-size: 12px;
    white-space: pre;
    padding: 5px 6px;
    border-radius: 4px;
    display: none;
  }

  #s-hover {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    opacity: 0.2;
    z-index: 2;
  }

  #ins-time,
  #s-hover {
    background-color: #3b3d50;
  }

  #seek-bar {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 0;
    background-color: #fd6d94;
    transition: 0.2s ease width;
    z-index: 1;
  }

  #player-content {
    position: relative;
    height: 80%;
    background-color: #171768;
    box-shadow: 0 30px 80px #01012a;
    border-radius: 3rem;
    z-index: 2;
  }

  #album-art {
    position: absolute;
    top: -4rem;
    width: 15rem;
    height: 15rem;
    margin-left: 5rem;
    -webkit-transform: rotateZ(0);
    transform: rotateZ(0);
    -webkit-transition: 0.3s ease all;
    transition: 0.3s ease all;
    box-shadow: 0 0 0 1.5rem #fff;
    border-radius: 50%;
    overflow: hidden;
  }

  #album-art.active {
    top: -60px;
    box-shadow: 0 0 0 4px #fff7f7, 0 30px 50px -15px #afb7c1;
  }

  #album-art:before {
    content: "";
    position: absolute;
    top: 42%;
    right: 0;
    left: 0;
    width: 2.5rem;
    height: 2.5rem;
    margin: -10px auto 0 auto;
    background-color: #d6dee7;
    border-radius: 50%;
    box-shadow: inset 0 0 0 2px #fff;
    z-index: 2;
  }

  #album-art img {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: -1;
  }

  #album-art img.active {
    opacity: 1;
    z-index: 1;
  }

  #album-art.active img.active {
    z-index: 1;
    animation: rotateAlbumArt 3s linear 0s infinite forwards;
  }

  @keyframes rotateAlbumArt {
    0% {
      transform: rotateZ(0);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }

  #buffer-box {
    position: absolute;
    top: 43%;
    right: 0;
    left: 0;
    height: 2.5rem;
    color: #1f1f1f;
    font-size: 13px;
    font-family: Helvetica;
    text-align: center;
    font-weight: bold;
    line-height: 1;
    padding: 6px;
    margin: -12px auto 0 auto;
    background-color: rgba(255, 255, 255, 0.19);
    opacity: 0;
    z-index: 2;
  }

  #album-art img,
  #buffer-box {
    transition: 0.1s linear all;
  }

  #album-art.buffering img {
    opacity: 0.25;
  }

  #album-art.buffering img.active {
    opacity: 0.8;
    filter: blur(2px);
    -webkit-filter: blur(2px);
  }

  #album-art.buffering #buffer-box {
    opacity: 1;
  }

  #player-controls {
    width: 40rem;
    margin: 5rem -1.8rem 0 1.76rem;
    float: right;
    overflow: hidden
  }

  .control {
    width: 33.333%;
    float: left;
    padding: 12px 0;
  }

  .button {
    width: 5rem;
    height: 5rem;
    padding: 25px;
    /* background-color: #fff; */
    border-radius: 6px;
    cursor: pointer;
  }

  .button i {
    display: block;
    color: #d6dee7;
    font-size: 4rem;
    text-align: center;
    line-height: 1;
  }

  .button,
  .button i {
    transition: 0.2s ease all;
  }

  .button:hover {
    background-color: #000066;
  }

  .button:hover i {
    color: #fff;
  }
  /deep/ .van-divider{
    margin: 0;
  }
</style>
