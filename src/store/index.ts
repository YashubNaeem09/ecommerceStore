import {Commit, createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    authenticated: false,
    products: [],
    product: null,
    cart: [] as { product: any}[],
  },
  getters: {
    isAuthenticated: (state) => state.authenticated
  },
  mutations: {
    SET_AUTH: (state: {authenticated: boolean}, auth: boolean) => state.authenticated = auth,
    SET_PRODUCTS: (state, products) => {state.products = products},
    SET_PRODUCT: (state, product) => {state.product = product},
    ADD_TO_CART: (state, product) => {
      state.cart.push({
        product : state.product
      });
    }
    // ADD_TO_CART: (state , payload ) => {
    //   state.cart.push({
    //     product: payload.product,
    //   quantity: payload.quantity
    //   });
    // }


  },
  actions: {
    setAuth: ({commit}: {commit: Commit}, auth: boolean) => commit('SET_AUTH', auth),
    getProducts : ({commit}) => {
       axios.get(`/api/products`)
       .then(response => {
        commit('SET_PRODUCTS', response.data)
       })
    },
    getProduct : ({commit}, productID) => {
      axios.get(`/api/products/${productID}`)
      .then(response => {
       commit('SET_PRODUCT', response.data)
      })
   },
  //  addProductToCart: ({commit}: {commit: Commit}, {product, quantity}) => {(
  //   commit('ADD_TO_CART', {product, quantity})
  // )},
   addProductToCart: ({commit}, productID) => {
    axios.get(`/api/products?id=${productID}`)
    .then(response => {
      commit('ADD_TO_CART', response.data)
    })
   }
  },
  modules: {
  }
})
