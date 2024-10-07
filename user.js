// Function to display users in the table
function displayUsers() {
  const usersTableBody = document.querySelector('#usersTable tbody');

  // Retrieve users from localStorage
  let users = JSON.parse(localStorage.getItem('users')) || [];

  // Clear existing rows
  usersTableBody.innerHTML = '';

  // Populate table with users
  users.forEach(user => {
    const row = document.createElement('tr');

    const idCell = document.createElement('td');
    idCell.textContent = user.id;
    idCell.setAttribute('data-label', 'ID');

    const usernameCell = document.createElement('td');
    usernameCell.textContent = user.username;
    usernameCell.setAttribute('data-label', 'Username');

    const emailCell = document.createElement('td');
    emailCell.textContent = user.email;
    emailCell.setAttribute('data-label', 'Email');

    const phoneCell = document.createElement('td');
    phoneCell.textContent = user.phone;
    phoneCell.setAttribute('data-label', 'Phone');

    const genderCell = document.createElement('td');
    genderCell.textContent = user.gender;
    genderCell.setAttribute('data-label', 'Gender');

    const actionCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', function() {
      deleteUser(user.id);
    });
    actionCell.appendChild(deleteButton);

    row.appendChild(idCell);
    row.appendChild(usernameCell);
    row.appendChild(emailCell);
    row.appendChild(phoneCell);
    row.appendChild(genderCell);
    row.appendChild(actionCell);

    usersTableBody.appendChild(row);
  });
}

// Function to delete user
function deleteUser(userId) {
  let users = JSON.parse(localStorage.getItem('users')) || [];

  // Filter out the user with the matching ID
  users = users.filter(user => user.id !== userId);

  // Update localStorage with the new array
  localStorage.setItem('users', JSON.stringify(users));

  // Refresh the table display
  displayUsers();

  alert('User deleted successfully! The user can now re-register.');
}

// Initialize display on page load
window.onload = displayUsers;









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