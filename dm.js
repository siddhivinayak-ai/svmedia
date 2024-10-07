// Sample contact data
const contacts = [
  { id: 1, name: 'Sairaj Bhosle', number: '9876543219', profilePic: 'https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100223.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid' },
  { id: 2, name: 'Suraj Rathod', number: '9876543219', profilePic: 'https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151033973.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid' },
  { id: 3, name: 'Varun Patil', number: '9876543219', profilePic: 'https://img.freepik.com/premium-vector/anime-man-vector-illustration_969863-197857.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid' },
  { id: 4, name: 'Siddhant Shete', number: '9876543219', profilePic: 'https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid' },
  { id: 5, name: 'Atharva', number: '9876543219', profilePic: 'https://img.freepik.com/premium-photo/portrait-cute-boy-red-background-vector-illustration_994418-93970.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid' },
  { id: 6, name: 'Tanmay', number: '29876543219', profilePic: 'https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100233.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid' },
  { id: 7, name: 'Vamshi', number: '19876543219', profilePic: 'https://img.freepik.com/premium-photo/striking-anime-male-with-vibrant-orange-eyes-mole-his-left-eye-dark-tanned-skin_1283595-13978.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid' },
  { id: 8, name: 'Piyush', number: '69876543219', profilePic: 'https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100239.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid' },
  { id: 9, name: 'Boys', number: '79876543219', profilePic: 'https://img.freepik.com/free-photo/cartoon-style-hugging-day-celebration_23-2151033347.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid' },
  
];

// Select DOM elements
const contactList = document.getElementById('contactList');
const chatWindow = document.getElementById('chatWindow');
const backButton = document.getElementById('backButton');
const profilePic = document.getElementById('profilePic');
const contactName = document.getElementById('contactName');
const contactNumber = document.getElementById('contactNumber');
const chatMessages = document.getElementById('chatMessages');
const messageInput = document.getElementById('messageInput');
const sendMessageBtn = document.getElementById('sendMessage');
const searchInput = document.getElementById('searchInput');
const indexbtn = document.getElementById('indexbtn');

// Function to load contacts into the contact list
function loadContacts() {
  contactList.innerHTML = ''; // Clear existing contact list
  contacts.forEach(contact => {
      const contactElement = document.createElement('div');
      contactElement.classList.add('contact');
      contactElement.innerHTML = `
          <img src="${contact.profilePic}" alt="${contact.name}">
          <div>
              <h3>${contact.name}</h3>
              
          </div>
      `;
      // <p>${contact.number}</p>
      // Add click event listener to open chat for the selected contact
      contactElement.addEventListener('click', () => openChat(contact));
      contactList.appendChild(contactElement); // Append contact to the list
  });
}

// Function to open the chat window for the selected contact
function openChat(contact) {
  chatWindow.classList.add('active'); // Show chat window
  profilePic.src = contact.profilePic; // Set profile picture
  contactName.textContent = contact.name; // Set contact name
  contactNumber.textContent = contact.number; // Set contact number
  chatMessages.innerHTML = ''; // Clear previous messages
  messageInput.value = ''; // Clear message input
}

// Event listener to close the chat window
backButton.addEventListener('click', () => {
  chatWindow.classList.remove('active'); // Hide chat window
  messageInput.value = ''; 
  chatMessages.innerHTML = ''; 
});

// Event listener for the back button to navigate to index.html
indexbtn.addEventListener('click', () => {
  window.location.href = 'index.html'; // Redirect to index.html
});




// Function to send a message
sendMessageBtn.addEventListener('click', () => {
  const message = messageInput.value; // Get message input
  if (message.trim()) { // Check if message is not empty
      const messageElement = document.createElement('div');
      messageElement.textContent = message; // Set message text
      messageElement.classList.add('message'); // Add class for styling
      chatMessages.appendChild(messageElement); // Append message to chat messages
      messageInput.value = ''; // Clear message input
      chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the bottom of chat
  }
});

// Search functionality to filter contacts
searchInput.addEventListener('input', (e) => {
  const searchValue = e.target.value.toLowerCase(); // Get search value in lowercase
  const filteredContacts = contacts.filter(contact => 
      contact.name.toLowerCase().includes(searchValue) // Filter contacts by name
  );

  contactList.innerHTML = ''; // Clear current contact list
  filteredContacts.forEach(contact => {
      const contactElement = document.createElement('div');
      contactElement.classList.add('contact');
      contactElement.innerHTML = `
          <img src="${contact.profilePic}" alt="${contact.name}">
          <div>
              <h3>${contact.name}</h3>
              <p>${contact.number}</p>
          </div>
      `;
      contactElement.addEventListener('click', () => openChat(contact)); // Open chat for selected contact
      contactList.appendChild(contactElement); // Append filtered contact to the list
  });
});

// Initialize contacts when the window loads
window.onload = loadContacts;
