export default {
  state: {
    cart: []
  },
  getters: {
    cartDetails: state => {
      return state.cart
    },
    cartItemCounter: state => {
      let items = 0
      state.cart.forEach(item => {
        items += item.quantity
      })
      return items
    },
    cartTotal: state => {
      let total = 0
      if(state.cart.length !== 0) {
        state.cart.forEach(item => {
          total += item.product.price * item.quantity
        })
      }
      return total
    },
    cartQuanTotal: state => {
      let quanTotal = 0
      if(state.cart.length !== 0) {
        state.cart.forEach(item => {
          quanTotal += item.quantity
        })
      }
      return quanTotal
    }
    
  
  
  },
  mutations: {
    ADD_TO_CART: (state, { product, quantity }) => {
      let exists = state.cart.find(item => item.product._id === product._id)
      if (exists) {
        exists.quantity += quantity
        return 
      }
      state.cart.push({product, quantity})
    },
    REMOVE_ITEM_FROM_CART: (state, index) => {
      state.cart.splice(index, 1)
    }
    
    
    
  },
  

  
  actions: {
    addProductToCart: ({commit}, {product, quantity}) => {
      commit('ADD_TO_CART', {product, quantity})
    },
    removeItemFromCart: (context, index) => {
      context.commit('REMOVE_ITEM_FROM_CART', index)
    }
  },
 

    
  
  }
  
