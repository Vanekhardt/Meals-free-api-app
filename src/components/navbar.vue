<script setup>
</script>
<template>
    <header class="bg-white shadow-md h-16 flex justify-between items-stretch">
        <RouterLink :to="{name:'home'}" 
        class="inline-flex items-center px-5 h-full">
            Home
        </RouterLink>
        <div class="flex items-center gap-1">
            <RouterLink :to="{name:'byname'}"
            class="px-2 h-full inline-flex items-center transition-colors
             hover:bg-violet-200  ">
                Search meals
            </RouterLink>
            <RouterLink :to="{name:'byletter'}"
            class="px-2 h-full inline-flex items-center transition-colors
             hover:bg-violet-200  ">
                Meals by letters
            </RouterLink>
            <RouterLink :to="{name:'byingredient'}" 
            class="px-2 h-full inline-flex items-center transition-colors
             hover:bg-violet-200  ">
                Meals by ingerdients
            </RouterLink>
        </div>
    </header>
</template>