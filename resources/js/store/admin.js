import axios from 'axios'
import router from '@/router'
export default {
    namespaced: true,
    state:{
        admin_authenticated:false,
        user:{},
        admin_token:"",
    },
    getters:{
        authenticated(state){
            return state.admin_authenticated
        },
        user(state){
            return state.user
        }
    },
    mutations:{
        SET_ADMIN_AUTHENTICATED (state, value) {
            state.admin_authenticated = value
        },
        SET_ADMIN_USER (state, value) {
            state.user = value
        },
        SET_ADMIN_TOKEN (state, value) {
            state.admin_token = value
        }
    },
    actions:{
        login({commit},user_info){
            return axios.post('/api/admin/login',user_info).then(({data})=>{
                if(data.success){
                    commit('SET_ADMIN_USER',data.user)
                    commit('SET_ADMIN_AUTHENTICATED',true)
                    commit('SET_ADMIN_TOKEN',data.token)
                    router.push({name:'admin_dashboard'})
                }
            }).catch(({response:{data}})=>{
                commit('SET_ADMIN_USER',{})
                commit('SET_ADMIN_AUTHENTICATED',false)
                commit('SET_ADMIN_TOKEN',"")
            })
        },
        logout({commit}){
            commit('SET_ADMIN_USER',{})
            commit('SET_ADMIN_AUTHENTICATED',false)
            commit('SET_ADMIN_TOKEN',"")
            router.push({name:'admin_login'})
        }
    }
}