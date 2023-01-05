import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import auth from '@/store/auth'
import admin from '@/store/admin'
import breed from '@/store/breed'
const store = createStore({
    plugins:[
        createPersistedState()
    ],
    modules:{
        auth,
        admin,
        breed
    }
})
export default store