<template>
  <div class="container">
  <div class="row">
    <div class="col-3">
        <shopfiltersidebar :shop-filter="shop_filter" @filter_sidebar="filter_siderbar_result" :breed-list="shopBreeds" @clear_filter="clear_filter_result"/>
    </div>
    <div class="col-9">
        <div class="row">
            <div class="col-3 mb-2" v-for="puppy in shopListing?.data" :key="puppy.id">
                <div class="card">
                    <img :src="puppy.imageUrl" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text"> {{puppy.name}} </p>
                        <p class="card-text">{{puppy.collection}}</p>
                        <p class="card-text">{{puppy.weeks}}</p>
                    </div>
                </div>
            </div>
            <div class="col-3 mb-2">
                <div class="card">
                    <img src="/images/prod.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text"> Wallace </p>
                        <p class="card-text">Cavapoo</p>
                        <p class="card-text">5 Week</p>
                    </div>
                </div>
            </div>
            
            <div class="col-3 mb-2">
                <div class="card">
                    <img src="/images/prod.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text"> Wallace </p>
                        <p class="card-text">Cavapoo</p>
                        <p class="card-text">5 Week</p>
                    </div>
                </div>
            </div>
            <div class="col-3 mb-2">
                <div class="card">
                    <img src="/images/prod.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text"> Wallace </p>
                        <p class="card-text">Cavapoo</p>
                        <p class="card-text">5 Week</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  </div>
  <br/>
</template>

<script>
import shopfiltersidebar from './extensions/ShopFilterSidebar.vue'
import {mapActions,mapState} from 'vuex'
export default {
    name:"Shop",
    data(){
        return{
            shop_filter:{
                gender:[],
                breed:[],
                doodle:'',
                age:[],
                color:[],
            }
        }
    },
    components:{
        shopfiltersidebar
    },
    computed:{
        ...mapState('shop',['shopListing','shopBreeds','processing'])
    },
    methods:{
        ...mapActions({
            puppy_list:'shop/listing',
            breed_list:'shop/breeds',
            filter_result:'shop/filteration',
        }),
        async puppylist(){
            this.puppy_list();
        },        
        async filter_siderbar_result(data){
            console.log(data);
            this.filter_result(data);
        },
        async clear_filter_result(){
            let newOrExistingProps={
                gender:[],
                breed:[],
                doodle:'',
                age:[],
                color:[],
            }
            this.shop_filter = {...this.shop_filter, ...newOrExistingProps}
            this.puppy_list();
        }
    },
    mounted: async function(){
        await this.$nextTick(() => {
            this.puppylist();
            this.breed_list();
        });        
    }
}
</script>

<style>

</style>