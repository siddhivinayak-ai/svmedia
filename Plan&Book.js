
// Sample data for experiences (this can be fetched via API in real-world usage)
const experiences = [
  {
      title: "City Bistro",
      description: "Trendy bistro with a rooftop view, offering a perfect blend of food and music.",
      price: "Rs 200 per person",
      imageUrl: "https://img.freepik.com/premium-photo/table-with-food-drinks-including-chicken-bread-vegetables_1041015-60205.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      category: "Food & Drink", 
  },
  {
      title: "Adventurer’s Peak",
      description: "Trek the rugged mountain paths and discover breathtaking landscapes with experienced guides.",
      price: "Rs 550 per person",
      imageUrl: "https://img.freepik.com/premium-vector/vector-cartoon-illustration-boy-with-backpack-hiking-forest_1058698-1533.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      category: "Adventure", 
  },
  {
    title: "Sunset Coffee House",
    description: "A cozy café to watch the sunset while enjoying gourmet coffee and live acoustic music.",
    price: "Rs 120 per person",
    imageUrl: "https://img.freepik.com/free-photo/view-delicious-food-reunion-dinner-anime-style_23-2151022616.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid", 
    category: "Food & Drink", 
  },
  {
      title: "Seaside Getaway",
      description: "Spend a relaxing weekend by the beach, with private cabanas and gourmet seafood.",
      price: "Rs 1200per person",
      imageUrl: "https://img.freepik.com/free-photo/view-graphic-3d-water-resort_23-2150849123.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      category: "Resorts", 
  },
  {
    title: "Forest Escape",
    description: "Reconnect with nature in a serene forest hiking experience, perfect for beginners.",
    price: "Rs 450 per person",
    imageUrl: "https://img.freepik.com/free-photo/3d-cartoon-fitness-man_23-2151691426.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
    category: "Adventure", 
  },
  {
    title: "Art & Wine Workshop",
    description: "Unleash your creativity while sipping on wine in this guided painting workshop.",
    price: "Rs 350 per person",
    imageUrl: "https://img.freepik.com/free-photo/international-day-education-futuristic-style_23-2150998698.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
    category: "Workshops", 
  },
  {
    title: "Coastal Retreat",
    description: "Enjoy a peaceful beachside retreat with yoga classes, fresh seafood, and ocean views.",
    price: "Rs 1300 per person",
    imageUrl: "https://img.freepik.com/premium-vector/cartoon-illustration-beach-scene-with-beach-hut-palm-trees_670382-380064.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
    category: "Resorts", 
  },
  {
    title: "Mountain Conqueror",
    description: "Challenge yourself with a demanding hike to the summit, with panoramic views from the top.",
    price: "Rs 700 per person",
    imageUrl: "https://img.freepik.com/premium-photo/animated-character-hiking-mountains_1286777-3899.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
    category: "Adventure", 
  },
  {
    title: "Night Owl Café",
    description: "The perfect place for night owls, featuring late-night coffee and desserts with soft jazz.",
    price: "Rs 180 per person",
    imageUrl: "https://img.freepik.com/free-photo/view-graphic-3d-fast-food_23-2150849021.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
    category: "Food & Drink",  
  },
  {
    title: "Tropical Paradise Resort",
    description: "Relax at a luxurious beach resort with private pools, fine dining, and spa services.",
    price: "Rs 1500 per person",
    imageUrl: "https://img.freepik.com/premium-vector/beach-house-with-palm-trees-beach-scene_670382-378282.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
    category: "Resorts", 
  },
  {
    title: "Creative Canvas",
    description: "A fun, hands-on painting workshop for beginners and pros alike, with all materials provided.",
    price: "Rs 300 per person",
    imageUrl: "https://img.freepik.com/free-photo/digital-art-style-illustration-graphic-designer_23-2151536955.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
    category: "Workshops", 
  },
  
];













// Function to filter experiences based on search input (title, description, or category)
function filterExperiences() {
  const searchTerm = document.getElementById("search-bar").value.toLowerCase();
  const filteredExperiences = experiences.filter(experience => 
      experience.title.toLowerCase().includes(searchTerm) ||
      experience.description.toLowerCase().includes(searchTerm) ||
      experience.category.toLowerCase().includes(searchTerm) // Check category
  );
  renderFilteredExperiences(filteredExperiences);
}

// Function to render filtered experiences (after search)
function renderFilteredExperiences(filteredExperiences) {
  const cardsSection = document.getElementById("cards-section");
  cardsSection.innerHTML = ''; // Clear existing cards

  if (filteredExperiences.length === 0) {
      // Display message when no results are found
      const noResults = document.createElement("p");
      noResults.textContent = "No experiences found.";
      noResults.style.color = "white";
      cardsSection.appendChild(noResults);
  } else {
      // Create cards for each filtered experience
      filteredExperiences.forEach(experience => {
          const card = document.createElement("div");
          card.classList.add("card");

          // Add image to card
          const image = document.createElement("img");
          image.src = experience.imageUrl;
          card.appendChild(image);

          // Create card content section
          const cardContent = document.createElement("div");
          cardContent.classList.add("card-content");

          // Add title to card
          const cardTitle = document.createElement("h3");
          cardTitle.classList.add("card-title");
          cardTitle.textContent = experience.title;
          cardContent.appendChild(cardTitle);

          // Add description to card
          const cardDescription = document.createElement("p");
          cardDescription.classList.add("card-description");
          cardDescription.textContent = experience.description;
          cardContent.appendChild(cardDescription);

          // Add category to card
          const cardCategory = document.createElement("p");
          cardCategory.classList.add("card-category");
          cardCategory.textContent = `Category: ${experience.category}`;
          cardContent.appendChild(cardCategory); // Display category

          // Add price to card
          const cardPrice = document.createElement("p");
          cardPrice.classList.add("card-price");
          cardPrice.textContent = experience.price;
          cardContent.appendChild(cardPrice);

          // Add action button (Book Now)
          const cardAction = document.createElement("div");
          cardAction.classList.add("card-action");
          const bookNowBtn = document.createElement("button");
          bookNowBtn.classList.add("book-now-btn");
          bookNowBtn.textContent = "Book Now";
          bookNowBtn.onclick = () => {
              alert(`Booking ${experience.title}`);
          };
          cardAction.appendChild(bookNowBtn);

          // Append content and action to the card
          cardContent.appendChild(cardAction);
          card.appendChild(cardContent);
          cardsSection.appendChild(card);
      });
  }
}

// Event listener for the search button to trigger filtering
document.getElementById("search-btn").addEventListener("click", filterExperiences);

// Event listener for the "New Plan" floating button (dummy functionality for now)
document.querySelector(".add-plan-btn").addEventListener("click", () => {
  alert("Create a new plan (feature coming soon).");
});

// 

// Initial load of experiences when the page is loaded
window.onload = loadExperiences;

// Function to load all experiences initially
function loadExperiences() {
  renderFilteredExperiences(experiences); // Show all experiences on initial load
}




























