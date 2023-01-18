<template>
    <div> 
        <Loader />       
        <AppHeader></AppHeader>
        <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <router-link :to="{name:'home'}" class="nav-link">Puppies Breed</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <router-link :to="{name:'home'}" class="nav-link">Home </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name:'register'}" class="nav-link">Register </router-link>
                        </li>
                    </ul>
                    <div class="d-flex">
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {{ user.name }}
                                </a>
                                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink" v-if="user.name">
                                    <a class="dropdown-item" href="javascript:void(0)" @click="logout">Logout</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav> -->
        <main class="mt-3">
            <router-view></router-view>
        </main>
        <AppFooter></AppFooter>
    </div>
</template>
<script>
import '../../../css/css/style.css';
import '../../../css/css/responsive.css';
import '../../../css/css/custom.css';
import {mapActions} from 'vuex'
import AppHeader from './Header.vue'
import AppFooter from './Footer.vue'
import Loader from '../helpers/Loader.vue'
export default {
    name:"default-layout",
    components: {
        AppHeader,
        AppFooter,
        Loader
    },
    data(){
        return {
            user:this.$store.state.auth.user
        }
    },
    methods:{
        ...mapActions({
            signOut:"auth/logout"
        }),
        async logout(){
            await axios.post('/logout').then(({data})=>{
                this.signOut()
                this.$router.push({name:"login"})
            })
        }
        
    }
}
</script>
