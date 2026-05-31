<template>
  <button
    @click="emit('click')"
    class="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl
           text-white
           bg-gradient-to-r from-red-500 to-pink-500
           hover:from-red-600 hover:to-pink-600
           shadow-sm hover:shadow-md
           transition-all duration-200
           active:scale-95"
  >
    <img
      :src="deleteIcon"
      alt="delete"
      class="w-5 h-5 brightness-0 invert"
    />
  </button>
</template>

<script setup>
import deleteIcon from '../assets/ButtonDelete.svg'

const emit = defineEmits(['click'])
</script>