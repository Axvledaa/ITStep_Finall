// Get login form and attach event listener
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get input values
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  if (!username || !password) {
    alert('Please enter username and password');
    return;
  }


  // log the values to the console
  console.log('Login:', username, password);

  // Clear input fields
  document.getElementById('loginUsername').value = '';
  document.getElementById('loginPassword').value = '';
});

// Get signup form and attach event listener
const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', function(e) {
  e.preventDefault();


  const username = document.getElementById('signupUsername').value;
  const password = document.getElementById('signupPassword').value;


  if (!username || !password) {
    alert('Please enter username and password');
    return;
  }


  //  log the values to the console
  console.log('Signup:', username, password);

  // Clear input fields
  document.getElementById('signupUsername').value = '';
  document.getElementById('signupPassword').value = '';
});