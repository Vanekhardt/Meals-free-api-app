<script setup>

import { computed,onMounted,ref } from 'vue';
import store from '../store';
import { RouterLink } from 'vue-router';
import instance from "../axiosClient"
import axios from 'axios';



const ingredients = ref([])
 onMounted(async ()=>{
  try {
    const res = await instance.get('/list.php?i=list')
    ingredients.value = res.data
    console.log(ingredients)
  } catch (error) {
    console.error("error in fetching",error)
  }
 })
</script>

<template>
 <div class="flex flex-col  p-8 ">
    
    
    
  
 </div>
  <div>
    <pre>
    
    </pre>
  </div>
</template>