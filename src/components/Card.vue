<template>
  <div
    class="relative rounded-2xl p-6 overflow-hidden
           bg-white/70 backdrop-blur-xl
           border border-green-100
           shadow-sm hover:shadow-lg
           transition-all duration-300
           hover:-translate-y-1"
  >

    <!-- GLOW -->
    <div class="absolute -top-10 -right-10 w-32 h-32 bg-green-200/40 blur-3xl rounded-full"></div>
    <div class="absolute -bottom-10 -left-10 w-32 h-32 bg-emerald-200/30 blur-3xl rounded-full"></div>

    <!-- CONTENT -->
    <div class="relative z-10">

      <h4 class="text-slate-500 text-sm font-medium">
        {{ title }}
      </h4>

      <p class="text-3xl font-bold mt-2 text-green-700">
        {{ value }}
      </p>

      <p v-if="subtitle" class="text-xs text-slate-400 mt-1">
        {{ subtitle }}
      </p>

    </div>

  </div>
</template>

<script setup>
defineProps({
  title: String,
  value: [String, Number],
  subtitle: String
})
</script>