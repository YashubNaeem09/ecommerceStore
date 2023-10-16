<template>
<div class="container pt-5">
    <div class="text-center mb-4">
      <h2 class="section-title px-4"><span class="px-5">Product Details</span></h2>
    </div>
    <div v-if="product">
      <div class="row">
        <div class="col-md-6">
          <img :src="product.image" class="card-img-top custom-img">
        </div>
        <div class="col-md-6">
          <h5 class="card-title titleCard">{{ product.title }}</h5>
          <p class="product-description">{{ product.description }}</p>
          <p class="product-price">Price: ${{ product.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';

export default {
  name: 'productDetail',
  setup() {
    const product = ref(null);
    const router = useRouter();

    const loadProductData = async () => {
      const productID = router.currentRoute.value.params.id; 
      try {
        const response = await axios.get(`/api/products/${productID}`);
        product.value = response.data;
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    onMounted(loadProductData);

    return {
      product,
    };
  },
};

</script>

<style>

</style>