<template>
  <div
    class="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
  >
    <div
      class="bg-white rounded-3xl w-full max-w-xl p-8"
    >
      <h3 class="text-2xl font-bold mb-6">
        Add User
      </h3>

      <div class="space-y-4">
        <input
          class="input-primary"
          placeholder="Full Name"
        />

        <input
          class="input-primary"
          placeholder="Email"
        />

        <select class="input-primary">
          <option>Super Admin</option>
          <option>Admin</option>
          <option>Staff</option>
        </select>
      </div>

      <div class="flex justify-end gap-3 mt-8">
        <button class="btn-secondary">
          Cancel
        </button>

        <button class="btn-primary">
          Save User
        </button>
      </div>
    </div>
  </div>
</template>