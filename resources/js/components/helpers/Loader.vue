<template>
  <div id="overlay" v-if="shopprocessing && !admin_authenticated"></div>
  <div id="overlay" v-if="puppy_processing && admin_authenticated"></div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'loader',
    computed:{
        ...mapState('shop',['shopprocessing']),
        ...mapState('puppies',['puppy_processing']),
        ...mapState('admin',['admin_authenticated'])
    },
}
</script>

<style scoped>
#overlay {
  position: fixed;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 2;
  cursor: pointer;
}
</style>