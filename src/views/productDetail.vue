<template>
  <!-- content -->
  <div class="container pt-5">
    <div class="text-center mb-4">
      <h2 class="section-title px-4"><span class="px-5">Product Details</span></h2>
    </div>
    <section class="py-5">
      <div class="container" v-if="product">
        <div class="row gx-5">
          <aside class="col-lg-6">
            <div class="border rounded-4 mb-3 d-flex justify-content-center">
              <a data-fslightbox="mygalley" class="rounded-4" target="_blank" data-type="image" href="">
                <img style="max-width: 80%; max-height: 80vh; margin: auto;" class="rounded-4 fit" :src="product.image" />
              </a>
            </div>
          </aside>
          <main class="col-lg-6">
            <div class="ps-lg-3">
              <h4 class="title text-dark">
                {{ product.title }}
              </h4>
              <div class="d-flex flex-row my-3">
                <div class="text-warning mb-1 me-2">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-half"></i>
                  <span class="ms-1">
                    4.5
                  </span>
                </div>
                <span class="text-muted"><i class="bi bi-cart-fill fa-sm mx-1"></i>154 orders</span>
                <span class="text-success ms-2">In stock</span>
              </div>

              <div class="mb-3">
                <span class="h5">$ {{ product.price }}</span>
                <span class="text-muted">/per box</span>
              </div>

              <p>
               {{product.description}}
              </p>
              <hr />

              <div class="row mb-4">
                <!-- col.// -->
                <div class="col-md-4 col-6 mb-3">
                  <label class="mb-2 d-block">Quantity</label>
                  <div class="input-group mb-3" style="width: 170px;">
                    <button class="btn btn-white border border-secondary px-3" type="button" id="button-addon1"
                      data-mdb-ripple-color="dark">
                      <i class="bi bi-dash"></i>
                    </button>
                    <input type="text" class="form-control text-center border border-secondary" placeholder="0"
                      aria-label="Example text with button addon" aria-describedby="button-addon1" />
                    <button class="btn btn-white border border-secondary px-3" type="button" id="button-addon2"
                      data-mdb-ripple-color="dark">
                      <i class="bi bi-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="buttons">
                <a href="#" class="btn btn-warning shadow-0"> Buy now </a>
                <button @click="addToCart"><a href="#" class="btn btn-warning shadow-0"><i class="me-1 bi bi-cart-check-fill"></i> ADD TO CART</a></button>
                <a href="#" class="btn btn-warning shadow-0"><i class="me-1 bi bi-cart-check-fill"></i> <router-link to="/cart">ADD TO CART</router-link></a>
                <a href="#" class="btn btn-light border border-secondary py-2 icon-hover px-3"> <i
                  class="me-1 bi bi-heart-fill fa-lg"></i> Save </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>

  </div>
  <!-- content -->
</template>

<script lang="ts">
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import Cookies from 'js-cookie';
export default {
  name: 'productDetail',
  setup() {
    const store = useStore();
    const router = useRouter();
    const product = computed (() =>  store.state.product);
    const productID = router.currentRoute.value.params.id;
    console.log(productID)
    const addToCart = async() => {
          store.dispatch('addProductToCart', {
                // product : product.value,
                productID,
            });
            
            router.push('/cart');
            // const cart = store.state.cart;
      }
    onMounted(async() => {
      const productID = router.currentRoute.value.params.id;
      await store.dispatch('getProduct', productID); 
    });

    return {
      product,
      addToCart
    };
  },
};
</script>

<style scoped>
.icon-hover:hover {
  border-color: #3b71ca !important;
  background-color: white !important;
  color: #3b71ca !important;
}

.icon-hover:hover i {
  color: #3b71ca !important;
}
.buttons{
  display: flex;
  flex-direction: row;
  align-items:start;
  justify-content: space-evenly;
  margin-right: 10rem;

}
</style>