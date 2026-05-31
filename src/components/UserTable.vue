<template>
  <div class="card overflow-hidden">
    <table class="w-full">
      <thead class="table-head">
        <tr>
          <th class="px-6 py-4 text-left">Name</th>
          <th class="px-6 py-4 text-left">Email</th>
          <th class="px-6 py-4 text-left">Role</th>
          <th class="px-6 py-4 text-left">Status</th>
          <th class="px-6 py-4 text-center">Action</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="user in users"
          :key="user.id"
          class="border-t border-slate-100"
        >
          <td class="table-cell">
            {{ user.name }}
          </td>

          <td class="table-cell">
            {{ user.email }}
          </td>

          <td class="table-cell">
            {{ user.role }}
          </td>

          <td class="table-cell">
            <span
              class="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs"
            >
              Active
            </span>
          </td>

          <td class="table-cell text-center">
            <button
              class="text-blue-600 font-medium"
            >
              Edit
            </button>

            <button
              class="text-red-600 ml-4 font-medium"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps({
  users: Array
})
</script>