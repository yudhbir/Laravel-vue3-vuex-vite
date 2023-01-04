<template>
    <div class="auth-wrapper">
        <div class="auth-content">
                <div class="auth-bg">
                    <span class="r"></span>
                    <span class="r s"></span>
                    <span class="r s"></span>
                    <span class="r"></span>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body text-center">
                                <div class="mb-4">
                                    <i class="feather icon-unlock auth-icon"></i>
                                </div>
                                <h3 class="mb-4">Login</h3>
                                <form method="POST" action="javascript:void(0)" @submit="admin_login_submit" id="login_frm">
                                    <div class="input-group mb-3">
                                        <input id="email" type="email" class="form-control " name="email" v-model="user.email" placeholder="Email">
                                         <span class="invalid-feedback" role="alert"><strong></strong></span>
                                    </div>
                                    <div class="input-group mb-4">
                                            <input id="password" type="password" class="form-control" name="password" v-model="user.password" placeholder="Password">
                                            <span class="invalid-feedback" role="alert"><strong></strong></span>
                                    </div>
                                    <div class="row ml-1">
                                        <button type="submit" :disabled="processing" class="btn btn-primary shadow-2 mb-4">{{ processing ? "Please wait" : "Login" }}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import '../../../admin/assets/css/style.css';
import { mapActions } from 'vuex'
export default {
    name:'admin_login',
    data(){
        return {
            user:{                
                email:"",
                password:""
            },
            validationErrors:{},
            processing:false
        }
    },
    methods:{
        ...mapActions({
            signIn:'admin/login'
        }),
        async admin_login_submit(){
            this.processing = true
            this.signIn(this.user);
        }
    }

}
</script>