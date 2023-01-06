import axios from 'axios'
import router from '@/router'
export default {
    namespaced: true,
    state:{
        puppies:{},
        processing:false,

    },
    getters:{
        puppies_listing(state){
            return state.puppies
        }
    },
    mutations:{        
        SET_PROCESSING (state, value) {
            state.processing = value
        },
        SETUP_PUPPIES (state, value) {
            state.puppies = value
        },
        DELETE_PUPPIES (state, value) {
            state.puppies.data =  [
                ...state.puppies.data.filter(element => element.id !== value)
            ]
        }         
    },
    actions:{
        add({commit},breed_info){
            // console.log(breed_info);return false;
            return axios.post('/api/admin/puppies/edit',breed_info).then(({data})=>{
                if(data.success){
                    commit('SET_PROCESSING',true)
                    router.push({name:'admin_puppies_list'})
                }
            }).catch(({response:{data}})=>{               
                commit('SET_PROCESSING',false)
            })
        },
        listing({commit}){
            return axios.get('/api/admin/puppies/list').then(({data})=>{
                // console.log(data);
                if(data.success){
                    commit('SET_PROCESSING',false);
                    commit('SETUP_PUPPIES',data.result);
                }
            }).catch(({response:{data}})=>{               
                commit('SET_PROCESSING',false)
            })
        },
        delete({commit},id){
            return axios.get('/api/admin/breed/delete/'+id).then(({data})=>{
                // console.log(data);
                if(data.success){
                    commit('SET_PROCESSING',false);
                    commit('DELETE_PUPPIES',id);
                }
            }).catch(({response:{data}})=>{               
                commit('SET_PROCESSING',false)
            })
        }        
    }
}