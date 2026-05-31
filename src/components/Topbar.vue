<template>
  <header
    class="sticky top-0 z-30 px-8 h-20 flex items-center justify-between
           bg-gradient-to-r from-white/80 via-white/70 to-white/60
           backdrop-blur-xl border-b border-slate-200/50
           shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
  >
    <!-- LEFT -->
    <div class="flex items-center gap-6">

      <!-- TITLE -->
      <div class="flex flex-col leading-tight">
        <h2 class="text-xl font-bold text-slate-800 tracking-tight">
          MBG Dashboard
        </h2>
        <p class="text-xs text-slate-400">
          Manage users, roles, and permissions
        </p>
      </div>

      <!-- SEARCH -->


    </div>

    <!-- RIGHT -->
    <div class="flex items-center gap-4">

      <!-- NOTIFICATION -->
      <button
        class="w-10 h-10 rounded-xl bg-white border border-slate-200
               flex items-center justify-center
               hover:shadow-md hover:-translate-y-0.5 transition"
      >
        🔔
      </button>

      <!-- AVATAR -->
      <div class="relative">

        <button
          @click="toggleDropdown"
          class="flex items-center gap-2 pl-2 pr-3 py-1.5
                 bg-white border border-slate-200 rounded-xl
                 hover:shadow-md hover:-translate-y-0.5 transition"
        >
          <div
            class="w-8 h-8 rounded-full
                   bg-gradient-to-br from-blue-600 to-indigo-500
                   flex items-center justify-center text-white text-xs font-bold"
          >
            SA
          </div>

          <span class="text-sm font-medium text-slate-700">
            Admin
          </span>
        </button>

        <!-- DROPDOWN -->
        <transition name="fade">
          <div
            v-if="open"
            class="absolute right-0 mt-3 w-56
                   bg-white border border-slate-200
                   rounded-2xl shadow-xl overflow-hidden
                   animate-fadeIn"
          >
            <div class="px-4 py-3 border-b bg-slate-50">
              <p class="text-sm font-semibold text-slate-800">
                Super Admin
              </p>
              <p class="text-xs text-slate-400">
                admin@mail.com
              </p>
            </div>

            <button class="w-full text-left px-4 py-3 text-sm hover:bg-slate-100 transition">
              Profile
            </button>

            <button class="w-full text-left px-4 py-3 text-sm hover:bg-slate-100 transition">
              Settings
            </button>

            <button
              @click="logout"
              class="w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition"
            >
              Logout
            </button>
          </div>
        </transition>

      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const open = ref(false)

const toggleDropdown = () => {
  open.value = !open.value
}

const closeDropdown = (e) => {
  if (!e.target.closest('.relative')) {
    open.value = false
  }
}

const logout = () => {
  alert('Logout berhasil')
}

onMounted(() => {
  document.addEventListener('click', closeDropdown)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', closeDropdown)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.animate-fadeIn {
  animation: fadeIn 0.2s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>  