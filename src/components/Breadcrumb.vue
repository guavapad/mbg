<template>
  <div class="space-y-1">

    <!-- PAGE TITLE -->
    <div class="text-xl font-semibold text-slate-800">
      {{ pageTitle }}
    </div>

    <!-- BREADCRUMB -->
    <nav class="text-sm text-slate-500">
      <ol class="flex items-center space-x-2">

        <!-- HOME -->
        <li>
          <router-link to="/" class="hover:text-green-600">
            Home
          </router-link>
        </li>

        <!-- DYNAMIC -->
        <li
          v-for="(item, i) in breadcrumbs"
          :key="i"
          class="flex items-center space-x-2"
        >
          <span>/</span>

          <router-link
            v-if="i !== breadcrumbs.length - 1 && item.path"
            :to="item.path"
            class="hover:text-green-600"
          >
            {{ item.name }}
          </router-link>

          <span
            v-else
            class="text-slate-800 font-semibold"
          >
            {{ item.name }}
          </span>

        </li>

      </ol>
    </nav>

  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

/**
 * 🔥 PAGE TITLE (yang di atas breadcrumb)
 */
const pageTitle = computed(() => {
  const breadcrumb = route.meta?.breadcrumb

  if (Array.isArray(breadcrumb) && breadcrumb.length) {
    return breadcrumb[breadcrumb.length - 1].name
  }

  if (typeof route.meta?.breadcrumb === 'string') {
    return route.meta.breadcrumb
  }

  return route.meta?.title || 'Dashboard'
})

/**
 * 🔥 BREADCRUMB LIST
 */
const breadcrumbs = computed(() => {
  const list = []

  route.matched.forEach(r => {
    const meta = r.meta?.breadcrumb

    if (!meta) return

    if (typeof meta === 'string') {
      list.push({
        name: meta,
        path: r.path
      })
    }

    if (Array.isArray(meta)) {
      meta.forEach(b => {
        list.push({
          name: b.name,
          path: b.path || null
        })
      })
    }
  })

  return list
})
</script>