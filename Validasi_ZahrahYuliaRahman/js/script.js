const form = document.getElementById('registrationForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Ambil input
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirmPassword');
  const message = document.getElementById('message');

  // Error elemen
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const phoneError = document.getElementById('phoneError');
  const passwordError = document.getElementById('passwordError');
  const confirmPasswordError = document.getElementById('confirmPasswordError');


  // Reset error
  nameError.textContent = '';
  emailError.textContent = '';
  phoneError.textContent = '';
  passwordError.textContent = '';
  confirmPasswordError.textContent = '';
  message.textContent = '';
  message.className = '';

  let valid = true;

  // Validasi Nama
  if (name.value.trim() === '') {
    nameError.textContent = 'Nama tidak boleh kosong';
    valid = false;
  }

  // Validasi Email
  if (!/^\S+@\S+\.\S+$/.test(email.value)) {
    emailError.textContent = 'Email tidak valid';
    valid = false;
  }

  // Validasi No HP
  if (!/^[0-9]{10,15}$/.test(phone.value)) {
    phoneError.textContent = 'Nomor HP harus 11–15 digit angka';
    valid = false;
  }

  // Validasi Password
  if (password.value.length < 6) {
    passwordError.textContent = 'Password minimal 6 karakter';
    valid = false;
  }

  // Validasi Konfirmasi
  if (confirmPassword.value !== password.value) {
    confirmPasswordError.textContent = 'Konfirmasi password tidak cocok';
    valid = false;
  }

  // Submit berhasil
  if (valid) {
    message.textContent = '✅ Pendaftaran berhasil!';
    message.className = 'success';
      Swal.fire({ 
            icon: 'success', 
            title: 'Berhasil!', 
            text: 'Data Anda telah berhasil disimpan.', 
            confirmButtonText: 'Tutup', 
            confirmButtonColor: '#28a745' 
        }); 

    form.reset();
  } else {
    message.textContent = '❌ Periksa kembali isian Anda.';
    message.className = 'fail';
  }
});
