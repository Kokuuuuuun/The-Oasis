    const form = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const nameInput = document.getElementById('name');
    const passwordInput = document.getElementById('password');
    const password2Input = document.getElementById('password2');

    function showNotification() {
        const notification = new Notification('You have signed in');
        }
        
    form.addEventListener('submit', (e) => {
    e.preventDefault();

    // validacion
    if (!emailInput.value || !passwordInput.value || !nameInput.value || !password2Input.value) {
        // Add error styling or red border
        if (!emailInput.value) {
        emailInput.style.borderColor = 'red';
        }
        if (!nameInput.value) {
        nameInput.style.borderColor = 'red';
        }
        if (!passwordInput.value) {
        passwordInput.style.borderColor = 'red';
        }
        if (!password2Input.value) {
        password2Input.style.borderColor = 'red';
        }

    
        // mensaje
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
    nameInput.addEventListener('focus', () => {
    nameInput.style.borderColor = '';
    });
    passwordInput.addEventListener('focus', () => {
    passwordInput.style.borderColor = '';
    });

    password2Input.addEventListener('focus', () => {
    password2Input.style.borderColor = '';
    });

    //local chache
    localStorage.setItem('isLoggedIn', true);