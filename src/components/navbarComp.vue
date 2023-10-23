<template>
    <nav class="navbar navbar-expand-lg navigation1">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active nav1" aria-current="page" href="#">FAQs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active nav1" aria-current="page" href="#">Help</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active nav1" aria-current="page" href="#">Support</a>
                    </li>
                </ul>
            </div>
            <div class="social-icons d-flex align-items-center">
                <a class="nav-link active" aria-current="page" href="#"><i class="bi bi-facebook"></i></a>
                <a class="nav-link active" aria-current="page" href="#"><i class="bi bi-twitter"></i></a>
                <a class="nav-link active" aria-current="page" href="#"><i class="bi bi-linkedin"></i></a>
                <a class="nav-link active" aria-current="page" href="#"><i class="bi bi-instagram"></i></a>
                <a class="nav-link active" aria-current="page" href="#"><i class="bi bi-youtube"></i></a>
            </div>
        </div>
    </nav>
    <nav class="custom-navbar navbar navbar navbar-expand-md navigation2" arial-label="Furni navigation bar">
        <div class="container">
            <a class="navbar-brand " href="">Shop Shop<span>.</span></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni"
                aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarsFurni">
                <ul class="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="index.html">Home</a>
                    </li>
                    <li><a class="nav-link" href="shop.html">Shop</a></li>
                    <li><a class="nav-link" href="about.html">About us</a></li>
                    <li><a class="nav-link" href="services.html">Services</a></li>
                    <li><a class="nav-link" href="blog.html">Blog</a></li>
                    <li><a class="nav-link" href="contact.html">Contact us</a></li>
                </ul>
                <div v-if="auth">
                <ul class="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                    <li v-on:click="Logout"><a class="nav-link" href="#">
                            <RouterLink to="/login"><span class="bi bi-person"></span></RouterLink></a></li>
                    <li><a class="nav-link" href="#">
                            <RouterLink to="/cart"><span class="bi bi-cart"></span></RouterLink></a></li>
                
                    <!-- <li><a class="nav-link" href="cart.html"><RouterLink :to="{name: 'cartComp', params: {id: product.id}}"><span class="bi bi-cart"></span></RouterLink></a></li> -->
                </ul>
                </div>
                <div v-else>
                    <ul class="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                    <li >
                        <a class="nav-link" href="#">
                            <RouterLink to="/login">Login</RouterLink>
                        </a>
                    </li>
                    </ul>

                </div>
            </div>
        </div>

    </nav>
    <!-- <nav class="navbar navbar-expand-lg bg-body-tertiary navigation2">
  <div class="container-fluid">
    <a class="navbar-brand logo" href="#">Shop Shop<span>.</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto ms-auto mb-2 mb-md-0">
        <li class="nav-item active">
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
      </ul>
    </div>
  </div>
</nav> -->
</template>

<script lang="ts">

import axios from 'axios';
import Cookies from 'js-cookie';
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
    name: 'navbarComp',
    setup() {
        const store = useStore();
        const product = computed(() => store.state.product)
        const auth = computed(() => store.state.authenticated)
       
        const Logout = async () => {
            axios.defaults.withCredentials = true;
            await fetch(`/api/users`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
            })
            Cookies.remove('username');
            Cookies.remove('token');
        }

        return {
            auth,
            product,
            Logout
        }
    }
}
</script>

<style scoped>
@import '../assets/css/style.css';
@import '../assets/css/tiny-slider.css';
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@300&display=swap');

.navigation1 {
    padding-top: 5px;
    height: 7vh;
    background-color: #EDF1FF;
}

.nav1 {
    position: relative;
    padding-right: 20px;
    margin-left: 7px;

}

.nav1::after {
    content: '';
    position: absolute;
    top: 3;
    bottom: 3;
    height: 18px;
    width: 3px;
    background-color: #868D97;
    margin-top: 5px;
    margin-left: 10px;
}

.nav-item:last-child .nav1::after {
    display: none;
}

.navigation1 .navbar-nav {
    margin-left: 55px;
}

.navigation1 .nav1 a {
    color: black;

}

.navigation1 .nav1:hover {
    text-decoration: underline;

}

.social-icons {
    padding-right: 40px;
}

.social-icons a {
    margin-left: 10px;
}
.navigation2{
    background-color: #9B1FE8;
}
.navigation2 .navbar-brand a:hover{
    color: white;
}
/* .navigation2 .logo{
    margin-left: 6rem;
    font-size: 29px;
    font-weight: 600;
}
/* .navigation2 .navbar-nav{
   display: flex;
   justify-content: space-between;
} 

.navigation2 .navbar-nav li a{
    font-size: 17px;
    font-weight: 500;
    margin-right: 3rem;
    -webkit-transition: .3s all ease;
    -o-transition: .3s all ease;
    transition: .3s all ease;
    position: relative;

} */
@media (max-width: 991px) {
    .social-icons {
        padding-left: 10rem;
    }

}</style>