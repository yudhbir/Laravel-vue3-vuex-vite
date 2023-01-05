<template>
    <div class="pcoded-main-container">
        <div class="pcoded-wrapper">
            <div class="pcoded-content">
                <div class="pcoded-inner-content">
                    <div class="page-header"> <!-- Page-header Start -->
                        <div class="page-block">
                            <div class="row align-items-center">
                                <div class="col-md-12">
                                    <div class="page-header-title">
                                        <h5 class="m-b-10">Breed </h5>
                                    </div>
                                    <ul class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="javascript:void(0);"><i class="feather icon-home"></i></a></li>
                                        <li class="breadcrumb-item"><router-link :to="{name:'admin_dashboard'}">Dashboard</router-link></li>
                                        <li class="breadcrumb-item"><a href="javascript:">Breed List</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> <!-- Page-header End -->

                    <div class="main-body">
                        <div class="page-wrapper">
                            <div class="row">
                                <div class="col-xl-12 col-md-12">
                                    <div class="card Recent-Users">
                                        <div class="card-header">
                                            <h5>Breed List</h5>
                                            <router-link :to="{name:'admin_puppies_breed_add'}" class="label theme-bg text-white f-12" style="float:right;">Add Breed</router-link>
                                        </div>
                                        <div class="card-block px-0 py-3">
                                            <div class="table-responsive">
                                                <table class="table table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th>Id</th>
                                                            <th>Name</th>
                                                            <th>Type</th>
                                                            <th>Status</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>                                                    
                                                    <tbody>
                                                        
                                                        <tr class="unread" v-for="breed in breeds.data" :key="breed.id">
                                                            <td>{{breed.id}}</td>
                                                            <td>{{breed.breed}}</td>
                                                            <td>{{breed.type}}</td>
                                                            <td>
                                                                <h6 class="text-muted">
                                                                    <i class="fas fa-circle text-c-green f-10 m-r-15" v-if="breed.status==1">Active</i>
                                                                    <i class="fas fa-circle text-c-red f-10 m-r-15" v-if="breed.status==0">Inactive</i>
                                                                </h6>
                                                            </td>
                                                            <td>
                                                                <a href="javascript:void(0);" @click="edit_breed(breed.id)" class="label theme-bg2 text-white f-12">Edit</a>
                                                                <a href="javascript:void(0);" @click="delete_breed(breed.id)" class="label theme-bg text-white f-12">Delete</a>
                                                            </td>
                                                        </tr>                                                        
                                                        <tr class="unread" v-if="breeds.data.length==0">  
                                                            <td colspan="5">No Record Found. {{breeds}}</td>
                                                        </tr> 
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <!-- {{ $result->links() }} -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions,mapGetters,mapState } from 'vuex'
export default {
    name:'BreedList',
    computed: {
         ...mapState('breed',['breeds'])
        // ...mapGetters({         
        //   breed_listing: 'breed/breed_listing'
        // })
    },
    methods:{
        ...mapActions({
            breed_list:'breed/listing'
        }),
        async breedlist(){
            this.breed_list();
        }
    },
    mounted: function(){
        this.$nextTick(this.breed_list)
    }
}
</script>

<style>

</style>