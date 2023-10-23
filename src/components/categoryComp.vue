<template>
<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div v-for="(item, index) in slider" :key="item.id" :class="['carousel-item', {active:index === 0 } ]">
      <img :src="item.image" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

</template>

<script lang="ts">
import {ref, onMounted} from 'vue';
import axios from 'axios';

export default {
  name: 'categoryComp',
  setup() {
    const slider = ref([]);

    onMounted(() => {
      axios.get('/api/products', {
        params: {
          limit: 3
        }
      })
      .then(response => {
        slider.value = response.data;
      })
      .catch(error => {
        console.error('Error fetching products: ' + error);
      });
    });

    return {
      slider
    };
  }
};

</script>

<style scoped>
.carousel-inner .carousel-item img{
    width: 500px;
    height: 680px;
}
.swiper-slide{
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
</style>