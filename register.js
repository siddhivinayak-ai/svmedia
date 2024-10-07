// register.js

document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Retrieve form data
  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim().toLowerCase();
  const password = document.getElementById('password').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const gender = document.getElementById('gender').value;

  // Basic validation
  if (!username || !email || !password || !phone || !gender) {
    alert('Please fill in all fields.');
    return;
  }

  // Retrieve existing users from localStorage
  let users = JSON.parse(localStorage.getItem('users')) || [];

  // Check for existing email
  const userExists = users.some(user => user.email === email);
  if (userExists) {
    alert('Email already registered. Please use a different email.');
    return;
  }

  // Create new user object
  const newUser = {
    id: Date.now(),
    username,
    email,
    password,
    phone,
    gender
  };

  // Add new user to users array
  users.push(newUser);

  // Store updated users array in localStorage
  localStorage.setItem('users', JSON.stringify(users));

  // Redirect to index.html after successful registration
  alert('Registration successful!');
  window.location.href = 'index.html';
});
