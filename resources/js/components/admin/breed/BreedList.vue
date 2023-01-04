<template>
    <div class="pcoded-main-container">
        <div class="pcoded-wrapper">
            <div class="pcoded-content">
                <div class="pcoded-inner-content">
                    <div class="page-header"> <!-- Page-header Start -->
                        <div class="page-block">
                            <div class="row align-items-center">
                                <div class="col-md-12">
                                    <div class="page-header-title">
                                        <h5 class="m-b-10">Breed </h5>
                                    </div>
                                    <ul class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="javascript:void(0);"><i class="feather icon-home"></i></a></li>
                                        <li class="breadcrumb-item"><router-link :to="{name:'admin_dashboard'}">Dashboard</router-link></li>
                                        <li class="breadcrumb-item"><a href="javascript:">Breed List</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> <!-- Page-header End -->

                    <div class="main-body">
                        <div class="page-wrapper">
                            <div class="row">
                                <div class="col-xl-12 col-md-12">
                                    <div class="card Recent-Users">
                                        <div class="card-header">
                                            <h5>Breed List</h5>
                                            <router-link :to="{name:'admin_puppies_breed_add'}" class="label theme-bg text-white f-12" style="float:right;">Add Breed</router-link>
                                        </div>
                                        <div class="card-block px-0 py-3">
                                            <div class="table-responsive">
                                                <table class="table table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th>Id</th>
                                                            <th>Name</th>
                                                            <th>Type</th>
                                                            <th>Status</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        
                                                        <tr class="unread">
                                                            <td>id</td>
                                                            <td>name</td>
                                                            <td>Type</td>
                                                            <td>
                                                                <h6 class="text-muted">
                                                                   
                                                                        <i class="fas fa-circle text-c-green f-10 m-r-15"></i>Active
                                                                    
                                                                        <i class="fas fa-circle text-c-red f-10 m-r-15"></i>Inactive
                                                                   
                                                                </h6>
                                                            </td>
                                                            <td>
                                                                <a href="{{route('admin_ammunition_subcategory_edit',['id'=>$val['id']])}}" class="label theme-bg2 text-white f-12">Edit</a>
                                                                <a href="{{route('admin_ammunition_subcategory_delete',['id'=>$val['id']])}}" class="label theme-bg text-white f-12" onclick="return delete_confirmation();">Delete</a>
                                                            </td>
                                                        </tr>
                                                        
                                                            <tr class="unread">  
                                                                <td colspan="4">No Record Found.</td>
                                                            </tr> 
                                                        
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <!-- {{ $result->links() }} -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'BreedList'
}
</script>

<style>

</style>