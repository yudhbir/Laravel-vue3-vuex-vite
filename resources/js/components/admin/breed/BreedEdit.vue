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
                                            <h5 class="m-b-10">{{title}} Breed</h5>
                                        </div>
                                        <ul class="breadcrumb">
                                            <li class="breadcrumb-item"><a href="javascript:void(0);"><i class="feather icon-home"></i></a></li>
                                            <li class="breadcrumb-item"><router-link :to="{name:'admin_dashboard'}">Dashboard</router-link></li>
                                            <li class="breadcrumb-item"><a href="javascript:">{{title}} Breed</a></li>
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
                                                <h5>Breed {{title}}</h5>
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
                                                                <input class="form-check-input" type="checkbox" name="doodle" v-model="breed.doodle" id="flexCheckDefault" :checked="breed.doodle">
                                                                <label class="form-check-label" for="flexCheckDefault">
                                                                    Doodle
                                                                </label>
                                                            </div> 
                                                            <br/>                                                          
                                                            <input type="hidden" name="breed_id" v-model="breed.breed_id" v-if="!!breed.breed_id">
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
import { mapActions,mapState } from 'vuex'

export default {
    name:"BreedEdit",
    data(){
        return {
            title:"Add",
            breed:{                
                breed_name:"",
                breed_type:"",
                doodle:"",
                breed_id:"",
            },
            validationErrors:{},
            processing:false
        }
    },
    computed: {
        ...mapState('breed',['breeds'])
    },
    methods:{
        ...mapActions({
            addBreed:'breed/add',
            // getBreed:'breed/get',
        }),
        async add_breed(){
            this.addBreed(this.breed);
        }
    },
    mounted: async function(){
        if(this.$route.params.id){
            this.title='Edit';
            let id=this.$route.params.id;
            if(!!this.breeds.data){
                let breed_data= this.breeds.data.filter(element => element.id == id);
                // console.log(id);
                breed_data=JSON.parse(JSON.stringify(breed_data))
                let newOrExistingProps = {
                    breed_name: breed_data[0]?.breed,
                    breed_type: breed_data[0]?.type,
                    doodle: breed_data[0]?.doodle,
                    breed_id: breed_data[0]?.id,
                }
                this.breed = {...this.breed, ...newOrExistingProps}
                // console.log(this.breed);
            }
        }
    }

}
</script>

<style>

</style>