<template>
  <div class="card p-4 flex items-center gap-3 bg-white">
    
    <div class="relative w-full">
      <input
        v-model="model"
        @input="emitSearch"
        type="text"
        placeholder="Search data..."
        class="input-primary pl-10 w-full"
      />

      <svg class="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2"
        fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M21 21l-4.35-4.35m1.1-5.65a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
    </div>

    <slot name="action" />
    
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  modelValue: String
})

const emit = defineEmits(['update:modelValue', 'search'])

const model = ref(props.modelValue || '')

const emitSearch = () => {
  emit('update:modelValue', model.value)
  emit('search', model.value)
}
</script>