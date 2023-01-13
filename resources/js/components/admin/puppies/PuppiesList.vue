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
                                        <h5 class="m-b-10">Puppies </h5>
                                    </div>
                                    <ul class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="javascript:void(0);"><i class="feather icon-home"></i></a></li>
                                        <li class="breadcrumb-item"><router-link :to="{name:'admin_dashboard'}">Dashboard</router-link></li>
                                        <li class="breadcrumb-item"><a href="javascript:">Puppies List</a></li>
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
                                            <h5>Puppies List</h5>
                                            <router-link :to="{name:'admin_puppies_add'}" class="label theme-bg text-white f-12" style="float:right;">Add Puppy</router-link>
                                        </div>
                                        <div class="card-block px-0 py-3">
                                            <div class="table-responsive">
                                                 <table class="table table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th>Id</th>
                                                            <th>Name</th>
                                                            <th>Age</th>
                                                            <th>Color</th>
                                                            <th>Price</th>
                                                            <th>Registery</th>
                                                            <th>Status</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>                                                    
                                                    <tbody >
                                                        <tr class="unread" v-for="puppy in puppiesInfo?.data" :key="puppy.id">
                                                            <td>{{puppy.id}}</td>
                                                            <td>{{puppy.name}}</td>
                                                            <td>{{puppy.age}}</td>
                                                            <td>{{puppy.color}}</td>
                                                            <td>{{puppy.price}}</td>
                                                            <td>{{puppy.registery}}</td>
                                                            <td>
                                                                <h6 class="text-muted">
                                                                    <i class="fas fa-circle text-c-green f-10 m-r-15" v-if="puppy.status==1">Active</i>
                                                                    <i class="fas fa-circle text-c-red f-10 m-r-15" v-if="puppy.status==0">Inactive</i>
                                                                </h6>
                                                            </td>
                                                            <td>
                                                                <!-- <a href="javascript:void(0);" @click="edit_breed(puppy.id)" class="label theme-bg2 text-white f-12">Edit</a> -->
                                                                <router-link :to="{name:'admin_puppies_edit',params:{id:puppy.id}}" class="label theme-bg2 text-white f-12">Edit</router-link>
                                                                <a href="javascript:void(0);" @click="delete_breed(puppy.id)" class="label theme-bg text-white f-12">Delete</a>
                                                            </td>
                                                        </tr>                                           
                                                        <tr class="unread" v-if="!puppiesInfo?.data">  
                                                            <td colspan="5">No Record Found.</td>
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
    name:'PuppiesList',
    computed: {
         ...mapState('puppies',['puppiesInfo'])
        // ...mapGetters({         
        //   breed_listing: 'breed/breed_listing'
        // })
    },
    methods:{
        ...mapActions({
            puppy_list:'puppies/listing',
            breed_list:'puppies/breeds',
        }),
        async puppylist(){
            this.puppy_list();
        }
    },
    mounted: async function(){
        await this.$nextTick(this.puppylist);
        await this.$nextTick(this.breed_list);
    }
}
</script>

<style>

</style>