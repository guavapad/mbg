<template>
  <button
    @click="handleClick"
    class="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl
           bg-gradient-to-r from-green-600 via-green-500 to-emerald-500
           text-white font-semibold text-base
           shadow-lg hover:shadow-xl
           hover:scale-[1.03] active:scale-95
           transition-all duration-200"
  >
    <!-- ICON PLUS -->
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M12 4v16m8-8H4" />
    </svg>

    <span>Add Data</span>
  </button>
</template>

<script setup>
const emit = defineEmits(['click'])

const handleClick = () => {
  emit('click')
}
</script>