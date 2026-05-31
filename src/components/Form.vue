<template>
  <div class="w-full">
    <label v-if="label" class="text-sm font-medium text-slate-600">
      {{ label }}
    </label>

    <input
      v-if="type !== 'textarea'"
      :type="type"
      :value="modelValue"
      @input="handleInput($event.target.value)"
      :placeholder="placeholder"
      class="w-full mt-1 px-4 py-2 border rounded-xl focus:ring-2 outline-none"
      :class="error ? 'border-red-500 focus:ring-red-400' : 'focus:ring-green-500'"
    />

    <textarea
      v-else
      :value="modelValue"
      @input="handleInput($event.target.value)"
      :placeholder="placeholder"
      class="w-full mt-1 px-4 py-2 border rounded-xl focus:ring-2 outline-none"
      :class="error ? 'border-red-500 focus:ring-red-400' : 'focus:ring-green-500'"
    />

    <p v-if="error" class="text-red-500 text-xs mt-1">
      {{ error }}
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useFormStore } from '/stores/userFormStore'

const store = useFormStore()

const props = defineProps({
  modelValue: [String, Number],
  label: String,
  placeholder: String,
  type: {
    type: String,
    default: 'text',
  },
  name: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

// ambil error dari pinia
const error = computed(() => store.errors[props.name])

const handleInput = (value) => {
  emit('update:modelValue', value)

  // 🔥 VALIDASI DIPANGGIL DI FORM COMPONENT
  store.validateField(props.name, value)
}
</script>