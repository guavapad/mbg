<template>
  <div class="app-shell">
    <Sidebar class="app-sidebar" />
    <div class="app-body">

      <Topbar class="app-topbar" />

      <!-- BREADCRUMB — di luar scroll, otomatis muncul di semua halaman -->
      <div class="app-breadcrumb">
        <Breadcrumb />
      </div>

      <main class="app-main">
        <slot />
      </main>

    </div>
  </div>
</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue'
import Topbar from '@/components/Topbar.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
</script>

<style scoped>
.app-shell {
  display: flex;
  height: 100vh;
  overflow: hidden;
  background: #f1f5f9;
}

.app-sidebar {
  flex-shrink: 0;
  height: 100vh;
  position: sticky;
  top: 0;
}

.app-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
}

.app-topbar {
  flex-shrink: 0;
}

.app-breadcrumb {
  flex-shrink: 0;
  padding: 1rem 2rem 0;
  background: #f1f5f9;
}

.app-main {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 2rem;          /* ← padding global */
}
</style>