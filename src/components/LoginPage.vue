<template>
  <div class="min-h-screen flex overflow-hidden relative grain" style="background: #0a2e1a;">
    
    <!-- Animated background orbs -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute w-96 h-96 rounded-full opacity-20 animate-float"
        style="background: radial-gradient(circle, #22c55e, transparent); top: -5%; left: -5%; filter: blur(60px);"></div>
      <div class="absolute w-80 h-80 rounded-full opacity-15 animate-float-delay"
        style="background: radial-gradient(circle, #fbbf24, transparent); top: 40%; right: -5%; filter: blur(80px);"></div>
      <div class="absolute w-64 h-64 rounded-full opacity-10 animate-float"
        style="background: radial-gradient(circle, #86efac, transparent); bottom: 10%; left: 30%; filter: blur(60px); animation-delay: 1s;"></div>
    </div>

    <!-- Grid pattern overlay -->
    <div class="absolute inset-0 pointer-events-none opacity-5"
      style="background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 40px 40px;"></div>

    <!-- LEFT PANEL — Hero Section -->
    <div class="hidden lg:flex lg:w-[55%] flex-col justify-between p-12 xl:p-16 relative z-10">
      
      <!-- Logo & Instansi -->
      <div class="flex items-center gap-4 animate-fade-up opacity-0">
        <div class="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
          style="background: linear-gradient(135deg, #22c55e, #16a34a);">
          <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
          </svg>
        </div>
        <div>
          <p class="text-green-300 font-body text-xs tracking-widest uppercase font-medium">Kementerian Kesehatan RI</p>
          <p class="text-white font-display font-bold text-lg leading-tight">Program MBG</p>
        </div>
      </div>

      <!-- Main Hero Content -->
      <div class="space-y-8">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 animate-fade-up opacity-0" style="animation-delay: 0.1s;">
          <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse-slow"></span>
          <span class="text-green-300 text-sm font-body font-medium">Program Aktif 2025</span>
        </div>

        <div class="animate-fade-up opacity-0" style="animation-delay: 0.2s;">
          <h1 class="font-display font-extrabold text-5xl xl:text-6xl text-white leading-[1.1] text-shadow">
            Dapur Sehat,<br/>
            <span style="background: linear-gradient(90deg, #4ade80, #fbbf24); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
              Generasi Kuat
            </span>
          </h1>
          <p class="mt-5 text-green-200/70 font-body text-lg leading-relaxed max-w-md">
            Sistem Informasi terpadu untuk manajemen distribusi makanan bergizi gratis kepada seluruh penerima manfaat di Indonesia.
          </p>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-3 gap-4 animate-fade-up opacity-0" style="animation-delay: 0.3s;">
          <div class="glass rounded-2xl p-4">
            <p class="font-display font-bold text-2xl text-white">83 Juta</p>
            <p class="text-green-300/70 text-xs font-body mt-1">Penerima Manfaat</p>
          </div>
          <div class="glass rounded-2xl p-4">
            <p class="font-display font-bold text-2xl text-white">38 Provinsi</p>
            <p class="text-green-300/70 text-xs font-body mt-1">Jangkauan Wilayah</p>
          </div>
          <div class="glass rounded-2xl p-4">
            <p class="font-display font-bold text-2xl text-white">1.200+</p>
            <p class="text-green-300/70 text-xs font-body mt-1">Dapur Aktif</p>
          </div>
        </div>

        <!-- Food icons floating -->
        <div class="flex items-center gap-3 animate-fade-up opacity-0" style="animation-delay: 0.4s;">
          <div v-for="(item, i) in foodItems" :key="i"
            class="glass w-12 h-12 rounded-xl flex items-center justify-center text-xl"
            :style="`animation-delay: ${i * 0.3}s`">
            {{ item }}
          </div>
          <p class="text-green-300/50 text-sm font-body ml-2">Nutrisi seimbang setiap hari</p>
        </div>
      </div>

      <!-- Footer left -->
      <div class="flex items-center gap-3 animate-fade-up opacity-0" style="animation-delay: 0.5s;">
        <div class="flex -space-x-2">
          <div v-for="color in ['#22c55e','#4ade80','#86efac']" :key="color"
            class="w-8 h-8 rounded-full border-2 border-green-900/50 flex items-center justify-center text-xs font-bold text-white"
            :style="`background: ${color}`">
          </div>
        </div>
        <p class="text-green-300/60 text-sm font-body">Digunakan oleh <span class="text-green-300 font-medium">12.400+</span> petugas aktif</p>
      </div>
    </div>

    <!-- RIGHT PANEL — Login Form -->
    <div class="w-full lg:w-[45%] flex items-center justify-center p-6 lg:p-10 xl:p-14 relative z-10">
      
      <div class="w-full max-w-md">
        
        <!-- Mobile Logo -->
        <div class="lg:hidden flex items-center gap-3 mb-8 animate-fade-up opacity-0">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center"
            style="background: linear-gradient(135deg, #22c55e, #16a34a);">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
            </svg>
          </div>
          <div>
            <p class="text-green-400 text-xs uppercase tracking-widest font-body">Kemkes RI</p>
            <p class="text-white font-display font-bold">Program MBG</p>
          </div>
        </div>

        <!-- Card -->
        <div class="glass-white rounded-3xl p-8 xl:p-10 shadow-2xl animate-fade-up-delay opacity-0">
          
          <!-- Header -->
          <div class="mb-8">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
              style="background: #f0fdf4; border: 1px solid #bbf7d0;">
              <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse-slow"></span>
              <span class="text-green-700 text-xs font-body font-semibold tracking-wide">SIMGZ — Sistem Informasi MBG</span>
            </div>
            <h2 class="font-display font-extrabold text-3xl text-gray-900 leading-tight">
              Selamat Datang 👋
            </h2>
            <p class="text-gray-500 font-body text-sm mt-2 leading-relaxed">
              Masuk menggunakan akun resmi <span class="text-green-600 font-medium">instansi pemerintah</span> Anda untuk melanjutkan.
            </p>
          </div>

          <!-- Google Sign In Button -->
          <button
            @click="handleGoogleLogin"
            :disabled="isLoading"
            class="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-body font-semibold text-gray-700 border-2 transition-all duration-200 group relative overflow-hidden"
            :class="isLoading ? 'border-gray-200 bg-gray-50 cursor-not-allowed' : 'border-gray-200 bg-white hover:border-green-400 hover:shadow-lg hover:shadow-green-100 hover:-translate-y-0.5 active:translate-y-0'"
          >
            <!-- Hover shimmer -->
            <span class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style="background: linear-gradient(135deg, rgba(34,197,94,0.04), rgba(251,191,36,0.04));"></span>
            
            <template v-if="!isLoading">
              <!-- Google Icon SVG -->
              <svg class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span class="relative z-10">Masuk dengan Google</span>
            </template>
            
            <!-- Loading state -->
            <template v-else>
              <div class="flex items-center gap-2">
                <div class="flex gap-1">
                  <span class="w-2 h-2 bg-green-500 rounded-full loading-dot"></span>
                  <span class="w-2 h-2 bg-green-500 rounded-full loading-dot"></span>
                  <span class="w-2 h-2 bg-green-500 rounded-full loading-dot"></span>
                </div>
                <span class="text-gray-500">Memproses...</span>
              </div>
            </template>
          </button>

          <!-- Divider -->
          <div class="flex items-center gap-3 my-6">
            <div class="flex-1 h-px bg-gray-100"></div>
            <span class="text-gray-400 text-xs font-body">atau masuk dengan NIP</span>
            <div class="flex-1 h-px bg-gray-100"></div>
          </div>

          <!-- NIP / Email Form -->
          <div class="space-y-4">
            <div>
              <label class="block text-xs font-body font-semibold text-gray-600 uppercase tracking-wider mb-2">
                NIP / Email Instansi
              </label>
              <div class="relative">
                <input
                  v-model="form.nip"
                  type="text"
                  placeholder="Contoh: 199001012020001001"
                  class="w-full px-4 py-3.5 rounded-xl border text-gray-800 font-body text-sm transition-all duration-200 outline-none placeholder-gray-300"
                  :class="form.nip ? 'border-green-400 bg-green-50/30 ring-2 ring-green-100' : 'border-gray-200 bg-gray-50 focus:border-green-400 focus:ring-2 focus:ring-green-100'"
                  @focus="activeField = 'nip'"
                  @blur="activeField = ''"
                />
                <span v-if="form.nip" class="absolute right-3 top-1/2 -translate-y-1/2 text-green-500">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label class="block text-xs font-body font-semibold text-gray-600 uppercase tracking-wider mb-2">
                Kata Sandi
              </label>
              <div class="relative">
                <input
                  v-model="form.password"
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="Masukkan kata sandi Anda"
                  class="w-full px-4 py-3.5 rounded-xl border text-gray-800 font-body text-sm transition-all duration-200 outline-none placeholder-gray-300 pr-12"
                  :class="form.password ? 'border-green-400 bg-green-50/30 ring-2 ring-green-100' : 'border-gray-200 bg-gray-50 focus:border-green-400 focus:ring-2 focus:ring-green-100'"
                />
                <button
                  @click="showPassword = !showPassword"
                  class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                  <svg v-if="!showPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>
                  <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
                  </svg>
                </button>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <label class="flex items-center gap-2 cursor-pointer group">
                <div class="relative">
                  <input type="checkbox" v-model="form.remember" class="sr-only" />
                  <div class="w-4 h-4 rounded border-2 transition-all duration-200 flex items-center justify-center"
                    :class="form.remember ? 'bg-green-500 border-green-500' : 'border-gray-300 group-hover:border-green-400'">
                    <svg v-if="form.remember" class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                </div>
                <span class="text-xs text-gray-500 font-body">Ingat saya</span>
              </label>
              <a href="#" class="text-xs text-green-600 font-body font-medium hover:text-green-700 hover:underline">
                Lupa kata sandi?
              </a>
            </div>

            <!-- Submit button -->
            <button
              @click="handleNIPLogin"
              :disabled="!form.nip || !form.password || isLoading"
              class="w-full py-4 rounded-2xl font-display font-bold text-sm tracking-wide transition-all duration-200 mt-2"
              :class="form.nip && form.password && !isLoading
                ? 'text-white shadow-lg shadow-green-500/30 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-500/40 active:translate-y-0'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'"
              :style="form.nip && form.password && !isLoading ? 'background: linear-gradient(135deg, #22c55e, #16a34a)' : ''"
            >
              Masuk ke Sistem
            </button>
          </div>

          <!-- Notification alert -->
          <Transition name="slide-up">
            <div v-if="notification.show"
              class="mt-4 flex items-start gap-3 px-4 py-3 rounded-xl text-sm font-body"
              :class="notification.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'">
              <span class="text-lg leading-none mt-0.5">{{ notification.type === 'success' ? '✅' : '⚠️' }}</span>
              <span>{{ notification.message }}</span>
            </div>
          </Transition>

          <!-- Footer info -->
          <div class="mt-6 pt-5 border-t border-gray-100">
            <p class="text-center text-xs text-gray-400 font-body leading-relaxed">
              Sistem ini hanya untuk <span class="text-gray-600 font-medium">petugas resmi</span> yang telah terdaftar.<br/>
              Belum terdaftar? Hubungi <a href="mailto:helpdesk.mbg@kemkes.go.id" class="text-green-600 hover:underline">helpdesk.mbg@kemkes.go.id</a>
            </p>
          </div>
        </div>

        <!-- Trust badges -->
        <div class="flex items-center justify-center gap-4 mt-6 animate-fade-up-delay2 opacity-0">
          <div class="flex items-center gap-1.5">
            <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
            </svg>
            <span class="text-green-400/70 text-xs font-body">SSL Terenkripsi</span>
          </div>
          <span class="text-green-800 text-xs">•</span>
          <div class="flex items-center gap-1.5">
            <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 8C8 10 5.9 16.17 3.82 19.34L5.71 21l1-1.07A4.984 4.984 0 0 0 8 21a5 5 0 0 0 5-5 3 3 0 0 1 3-3 7 7 0 0 0 7-7V2h-1c-3 0-6 1-8 6z"/>
            </svg>
            <span class="text-green-400/70 text-xs font-body">Data BSSN Compliant</span>
          </div>
          <span class="text-green-800 text-xs">•</span>
          <div class="flex items-center gap-1.5">
            <span class="text-green-400/70 text-xs font-body">© 2025 Kemkes RI</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const isLoading = ref(false)
const showPassword = ref(false)
const activeField = ref('')

const form = reactive({
  nip: '',
  password: '',
  remember: false
})

const notification = reactive({
  show: false,
  type: 'success',
  message: ''
})

const foodItems = ['🥗', '🍚', '🥩', '🐟', '🥦', '🥚']

const showNotification = (type, message) => {
  notification.type = type
  notification.message = message
  notification.show = true
  setTimeout(() => { notification.show = false }, 4000)
}

const handleGoogleLogin = async () => {
  isLoading.value = true
  // Simulasi OAuth Google redirect
  await new Promise(resolve => setTimeout(resolve, 2000))
  isLoading.value = false
  showNotification('success', 'Mengarahkan ke halaman autentikasi Google...')
  // Di implementasi nyata: window.location.href = '/auth/google'
}

const handleNIPLogin = async () => {
  if (!form.nip || !form.password) return
  isLoading.value = true
  await new Promise(resolve => setTimeout(resolve, 1800))
  isLoading.value = false
  // Simulasi validasi
  if (form.nip.length < 8) {
    showNotification('error', 'NIP atau kata sandi tidak valid. Silakan periksa kembali.')
  } else {
    showNotification('success', `Berhasil masuk! Selamat datang di SIMGZ.`)
  }
}
</script>

<style scoped>
.slide-up-enter-active, .slide-up-leave-active {
  transition: all 0.3s ease;
}
.slide-up-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
