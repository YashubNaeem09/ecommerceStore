<template>
  <section class="pt-8 pt-md-9">
    <div class="container">
      <div class="text-center mb-2 pt-5">
        <h2 class="section-title px-4"><span class="px-2">Categories</span></h2>
      </div>

        <div class="row row-cols-5 row-cols-md-5 g-4">
      <div class="col" v-for="product in category" :key="product.id">
      <div class="card">
        <img src="../assets/images/electronic.jpg" class="card-img-top" alt="Hollywood Sign on The Hill"/>
        <div class="card-body">
          <h5 class="card-title">{{ product }}</h5>
          <p class="card-text">
            This is a longer card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </p>
          <span class="text-light mt-3">
              <button v-on:click="getCategory(product)">{{ product }}</button>
            </span>
        </div>
      </div>
    </div>

    
  </div>

      <!-- Categories -->
      <div class="category row mt-6">
        <div class="col-12 mb-4">
          <span class="badge bg-pastel-primary text-primary text-uppercase-bold-sm">
            Topic categories
          </span>
        </div>

        <!-- Category -->
        <div class="col-md-3 mb-4" v-for="product in category" :key="product.id">
          <a href="" class="card custom-card align-items-center text-decoration-none border-0 hover-lift-light py-4">
            <span class="icon-circle icon-circle-lg bg-pastel-primary text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
                <title>ionicons-v5-c</title>
                <polyline points="352 144 464 144 464 256"
                  style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></polyline>
                <path d="M48,368,169.37,246.63a32,32,0,0,1,45.26,0l50.74,50.74a32,32,0,0,0,45.26,0L448,160"
                  style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></path>
              </svg>
            </span>
            <span class="text-light mt-3">
              <button v-on:click="getCategory(product)">{{ product }}</button>
            </span>
          </a>
        </div>



      </div>
    </div>

  </section>
</template>

<script lang="ts">
import { onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
  name: 'categoryBox',
  setup() {
    const store = useStore();
    const router = useRouter();
    const category = computed(() => store.state.category)

    const getCategory = async (cat: string) => {
      await store.dispatch('getCategory');
      router.push('/category/' + cat)

    }
    onMounted(async () => {
      await store.dispatch('getCategories')
    })
    return {
      category,
      getCategory
    }

  },

}
</script>

<style scoped>
section {
  background-color: #bae4d2;
  height: 100vh;

}

.container .section-title {
  font-size: 38px !important;
  font-weight: 700;
  color: #7F00BE;

}

.category {
  margin-left: 1rem;
}

.hover-lift-light {
  transition: box-shadow .25s ease, transform .25s ease, color .25s ease, background-color .15s ease-in;
}

.text-decoration-none {
  text-decoration: none !important;
}

.py-4 {
  padding-top: 1.5rem !important;
  padding-bottom: 1.5rem !important;
}

.align-items-center {
  align-items: center !important;
}

.border-0 {
  border: 0 !important;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(30, 46, 80, .09);
  border-radius: 2rem;
  background-color: #ffffff;
}


.icon-circle-lg {
  width: 4rem;
  height: 4rem;
}

.icon-circle {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
}

.bg-pastel-primary {
  background-color: #e9f3ff !important;
}

.mt-6 {
  margin-top: 4rem !important;
}

.mb-4 {
  margin-bottom: 1.5rem !important;
}

.badge {
  padding: 0.4rem 0.65rem 0.25rem;

}

.text-uppercase-bold-sm {
  text-transform: uppercase !important;
  font-weight: 500 !important;
  letter-spacing: 2px !important;
  font-size: .85rem !important;
}

.bg-pastel-primary {
  background-color: #e9f3ff !important;
}

.icon-circle-lg {
  width: 4rem;
  height: 4rem;
}

.icon-circle {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
}

.bg-pastel-primary {
  background-color: #e9f3ff !important;
}

.icon-circle[class*=text-] [fill]:not([fill=none]),
.icon-circle[class*=text-] svg:not([fill=none]),
.svg-icon[class*=text-] [fill]:not([fill=none]),
.svg-icon[class*=text-] svg:not([fill=none]) {
  fill: currentColor !important;
}

.icon-circle-lg>svg {
  width: 2rem;
  height: 2rem;
}

.shadow-sm {
  box-shadow: 0 .125rem .25rem rgba(35, 38, 45, .09) !important;
}

.input-group:not(.has-validation)>.dropdown-toggle:nth-last-child(n+3),
.input-group:not(.has-validation)>:not(:last-child):not(.dropdown-toggle):not(.dropdown-menu) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.input-group-lg>.btn,
.input-group-lg>.form-control,
.input-group-lg>.form-select,
.input-group-lg>.input-group-text {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border-radius: 0.3rem;
}

.border-0 {
  border: 0 !important;
}

.input-group-text {
  display: flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #1f2c73;
  text-align: center;
  white-space: nowrap;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
}
</style>