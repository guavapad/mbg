import { defineStore } from 'pinia'

export const useFormStore = defineStore('formStore', {
  state: () => ({
    errors: {}
  }),

  actions: {
    validateField(name, value) {
      let error = ''

      if (!value || value.toString().trim() === '') {
        error = `${name} wajib diisi`
      }

      if (name === 'email') {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!regex.test(value)) error = 'Email tidak valid'
      }

      if (name === 'password') {
        if (value.length < 6 || value.length > 8) {
          error = 'Password 6-8 karakter'
        }
      }

      if (name === 'name') {
        if (value.length < 3) {
          error = 'Nama minimal 3 karakter'
        }
      }

      this.errors[name] = error
      return error
    }
  }
})