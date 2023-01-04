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
                                                                <label>Name</label>
                                                                <input type="text" class="form-control required" placeholder="Enter Name" name="puppies_name" v-model="puppies.puppies_name" />
                                                            </div> 
                                                            <div class="form-group">
                                                                <label>Age</label>
                                                                <input type="text" class="form-control required" placeholder="Enter Age" name="age" v-model="puppies.age" />
                                                            </div>
                                                            <div class="form-group">
                                                                <label>DOB</label>
                                                                <input type="text" class="form-control required" placeholder="Enter DOB" name="dob" v-model="puppies.dob" />
                                                            </div>                                                            
                                                            <div class="form-group">
                                                                <label>Breed </label>
                                                                <select class="form-control required" name="breed" v-model="puppies.breed">
                                                                    <option value="1">Pure</option>
                                                                    <option value="2">Designed</option>
                                                                </select>
                                                            </div>
                                                            <div class="form-group">
                                                                <label>Registery</label>
                                                                <input type="text" class="form-control required" placeholder="Enter Registery" name="registery" v-model="puppies.registery" />
                                                            </div> 
                                                            <div class="form-group">
                                                                <label>Weight</label>
                                                                <input type="text" class="form-control required" placeholder="Enter Weight" name="weight" v-model="puppies.weight" />
                                                            </div>
                                                            <div class="form-group">
                                                                <label>Collection</label>
                                                                <input type="text" class="form-control required" placeholder="Enter Collection" name="collection" v-model="puppies.collection" />
                                                            </div>
                                                            <div class="form-group">
                                                                <label>Vaccination</label>
                                                                <input type="text" class="form-control required" placeholder="Enter Vaccination" name="vaccination" v-model="puppies.vaccination" />
                                                            </div>
                                                            <div class="form-group">
                                                                <label>Color</label>
                                                                <input type="text" class="form-control required" placeholder="Enter Color" name="color" v-model="puppies.color" />
                                                            </div>
                                                            <div class="form-group">
                                                                <label>Gender</label>
                                                                <input type="text" class="form-control required" placeholder="Enter Gender" name="gender" v-model="puppies.gender" />
                                                            </div>
                                                            <div class="form-group">
                                                                <label>Price</label>
                                                                <input type="text" class="form-control required" placeholder="Enter price" name="price" v-model="puppies.price" />
                                                            </div>
                                                            <div class="form-group">
                                                                <label>Vendor Name</label>
                                                                <input type="text" class="form-control required" placeholder="Enter Vendor Name" name="vendor_name" v-model="puppies.vendor_name" />
                                                            </div>
                                                            <div class="form-group">
                                                                <label>Vendor Url</label>
                                                                <input type="text" class="form-control required" placeholder="Enter price" name="vendor_url" v-model="puppies.vendor_url" />
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
    name:"PuppiesEdit",
    data(){
        return {
            puppies:{                
                puppies_name:"",
                age:"",
                dob:"",
                breed:"",
                registery:"",
                weight:"",
                collection:"",
                vaccination:"",
                color:"",
                gender:"",
                price:"",
                vendor_name:"",
                vendor_url:"",
            },
            validationErrors:{},
            processing:false
        }
    },
    methods:{

    }

}
</script>

<style>

</style>