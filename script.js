const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const loginButton = document.querySelector('#login-button');

// Disable the login button initially
loginButton.disabled = true;

// Enable the login button if both inputs have a value
form.addEventListener('input', () => {
  if (usernameInput.value && passwordInput.value) {
    loginButton.disabled = false;
  } else {
    loginButton.disabled = true;
  }
});

// Handle form submission
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  // Check if username and password are correct (replace with your own logic)
  if (username === 'admin' && password === 'password') {
    alert('Login successful!');
    // Redirect to another page (replace with your own logic)
    window.location.href = 'dashboard.html';
  } else {
    alert('Invalid username or password.');
  }
});