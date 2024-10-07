// Get references to the icons
const homeIcon = document.getElementById('homeIcon');
const userIcon = document.getElementById('userIcon');



// Add event listeners for click events
homeIcon.addEventListener('click', function() {
  window.location.href = 'home.html'; // Redirect to home page
});

userIcon.addEventListener('click', function() {
  window.location.href = 'user.html'; // Redirect to user page
});

document.getElementById('dmIcon').addEventListener('click', function() {
  window.location.href = 'dm.html';
});