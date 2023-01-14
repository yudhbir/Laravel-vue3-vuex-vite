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
                                            <h5 class="m-b-10">{{title}} Puppy</h5>
                                        </div>
                                        <ul class="breadcrumb">
                                            <li class="breadcrumb-item"><a href="javascript:void(0);"><i class="feather icon-home"></i></a></li>
                                            <li class="breadcrumb-item"><router-link :to="{name:'admin_dashboard'}">Dashboard</router-link></li>
                                            <li class="breadcrumb-item"><a href="javascript:">{{title}} Puppy</a></li>
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
                                                <h5>Puppy {{title}}</h5>
                                            </div>
                                            <div class="card-body">                                                
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <!-- <form name="brand_frm" id="brand_frm" method="post" action="javascript:void(0);" enctype="multipart/form-data" @submit="add_puppy"> -->
                                                        <vue-yup-validation :schema="schema" @submit="add_puppy" :values="puppies_info" :validFieldOnChange="true" v-slot="{ errors }" >
                                                             <div class="form-group">
                                                                <label>Image</label>
                                                                <input type="file" class="form-control required" placeholder="Enter puppies image" name="puppies_image" @change="onChange" accept="image/*"/>
                                                                <span v-if="errors?.puppies_image" class="errors"> {{ errors?.puppies_image }} </span>
                                                                <img :src="puppies_info.imageUrl" width="100" height="100" v-if="!!puppies_info.imageUrl" class="puppy_avatar">
                                                            </div>
                                                            <div class="form-group">
                                                                <label>Name</label>
                                                                <input type="text" class="form-control required" placeholder="Enter Name" name="puppies_name" v-model="puppies_info.puppies_name" />
                                                                <span v-if="errors?.puppies_name" class="errors"> {{ errors?.puppies_name }} </span>
                                                            </div> 
                                                            <div class="form-group">
                                                                <label>Age</label>
                                                                <input type="text" class="form-control required" placeholder="Enter Age" name="age" v-model="puppies_info.age" />
                                                                <span v-if="errors?.age" class="errors"> {{ errors?.age }} </span>
                                                            </div>
                                                            <div class="form-group">
                                                                <label>DOB</label>
                                                                <!-- <input type="text" class="form-control required" placeholder="Enter DOB" name="dob" v-model="puppies_info.dob" /> -->
                                                                <Datepicker v-model="puppies_info.dob" class="form-control required" name="dob" inputFormat="yyyy-MM-dd"/>
                                                                <span v-if="errors?.dob" class="errors"> {{ errors?.dob }} </span>
                                                            </div>                                                            
                                                            <div class="form-group">
                                                                <label>Breed </label>
                                                                <select class="form-select required" name="breed" v-model="puppies_info.breed">
                                                                    <option value="">Please select the Breed</option>
                                                                    <option :value="breed.id" v-for="breed in breeds" :key="breed.id">{{breed.breed}}</option>
                                                                </select>
                                                                <span v-if="errors?.breed" class="errors"> {{ errors?.breed }} </span>
                                                            </div>
                                                            <div class="form-group">
                                                                <label>Registery</label>
                                                                <input type="text" class="form-control required" placeholder="Enter Registery" name="registery" v-model="puppies_info.registery" />
                                                                <span v-if="errors?.registery" class="errors"> {{ errors?.registery }} </span>
                                                            </div> 
                                                            <div class="form-group">
                                                                <label>Weight</label>
                                                                <input type="text" class="form-control required" placeholder="Enter Weight" name="weight" v-model="puppies_info.weight" />
                                                                <span v-if="errors?.weight" class="errors"> {{ errors?.weight }} </span>
                                                            </div>
                                                            <div class="form-group">
                                                                <label>Collection</label>
                                                                <input type="text" class="form-control required" placeholder="Enter Collection" name="collection" v-model="puppies_info.collection" />
                                                                <span v-if="errors?.collection" class="errors"> {{ errors?.collection }} </span>
                                                            </div>
                                                            <div class="form-group">
                                                                <label>Vaccination</label>
                                                                <div class="form-check form-check-inline mx-4">
                                                                    <input class="form-check-input" type="radio" name="vaccination" id="inlineRadio1" v-model="puppies_info.vaccination" :value="1">
                                                                    <label class="form-check-label" for="inlineRadio1">YES</label>
                                                                </div>
                                                                <div class="form-check form-check-inline">
                                                                    <input class="form-check-input" type="radio" name="vaccination" id="inlineRadio2" v-model="puppies_info.vaccination" :value="0">
                                                                    <label class="form-check-label" for="inlineRadio2">NO</label>
                                                                </div>
                                                                <span v-if="errors?.vaccination" class="errors"> {{ errors?.vaccination }} </span>
                                                            </div>
                                                            <div class="form-group">
                                                                <label>Color</label>
                                                                <input type="text" class="form-control required" placeholder="Enter Color" name="color" v-model="puppies_info.color" />
                                                                 <span v-if="errors?.color" class="errors"> {{ errors?.color }} </span>
                                                            </div>
                                                            <div class="form-group">
                                                                <label>Gender</label>
                                                                <!-- <input type="text" class="form-control required" placeholder="Enter Gender" name="gender" v-model="puppies_info.gender" /> -->
                                                                 <select class="form-select required" name="gender" v-model="puppies_info.gender">
                                                                    <option value="">Please select the Gender</option>
                                                                    <option :value="index" v-for="(gender, index) in puppy_gender" :key="index">{{gender}}</option>
                                                                </select>
                                                                <span v-if="errors?.gender" class="errors"> {{ errors?.gender }} </span>
                                                            </div>
                                                            <div class="form-group">
                                                                <label>Price</label>
                                                                <input type="text" class="form-control required" placeholder="Enter price" name="price" v-model="puppies_info.price" />
                                                                <span v-if="errors?.price" class="errors"> {{ errors?.price }} </span>
                                                            </div>
                                                            <div class="form-group">
                                                                <label>Vendor Name</label>
                                                                <input type="text" class="form-control required" placeholder="Enter Vendor Name" name="vendor_name" v-model="puppies_info.vendor_name" />
                                                                <span v-if="errors?.vendor_name" class="errors"> {{ errors?.vendor_name }} </span>
                                                            </div>
                                                            <div class="form-group">
                                                                <label>Vendor Url</label>
                                                                <input type="text" class="form-control required" placeholder="Enter price" name="vendor_url" v-model="puppies_info.vendor_url" />
                                                                <span v-if="errors?.vendor_url" class="errors"> {{ errors?.vendor_url }} </span>
                                                            </div>
                                                            <br/>                                                          
                                                            <input type="hidden" name="puppy_id" v-model="puppies_info.puppy_id" v-if="!!puppies_info.puppy_id">
                                                             <input type="hidden" name="imageUrl" v-model="puppies_info.imageUrl" v-if="!!puppies_info.imageUrl">
                                                            <button type="submit" class="btn btn-primary">Submit</button>
                                                        <!-- </form> -->
                                                        </vue-yup-validation>
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

import * as yup from "yup";
import { mapActions,mapState } from 'vuex'
export default {
    name:"PuppiesEdit",    
    data(){
        return {
            title:"Add",
            schema: yup.object().shape({
                // puppies_image: yup.string().required('puppy image is a required field'),
                puppies_image: yup.string().when("imageUrl",(imageUrl) => { if(imageUrl.length==0) return yup.string().required("puppy image is a required field") }),
                puppies_name: yup.string().required('puppy name is a required field'),
                age: yup.string().required('age is a required field'),
                dob: yup.string().required(),
                breed: yup.string().required(),
                registery: yup.string().required(),
                weight: yup.string().required(),
                collection: yup.string().required(),
                vaccination: yup.string().required(),
                color: yup.string().required(),
                gender: yup.string().required(),
                price: yup.string().required(),
                vendor_name: yup.string().required('vendor name is a required field'),
                vendor_url: yup.string().required('vendor url is a required field'),
                puppy_id: yup.string(),
                imageUrl: yup.string(),
            }),
            puppies_info:{                
                puppies_image:"",
                puppies_name:"",
                age:"",
                dob:new Date(),
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
                puppy_id:"",
                imageUrl:"",
            },
            puppy_gender:{
                '1':'Male',
                '2':'Female',
                '3':'Other',
            },
            validationErrors:{},
            processing:false
        }
    },
    computed: {
        ...mapState('puppies',['puppiesInfo','breeds'])
    },
    methods:{
        ...mapActions({
            addPuppies:'puppies/add',
            // getBreed:'breed/get',
        }),
        async add_puppy(values){
            // let _data=JSON.parse(JSON.stringify(values))
            // console.log(this.puppies_info);return false;
            this.addPuppies(this.puppies_info);
        },
        onChange(e) {
            const file = e.target.files[0];
            this.puppies_info.puppies_image = file.name;
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = e =>{
                this.puppies_info.imageUrl = e.target.result;
            };
            
        }

    },
    mounted: async function(){
        // Edit Case: 
        if(this.$route.params.id){
            this.title='Edit';
            let id=this.$route.params.id;
            if(!!this.puppiesInfo.data){
                let _data= this.puppiesInfo.data.filter(element => element.id == id);
                _data=JSON.parse(JSON.stringify(_data))
                // console.log(_data);
                let newOrExistingProps = {
                    puppies_name: _data[0]?.name,
                    imageUrl: _data[0]?.imageUrl,
                    age: _data[0]?.age,
                    dob: new Date(_data[0]?.dob),
                    breed: _data[0]?.breed,
                    registery: _data[0]?.registery,
                    weight: _data[0]?.weight,
                    collection: _data[0]?.collection,
                    vaccination: _data[0]?.vaccination,
                    color: _data[0]?.color,
                    gender: _data[0]?.gender,
                    price: _data[0]?.price,
                    vendor_name: _data[0]?.vendor_name,
                    vendor_url: _data[0]?.vendor_url,
                    puppy_id: _data[0]?.id,
                }
                this.puppies_info = {...this.puppies_info, ...newOrExistingProps}
                // console.log(this.breed);
            }
        }
    }

}
</script>

<style>
.errors {
    color: red;
    font-style: italic;
}
.puppy_avatar{
    margin-top: 12px;
    border-radius: 20px;
}
</style>