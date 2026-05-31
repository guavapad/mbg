<template>
  <div class="flex bg-slate-100 min-h-screen">
    <Sidebar />

    <div class="flex-1">
      <Topbar />

      <main class="p-8">
        <div
          class="mb-6 flex flex-col md:flex-row gap-4 justify-between"
        >
          <input
            class="input-primary max-w-md"
            placeholder="Search user..."
          />

          <button
            class="btn-primary"
          >
            + Add User
          </button>
        </div>

        <div
          class="grid md:grid-cols-4 gap-5 mb-8"
        >
          <div class="card p-6">
            <h4 class="text-slate-500">
              Total Users
            </h4>
            <p class="text-3xl font-bold mt-2">
              124
            </p>
          </div>

          <div class="card p-6">
            <h4 class="text-slate-500">
              Admin
            </h4>
            <p class="text-3xl font-bold mt-2">
              12
            </p>
          </div>

          <div class="card p-6">
            <h4 class="text-slate-500">
              Staff
            </h4>
            <p class="text-3xl font-bold mt-2">
              98
            </p>
          </div>

          <div class="card p-6">
            <h4 class="text-slate-500">
              Online
            </h4>
            <p class="text-3xl font-bold mt-2 text-green-600">
              43
            </p>
          </div>
        </div>

        <UserTable :users="users" />
      </main>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '../../components/Sidebar.vue'
import Topbar from '../../components/Topbar.vue'
import UserTable from '../../components/UserTable.vue'

const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@gmail.com',
    role: 'Super Admin'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@gmail.com',
    role: 'Admin'
  },
  {
    id: 3,
    name: 'Robert',
    email: 'robert@gmail.com',
    role: 'Staff'
  }
]
</script>