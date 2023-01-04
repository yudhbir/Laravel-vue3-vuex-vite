<template>
    <div class="main-header">
              <!-- Start Navigation -->
        <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
            <div class="container">                                      
              <!-- Start Header Navigation -->
                <div class="navbar-header">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fa fa-bars"></i>
                    </button>
                    <router-link :to="{name:'home'}" class="navbar-brand" ><img src="/images/puppy.png" class="logo" alt="logo"></router-link>
                </div>
                <!-- End Header Navigation -->

                <!-- Collect the nav links, forms, and other content for toggling -->

                <div class="collapse navbar-collapse" id="navbar-menu">
                    <ul class="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp">
                        <li class="nav-item"><router-link :to="{name:'home'}" class="nav-link" > Puppies</router-link></li>
                        <li class="nav-item"><a href="" class="nav-link" >PuppySpot Promise</a></li>
                        <li class="nav-item"><a href="" class="nav-link" >About Us</a></li>
                        <li class="nav-item"><a href="" class="nav-link" >Resource Center</a></li>
                        <li class="nav-item"><a href="" class="nav-link" > Shop</a></li>
                        <li class="nav-item"><a class="nav-link" href=""> Blog</a></li>
                    </ul>
                </div>                
            </div>            
        </nav>
        <!-- End Navigation -->
    </div>
</template>
<!-- End Main Top -->
<script>
export default {
    name:"header",
    
}
</script>
