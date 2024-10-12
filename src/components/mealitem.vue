<script setup>
const {meal} = defineProps({
    
    meal :{
    required:true,
    type : Object
    }
})
import Youtubebutton from '../components/youtubebutton.vue'
</script>

<template>
    <div  
  class="bg-white-100 shadow rounded-xl">

      <Router-Link :to="{name:'mealdetail',params:{id:meal.idMeal}}">
        <img :src="meal.strMealThumb" :alt="strMeal"
         class="rounded-t-xl w-full h-48 object-cover">
      </Router-Link>
    <div>
      
    </div>
    <div class="p-4">
      <h3 class=" font-semibold">
      {{ meal.strMeal }}
    </h3>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis libero dolorum atque similique doloremque modi maiores nesciunt, ipsa sequi natus optio ex nostrum pariatur qui ullam quos rem asperiores quaerat.

    </p>
    <div class="p-3 flex items-center justify-around">
     <Youtubebutton :href ="meal.strYoutube">
      Go to youtube
     </Youtubebutton>
   
    </div>
    </div>
 
  
  
  
  
  
  </div>
</template>