import axios from "axios"

// getDetail(){
//     var _this = this;
//     Test2().then(function(res) {
//         // res就是请求成功之后的到的数据
//         _this.detailData = res.data.shopDetail
//     })
// },

const state = {
    // 记录所有数据
    products:[]
}
const getters = {}
const mutations = {
    // 给products赋值
    setProducts(state,payLoad){
        state.products = payLoad
    }
}
const actions = {
    // async getProducts({ commit }){
    //     // 请求接口
    //     const {data} = await axios({
    //         method:"GET",
    //         url:"http://localhost:8081/datalist2.data"
    //     })
    //     // 将获取到的数据结果存储到state中
    //     commit("setProducts",data)
    //     state.products = data
    //     return data
    // }
}

export default{
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}