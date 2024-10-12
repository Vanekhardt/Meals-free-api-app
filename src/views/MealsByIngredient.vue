<script setup >

import { onMounted, ref } from 'vue';
import axios from 'axios';
import instance from '../axiosClient';
 const ingredients =ref([])

onMounted(()=>{
    instance.get('list.php?i=list')
    .then(({data})=>{
            ingredients.value=data.meals
            console.log(ingredients.value)
    })
 })
</script>


<template>
    <div>
        <div v-for="ing of ingredients" :key="ing.id" 
        class="bg-gray-200 w-[800px] mx-auto p-3"   >
        <h1 class="font-bold text-red-300 my-2 text-2xl">{{ ing.strIngredient }} :</h1>
        <p class="w-full p-8">{{ ing.strDescription }}</p>
            
    </div>
    </div>

  
</template>