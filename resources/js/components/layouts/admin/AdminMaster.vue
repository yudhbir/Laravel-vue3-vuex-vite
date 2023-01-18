<template>
    <Loader /> 
    <div class="loader-bg">
        <div class="loader-track">
            <div class="loader-fill"></div>
        </div>
    </div>
    <!-- [ Pre-loader ] End -->
    <AdminSideBar></AdminSideBar>
    <AdminNavigation></AdminNavigation>
    <div class="col-xl-8 col-md-8" style="margin-left: 264px;">
        
    </div>
    <router-view></router-view>
    <AdminFooter></AdminFooter>  
</template>

<script>
import '../../../../admin/assets/css/style.css';
import AdminSideBar from './AdminSidebar.vue'
import AdminNavigation from './AdminNavigation.vue'
import AdminFooter from './AdminFooter.vue'
import Loader from '../../helpers/Loader.vue'
export default {
    name:'AdminMaster',
    components:{
        AdminSideBar,
        AdminNavigation,
        AdminFooter,
        Loader,

    }

}
</script>

<style>

</style>