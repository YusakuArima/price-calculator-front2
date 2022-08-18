export const getters = {
  getCartProducts(state) {
    return state.products
  },
}

export const state = () => ({
  products: [],
})

export const mutations = {
  PUSH_PRODUCT_TO_CART(state, payload) {
    state.products.push({
      id: payload.product.id,
      productName: payload.product.productName,
      price: payload.product.price,
      amount: payload.product.amount,
      subtotal: payload.product.price * payload.product.amount,
    })
  },
  INCREMENT_AMOUNT(state, payload) {
    payload.cartItem.amount += payload.product.amount
  },
}

export const actions = {
  addProductToCart({ commit, rootState, state }, product) {
    const cartItem = state.products.find((item) => item.id === product.id)

    if (!cartItem) {
      commit('PUSH_PRODUCT_TO_CART', { rootState, product })
    } else {
      commit('INCREMENT_AMOUNT', { rootState, cartItem, product })
    }
  },
}
