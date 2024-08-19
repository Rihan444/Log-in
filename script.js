document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const passwordFieldType = passwordField.getAttribute('type');

    if (passwordFieldType === 'password') {
        passwordField.setAttribute('type', 'text');
        this.textContent = 'Hide';
    } else {
        passwordField.setAttribute('type', 'password');
        this.textContent = 'Show';
    }
});

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation (you can expand on this)
    if (email === '' || password === '') {
        alert('Please fill in both fields.');
        return;
    }

    // Mock login process (replace with actual authentication)
    if (email === 'user@example.com' && password === 'password123') {
        alert('Login successful');
    } else {
        alert('Invalid email or password');
    }
});
