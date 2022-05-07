import Vue from "vue";
import Vuex from "vuex"
// import modules from './modules'

// Vue.use(Vuex)
// const store = new Vuex.Store({modules})

// export default store

// 导入模块
import products from "./modules/products";
import cart from "./modules/cart";
Vue.use(Vuex)

export default new Vuex.Store({
    state:{

    },
    mutations:{

    },
    actions:{

    },
    // 2.引用模块
    modules:{
        products,
        cart
    }
})