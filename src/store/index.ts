import {Commit, createStore } from 'vuex'
import axios from 'axios'
import Cookies from 'js-cookie'

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
        product : state.product,
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
    
    axios.get(`/api/products/${productID?.productID}`)
    .then(response => {
      const product = response.data;
      console.log(JSON.stringify(product))
      const cookieData = JSON.stringify(product);
      if(cookieData){
        Cookies.set('cart', cookieData);
      }
      const cartData = Cookies.get('cart');
      if(cartData){
        const cart = cartData ? JSON.parse(cartData) : [];
       console.log('cartData: ',cart);
       
      }
     // const cookie = Cookies.set('cart', cookieData);
      commit('ADD_TO_CART', product)

    })
   },
   

  // addProductToCart : async({ commit, state}, productID) => {
  //   try {
  //     const response = await axios.get(`/api/products/${productID?.productID}`);
  //     const product = response.data;
  
  //     // Retrieve the existing cart data from the cookie
  //     const cartData = Cookies.get('cart');
  //     const cart = cartData ? JSON.parse(cartData) : [];
  
  //     // Append the new product to the cart
  //     state.cart.push(product);
  
  //     // Store the updated cart data in the cookie
  //     Cookies.set('cart', JSON.stringify(cart));
  //     console.log(cartData);
  
  //     commit('ADD_TO_CART', product);
  //   } catch (error) {
  //     console.error('Error adding product to cart:', error);
  //   }
  // }
  },
  modules: {
  }
})
