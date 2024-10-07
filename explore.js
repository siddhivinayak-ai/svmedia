document.addEventListener('DOMContentLoaded', () => {
  const searchBar = document.getElementById('searchBar');
  const searchResults = document.getElementById('searchResults');
  const contactsContainer = document.getElementById('contactsContainer');
  const trendingFeed = document.getElementById('trendingFeed');

  // Sample data for contacts and trending posts
  const contacts = [
    { username: 'Siddhivinayak', image: 'https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100223.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid' },
    { username: 'Sairaj', image: 'https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151033973.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid' },
    { username: 'Suraj', image: 'https://img.freepik.com/premium-vector/anime-man-vector-illustration_969863-197857.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid' },
    { username: 'Varun', image: 'https://img.freepik.com/premium-photo/portrait-cute-boy-red-background-vector-illustration_994418-93970.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid' },
    { username: 'kedar', image: 'https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid' },
    { username: 'Subodh', image: 'https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100233.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid' },
    { username: 'Tanmay', image: 'https://img.freepik.com/premium-photo/striking-anime-male-with-vibrant-orange-eyes-mole-his-left-eye-dark-tanned-skin_1283595-13978.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid' },
    { username: 'Amey', image: 'https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100239.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid' },
    { username: 'Siddhant', image: 'https://img.freepik.com/free-photo/cartoon-style-hugging-day-celebration_23-2151033347.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid' },
    { username: 'Soham', image: 'https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100265.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid' },
      // Add more contacts as needed
  ];

  const trendingPosts = [
      { username: 'user1', image: 'https://img.freepik.com/free-photo/anime-style-character-space_23-2151134211.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid', description: 'Trending Post 1', likes: 150 },
      { username: 'user2', image: 'https://img.freepik.com/free-photo/anime-character-winter_23-2151843495.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid', description: 'Trending Post 2', likes: 200 },
      { username: 'user3', image: 'https://img.freepik.com/premium-photo/fiery-witch-with-magical-abilities_798031-1106.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid', description: 'Trending Post 3', likes: 250 },
      { username: 'user4', image: 'https://img.freepik.com/free-photo/anime-style-character-meditating-contemplating-mindfulness_23-2151476684.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid', description: 'Trending Post 4', likes: 300 },
      { username: 'user5', image: 'https://img.freepik.com/free-photo/anime-japanese-character_23-2151478220.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid', description: 'Trending Post 5', likes: 350 },
      // Add more posts as needed
  ];

  // Populate contacts
  function populateContacts() {
      contacts.forEach(contact => {
          const contactCard = document.createElement('div');
          contactCard.classList.add('contact-card');
          contactCard.innerHTML = `
              <img src="${contact.image}" alt="${contact.username}">
              <div class="username">${contact.username}</div>
              <button class="message-btn"><i class="ri-message-line"></i></button>
          `;
          contactsContainer.appendChild(contactCard);
      });
  }

  // Populate trending posts
  function populateTrendingPosts() {
      trendingPosts.forEach(post => {
          const postCard = document.createElement('div');
          postCard.classList.add('post-card');
          postCard.innerHTML = `
              <img src="${post.image}" alt="${post.username}">
              <div class="post-info">
                  <div class="icons">
                      <i class="ri-heart-line like-icon"></i>
                      <i class="ri-chat-3-line comment-icon"></i>
                      <i class="ri-share-forward-line share-icon"></i>
                      <i class="ri-bookmark-line save-icon"></i>
                  </div>
                  <div class="like-count">${post.likes} likes</div>
              </div>
              <div class="description">
                  <strong>${post.username}</strong> ${post.description}
              </div>
          `;
          trendingFeed.appendChild(postCard);
      });
  }

  // Handle search functionality
function handleSearch() {
  searchBar.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      contactsContainer.innerHTML = '';

      const filteredContacts = contacts.filter(contact => contact.username.toLowerCase().includes(query));

      filteredContacts.forEach(contact => {
          const contactCard = document.createElement('div');
          contactCard.classList.add('contact-card');
          contactCard.innerHTML = `
              <img src="${contact.image}" alt="${contact.username}">
              <div class="username">${contact.username}</div>
              <button class="message-btn"><i class="ri-message-line"></i></button>
          `;
          contactsContainer.appendChild(contactCard);
      });

      // If no query, repopulate all contacts
      if (query === '') {
          populateContacts();
      }
  });
}


  // Initial population of contacts and trending posts
  populateContacts();
  populateTrendingPosts();
  handleSearch();
});
