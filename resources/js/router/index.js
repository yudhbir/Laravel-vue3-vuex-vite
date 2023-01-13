import { createWebHistory, createRouter } from 'vue-router'
import store from '@/store'
/* Guest Component */
const Login = () => import('@/components/Login.vue')
const Home = () => import('@/components/Home.vue')
const Register = () => import('@/components/Register.vue')
/* Guest Component */
/* Layouts */
const DahboardLayout = () => import('@/components/layouts/Default.vue')
const AdminLayout = () => import('@/components/layouts/admin/AdminMaster.vue')
/* Layouts */
/* Authenticated Component */
const Dashboard = () => import('@/components/Dashboard.vue')

const AdminLogin = () => import('@/components/admin/AdminLogin.vue')
const AdminDashboard = () => import('@/components/admin/AdminDashboard.vue')
const BreedList = () => import('@/components/admin/breed/BreedList.vue')
const BreedEdit = () => import('@/components/admin/breed/BreedEdit.vue')
const PuppiesList = () => import('@/components/admin/puppies/PuppiesList.vue')
const PuppiesEdit = () => import('@/components/admin/puppies/PuppiesEdit.vue')
/* Authenticated Component */
const routes = [
    {
       component: DahboardLayout,        
        children: [
            {
                name: "home",
                path: "/",
                component: Home,
                meta: {
                    middleware: "guest",
                    title: `Home`
                }
            }
        ]
    },
    {
        name: "admin_login",
        path: "/admin/login",
        component: AdminLogin,
        meta: {
            middleware: "guest",
            title: `Login`
        }
    },
    {
        // path: "/register",
        component: DahboardLayout,        
        children: [
            {
                name: "register",
                path: "/register",
                component: Register,
                meta: {
                    middleware: "guest",
                    title: `Register`
                }
            }
        ]
    },
    {
        path: "/",
        component: DahboardLayout,
        meta: {
            middleware: "auth"
        },
        children: [
            {
                name: "dashboard",
                path: '/',
                component: Dashboard,
                meta: {
                    title: `Dashboard`
                }
            }
        ]
    },
    {
        path: "/admin/dashboard",
        component: AdminLayout,
        meta: {
            middleware: "adminauth"
        },
        children: [
            {
                name: "admin_dashboard",
                path: '/admin/dashboard',
                component: AdminDashboard,
                meta: {
                    title: `Admin Dashboard`
                }
            }
        ]
    },
    {
        path: "/admin/puppies/breed",
        component: AdminLayout,
        meta: {
            middleware: "adminauth"
        },
        children: [
            {
                name: "admin_puppies_breed",
                path: '/admin/puppies/breed',
                component: BreedList,
                meta: {
                    title: `Puppies Breed`
                }
            }
        ]
    },
    {
        path: "/admin/puppies/breed/add",
        component: AdminLayout,
        meta: {
            middleware: "adminauth"
        },
        children: [
            {
                name: "admin_puppies_breed_add",
                path: '/admin/puppies/breed/add',
                component: BreedEdit,
                meta: {
                    title: `Puppies Breed Add`
                }
            }
        ]
    },
    {
        path: "/admin/puppies/breed/edit/:id",
        component: AdminLayout,
        meta: {
            middleware: "adminauth"
        },
        children: [
            {
                name: "admin_puppies_breed_edit",
                path: '/admin/puppies/breed/edit/:id',
                component: BreedEdit,
                meta: {
                    title: `Puppies Breed edit`
                }
            }
        ]
    },
    {
        path: "/admin/puppies/list",
        component: AdminLayout,
        meta: {
            middleware: "adminauth"
        },
        children: [
            {
                name: "admin_puppies_list",
                path: '/admin/puppies/list',
                component: PuppiesList,
                meta: {
                    title: `Puppies List`
                }
            }
        ]
    },
    {
        path: "/admin/puppies/add",
        component: AdminLayout,
        meta: {
            middleware: "adminauth"
        },
        children: [
            {
                name: "admin_puppies_add",
                path: '/admin/puppies/add',
                component: PuppiesEdit,
                meta: {
                    title: `Puppies Add`
                }
            }
        ]
    },
    {
        path: "/admin/puppies/edit/:id",
        component: AdminLayout,
        meta: {
            middleware: "adminauth"
        },
        children: [
            {
                name: "admin_puppies_edit",
                path: '/admin/puppies/edit/:id',
                component: PuppiesEdit,
                meta: {
                    title: `Puppies Edit`
                }
            }
        ]
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})
router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    console.log(to.meta.middleware);
    if (to.meta.middleware == "guest") {        
        if (store.state.auth.authenticated) {
            return next({ name: "dashboard" })
        }
        if (store.state.admin.admin_authenticated) {
            return next({ name: "admin_dashboard" })
        }
        next()
    } else {
        if (store.state.auth.authenticated) {
            return next()
        }
        if (store.state.admin.admin_authenticated) {
            return next()
        }else {
            next({ name: "home" })
        }
    }
})
export default router