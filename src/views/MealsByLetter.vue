<script setup >

import { computed, onMounted, watch } from 'vue';

import store from '../store';
import { useRoute } from 'vue-router';
import mealitem from '../components/mealitem.vue';



const route = useRoute()
const letters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
const meals = computed(()=>store.state.MealsByLetter)
watch(route,()=>{
  store.dispatch('MealsByLetter',route.params.letter)
})
onMounted(()=>{
  store.dispatch('MealsByLetter',route.params.letter)
})
</script>


<template>
  <div class="flex justify-center gap-3 mt-2">
      <RouterLink :to="{name:'byletter', params:{letter:letter}}" v-for="letter of letters" :key="letter"
      class="hover:text-gray-500"
      >
        {{ letter }}
      </RouterLink>
      
    </div>
    
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-5 m-5 p-8 ">
      
<mealitem v-for="meal in meals" :key="meal.idMeal" :meal="meal" /> 
</div> 

</template>