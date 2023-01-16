<template>
  <div class="container">
  <div class="row">
    <div class="col-3">
        <shopfiltersidebar />
    </div>
    <div class="col-9">
        <div class="row">
            <div class="col-3">
                <div class="card">
                    <img src="/images/prod.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text"> Wallace </p>
                        <p class="card-text">Cavapoo</p>
                        <p class="card-text">5 Week</p>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="card">
                    <img src="/images/prod.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text"> Wallace </p>
                        <p class="card-text">Cavapoo</p>
                        <p class="card-text">5 Week</p>
                    </div>
                </div>
            </div>
            
            <div class="col-3">
                <div class="card">
                    <img src="/images/prod.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text"> Wallace </p>
                        <p class="card-text">Cavapoo</p>
                        <p class="card-text">5 Week</p>
                    </div>
                </div>
            </div>
            <div class="col-3">
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
import { method } from 'lodash';
export default {
    name:"Shop",
    components:{
        shopfiltersidebar
    },
    computed:{
        ...mapState('shop',['shopListing','shopBreeds'])
    },
    methods:{
        ...mapActions({
            puppy_list:'shop/listing',
            breed_list:'shop/breeds',
        })
    },
    mounted: async function(){
        await this.$nextTick(this.puppylist);
        await this.$nextTick(this.breed_list);
    }
}
</script>

<style>

</style>