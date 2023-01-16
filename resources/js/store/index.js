import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import auth from '@/store/auth'
import admin from '@/store/admin'
import breed from '@/store/breed'
import puppies from '@/store/puppies'
import shop from '@/store/shop'
const store = createStore({
    plugins:[
        createPersistedState()
    ],
    modules:{
        auth,
        admin,
        breed,
        puppies,
        shop
    }
})
export default store