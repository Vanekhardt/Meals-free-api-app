<script setup>
 const props = defineProps({
    href:String
 })
</script>

<template>
     <a :href="href" target="_blank"
      class="bg-red-500 px-3 py-2 rounded-lg
      hover:bg-red-900 hover:text-white transition-colors">
      <slot></slot>
      </a>
</template>