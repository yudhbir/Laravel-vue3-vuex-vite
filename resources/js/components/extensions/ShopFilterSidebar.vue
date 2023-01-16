<template>
    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Gender
            </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="male_gender">
                    <label class="form-check-label" for="male_gender">
                        Male
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="female_gender">
                    <label class="form-check-label" for="female_gender">
                        Female
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="female_gender">
                    <label class="form-check-label" for="female_gender">
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
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="breed1">
                    <label class="form-check-label" for="breed1">
                        Breed 1
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
                    <input class="form-check-input" type="checkbox" value="" id="doodle_puppies">
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
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="week">
                    <label class="form-check-label" for="week">
                        1 week
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
                    <input class="form-check-input" type="checkbox" value="" id="black">
                    <label class="form-check-label" for="black">
                        Black
                    </label>
                </div>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="blue">
                    <label class="form-check-label" for="blue">
                        Blue
                    </label>
                </div>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="grey">
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
    name:'shopfiltersidebar'
}
</script>

<style>

</style>