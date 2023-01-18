import axios from 'axios'
export default {
    namespaced: true,
    state:{
        shopListing:{},
        shopBreeds:{},
        shopprocessing:true,

    },
    getters:{
        shop_puppies_listing(state){
            return state.shopListing
        }
    },
    mutations:{        
        SET_PROCESSING (state, value) {
            state.shopprocessing = value
        },
        SHOP_PUPPIES_LISTING (state, value) {
            state.shopListing = value
        },
        // DELETE_PUPPIES (state, value) {
        //     state.puppiesInfo.data =  [
        //         ...state.puppiesInfo.data.filter(element => element.id !== value)
        //     ]
        // },
        SELECTION_BREEDS (state, value) {
            state.shopBreeds = value
        },         
    },
    actions:{        
        listing({commit},page='1'){
            commit('SET_PROCESSING',true);
            return axios.get('/api/admin/puppies/list?page='+page).then(({data})=>{
                // console.log(data);
                if(data.success){
                    commit('SET_PROCESSING',false);
                    commit('SHOP_PUPPIES_LISTING',data.result);
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
        filteration({commit},data){
            commit('SET_PROCESSING',true);
            return axios.get('/api/admin/puppies/list',{params: data} ).then(({data})=>{
                // console.log(data);
                if(data.success){
                    commit('SET_PROCESSING',false);
                    commit('SHOP_PUPPIES_LISTING',data.result);
                }
            }).catch(({response:{data}})=>{               
                commit('SET_PROCESSING',false)
            })
        },      
    }
}