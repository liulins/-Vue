<template>
    <div>
        <div class="privacy">
            <div class="privacy_top">
                <img src="src/assets/img/41.png" class="play_top_back"  @click="back"/>
                收听偏好
            </div>
            <div class="privacy_mid">
                <div class="accountLogin1">
                    <p class="accountLogin1_tit">
                    隐私管理
                    </p>
                    <van-cell-group>
                        <van-cell center title="个性化内容推荐" label="关闭后将不再展示首页猜你喜欢，且推荐的内容相关性将降低">
                          <template #right-icon>
                            <van-switch v-model="checked1" size="16"/>
                          </template>
                        </van-cell>
                        <van-cell center title="被其他应用中断后继续播放" label = "关闭后看到的广告数量不变但相关度会降低">
                          <template #right-icon>
                            <van-switch v-model="checked2" size="16" />
                          </template>
                        </van-cell>
                        <van-cell center title="禁止部分蓝牙设备连接后自动播放" label="关闭后在播放页/主页的打赏均匿名显示（非直播）">
                          <template #right-icon>
                            <van-switch v-model="checked3" size="16" />
                          </template>
                        </van-cell>
                    </van-cell-group>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            checked1:true,
            checked2:false,
            checked3:false,
        }
    },
    methods:{
        // 返回上一级
        back(){
            this.$router.go(-1)
        },
    }
}
</script>
<style lang="less" scoped>
    @import url(../assets/css/account.css);
    /deep/ .van-switch--on{
      background-color: #ffa600;
    }
</style>