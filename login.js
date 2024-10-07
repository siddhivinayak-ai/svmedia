// login.js

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Retrieve form data
  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value.trim();

  // Basic validation
  if (!username || !password) {
    alert('Please enter both username and password.');
    return;
  }

  // Retrieve users from localStorage
  let users = JSON.parse(localStorage.getItem('users')) || [];

  // Find user with matching username and password
  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    alert('Login successful!');
    // Optionally, set logged-in status in localStorage
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    // Redirect to index.html
    window.location.href = 'index.html';
  } else {
    alert('Invalid username or password.');
  }
});
