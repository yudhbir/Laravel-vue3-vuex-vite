import axios from 'axios'
import router from '@/router'
export default {
    namespaced: true,
    state:{
        puppiesInfo:{},
        breeds:{},
        puppy_processing:false,

    },
    getters:{
        puppies_listing(state){
            return state.puppiesInfo
        }
    },
    mutations:{        
        SET_PROCESSING (state, value) {
            state.puppy_processing = value
        },
        SETUP_PUPPIES (state, value) {
            state.puppiesInfo = value
        },
        DELETE_PUPPIES (state, value) {
            state.puppiesInfo.data =  [
                ...state.puppiesInfo.data.filter(element => element.id !== value)
            ]
        },
        SELECTION_BREEDS (state, value) {
            state.breeds = value
        },         
    },
    actions:{
        add({commit},breed_info){
            // console.log(breed_info);return false;
            commit('SET_PROCESSING',true);
            return axios.post('/api/admin/puppies/edit',breed_info).then(({data})=>{
                if(data.success){
                    commit('SET_PROCESSING',false)
                    router.push({name:'admin_puppies_list'})
                }
            }).catch(({response:{data}})=>{               
                commit('SET_PROCESSING',false)
            })
        },
        listing({commit},page='1'){
            commit('SET_PROCESSING',true);
            return axios.get('/api/admin/puppies/list?page='+page).then(({data})=>{
                // console.log(data);
                if(data.success){
                    commit('SET_PROCESSING',false);
                    commit('SETUP_PUPPIES',data.result);
                }
            }).catch(({response:{data}})=>{               
                commit('SET_PROCESSING',false)
            })
        },
        breeds({commit}){
            commit('SET_PROCESSING',true);
            return axios.get('/api/admin/breed/list/all').then(({data})=>{
                // console.log(data);
                if(data.success){
                    commit('SET_PROCESSING',false);
                    commit('SELECTION_BREEDS',data.result);
                }
            }).catch(({response:{data}})=>{               
                commit('SET_PROCESSING',false)
            })
        },
        delete({commit},id){
            commit('SET_PROCESSING',true);
            return axios.get('/api/admin/breed/delete/'+id).then(({data})=>{
                // console.log(data);
                if(data.success){
                    commit('SET_PROCESSING',false);
                    commit('DELETE_PUPPIES',id);
                }
            }).catch(({response:{data}})=>{               
                commit('SET_PROCESSING',false)
            })
        },
        loading({commit},flag) {
            commit('SET_PROCESSING',flag);
        }       
    }
}