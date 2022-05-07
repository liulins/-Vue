<template>
    <div>
        <div class="shop">
            <!-- 电商详情页-->
            <div class="shop_top">
                <img src="src/assets/img/41.png" class="shop_top_left" @click="back"/>
                <span class="shop_top_title">商品详情</span>
                <img src="src/assets/img/分享.png" class="shop_top_right" @click="showShare = true"/>
            </div>
            <div class="shop_mid">
                <div class="shop_lun">
                    <van-swipe class="my-swipe">
                        <van-swipe-item style="background:#fff;">
                            <img :src="detailData[this.listId].img1" class="shop_lun_img1"/>
                        </van-swipe-item>
                        <van-swipe-item style="background:#fff;">
                            <img src="src/assets/img/10006.jpg" class="shop_lun_img1"/>
                        </van-swipe-item>
                        <van-swipe-item style="background:#fff;">
                            <img src="src/assets/img/10007.jpg" class="shop_lun_img1"/>
                        </van-swipe-item>
                        <van-swipe-item style="background:#fff;">
                            <img src="src/assets/img/10014.jpg" class="shop_lun_img1"/>
                        </van-swipe-item>
                    </van-swipe>
                </div>
                <!-- <p class="shop_price">￥198</p> -->
                <p class="shop_price">{{detailData[this.listId].price}}</p>
                <p class="shop_detail">{{detailData[this.listId].title}}</p>
                <p class="shop_img">
                    <span class="shop_img1">
                        <img src="src/assets/img/对.png"/>
                        <span>有声读物自营</span>
                    </span>
                    <span class="shop_img1">
                        <img src="src/assets/img/对.png" class="shop_img1_img"/>
                        <span>七天无忧退货</span>
                    </span>
                </p>
                <div class="shop_class">
                    <div class="shop_class_select" @click="shopDetail" style="height:9rem;">
                        <span class="shop_class_select_tit">选择</span>
                        <span class="shop_class_select_p">
                            <p>颜色分类/尺码</p>
                            <p class="shop_class_select_p2">
                                <img :src="detailData[this.listId].img8"/>
                                <img :src="detailData[this.listId].img9"/>
                                <img :src="detailData[this.listId].img10"/>
                                <span class="shop_class_select_p2_intro">
                                    共3种颜色分类可选
                                </span>
                            </p>
                        </span>
                    </div>
                    <div class="shop_class_select" @click="showPopup" style="height:8rem;">
                        <span class="shop_class_select_tit">发货</span>
                        <span class="shop_class_select_p">
                            <p>{{detailData[this.listId].address}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;快递：免运费</p>
                            <p class="shop_class_select_p2">
                                <span class="shop_class_select_p2_add">
                                    配送至：北京市 昌平区 城北街道
                                </span>
                            </p>
                        </span>
                    </div>
                    <div class="shop_class_select" @click="showPopup" style="height:3rem;">
                        <span class="shop_class_select_tit">保障</span>
                        <span class="shop_class_select_p">
                            <p>假一赔四 &nbsp;·&nbsp;退货运费险&nbsp;·&nbsp;上门取退&nbsp;</p>
                        </span>
                    </div>
                    <!-- 商品详情 -->
                    <van-sku
                        v-model="show"
                        :sku="sku"
                        :goods="goods"
                        :hide-stock="sku.hide_stock"
                        @buy-clicked="onBuyClicked"
                    />
                    <!-- 地址详情 -->
                    <!-- <van-cell is-link >展示弹出层</van-cell> -->
                    <!-- <van-popup v-model="show1">内容</van-popup> -->
                    <van-popup v-model="show1" round position="bottom" >
                        <van-address-list
                            v-model="chosenAddressId"
                            :list="list"
                            :disabled-list="disabledList"
                            disabled-text="以下地址超出配送范围"
                            default-tag-text="默认"
                            @add="onAdd"
                        />
                    </van-popup>
                </div>
                <div class="shop_evaluate">
                    <p class="shop_evaluate_tit">
                        商品详情
                    </p>
                    <img :src="detailData[this.listId].img5" class="shop_evaluate_img"/>
                    <img :src="detailData[this.listId].img6" class="shop_evaluate_img"/>
                    <img :src="detailData[this.listId].img7" class="shop_evaluate_img"/>
                    <img :src="detailData[this.listId].img8" class="shop_evaluate_img"/>
                </div>
                
            </div>
            <div class="shop_bot">
                <van-goods-action >
                    <van-goods-action-icon icon="chat-o" text="客服" />
                    <van-goods-action-icon icon="shop-o" text="店铺" />
                    <van-goods-action-button color="#be99ff" type="warning" text="加入购物车" @click="addShop(listId)"/>
                    <van-goods-action-button color="#7232dd" type="danger" text="立即购买"  @click="onClickButton"/>
                </van-goods-action>
            </div>
            <!-- 分享面板 -->
            <van-share-sheet
                v-model="showShare"
                title="立即分享给好友"
                :options="options"
                @select="onSelect"
            />
        </div>
    </div>
</template>

<script>
import {Test1} from '../request/api.js'
import {Test2} from '../request/api.js'
import { Toast } from 'vant';
import {mapActions,mapState,mapMutations } from "vuex"
export default {
    name:"ProductList",
    // 创建计算属性，映射products数据，因为开启了命名空间，这里添加了命名空间的写法，后面是映射的属性products
    computed:{
        ...mapState("products",["products"])
    },
    data(){
        return{
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
            listId:this.$route.query.detail,
            detailList:[],
            detailData:[],
            active:0,
            total:"4",
            show: false,
            show1: false,
            sku: {
                tree: [
                    {
                        k: '颜色', // skuKeyName：规格类目名称
                        k_s: 's1', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                        v: [
                            {
                                id: '1', // skuValueId：规格值 id
                                name: '黑色', // skuValueName：规格值名称
                                imgUrl: 'src/assets/img/ia_100000013.jpg', // 规格类目图片，只有第一个规格类目可以定义图片
                                previewImgUrl: 'src/assets/img/ia_100000013.jpg', // 用于预览显示的规格类目图片
                            },
                            {
                                id: '2',
                                name: '白色',
                                imgUrl: 'src/assets/img/ia_100000015.jpg',
                                previewImgUrl: 'src/assets/img/ia_100000015.jpg',
                            },
                            {
                                id: '3',
                                name: '灰色',
                                imgUrl: 'src/assets/img/ia_100000008.jpg',
                                previewImgUrl: 'src/assets/img/ia_100000008.jpg',
                            }
                        ],
                        largeImageMode: true, //  是否展示大图模式
                    },
                    {
                        k_id: 123, // 属性id
                        k: '套餐类型', // 属性名
                        is_multiple: true, // 是否可多选
                        v: [
                            {
                                id: 1, // 属性值id
                                name: '官方标配', // 属性值名
                                price: 0, // 属性值加价
                            },
                            {
                                id: 2,
                                name: '套餐一 惊喜价+小黄鸭',
                                price: 200,
                            },
                            {
                                id: 3,
                                name: '套餐二 惊喜价+煤球',
                                price: 500,
                            },
                        ],
                    },
                ],
                // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
                list: [
                    {
                        id: 2259, // skuId
                        s1: '1', // 规格类目 k_s 为 s1 的对应规格值 id
                        s2: '1', // 规格类目 k_s 为 s2 的对应规格值 id
                        price: 10000, // 价格（单位分）
                        stock_num: 110 // 当前 sku 组合对应的库存
                    }
                ],
                price: '88.88', // 默认价格（单位元）
                stock_num: 8642, // 商品总库存
                collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
                none_sku: false, // 是否无规格商品
                messages: [
                    {
                        // 商品留言
                        datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
                        multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
                        name: '留言', // 留言名称
                        type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
                        required: '1', // 是否必填 '1' 表示必填
                        placeholder: '', // 可选值，占位文本
                        extraDesc: ''  // 可选值，附加描述文案
                    }
                ],
                hide_stock: false // 是否隐藏剩余库存
            },
            goods: {
                // 默认商品 sku 缩略图
                picture: 'src/assets/img/ia_100000013.jpg'
            },
            messageConfig: {
                 // 图片上传回调，需要返回一个promise，promise正确执行的结果需要是一个图片url
                uploadImg: () => {
                    return new Promise((resolve) => {
                    setTimeout(() => resolve('https://img01.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg'), 1000);
                    });
                },
                // 可选项，自定义图片上传逻辑，使用此选项时，会禁用原生图片选择
                customUpload: () => {
                    return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve('https://img01.yzcdn.cn/vant/leaf.jpg');
                    }, 1000);
                    });
                },
                // 最大上传体积 (MB)
                uploadMaxSize: 3,
                // placeholder 配置
                placeholderMap: {
                    text: 'xxx',
                    tel: 'xxx',
                },
                // 初始留言信息
                // 键：留言 name
                // 值：留言内容
                initialMessages: {
                    留言: '留言信息'
                }
            },
            list: [
                {
                    id: '1',
                    name: '张三',
                    tel: '13000000000',
                    address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
                    isDefault: true,
                },
                {
                    id: '2',
                    name: '李四',
                    tel: '1310000000',
                    address: '浙江省杭州市拱墅区莫干山路 50 号',
                },
            ],
            disabledList: [
                {
                id: '3',
                name: '王五',
                tel: '1320000000',
                address: '浙江省杭州市滨江区江南大道 15 号',
                },
            ],
            chosenAddressId: '1',
            shopcard:[]
        }
    },
    methods:{
        // 把actions里面的方法映射进来，第一个依旧是命名空间的写法
        // ...mapActions("products",["getProducts"]),
        ...mapMutations("products",["setProducts"]),
        getData(){
            var _this = this;
            Test1().then(function(res) {
                // res就是请求成功之后的到的数据
                _this.detailList = res.data.recDetail
                this.setProducts(res.data.recDetail)
            })
        },
        getData2(){
            var _this = this;
            Test2().then(function(res){
                _this.shopcard = res.data.shopCar
            })
        },
        getDetail(){
            var _this = this;
            Test2().then(function(res) {
                // res就是请求成功之后的到的数据
                _this.detailData = res.data.shopDetail
            })
        },
        back(){
            this.$router.go(-1)  
        },
        onClickButton() {
            // Toast('即将跳往购物车界面！');
            
        },
        // 点击展开商品详情事件
        shopDetail(){
            this.show = true
        },
        showPopup() {
            this.show1 = true;
        },
        // 点击展开地址详情
        addressDetail(){
        },
         onBuyClicked(){
            Dialog.alert({
                title: '标题',
                message: '弹窗内容',
                theme: 'round-button',
            }).then(() => {
                // on close
            });
        },
        onAdd() {
            Toast('新增地址');
        },
        onEdit(item, index) {
            Toast('编辑地址:' + index);
        },
        onSelect(option) {
            Toast(option.name);
            this.showShare = false;
        },
        addShop(id){
            
        }
    },
    created(){
        // this.getProducts()
        
    },
    mounted(){
        this.getData()
        this.getDetail()
        this.getData2()
        console.log(this.products)
    }
}
</script>
<style lang="less" scoped>
    @import url(../assets/css/recommend.css);
    .custom-indicator {
        position: absolute;
        right: 5px;
        bottom: 5px;
        padding: 2px 5px;
        font-size: 12px;
        background: rgba(0, 0, 0, 0.1);
    }
    /deep/ .van-swipe{
        width: 100%;
        height: 100%;
        background: white;
    }
    /deep/ .van-goods-action{
        height: 10rem;
    }
    /deep/ .van-goods-action-icon__icon{
        font-size: 4rem;
        // margin: 0 0rem 0 2rem;
    }
    /deep/ .van-goods-action-icon{
        font-size: 2rem;
        margin: 0 2rem 0 2rem;
    }
    /deep/ .van-goods-action-button--warning{
        height: 8rem;
        font-size: 2.2rem;
        letter-spacing: 0.4rem;
        background: #ffbd42;
        border-color: rgb(255 166 0);
    }
    /deep/ .van-goods-action-button--danger{
        height: 8rem;
        font-size: 2.2rem;
        letter-spacing: 0.4rem;
    }
    /deep/ .van-toast--html, .van-toast--text{
        min-width: 23rem;
        min-height: 12rem;
        padding: 1rem 3rem;
    }
    /deep/ .van-toast{
        font-size: 2.2rem;
        letter-spacing: 0.3rem;
        border-radius: 2rem;
    }
    /deep/ .van-dialog{
        width: 30rem;
        height: 20rem;
    }
</style>