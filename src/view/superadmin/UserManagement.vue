<template>
  <div class="flex bg-slate-100 min-h-screen">

    <Sidebar />
    <div class="flex-1">

      <Topbar />

    <!-- BREADCRUMB -->
    <div v-if="!route.meta?.hideLayout" class="px-8 pt-6">
      <Breadcrumb />
    </div>
      <main class="p-8">

        <!-- SEARCH + ACTION -->

        <!-- STATS -->
   <div class="grid md:grid-cols-4 gap-5 my-8">

  <StatCard
    title="Total Users"
    :value="124"
  />

  <StatCard
    title="Admin"
    :value="12"
  />

  <StatCard
    title="Staff"
    :value="98"
  />

  <StatCard
    title="Online"
    :value="43"
  />

</div>
       <div class="flex items-center justify-between gap-4 mb-6">

  <!-- LEFT: SEARCH kecil -->
  <div class="flex items-center gap-3">
    <input
      v-model="search"
      type="text"
      placeholder="Search user..."
      class="input-primary w-64 md:w-72"
    />
  </div>

  <!-- RIGHT: BUTTON -->
<ButtonAdd @click="openAddUser" />

</div>
        <!-- TABLE -->
        <Table :data="paginatedUsers">

          <template #header>
            <th class="px-6 py-4 text-left">Name</th>
            <th class="px-6 py-4 text-left">Email</th>
            <th class="px-6 py-4 text-left">Role</th>
            <th class="px-6 py-4 text-center">Action</th>
          </template>

          <template #row="{ item }">
            <td class="table-cell">{{ item.name }}</td>
            <td class="table-cell">{{ item.email }}</td>
            <td class="table-cell">{{ item.role }}</td>

          <td class="table-cell">
  <div class="flex items-center justify-center gap-3">
    <EditButton @click="editUser(item.id)" />
    <DeleteButton @click="deleteUser(item.id)" />
  </div>
</td>
          </template>

        </Table>

        <!-- PAGINATION -->
        <TablePagination
          :current-page="currentPage"
          :per-page="perPage"
          :total="filteredUsers.length"
          @change="changePage"
        />

      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import DeleteButton from '../../components/DeleteButton.vue'
import { useRoute, useRouter } from 'vue-router'

import Breadcrumb from '../../components/Breadcrumb.vue'
import ButtonAdd from '../../components/ButtonAdd.vue'
import EditButton from '../../components/EditButton.vue'
import Sidebar from '../../components/Sidebar.vue'
import Topbar from '../../components/Topbar.vue'
import Table from '../../components/Table/UserTable.vue'
import TableSearch from '../../components/Table/TableSearch.vue'
import TablePagination from '../../components/Table/TablePagination.vue'
import StatCard from '../../components/Card.vue'
import { swalConfirm, swalSuccess } from '../../utils/swal'

const route = useRoute()
const router = useRouter()
const search = ref('')
const currentPage = ref(1)
const perPage = ref(5)

const openAddUser = () => {
  router.push('/admin/users/create')
}

const deleteUser = async (id) => {
  const ok = await swalConfirm({
    title: 'Hapus User?',
    text: 'User akan dihapus permanen'
  })

  if (!ok) return

  const index = users.findIndex(u => u.id === id)
  if (index !== -1) {
    users.splice(index, 1)
    swalSuccess('User berhasil dihapus')
  }
}
const users = [
  { id: 1, name: 'John Doe', email: 'john@gmail.com', role: 'Super Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@gmail.com', role: 'Admin' },
  { id: 3, name: 'Robert', email: 'robert@gmail.com', role: 'Staff' },
  { id: 4, name: 'Alex', email: 'alex@gmail.com', role: 'Staff' },
  { id: 5, name: 'Mike', email: 'mike@gmail.com', role: 'Admin' },
]

const filteredUsers = computed(() => {
  return users.filter(u =>
    u.name.toLowerCase().includes(search.value.toLowerCase())
  )
})

const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * perPage.value
  return filteredUsers.value.slice(start, start + perPage.value)
})

const handleSearch = () => {
  currentPage.value = 1
}
const editUser = async (id) => {
  const ok = await swalConfirm({
    title: 'Edit User?',
    text: 'Kamu akan mengubah data user ini',
    confirmButtonText: 'Ya, edit',
    cancelButtonText: 'Batal'
  })

  if (!ok) return

  const index = users.findIndex(u => u.id === id)

  if (index !== -1) {
    // contoh perubahan dummy (biar kelihatan berubah)
    users[index].name = users[index].name + ' (edited)'

    swalSuccess('User berhasil diubah')
  }
}
const changePage = (page) => {
  currentPage.value = page
}
</script>