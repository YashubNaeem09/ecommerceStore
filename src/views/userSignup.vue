<template>
    <section class="h-80 h-custom gradient-custom-2">
        <div class="container py-4 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 mb-0">
                    <div class="card card-registration card-registration-2" style="border-radius: 15px;">
                        <div class="card-body p-0">
                            <form @submit.prevent ="signupUser">
                            <div class="row g-0">
                                <div class="col-lg-6 h-100">
                                    <div class="p-3 h-100">
                                        <h3 class="fw-normal mb-5" style="color: #4835d4;">General Infomation</h3>
                                        <div class="row">
                                            <div class="mb-4 pb-2">
                                                <div class="form-outline">
                                                    <label class="form-label" for="Email">Email</label>
                                                    <input type="email" class="form-control" v-model="data.email"/>
                                                </div>
                                            </div>
                                            <div class="mb-4 pb-2">
                                                <div class="form-outline">
                                                    <label class="form-label" for="Username">Username</label>
                                                    <input type="text" class="form-control" v-model="data.username"/>
                                                </div>
                                            </div>
                                            <div class="mb-4 pb-2">
                                                <div class="form-outline">
                                                    <label class="form-label" for="Password">Password</label>
                                                    <input type="password" class="form-control" v-model="data.password"/>
                                                </div>
                                            </div>
                                            <div class="col-md-6 mb-4 pb-2">
                                                <div class="form-outline">
                                                    <label class="form-label" for="Firstname">Firstname</label>
                                                    <input type="text" class="form-control" v-model="data.name.firstname"/>
                                                </div>
                                            </div>
                                            <div class="col-md-6 mb-4 pb-2">
                                                <div class="form-outline">
                                                    <label class="form-label" for="Firstname">Lastname</label>
                                                    <input type="text" class="form-control" v-model="data.name.lastname"/>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="mb-4 pb-2">
                                            <div class="form-outline">
                                                <label class="form-label" for="city">City</label>
                                                <input type="text" class="form-control" v-model="data.address.city"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 bg-indigo text-black h-100">
                                    <div class="p-3 h-100">
                                        <h3 class="fw-normal mb-5">Contact Details</h3>

                                        <div class="mb-4 pb-2">
                                            <div class="form-outline form-white">
                                                <label class="form-label" for="Street">Street</label>
                                                <input type="text" class="form-control" v-model="data.address.street"/>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-md-5 mb-4 pb-2">
                                                <div class="form-outline form-white">
                                                    <label class="form-label" for="Number">Number</label>
                                                    <input type="number" class="form-control" v-model="data.address.number"/>
                                                </div>
                                            </div>
                                            <div class="col-md-7 mb-4 pb-2">
                                                <div class="form-outline form-white">
                                                    <label class="form-label" for="Zipcode">Zipcode</label>
                                                    <input type="text" class="form-control" v-model="data.address.zipcode"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-5 mb-4 pb-2">
                                                <div class="form-outline form-white">
                                                    <label class="form-label" for="Latitude">Latitude</label>
                                                    <input type="text" class="form-control" v-model="data.address.geolocation.lat"/>
                                                </div>
                                            </div>
                                            <div class="col-md-7 mb-4 pb-2">
                                                <div class="form-outline form-white">
                                                    <label class="form-label" for="Longitude">Longitude</label>
                                                    <input type="text" class="form-control" v-model="data.address.geolocation.long"/>
                                                </div>
                                            </div>
                                            <div class="col-md-9 mb-4 pb-2">
                                                <div class="form-outline form-white">
                                                    <label class="form-label" for="Phone">Phone</label>
                                                    <input type="text" class="form-control" v-model="data.phone" placeholder="0-000-000-0000"/>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="form-check d-flex justify-content-start mb-4 pb-3">
                                            <input class="form-check-input me-3" type="checkbox" value=""
                                                id="form2Example3c" checked />
                                            <label class="form-check-label text-black" for="form2Example3">
                                                I do accept the <a href="#!" class="text-black"><u>Terms and
                                                        Conditions</u></a> of your
                                                site.
                                            </label>
                                        </div>

                                        <button type="submit" class="btn btn-light btn-lg"
                                            data-mdb-ripple-color="dark">Register</button>

                                    </div>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import axios from 'axios';
import {reactive} from 'vue';
import { useRouter } from 'vue-router';
export default {
    name: 'userSignup',
    setup(){
        const data = reactive({
            email : '',
            username : '',
            password : '',
            name : {
                firstname : '',
                lastname: ''
            },
            address : {
                city : '',
                street : '',
                number: '',
                zipcode : '',
                geolocation: {
                    lat : '',
                    long : ''
                },
            },
            phone : ''
        });
        const router = useRouter();
        const signupUser = async () => {
            try {
                const response = await axios.post(`/api/users`,
            JSON.stringify(data),
            {   
                headers : {'Content-Type' : 'application/json'}
            });
            console.log(response);
            router.push('/');
            }
            catch(error) {
                console.error(error);
            }
        };
        return{
                data,
                signupUser
            }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
@media (min-width: 1025px) {
    .h-custom {
        height: 80vh !important;
    }
}

.card-registration .select-input.form-control[readonly]:not([disabled]) {
    font-size: 1rem;
    line-height: 2.15;
    padding-left: .75em;
    padding-right: .75em;
}

.card-registration .select-arrow {
    top: 10px;
}


.bg-indigo {
    background-color: #CED8F3;
    color: #4835d4;
}

@media (min-width: 992px) {
    .card-registration-2 .bg-indigo {
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
    }
}

@media (max-width: 991px) {
    .card-registration-2 .bg-indigo {
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
    }
}</style>