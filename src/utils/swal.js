import Swal from 'sweetalert2'

/**
 * =========================
 * CONFIRM (DELETE / ACTION)
 * =========================
 */
export const swalConfirm = async ({
  title = 'Apakah kamu yakin?',
  text = 'Data akan dihapus dan tidak bisa dikembalikan!',
  confirmButtonText = 'Ya, lanjutkan',
  cancelButtonText = 'Batal'
} = {}) => {
  return await Swal.fire({
    title,
    text,
    icon: 'warning',

    showCancelButton: true,
    confirmButtonText,
    cancelButtonText,

    reverseButtons: true,
    focusCancel: true,

    // 🎬 ANIMASI BAWAAN SWEETALERT2
    showClass: {
      popup: 'swal2-show'
    },
    hideClass: {
      popup: 'swal2-hide'
    },

    // 🎨 STYLE MODERN
    background: '#ffffff',
    color: '#0f172a',

    confirmButtonColor: '#22c55e',
    cancelButtonColor: '#ef4444',

    customClass: {
      popup: 'rounded-2xl shadow-2xl border border-green-100',
      title: 'text-lg font-bold',
      confirmButton: 'px-4 py-2 rounded-lg',
      cancelButton: 'px-4 py-2 rounded-lg'
    },

    didOpen: () => {
      const popup = Swal.getPopup()

      // ✨ glass effect ringan
      popup.style.backdropFilter = 'blur(10px)'
      popup.style.border = '1px solid rgba(34,197,94,0.15)'

      // ✨ sedikit scale animation manual (tanpa library)
      popup.style.transform = 'scale(0.96)'
      setTimeout(() => {
        popup.style.transform = 'scale(1)'
        popup.style.transition = 'all 0.15s ease'
      }, 10)
    }
  }).then((result) => result.isConfirmed)
}


export const swalSuccess = (message = 'Berhasil!') => {
  return Swal.fire({
    icon: 'success',
    title: 'Berhasil',
    text: message,

    timer: 1600,
    showConfirmButton: false,

    background: '#ffffff',
    color: '#0f172a',

    showClass: {
      popup: 'swal2-show'
    },
    hideClass: {
      popup: 'swal2-hide'
    },

    customClass: {
      popup: 'rounded-2xl shadow-xl border border-green-100'
    },

    didOpen: () => {
      const popup = Swal.getPopup()
      popup.style.backdropFilter = 'blur(10px)'
    }
  })
}


export const swalError = (message = 'Terjadi kesalahan!') => {
  return Swal.fire({
    icon: 'error',
    title: 'Oops!',
    text: message,

    background: '#ffffff',
    color: '#0f172a',

    showClass: {
      popup: 'swal2-show'
    },
    hideClass: {
      popup: 'swal2-hide'
    },

    customClass: {
      popup: 'rounded-2xl shadow-xl border border-red-100'
    },

    didOpen: () => {
      const popup = Swal.getPopup()

      // shake effect manual (tanpa animate.css)
      popup.animate(
        [
          { transform: 'translateX(0px)' },
          { transform: 'translateX(-6px)' },
          { transform: 'translateX(6px)' },
          { transform: 'translateX(0px)' }
        ],
        {
          duration: 200,
          iterations: 1
        }
      )
    }
  })
}

export const swalInfo = (message = 'Informasi') => {
  return Swal.fire({
    icon: 'info',
    title: 'Info',
    text: message,

    timer: 1800,
    showConfirmButton: false,

    background: '#ffffff',
    color: '#0f172a',

    showClass: {
      popup: 'swal2-show'
    },
    hideClass: {
      popup: 'swal2-hide'
    },

    customClass: {
      popup: 'rounded-2xl shadow-lg border border-blue-100'
    },

    didOpen: () => {
      const popup = Swal.getPopup()
      popup.style.backdropFilter = 'blur(10px)'
    }
  })
}