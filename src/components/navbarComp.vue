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
    <nav class="custom-navbar navbar navbar navbar-expand-md navigation2" arial-label="Furni navigation bar" v-if="auth">
        <div class="container">
            <a class="navbar-brand" href="">Shop Shop<span>.</span></a>
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
                <ul class="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                    <li v-if="!auth" v-on:click="Logout"><a class="nav-link" href="#">
                            <RouterLink to="/login"><span class="bi bi-person"></span></RouterLink></a></li>
                    <li v-else>
                        <a class="nav-link" href="#">
                            <RouterLink to="/login">Login</RouterLink>
                        </a>
                    </li>
                    <li><a class="nav-link" href="cart.html"><span class="bi bi-cart"></span></a></li>
                </ul>
            </div>
        </div>

    </nav>
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
        const auth = computed(() => store.state.authenticated)
        const Logout = async () => {
            axios.defaults.withCredentials = true;
            await fetch(`/api/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
            })
            Cookies.remove('username');
            Cookies.remove('token');
        }

        return {
            auth,
            Logout
        }
    }
}
</script>

<style scoped>
@import '../assets/css/style.css';
@import '../assets/css/tiny-slider.css';
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap");

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

@media (max-width: 991px) {
    .social-icons {
        padding-left: 10rem;
    }

}</style>