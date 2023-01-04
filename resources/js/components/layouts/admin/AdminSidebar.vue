<template>
    <nav class="pcoded-navbar">
        <div class="navbar-wrapper">
            <div class="navbar-brand header-logo">
                <router-link :to="{name:'admin_dashboard'}" class="b-brand">
                    <div class="b-bg">
                        <i class="feather icon-trending-up"></i>
                    </div>
                    <span class="b-title">Puppies Breed</span>
                </router-link>
                <a class="mobile-menu" id="mobile-collapse" href="javascript:"><span></span></a>
            </div>
            <div class="navbar-content scroll-div">
                <ul class="nav pcoded-inner-navbar">
                    <li class="nav-item pcoded-menu-caption">
                        <label>Navigation</label>
                    </li>
                    <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" class="nav-item">
                        <router-link :to="{name:'admin_dashboard'}" active-class="nav-link active"><span class="pcoded-micon"><i class="feather icon-home"></i></span><span class="pcoded-mtext">Dashboard</span></router-link>
                    </li>                   
                    <li class="nav-item pcoded-hasmenu">
                        <router-link :to="{name:'admin_puppies_breed'}" active-class="nav-link active"><span class="pcoded-micon"><i class="feather icon-box"></i></span><span class="pcoded-mtext">Breed</span></router-link>                        
                    </li>                    
                    <li data-username="form elements advance componant validation masking wizard picker select" class="nav-item">
                        <router-link :to="{name:'admin_puppies_list'}" active-class="nav-link active"><span class="pcoded-micon"><i class="feather icon-file-text"></i></span><span class="pcoded-mtext">Puppies</span></router-link>
                    </li>
                    <li data-username="Table bootstrap datatable footable" class="nav-item">
                        <a href="{{route('admin_blogs')}}" active-class="nav-link active"><span class="pcoded-micon"><i class="feather icon-server"></i></span><span class="pcoded-mtext">Blog</span></a>
                    </li>
                  
                    <li data-username="Disabled Menu" class="nav-item "><a href="javascript:void(0);" @click="admin_logout" class="nav-link"><span class="pcoded-micon"><i class="feather icon-power"></i></span><span class="pcoded-mtext">Logout</span></a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name:'AdminSideBar',
    methods:{
        ...mapActions({
            adminlogout:'admin/logout'
        }),
        async admin_logout(){
            this.adminlogout();
        }
    }
}
</script>

<style>
.pcoded-navbar .pcoded-inner-navbar > li .active, .pcoded-navbar .pcoded-inner-navbar > li.pcoded-trigger > a {
    background: #333f54;
    color: #fff;
}
</style>