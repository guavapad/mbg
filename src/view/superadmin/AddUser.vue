<template>
  <AppLayout>
       <main class="flex-1 flex items-center justify-center p-8">

        <!-- CARD -->
        <div class="w-full max-w-2xl bg-white rounded-2xl shadow border p-8">

          <!-- HEADER -->
          <div class="mb-6 text-center">
            <h2 class="text-2xl font-bold text-slate-800">
              Tambah User
            </h2>
            <p class="text-slate-500 text-sm">
              Tambahkan user baru ke dalam sistem
            </p>
          </div>

          <form @submit.prevent="submitForm" class="space-y-5">

            <!-- Nama -->
          <Form
  v-model="form.name"
  name="name"
  label="Nama"
  placeholder="Masukkan nama"
/>

<Form
  v-model="form.email"
  name="email"
  label="Email"
  type="email"
  placeholder="Masukkan email"
/>



            <!-- Role -->
            <div>
              <label class="text-sm font-medium text-slate-600">
                Role
              </label>

              <select
                v-model="form.role"
                class="w-full mt-1 px-4 py-2.5 border rounded-xl
                       focus:ring-2 focus:ring-green-500 outline-none"
              >
                <option value="">Pilih Role</option>
                <option value="admin">Admin</option>
                <option value="staff">Staff</option>
                <option value="superadmin">Super Admin</option>
              </select>
            </div>

            <!-- Password -->
         <Form
  v-model="form.password"
  name="password"
  label="Password"
  type="password"
  placeholder="Masukkan password"
/>

            <!-- BUTTON -->
            <div class="flex gap-3 pt-2">

              <router-link
                to="/admin/users"
                class="w-full text-center px-4 py-2.5 border rounded-xl text-slate-600 hover:bg-slate-100"
              >
                Batal
              </router-link>

              <button
                type="submit"
                class="w-full px-4 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-xl shadow"
              >
                Simpan
              </button>

            </div>

          </form>

        </div>

      </main>
  </AppLayout>
   

</template>
<script setup>
import { reactive } from 'vue'
import AppLayout from '../../layouts/AppLayout.vue'
import Sidebar from '../../components/Sidebar.vue'
import Topbar from '../../components/Topbar.vue'
import Breadcrumb from '../../components/Breadcrumb.vue'
import Form from '../../components/Form.vue'
import { swalConfirm, swalSuccess, swalError } from '../../utils/swal'
import { useRoute } from 'vue-router'

const route = useRoute()

const form = reactive({
  name: '',
  email: '',
  role: '',
  password: ''
})
const submitForm = async () => {
  try {
    // 1. confirm dulu
    const confirmed = await swalConfirm({
      title: 'Simpan Data User?',
      text: 'Pastikan data sudah benar sebelum disimpan',
      confirmButtonText: 'Ya, simpan',
      cancelButtonText: 'Batal'
    })

    if (!confirmed) return

    // 2. loading simulation / API call
    console.log('DATA USER:', form)

    await new Promise(resolve => setTimeout(resolve, 800))

    // 3. success
    await swalSuccess('User berhasil ditambahkan!')

    // 4. reset form (optional)
    form.name = ''
    form.email = ''
    form.role = ''
    form.password = ''

  } catch (err) {
    console.error(err)
    await swalError('Gagal menyimpan user!')
  }
}
</script>