<template>
  <section class="vh-100">
    <div class="container py-5 h-100">
      <div class="text-center mb-1">
        <h2 class="section-title mb-2"><span class="py-2">Welcome, Login to Shop!</span></h2>
        <div class="d-flex justify-content-center align-items-center">
          <div class="alert alert-danger col-lg-3 col-md-6 col-sm-3 text-center" role="alert" v-if="error">
        {{error}}
        </div>
        </div>
      </div>
      <div class="row d-flex align-items-center h-100">
        <div class="col-md-6 col-lg-6 col-xl-6 pt-2 pb-2">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid"
            alt="Phone image">
        </div>
        <div class="col-md-7 col-lg-5 col-xl-3 offset-xl-1">
          <form @submit.prevent="loginUser">
            <!-- Email input -->
            <div class="form-outline mb-5">
              <!-- <label class="form-label text-start">Username</label> -->
              <input v-model="data.username" type="text" class="form-control form-control-lg" placeholder="Username" />
            </div>

            <!-- Password input -->
            <div class="form-outline mb-5">
              <!-- <label class="form-label text-start" for="form1Example23">Password</label> -->
              <input v-model="data.password" type="password" id="form1Example23" class="form-control form-control-lg"
                placeholder="Password" />
            </div>

            <div class="d-flex justify-content-around align-items-center mb-4">
              <!-- Checkbox -->
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                <label class="form-check-label" for="form1Example3"> Remember me </label>
              </div>
              <a href="#!">Forgot password?</a>
            </div>
            <div class="d-flex justify-content-around align-items-center mb-4 ml-1">
              <!-- Submit button -->
              <button type="submit" class="btn btn-outline-primary button-extended-padding ">Sign in</button>
              <router-link to="/signup">Signup</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import axios from 'axios';
import {reactive, ref } from 'vue';
import Cookies from 'js-cookie';
import { useRouter } from 'vue-router';
export default {
  name: 'userLogin',
  setup() {
    const data = reactive({
      username: '',
      password: ''

    });
    const router = useRouter();
    const error = ref('');

    const loginUser = async () => {
      try{
        axios.defaults.withCredentials = true;
      const response = await axios.post(`/api/auth/login`,
        JSON.stringify(data),
        {
          headers: { 'Content-Type': 'application/json' }
        });
      console.log(response.data);
      const token = response.data.token;
      Cookies.set('token', token);
      Cookies.set('username', data.username);
      router.push('/')
      }
      catch (err) {
        error.value = "Username or Password is Incorrect!";

      }

    }
    return {
      error,
      data,
      loginUser
    }
  }
}


</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

.section-title {
  color: #1266F1;
  position: relative;
  display: inline-block;
}
.section-title span:hover{
  text-shadow: 0 0 1px #3F3D56;
  transition: color 0.3s text-shadow 0.3s;
  cursor: pointer;
  
}

.form-outline input:focus {
  border: 2px solid #1266F1;
  box-shadow: 0 0 2px #1266F1;
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.form-control::placeholder {
  font-size: 15px;
  color: #1266F1;
}

.divider:after,
.divider:before {
  content: "";
  flex: 5;
  height: 1px;
  background: #eee;
}

.button-extended-padding {
  padding-left: 40px;
  padding-right: 40px;
}</style>