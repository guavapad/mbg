<template>
  <div class="flex items-center justify-between mt-6">

    <p class="text-sm text-slate-500">
      Showing {{ start }} - {{ end }} of {{ total }}
    </p>

    <div class="flex gap-2">

      <button
        class="px-4 py-2 rounded-xl border bg-white text-sm disabled:opacity-50"
        :disabled="currentPage === 1"
        @click="$emit('change', currentPage - 1)"
      >
        Prev
      </button>

      <button
        v-for="page in totalPages"
        :key="page"
        @click="$emit('change', page)"
        class="px-4 py-2 rounded-xl text-sm border"
        :class="page === currentPage ? 'bg-blue-600 text-white' : 'bg-white'"
      >
        {{ page }}
      </button>

      <button
        class="px-4 py-2 rounded-xl border bg-white text-sm disabled:opacity-50"
        :disabled="currentPage === totalPages"
        @click="$emit('change', currentPage + 1)"
      >
        Next
      </button>

    </div>

  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  currentPage: Number,
  perPage: Number,
  total: Number
})

defineEmits(['change'])

const totalPages = computed(() =>
  Math.ceil(props.total / props.perPage)
)

const start = computed(() =>
  (props.currentPage - 1) * props.perPage + 1
)

const end = computed(() =>
  Math.min(props.currentPage * props.perPage, props.total)
)
</script>