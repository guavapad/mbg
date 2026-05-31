<template>
  <div class="rounded-3xl border border-green-100 bg-white shadow-lg overflow-hidden">

    <!-- WRAPPER -->
    <div class="overflow-x-auto">

      <table class="w-full text-sm">

        <!-- HEADER -->
        <thead class="sticky top-0 z-10">
          <tr class="bg-gradient-to-r from-green-700 via-green-600 to-emerald-500
                     text-white text-xs uppercase tracking-wider
                     shadow-md">

            <slot name="header" />

          </tr>
        </thead>

        <!-- BODY -->
        <tbody class="divide-y divide-green-50">

          <tr
            v-for="(item, index) in data"
            :key="index"
            class="group transition-all duration-300
                   hover:bg-green-50/70 hover:scale-[1.01]
                   hover:shadow-md"
          >
            <slot name="row" :item="item" :index="index" />
          </tr>

          <!-- EMPTY STATE -->
          <tr v-if="!data || data.length === 0">
            <td colspan="999" class="py-20 text-center">

              <div class="flex flex-col items-center justify-center">

                <div class="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mb-3">
                  <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M9 17v-6h13v6M9 7h13M5 7h.01M5 17h.01M5 12h.01M9 12h.01" />
                  </svg>
                </div>

                <p class="text-green-700 font-semibold text-sm">
                  No data found
                </p>

                <p class="text-slate-400 text-xs mt-1">
                  Data akan muncul ketika tersedia
                </p>

              </div>

            </td>
          </tr>

        </tbody>

      </table>

    </div>
  </div>
</template>

<script setup>
defineProps({
  data: {
    type: Array,
    default: () => []
  }
})
</script>