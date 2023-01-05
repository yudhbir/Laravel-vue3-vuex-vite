import axios from 'axios'
import router from '@/router'
export default {
    namespaced: true,
    state:{
        breeds:{},
        processing:false,

    },
    getters:{
        breed_listing(state){
            return state.breeds
        }
    },
    mutations:{        
        SET_PROCESSING (state, value) {
            state.processing = value
        },
        SETUP_BREEDS (state, value) {
            state.breeds = value
        }        
    },
    actions:{
        add({commit},breed_info){
            // console.log(breed_info);return false;
            return axios.post('/api/admin/breed/edit',breed_info).then(({data})=>{
                if(data.success){
                    commit('SET_PROCESSING',true)
                    router.push({name:'admin_puppies_breed'})
                }
            }).catch(({response:{data}})=>{               
                commit('SET_PROCESSING',false)
            })
        },
        listing({commit}){
            return axios.get('/api/admin/breed/list').then(({data})=>{
                // console.log(data);
                if(data.success){
                    commit('SET_PROCESSING',false);
                    commit('SETUP_BREEDS',data.result);
                }
            }).catch(({response:{data}})=>{               
                commit('SET_PROCESSING',false)
            })
        }        
    }
}