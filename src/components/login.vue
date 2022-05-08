<template>
<div>
    <div class="login" style="overflow:auto;">
        <!-- <div class="swiper-slide" style="height:113rem;overflow:auto;"> -->
            <img src="src/assets/img/login10.png" style="width:100%;height:100%;"/>
            <van-form @submit="onSubmit" class="white">
                <img class="white_logo" src="src/assets/img/login2.png"/>
                <p class="white_tit">欢迎登录有声读物~</p>
                <p class="white_txt1">未注册的用户将自动注册</p>
                <p class="white_put1">
                    <img src="src/assets/img/login8.png" class="white_put1_img1"/>
                    <van-field
                            v-model="username"
                            name="用户名"
                            placeholder="请输入用户名"
                            :rules="[{ required: true, message: '请填写用户名' }]"

                    />
                </p>
                <p class="white_put1">
                    <img src="src/assets/img/login3.png" class="white_put1_img1"/>
                    <van-field
                        v-model="password"
                        type="password"
                        name="密码"
                        placeholder="请输入密码"
                        :rules="[{ required: true, message: '请填写密码' }]"
                    />
                </p>
                <p class="white_put1">
                    <img src="src/assets/img/login16.png" class="white_put1_img1"/>
                    <van-field
                        v-model="code"
                        type="number"
                        name="验证码"
                        placeholder="请输入验证码"
                        :rules="[{ required: true, message: '请填写验证码' }]"
                    />
                    <button class="yZm_btn" @click.stop="getCode">{{this.yzm}}</button>
                </p>

                <p class="white_put2">
                    <van-checkbox v-model="checked" icon-size="15px">我已阅读并同意《有声读物用户协议》和隐私政策</van-checkbox>
                </p>
                <p class="white_btn">
                    <van-button 
                        round block 
                        type="info" 
                        native-type="submit" 
                        @click="onSubmit"
                        class="login_btn"
                    >
                        登录
                    </van-button>
                </p>
            </van-form>
            <img src="src/assets/img/login12.png" class="white_left"/>
            <!-- </div> -->
    </div>
</div>
</template>
<script>
import { Toast } from 'vant'
export default {
    data(){
        return{
            username:"",
            password:"",
            code:"",
            checked:false,
            yzm:"获取验证码"
        }
    },
    methods:{
        onSubmit(){
            if(this.username == "13834100288" && this.password == "123456" && this.checked == true && this.code == this.yzm){
                localStorage.setItem("username",this.username)
                localStorage.setItem("password",this.password)
                Toast.success("登录成功！")
                console.log(this.code+"--------"+this.yzm)
                this.$router.push('/homepage')
            }else if(this.username == "" || this.password == "" || this.code == ""){
                Toast("请输入账号、密码以及验证码！")
            }else if(this.checked == false){
                Toast("请先勾选用户协议和隐私政策！")
            }else if(this.code !== this.yzm){
                Toast("验证码输入有误，请重新输入！")
            }else{
                Toast.fail("账号或密码输入有误！")
            }
        },
        random(max,min){
            return Math.round(Math.random()*(max-min)+min)
        },
        getCode(){
            let str = "0123456789";
            let res = "";
            for(let i = 0;i<4;i++){
                res+=str[this.random(0,9)]
            }
            Toast("验证码为："+res)
            this.yzm = res
        }
    },
    created(){
        if(localStorage.getItem("username") && localStorage.getItem("password")){
            this.$router.push('/homepage')
        }
    }
}
</script>
<style lang="less" scoped>
    @import url("../assets/css/account.css");
    /deep/ .van-cell{
        width: 80%;
        height: 100%;
        border: 0px solid red;
        padding: 0;
    }
</style>