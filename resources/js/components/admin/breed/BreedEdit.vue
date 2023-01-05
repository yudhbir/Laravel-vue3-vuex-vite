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
                                            <h5 class="m-b-10">Add Breed</h5>
                                        </div>
                                        <ul class="breadcrumb">
                                            <li class="breadcrumb-item"><a href="javascript:void(0);"><i class="feather icon-home"></i></a></li>
                                            <li class="breadcrumb-item"><router-link :to="{name:'admin_dashboard'}">Dashboard</router-link></li>
                                            <li class="breadcrumb-item"><a href="javascript:">Add Breed</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div> <!-- Page-header End -->

                        <div class="main-body">
                            <div class="page-wrapper">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="card">
                                            <div class="card-header">
                                                <h5>Breed Add</h5>
                                            </div>
                                            <div class="card-body">                                                
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <form name="brand_frm" id="brand_frm" method="post" action="javascript:void(0);" enctype="multipart/form-data" @submit="add_breed">
                                                            <div class="form-group">
                                                                <label>Breed</label>
                                                                <input type="text" class="form-control required" placeholder="Enter Breed Name" name="breed_name" v-model="breed.breed_name" />
                                                            </div> 
                                                            <div class="form-group">
                                                                <label>Breed Type</label>
                                                                <select class="form-control required" name="breed_type" v-model="breed.breed_type">
                                                                    <option value="1">Pure</option>
                                                                    <option value="2">Designed</option>
                                                                </select>
                                                            </div>
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" name="doodle" v-model="breed.doodle" id="flexCheckDefault">
                                                                <label class="form-check-label" for="flexCheckDefault">
                                                                    Doodle
                                                                </label>
                                                            </div> 
                                                            <br/>                                                          
                                                            <input type="hidden" name="id" value="">
                                                            <button type="submit" class="btn btn-primary">Submit</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> <!-- card End -->
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
import { mapActions } from 'vuex'
export default {
    name:"BreedEdit",
    data(){
        return {
            breed:{                
                breed_name:"",
                breed_type:"",
                doodle:""
            },
            validationErrors:{},
            processing:false
        }
    },
    methods:{
        ...mapActions({
            addBreed:'breed/add'
        }),
        async add_breed(){
            this.addBreed(this.breed);
        }
    }

}
</script>

<style>

</style>