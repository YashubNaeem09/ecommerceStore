<template>
    <section id="featured-products" class="product-store padding-large">
      <div class="container">
       
    <div class="text-center mb-4">
        <h2 class="section-title px-4">Categories</h2>
    </div>
        <div class="section-header d-flex flex-wrap align-items-center justify-content-between">
          <h2 class="section-title">Featured Products</h2>            
          <div class="btn-wrap">
            <a href="shop.html" class="d-flex align-items-center">View all products <i class="icon icon icon-arrow-io"></i></a>
          </div>            
        </div>
        <div class="swiper product-swiper overflow-hidden">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="product-item">
                <div class="image-holder">
                  <img src="../assets/images/person-1.jpg" alt="Books" class="product-image">
                </div>
                <div class="cart-concern">
                  <div class="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" class="btn-wrap cart-link d-flex align-items-center">add to cart <i class="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" class="view-btn tooltip
                        d-flex">
                      <i class="icon icon-screen-full"></i>
                      <span class="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" class="wishlist-btn">
                      <i class="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div class="product-detail">
                  <h3 class="product-title">
                    <a href="single-product.html">Full sleeve cover shirt</a>
                  </h3>
                  <span class="item-price text-primary">$40.00</span>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="product-item">
                <div class="image-holder">
                  <img src="images/product-item2.jpg" alt="Books" class="product-image">
                </div>
                <div class="cart-concern">
                  <div class="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" class="btn-wrap cart-link d-flex align-items-center">add to cart <i class="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" class="view-btn tooltip
                        d-flex">
                      <i class="icon icon-screen-full"></i>
                      <span class="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" class="wishlist-btn">
                      <i class="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div class="product-detail">
                  <h3 class="product-title">
                    <a href="single-product.html">Volunteer Half blue</a>
                  </h3>
                  <span class="item-price text-primary">$38.00</span>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="product-item">
                <div class="image-holder">
                  <img src="images/product-item3.jpg" alt="Books" class="product-image">
                </div>
                <div class="cart-concern">
                  <div class="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" class="btn-wrap cart-link d-flex align-items-center">add to cart <i class="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" class="view-btn tooltip
                        d-flex">
                      <i class="icon icon-screen-full"></i>
                      <span class="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" class="wishlist-btn">
                      <i class="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div class="product-detail">
                  <h3 class="product-title">
                    <a href="single-product.html">Double yellow shirt</a>
                  </h3>
                  <span class="item-price text-primary">$44.00</span>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="product-item">
                <div class="image-holder">
                  <img src="images/product-item4.jpg" alt="Books" class="product-image">
                </div>
                <div class="cart-concern">
                  <div class="cart-button d-flex justify-content-between align-items-center">
                    <button type="button" class="btn-wrap cart-link d-flex align-items-center">add to cart <i class="icon icon-arrow-io"></i>
                    </button>
                    <button type="button" class="view-btn tooltip
                        d-flex">
                      <i class="icon icon-screen-full"></i>
                      <span class="tooltip-text">Quick view</span>
                    </button>
                    <button type="button" class="wishlist-btn">
                      <i class="icon icon-heart"></i>
                    </button>
                  </div>
                </div>
                <div class="product-detail">
                  <h3 class="product-title">
                    <a href="single-product.html">Long belly grey pant</a>
                  </h3>
                  <span class="item-price text-primary">$33.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </section>



</template>

<script lang="ts">
export default{
    name: 'categoryBox',
   
}
</script>

<style scoped>
/*----- Featured Products Section
--------------------------------------------------------------*/
.product-store .product-item {
    position: relative;
    margin-bottom: 30px;
}
.product-item img.product-image {
    background: var(--light-color);
    border: 1px solid var(--grey-color);
    border-radius: 6px;
    padding: 10px;
    cursor: pointer;
    margin-bottom: 20px;
    width: 100%;
}
.product-item .cart-concern {
    background: var(--light-color);
    width: 80%;
    text-align: center;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 300px;
    z-index: 9;
    transition: 0.5s ease-out;
    padding: 20px 30px;
    opacity: 0;
}
.product-item:hover .cart-concern {
    bottom: 280px;
    opacity: 1;
}
i.icon.icon-arrow-io {
    font-size: 12px;
}
.cart-concern .cart-button button {
    background: none;
    color: var(--dark-color);
    height: auto;
    padding: 0;
    margin: 0;
}
.cart-concern .cart-button button i.icon {
    color: var(--dark-color);
}
.product-item .wishlist-btn i.icon.icon-heart {
    font-size: 20px;
    padding-left: 25px;
}
.product-item h3.product-title {
    font-size: 1.4em;
    margin: 0;
}
.product-item .item-price {
    font-size: 1.8em;
}
.swiper.product-swiper {
    position: relative;
    margin-bottom: 30px;
}
.swiper-pagination {
    width: 100%;
    position: inherit;
}
.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 10px;
}
.swiper-pagination .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    background: #E0EAF0;
    opacity: 1;
}
.swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
    background: #7CA2BB;
    position: relative;
}
.swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active:before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border: 1px solid #CEDDE7;
    border-radius: 50%;
    top: -6px;
    left: -6px;
}

</style>