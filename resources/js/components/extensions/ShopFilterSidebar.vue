<template>
    <div class="accordion" id="accordionExample"> 
        <div class="d-inline-flex"><label> Filter : </label><button class="btn btn-primary" @click="clear_filter"> Clear Filter</button></div>       
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Gender
            </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="gender[]" :value="1" id="male_gender" v-model="shopFilter.gender" @change="activate_filter($event)">
                    <label class="form-check-label" for="male_gender">
                        Male
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="gender[]" :value="2" id="female_gender" v-model="shopFilter.gender" @change="activate_filter($event)">
                    <label class="form-check-label" for="female_gender">
                        Female
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="gender[]" :value="3" id="either" v-model="shopFilter.gender" @change="activate_filter($event)">
                    <label class="form-check-label" for="either">
                        Either
                    </label>
                </div>
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Breed
            </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <div class="form-check" v-for="breed in breedList" :key="breed.id">
                    <input class="form-check-input" type="checkbox" name="breed[]" :value="breed.id" v-model="shopFilter.breed" :id="'breed_'+breed.id" @change="activate_filter($event)">
                    <label class="form-check-label" :for="'breed_'+breed.id">
                        {{breed.breed}}
                    </label>
                </div>
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Collections
            </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">                    
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="doodle" v-model="shopFilter.doodle" id="doodle_puppies" @change="activate_filter($event)">
                    <label class="form-check-label" for="doodle_puppies">
                        Doodle Puppies
                    </label>
                </div>
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                Age
            </button>
            </h2>
            <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">                    
                <div class="form-check" v-for="(ag, key, index) in age" :key="index">
                    <input class="form-check-input" type="checkbox" name="age[]" :value="key" v-model="shopFilter.age" :id="'week'+index" @change="activate_filter($event)">
                    <label class="form-check-label" :for="'week'+index">
                        {{ag}}
                    </label>
                </div>
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                Color
            </button>
            </h2>
            <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">                    
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="color[]" v-model="shopFilter.color" id="black">
                    <label class="form-check-label" for="black">
                        Black
                    </label>
                </div>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="color[]" v-model="shopFilter.color" id="blue">
                    <label class="form-check-label" for="blue">
                        Blue
                    </label>
                </div>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="color[]" v-model="shopFilter.color" id="grey">
                    <label class="form-check-label" for="grey">
                        Grey
                    </label>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'shopfiltersidebar',
    data(){
        return{
            age:{
                'all':'Any Age',
                '8':'Up to 8 Weeks',
                '12':'Up to 12 Weeks',
                '16':'Up to 16 Weeks',
                '20':'Older than 16 Weeks',
            }
        }
    },
    props:['shopFilter','breedList'],
    methods:{       
        async activate_filter(event){
            if(event.target.checked){
                this.$emit('filter_sidebar',this.shopFilter);
            }
        },
        async clear_filter(){
            this.$emit('clear_filter',this.shopFilter);
        }
    }
}
</script>

<style>

</style>