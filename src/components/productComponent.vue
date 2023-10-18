<template>
    <div class="container-fluid pt-5">
        <div class="text-center mb-4">
            <h2 class="section-title px-4"><span class="px-5">Prodcuts</span></h2>
        </div>
        <div class="row px-xl-5 pb-3 px-5">
            <div class="col-xl-4 col-md-6 col-sm-12 mb-4" v-for="product in products" :key="product.id">
                <div class="card w-100 h-100">

                    <img :src="product.image" class="card-img-top custom-img">

                    <div class="card-body text-center p-0 pt-2">
                        <div class="card-content d-flex flex-column justify-content-flex-start align-items-left mb-1">
                            <h5 class="card-title titleCard">{{ product.title }}</h5>
                        </div>
                        <!-- <div class="card-price d-flex justify-content-center bg-light border">
                        <p class="card-text">Price: ${{ products.price }}</p>
                    </div> -->
                        <div class="card-footer d-flex justify-content-between bg-light border p-2">
                            <a href="" class="btn btn-sm text-dark p-0">Price: ${{ product.price }}</a>
                            <a href="#" class="btn btn-sm text-dark p-0"><router-link :to="{name: 'productDetail', params: {id: product.id}}">View Details</router-link></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="row align-items-start">
        <div v-for="products in data.product" :key="products.id" class="col-md-6 col-xl-4 d-flex">
            <router-link :to="{name: 'productDetail', params: {id: products.id}}">View Details</router-link>

            <img :src="products.image" class="img-thumbnail">
            <h3 class="product-title">{{ products.title }}</h3>
            <strong class="product-price">${{ products.price }}</strong>
            <p class="product-desc">{{ products.description }}</p>
            <span class="icon-cross">
                <img src="../assets/images/cross.svg" class="img-fluid">
            </span>

        </div>
    </div> -->
</template>

<script lang="ts">
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'productComponent',
    setup() {
        const store = useStore();
    //    computed : {products() { store.state.products }}
        const products = computed (() => store.state.products)
        onMounted(async () => {
            await store.dispatch('getProducts')
        });
        return {
            products
            
        }
    }
    
}

</script>
<style scoped>
@import '../assets/css/style.css';
@import '../assets/css/tiny-slider.css';


.titleCard {
    height: 2rem;

}

.custom-img {
    margin-top: 15px;
    margin-left: 100px;
    height: 150px;
    width: 180px;
    object-position: center;
    object-fit: contain;
    border-bottom: none;
}

.card-content {
    padding: 3rem 1rem;
}
</style>