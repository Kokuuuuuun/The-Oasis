const form = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

function showNotification() {
  const notification = new Notification('inisiaste sesion');

  }
  //no  funciona la notificacion arreglar//

form.addEventListener('submit', (e) => {
  e.preventDefault();


  if (!emailInput.value || !passwordInput.value) {

    if (!emailInput.value) {
      emailInput.style.borderColor = 'red';
    }
    if (!passwordInput.value) {
      passwordInput.style.borderColor = 'red';
    }
   

  alert('Por favor rellena todos los campos.');
} else {

  showNotification();

  setTimeout(() => {
    window.location.href = 'index.html';
  }, 500);
}
});


emailInput.addEventListener('focus', () => {
  emailInput.style.borderColor = '';
});

passwordInput.addEventListener('focus', () => {
  passwordInput.style.borderColor = '';
});

// local cache

