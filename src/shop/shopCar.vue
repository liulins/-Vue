<template>
    <div>
        <div class="shopCar">
            <div class="shop_top">
                <img src="src/assets/img/41.png" class="shop_top_left" @click="back"/>
                <span class="shop_top_title">购物车</span>
                <img src="src/assets/img/分享.png" class="shop_top_right" @click="showShare = true"/>
            </div>
            <div class="shop_mid">
                <ul>
                    <van-checkbox-group v-model="checkedGroup" ref="checkboxGroup">
                        <van-card
                            v-for="(item,index) in shopcard"
                            :desc="item.specifi"
                            :key="index"
                        >
                            <template slot="title">
                                <span class="shop_mid_li1_right_tit">{{item.title}}</span>
                                <span style="float:right;" @click="removeShop(item)"><van-icon name="delete" size="16" color="#c1c1c1"/></span>
                            </template>
                            <template slot="thumb" class="shop_mid_li1_img">  
                                <!-- 自定义左侧部分，为了添加左侧checkbox -->
                                <van-checkbox 
                                    :name="item.title" 
                                    checked-color="#b90505" 
                                    icon-size="15px" 
                                    class="shop_mid_li1"
                                ></van-checkbox>
                                <van-image :src="item.img" class="shop_mid_li1_img"></van-image>
                            </template>
                            <template slot="bottom">  
                                <div class="shop_mid_li1_right_bot_price">
                                    ￥{{item.num * item.price}}
                                </div>
                                <!-- 自定义底部，为了实现商品数量功能 -->
                                <div class="num">
                                    <van-button size="small" @click="minusnum(item)" :disabled="item.num <=1">-</van-button> <!-- 数量小于1时禁用按钮 -->
                                    {{item.num}}
                                    <van-button size="small" @click="addnum(item)">+</van-button>
                                </div>
                            </template>
                        </van-card>
                    </van-checkbox-group>
                </ul>
            </div>
            <!-- 统计 -->
            <div class="count">
                <van-row style="text-align:center">
                    <van-col span="6">  
                        <!-- 全选CheckBox部分 -->
                        <van-checkbox 
                            @click="checkAll" 
                            v-model="isAllChecked" 
                            checked-color="#b90505" 
                            icon-size="15px"
                            class="allSelect"
                        >
                            全选
                        </van-checkbox>
                    </van-col>
                    <van-col span="12" style="font-size:14px">  
                        <!-- 总价格部分 -->
                        总计：<span style="font-size:16px;font-weight:700">{{'￥'+allcount}}</span>
                    </van-col>
                    <van-col span="6"> 
                        <!-- 结算按钮 -->
                        <van-button round color="#b90505">结算</van-button>
                    </van-col>
                </van-row>
            </div>
        </div>
        <!-- 分享面板 -->
        <van-share-sheet
            v-model="showShare"
            title="立即分享给好友"
            :options="options"
            @select="onSelect"
        />
    </div>
</template>
<style lang="less" scoped>
    @import url(../assets/css/recommend.css);
    /deep/ .van-stepper__minus{
        width: 3rem;
        height: 3rem;
    }
    /deep/ .van-stepper__plus{
        width: 3rem;
        height: 3rem;
    }
    /deep/ .van-stepper__input{
        width: 3rem;
        height: 3rem;
    }
    /deep/ .van-card__thumb{
        width: 22rem;
    }
    /deep/ .van-card__desc{
        line-height: 5rem;
        background: #efefef;
        letter-spacing: 0.3rem;
        padding-left: 1.5rem;
        max-height: 5rem;
    }
    /deep/ .num{
        float: right;
    }
    /deep/ .van-card__bottom{
        line-height: 4rem;
        margin-top: 2rem;
    }
    /deep/ .van-button--normal{
        width: 18rem;
        float: right;
        margin-right: 2.5rem;
    }
    /deep/ .van-checkbox__icon{
        margin-top: 2.2rem;
        height: 5rem;
    }
</style>
<script>
import { Toast } from 'vant';
import {Test2} from '../request/api.js'
export default {
    data(){
        return{
            shopcard:[],
            showShare:false,
            options: [
                [
                    { name: '微信', icon: 'wechat' },
                    { name: '朋友圈', icon: 'wechat-moments' },
                    { name: '微博', icon: 'weibo' },
                    { name: 'QQ', icon: 'qq' },
                ],
                [
                    { name: '复制链接', icon: 'link' },
                    { name: '分享海报', icon: 'poster' },
                    { name: '二维码', icon: 'qrcode' },
                    { name: '小程序码', icon: 'weapp-qrcode' },
                ],
            ],
            radio:'1',
            value:1,
            checkedGroup:[],
            singleGoods:""
        }
    },
    created(){
        
    },
    methods:{
        back(){
            this.$router.go(-1)  
        },
        onSelect(option) {
            // Toast(option.name);
            Toast("分享成功！")
            this.showShare = false;
        },
        plusNum(id){
            // 阻止事件冒泡
            event.stopPropagation();
        },
        minusNum(id){
            // 阻止事件冒泡
            event.stopPropagation();
        },
        getData(){
            var _this = this;
            Test2().then(function(res){
                _this.shopcard = res.data.shopCar
            })
        },
        // 点击全选按钮时
        checkAll(){
            //有商品卡片选中
            if(this.checkedGroup.length !== 0){ 
                //总商品数与选中商品卡片数相等，说明此时已全选
                if(this.checkedGroup.length === this.shopcard.length){ 
                    //令所有选中的反选，即全不选
                    this.$refs.checkboxGroup.toggleAll(false); 
                    //商品卡片数部分选中
                }else{ 
                    //令所有商品全部选中
                    this.$refs.checkboxGroup.toggleAll(true); 
                }
            }else{ //没有商品卡片选中，直接全选
                this.$refs.checkboxGroup.toggleAll(true);
            }
        },
        addnum(item){
            // this.shopcard.find(element => {
            //     return element.title === item.title
            // }).num = parseInt(item.num) + 1
            item.num = item.num + 1
            this.singleGoods = item.num * item.price
        },
        minusnum(item){
            // this.shopcard.find(element => {
            //     return element.title === item.title
            // }).num = parseInt(item.num) - 1
            item.num = item.num - 1
            this.singleGoods = item.num * item.price
        },
        removeShop(item){
            for(let i=0;i<this.shopcard.length;i++){
                if(item.title === this.shopcard[i].title){
                    let index = this.checkedGroup.indexOf(item.title)
                    this.shopcard.splice(i,1) //移除商品
                    if(index === -1){
                        return
                    }
                    this.checkedGroup.splice(index,1) //移除checkedGroup中刚刚删除的商品，不然不会即时刷新
                }
            }
        },
    },
    mounted(){
        this.getData()
    },
    computed:{
        //判断全选状态
        isAllChecked(){
            if(this.checkedGroup.length === this.shopcard.length && this.shopcard.length !==0){ //选中数与商品总数相等并且购物车内存在商品
                return true //表示全选状态
            }else{
                return false //表示未全选
            }
        },
        // 总价计算
        allcount(){
            let sumup = 0
            for(let i=0;i<this.shopcard.length;i++){
                //判断是否选中商品，未选中不计算在内
                if(this.checkedGroup.find(item => { 
                    return item === this.shopcard[i].title
                })){
                    sumup += this.shopcard[i].num*this.shopcard[i].price
                }else{
                    continue
                }
            }
            return sumup
        },
    }
}
</script>