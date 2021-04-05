import axios from 'axios'

export default {
    state: {
        products: [],
        product: null,
        cart: []
    },
    getters: {
        products: state => state.products,
        product: state => state.product,
        
        
    },
    mutations: {
        GET_PRODUCTS: (state) => {
            axios.get('http://localhost:9999/api/products')
            .then(res => {
                state.products = res.data
            })
        },
        SET_PRODUCT: (state, product) => {
            state.product = product
        },
        CLEAR_PRODUCT: state => state.product = null 
    },
    actions: {
        getProducts: ({commit}) => {
            commit('GET_PRODUCTS')
        },
        getProduct: async ({commit}, _id) => {
            const res = await axios.get('http://localhost:9999/api/products/' + _id)
            commit('SET_PRODUCT', res.data)
        },
        clearProduct: ({commit}) => {
            commit('CLEAR_PRODUCT')
        }       
    },
    modules: {

    }
}