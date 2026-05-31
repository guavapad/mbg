<template>
  <header
    class="h-20 px-8 flex items-center justify-between
           bg-white/70 backdrop-blur-xl
           border-b border-slate-200/60
           shadow-sm sticky top-0 z-20"
  >
    <!-- LEFT -->
    <div class="flex flex-col">
      <h2 class="text-xl font-bold text-slate-800">
       MBG
      </h2>
      <p class="text-xs text-slate-400">
        Manage users, roles, and permissions
      </p>
    </div>

    <!-- RIGHT -->
    <div class="flex items-center gap-4 relative">

      <!-- EXPORT -->

      <!-- AVATAR -->
      <div class="relative">
        <button
          @click="toggleDropdown"
          class="w-11 h-11 rounded-full
                 bg-gradient-to-r from-blue-600 to-indigo-500
                 flex items-center justify-center
                 text-white font-bold shadow-md
                 hover:scale-105 transition"
        >
          SA
        </button>

        <!-- DROPDOWN -->
        <transition name="fade">
          <div
            v-if="open"
            class="absolute right-0 mt-3 w-48
                   bg-white border border-slate-200
                   rounded-xl shadow-lg overflow-hidden"
          >
            <div class="px-4 py-3 border-b">
              <p class="text-sm font-semibold text-slate-800">
                Super Admin
              </p>
              <p class="text-xs text-slate-400">
                admin@mail.com
              </p>
            </div>

            <button
              class="w-full text-left px-4 py-3 text-sm
                     hover:bg-slate-100 transition"
            >
              Profile
            </button>

            <button
              class="w-full text-left px-4 py-3 text-sm
                     hover:bg-slate-100 transition"
            >
              Settings
            </button>

            <button
              @click="logout"
              class="w-full text-left px-4 py-3 text-sm
                     text-red-600 hover:bg-red-50 transition"
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
  // nanti bisa: router.push('/login')
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
</style>