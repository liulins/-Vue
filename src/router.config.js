// 导入所有按钮对应关联的组件模块
import HomePage from "./components/HomePage"
import MeListen from "./components/MeListen"
import Play from "./components/Play"
import Discover from "./components/Discover"
import Account from "./components/Account"
import Live from "./components/Live"
import Recommend from "./components/Recommend"
import Vip from "./components/Vip"
import Novel from "./components/Novel"
import Child from "./components/Child"
import Podcast from "./components/Podcast"
import Crosstalk from "./components/Crosstalk"
import Broadcast from "./components/Broadcast"
import Beijing from "./components/Beijing"
import Handpick from "./components/Handpick"
import Humanity from "./components/Humanity"
import History from "./components/History"
import Bestsellers from "./components/Bestsellers"
import Ebook from "./components/Ebook"

// 我听子路由
import Zhuigeng from "./components/Zhuigeng"
import Dingyue from "./components/Dingyue"
import Lishi from "./components/Lishi"
import Xiazai from "./components/Xiazai"

// 推荐子路由
import Ruzhan from "./components/Ruzhan"
import Suibian from "./components/Suibian"
import Zhumian from "./components/Zhumian"
import Ertong from "./components/Ertong"
import Tingyinyue from "./components/Tingyinyue"
import Mianfei from "./components/Mianfei"
import Xiangsheng from "./components/Xiangsheng"
import Lishigushi from "./components/Lishigushi"
import Xueyingyu from "./components/Xueyingyu"
import Quanbu from "./components/Quanbu"

// 直播子路由
import Tuijian from "./components/Tuijian"
import Remen from "./components/Remen"
import Qinggan from "./components/Qinggan"
import Yousheng from "./components/Yousheng"
import Yinyue from "./components/Yinyue"
import Liaotian from "./components/Liaotian"
import Shipin from "./components/Shipin"
import Zhishi from "./components/Zhishi"
import Yule from "./components/Yule"
import Xinxiu from "./components/Xinxiu"

// 发现子路由
import Guanzhu from "./components/Guanzhu"
import Quanzi from "./components/Quanzi"
import ShipinFaxian from "./components/ShipinFaxian"

// vip子路由
import Muany from "./components/Muany"
import Munewsong from "./components/Munewsong"
import Mulive from "./components/Mulive"
import Musongcard from "./components/Musongcard"
import Mudingling from "./components/Mudingling"
import Mublindbox from "./components/Mublindbox"

// 推荐页面上的图书详情模板
import recomDetail from "./detail/recomDetail.vue"
import ruzhanDetail from "./detail/ruzhanDetail.vue"

// 配置路由
export default{
    routes:[
        {
            path:'/',
            redirect:'/homepage'
        },
        {
            path:'/homepage',
            component:HomePage,
            children:[
                {
                    path:'',
                    redirect:'recommend'
                },
                {
                    path:'live',
                    component:Live,
                    children:[
                        {
                            path:'',
                            redirect:"remen"
                        },
                        {
                            path:'tuijian',
                            component:Tuijian
                        },
                        {
                            path:'remen',
                            component:Remen
                        },
                        {
                            path:'qinggan',
                            component:Qinggan
                        },
                        {
                            path:'yousheng',
                            component:Yousheng
                        },
                        {
                            path:'yinyue',
                            component:Yinyue
                        },
                        {
                            path:'liaotian',
                            component:Liaotian
                        },
                        {
                            path:'shipin',
                            component:Shipin
                        },
                        {
                            path:'zhishi',
                            component:Zhishi
                        },
                        {
                            path:'yule',
                            component:Yule
                        },
                        {
                            path:'xinxiu',
                            component:  Xinxiu
                        },
                    ]
                },
                {
                    path:'recommend',
                    component:Recommend,
                    children:[
                        {
                            path:'ruzhan',
                            component:Ruzhan,
                            meta:{
                                TabbarShow:true  //需要显示  底部导航
                            },
                        },
                        {
                            path:'suibian',
                            component:Suibian,
                            meta:{
                                TabbarShow:true  //需要显示  底部导航
                            },
                        },
                        {
                            path:'zhumian',
                            component:Zhumian,
                            meta:{
                                TabbarShow:true  //需要显示  底部导航
                            },
                        },
                        {
                            path:'ertong',
                            component:Ertong,
                            meta:{
                                TabbarShow:true  //需要显示  底部导航
                            },
                        },
                        {
                            path:'tingyinyue',
                            component:Tingyinyue,
                            meta:{
                                TabbarShow:true  //需要显示  底部导航
                            },
                        },
                        {
                            path:'mianfei',
                            component:Mianfei,
                            meta:{
                                TabbarShow:true  //需要显示  底部导航
                            },
                        },
                        {
                            path:'xiangsheng',
                            component:Xiangsheng,
                            meta:{
                                TabbarShow:true  //需要显示  底部导航
                            },
                        },
                        {
                            path:'lishigushi',
                            component:Lishigushi,
                            meta:{
                                TabbarShow:true  //需要显示  底部导航
                            },
                        },
                        {
                            path:'xueyingyu',
                            component:Xueyingyu,
                            meta:{
                                TabbarShow:true  //需要显示  底部导航
                            },
                        },
                        {
                            path:'quanbu',
                            component:  Quanbu,
                            meta:{
                                TabbarShow:true  //需要显示  底部导航
                            },
                        },
                    ]
                },
                {
                    path:'vip',
                    component:Vip,
                    children:[
                        {
                            path:'',
                            redirect:'Muany'
                        },
                        {
                            path:'Muany',
                            component:Muany
                        },
                        {
                            path:'Munewsong',
                            component:Munewsong
                        },
                        {
                            path:'Mulive',
                            component:Mulive
                        },
                        {
                            path:'Musongcard',
                            component:Musongcard
                        },
                        {
                            path:'Mudingling',
                            component:Mudingling
                        },
                        {
                            path:'Mublindbox',
                            component:Mublindbox
                        },
                    ]
                },
                {
                    path:'novel',
                    component:Novel,
                },
                {
                    path:'child',
                    component:Child,
                },
                {
                    path:'podcast',
                    component:Podcast,
                },
                {
                    path:'crosstalk',
                    component:Crosstalk,
                },
                {
                    path:'broadcast',
                    component:Broadcast,
                },
                {
                    path:'beijing',
                    component:Beijing,
                },
                {
                    path:'handpick',
                    component:Handpick,
                },
                {
                    path:'humanity',
                    component:Humanity,
                },
                {
                    path:'history',
                    component:History,
                },
                {
                    path:'bestsellers',
                    component:Bestsellers,
                },
                {
                    path:'ebook',
                    component:Ebook,
                },
            ]
        },
        {
            path:'/melisten',
            component:MeListen,
            children:[
                {
                    path:"/",
                    redirect:"dingyue",
                },
                {
                    path:"zhuigeng",
                    component:Zhuigeng
                },
                {
                    path:"dingyue",
                    component:Dingyue
                },
                {
                    path:"lishi",
                    component:Lishi
                },
                {
                    path:"xiazai",
                    component:Xiazai
                },
            ]
        },
        {
            path:'/play',
            component:Play,
            meta:{
                TabbarShow:true  //需要显示  底部导航
            },
        },
        {
            path:'/discover',
            component:Discover,
            children:[
                {
                    path:"",
                    redirect:"guanzhu"
                },
                {
                    path:"guanzhu",
                    component:Guanzhu
                },
                {
                    path:"quanzi",
                    component:Quanzi
                },
                {
                    path:"shipinfaxian",
                    component:ShipinFaxian
                },
            ]
        },
        {
            path:'/account',
            component:Account,
            meta:{
                TabbarShow:true  //需要显示  底部导航
            },
        },
        {
            path:'/recommend',
            component:recomDetail,
        },
        {
            path:"/recommend/ruzhan",
            component:ruzhanDetail,
        }
    ]
}