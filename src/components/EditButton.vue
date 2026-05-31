<template>
  <button
    @click="handleClick"
    class="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl
           text-white
           bg-gradient-to-r from-blue-500 to-indigo-500
           hover:from-blue-600 hover:to-indigo-600
           shadow-sm hover:shadow-md
           transition-all duration-200
           active:scale-95"
  >
    <img
      :src="editIcon"
      alt="edit"
      class="w-5 h-5 brightness-0 invert"
    />
  </button>
</template>

<script setup>
import editIcon from '../assets/ButtonEdit.svg'

const props = defineProps({
  confirm: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

const handleClick = () => {
  if (props.confirm) {
    const ok = confirm('Yakin ingin mengedit data ini?')
    if (!ok) return
  }

  emit('click')
}
</script>