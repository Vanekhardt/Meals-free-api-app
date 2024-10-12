<script setup >

import { computed, onMounted, ref } from 'vue';
import store from '../store';
import state from '../store/state';
import {useRoute,RouterLink} from 'vue-router'
import Youtubebutton from '../components/youtubebutton.vue';
import Mealitem from '../components/mealitem.vue';

const route = useRoute()
const keyword = ref('')
const meals = computed(()=>store.state.searchedMeals)
function searchedMeals(){
    store.dispatch('searchMeals',keyword.value)
}
onMounted(()=>{
  keyword.value = route.params.name
  if(keyword.value){
    searchedMeals()
  }
})
</script>


<template >
 <div class="bg-violet-200 ">
  <div class="p-10 ">
    <input @change="searchedMeals"
    v-model="keyword"
    type="text" class="rounded-2 border-gray-200 w-full" 
    placeholder="search for meals">
    
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-5 m-5 p-8 ">
  <Mealitem v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
</div>
 </div>



</template>