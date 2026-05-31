<template>
  <aside
    :class="[
      'min-h-screen flex flex-col transition-all duration-300 ease-in-out',
      isOpen ? 'w-72' : 'w-20',
      'bg-slate-950/95 backdrop-blur-xl text-white border-r border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)]'
    ]"
  >
    <!-- HEADER -->
    <div class="p-4 border-b border-white/10 flex items-center justify-between">

      <div class="flex items-center gap-3">
        <div
          class="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-400 via-green-500 to-teal-400
                 flex items-center justify-center text-slate-900 font-bold shadow-lg"
        >
          SA
        </div>

        <!-- TEXT HEADER -->
        <div v-if="isOpen" class="transition-all duration-200">
          <h1 class="text-base font-semibold tracking-wide">
            Super Admin
          </h1>
          <p class="text-xs text-white/40">
            Management System
          </p>
        </div>
      </div>


    </div>

    <!-- MENU -->
    <nav class="flex-1 p-3 space-y-1.5">

      <!-- ITEM -->
      <a
        href="#"
        class="relative flex items-center gap-3 px-4 py-3 rounded-xl
               bg-white/10 text-white
               hover:bg-white/10 hover:translate-x-1
               transition-all duration-200"
      >
        <span class="text-lg">👤</span>
        <span v-if="isOpen" class="text-sm font-medium">User Management</span>

        <span class="absolute left-0 top-2 bottom-2 w-1 bg-emerald-400 rounded-full"></span>
      </a>

      <a
        href="#"
        class="flex items-center gap-3 px-4 py-3 rounded-xl
               text-white/70 hover:text-white hover:bg-white/5 hover:translate-x-1
               transition-all duration-200"
      >
        <span class="text-lg">🏢</span>
        <span v-if="isOpen" class="text-sm font-medium">Company</span>
      </a>

      <a
        href="#"
        class="flex items-center gap-3 px-4 py-3 rounded-xl
               text-white/70 hover:text-white hover:bg-white/5 hover:translate-x-1
               transition-all duration-200"
      >
        <span class="text-lg">⚙️</span>
        <span v-if="isOpen" class="text-sm font-medium">Settings</span>
      </a>

      <a
        href="#"
        class="flex items-center gap-3 px-4 py-3 rounded-xl
               text-white/70 hover:text-white hover:bg-white/5 hover:translate-x-1
               transition-all duration-200"
      >
        <span class="text-lg">📊</span>
        <span v-if="isOpen" class="text-sm font-medium">Reports</span>
      </a>

    </nav>

    <!-- FOOTER -->
    <div class="p-3 border-t border-white/10">
      <div class="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition">

        <div class="relative">
          <div class="w-9 h-9 rounded-full bg-emerald-500"></div>
          <span class="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 border-2 border-slate-950 rounded-full"></span>
        </div>

        <div v-if="isOpen" class="text-xs">
          <p class="font-medium">Admin Active</p>
          <p class="text-white/40">Online</p>
        </div>

      </div>
    </div>
    <!-- FLOATING TOGGLE BUTTON -->
<button
  @click="isOpen = !isOpen"
  class="absolute top-1/2 -right-4 -translate-y-1/2
         w-8 h-16
         flex items-center justify-center
         bg-slate-900 border border-white/10
         rounded-full shadow-lg
         hover:bg-slate-800 hover:shadow-[0_0_15px_rgba(34,197,94,0.4)]
         transition-all duration-300"
>
  <svg
    class="w-4 h-4 transition-transform duration-300"
    :class="isOpen ? 'rotate-0' : 'rotate-180'"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
</button>
  </aside>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(true)
</script>