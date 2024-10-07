document.addEventListener('DOMContentLoaded', () => {
  const storiesContainer = document.getElementById('storiesContainer');
  const postFeed = document.getElementById('postFeed');
  const addPostBtn = document.getElementById('addPostBtn');
  const addPostModal = document.getElementById('addPostModal');
  const closeModal = document.getElementById('closeModal');
  const postBtn = document.getElementById('postBtn');
  const postImage = document.getElementById('postImage');
  const postDescription = document.getElementById('postDescription');



  const posts = [
    //   { username: 'Siddhivinayak-AI', image: 'Post/1.jpg', description: 'Completion of my First Internship', likes: 120 },
      { username: 'user1', image: 'https://img.freepik.com/free-photo/3d-cartoon-dj-illustration_23-2151688610.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid', description: '', likes: 7.8 },
      { username: 'user2', image: 'https://img.freepik.com/premium-photo/poster-young-boy-with-his-arms-crossed_1164846-6470.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid', description: '', likes: 6.5 },
      { username: 'user3', image: 'https://img.freepik.com/free-photo/portrait-anime-character-shopping-cartoon-style_23-2151644424.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid', description: '', likes: 2.3 },
      { username: 'user4', image: 'https://img.freepik.com/premium-photo/versatile-poster-templates-every-need-modern-minimalist-more_1276622-5745.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid', description: '', likes: 4.5 },
      { username: 'user5', image: 'https://img.freepik.com/free-photo/anime-style-character-with-fire-flames_23-2151152388.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid', description: '', likes: 9.7 },
      { username: 'user6', image: 'https://img.freepik.com/free-photo/celebration-labour-day-with-3d-cartoon-portrait-working-woman_23-2151306627.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid', description: '', likes: 1.8 },
      { username: 'user7', image: 'https://img.freepik.com/free-photo/3d-cartoon-character-djing-party_23-2151688528.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid', description: '', likes: 3.4 },
      { username: 'user8', image: 'https://img.freepik.com/free-photo/3d-cartoon-portrait-working-woman-celebration-labour-day_23-2151306561.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid', description: '', likes: 5.6 },
      { username: 'user9', image: 'https://img.freepik.com/free-photo/3d-portrait-happy-friends_23-2150793829.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid', description: '', likes: 6.6 },
      { username: 'user10', image: 'https://img.freepik.com/free-photo/couple-walking-down-street_23-2151835198.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid', description: '', likes: 6.9 },
      { username: 'user11', image: 'https://img.freepik.com/free-photo/abstract-glowing-flame-drops-electric-illumination-generative-ai_188544-8092.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid', description: '', likes: 4.9 },
      { username: 'user12', image: 'https://img.freepik.com/free-photo/view-robot-tending-maintaining-gardens_23-2151803978.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid', description: '', likes: 8.8 },
      { username: 'user13', image: 'https://img.freepik.com/free-photo/scene-with-futuristic-robot-used-construction-industry_23-2151329579.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid', description: '', likes: 5.4 },
      { username: 'user14', image: 'https://img.freepik.com/free-photo/scene-with-futuristic-robot-used-construction-industry_23-2151329475.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid', description: '', likes: 4.5 },
      
      
      // Add more posts as needed
  ];







// Populate posts
function populatePosts() {
    posts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.classList.add('post-card');
        postCard.innerHTML = `
            <img src="${post.image}" alt="${post.username}" class="post-image">
            <div class="post-info">
                <div class="icons">
                    <i class="ri-heart-line like-icon" data-liked="false"></i>
                    <i class="ri-chat-3-line comment-icon"></i>
                    <i class="ri-share-forward-line share-icon"></i>
                    <i class="ri-bookmark-line save-icon"></i>
                </div>
                <div class="like-count">${post.likes}k likes</div>
            </div>
            <div class="description">
                <strong>${post.username}</strong> ${post.description}
            </div>
        `;

        const postImage = postCard.querySelector('.post-image');
        const likeIcon = postCard.querySelector('.like-icon');

        // Function to create heart pop-up effect
        const createHeartPopup = (x, y) => {
            const heart = document.createElement('i');
            heart.className = 'ri-heart-fill heart-popup';
            heart.style.position = 'absolute';
            heart.style.left = `${x}px`;
            heart.style.top = `${y}px`;
            document.body.appendChild(heart);

            // Animation effect
            setTimeout(() => {
                heart.style.transform = 'translateY(-50px)';
                heart.style.opacity = '0';
            }, 50);

            // Remove heart after animation
            setTimeout(() => {
                heart.remove();
            }, 1000);
        };

        postImage.addEventListener('dblclick', (event) => {
            createHeartPopup(event.pageX, event.pageY);
            toggleLike(post, likeIcon, postCard);
        });

        likeIcon.addEventListener('click', () => {
            toggleLike(post, likeIcon, postCard);
        });

        postFeed.appendChild(postCard);
    });
}

// Toggle like functionality
function toggleLike(post, likeIcon, postCard) {
    const isLiked = likeIcon.getAttribute('data-liked') === 'true';
    if (isLiked) {
        likeIcon.classList.remove('ri-heart-fill');
        likeIcon.classList.add('ri-heart-line');
        likeIcon.setAttribute('data-liked', 'false');
        post.likes -= 1;
    } else {
        likeIcon.classList.remove('ri-heart-line');
        likeIcon.classList.add('ri-heart-fill');
        likeIcon.setAttribute('data-liked', 'true');
        post.likes += 1;
    }
    postCard.querySelector('.like-count').textContent = `${post.likes} likes`;
}









































  // Handle post interactions
  function handlePostInteractions() {
      postFeed.addEventListener('click', (e) => {
          if (e.target.classList.contains('like-icon')) {
              e.target.classList.toggle('ri-heart-fill');
              e.target.classList.toggle('active');
              const likeCount = e.target.closest('.post-info').querySelector('.like-count');
              if (e.target.classList.contains('ri-heart-fill')) {
                  likeCount.textContent = `${parseInt(likeCount.textContent) + 1} likes`;
              } else {
                  likeCount.textContent = `${parseInt(likeCount.textContent) - 1} likes`;
              }
          }
          // Add more event listeners for comment, share, and save icons as needed
      });
  }

  // Show add post modal
  function showAddPostModal() {
      addPostModal.style.display = 'block';
  }

  // Hide add post modal
  function hideAddPostModal() {
      addPostModal.style.display = 'none';
  }

  // Add new post
  function addNewPost() {
      const newPost = {
          username: 'current_user',
          image: postImage.files[0] ? URL.createObjectURL(postImage.files[0]) : '',
          description: postDescription.value,
          likes: 0
      };
      posts.unshift(newPost);
      postFeed.innerHTML = '';
      populatePosts();
      hideAddPostModal();
      postImage.value = '';
      postDescription.value = '';
  }

  // Close modal when clicking outside of the modal content
  function handleCloseModal(e) {
      if (e.target == addPostModal) {
          hideAddPostModal();
      }
  }

  // Event Listeners
  addPostBtn.addEventListener('click', showAddPostModal);
  closeModal.addEventListener('click', hideAddPostModal);
  postBtn.addEventListener('click', addNewPost);
  window.addEventListener('click', handleCloseModal);

  // Initial population of stories and posts
//   populateStories();
  populatePosts();
  handlePostInteractions();
});
































document.addEventListener('DOMContentLoaded', () => {
    const storiesContainer = document.getElementById('storiesContainer');
    const storyModal = document.getElementById('storyModal');
    const storyProgressBar = document.getElementById('storyProgressBar');
    const storyVideo = document.getElementById('storyVideo');
    const closeStory = document.getElementById('closeStory');

    const stories = [
        { username: 'SV', image: 'https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100258.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid',  video: ''},
        { username: 'SV', image: 'https://img.freepik.com/free-photo/digital-art-young-student-school_23-2151065207.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid', video: '' },
        { username: 'SV', image: 'https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100261.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid', video: '' },
        { username: 'SV', image: 'https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100223.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid', video: '' },
        { username: 'SV', image: 'https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151034021.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid', video: '' },
        { username: 'SV', image: 'https://img.freepik.com/premium-vector/anime-man-vector-illustration_969863-197857.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid', video: '' },
        { username: 'SV', image: 'https://img.freepik.com/premium-photo/portrait-cute-boy-red-background-vector-illustration_994418-93970.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid', video: '' },
        { username: 'SV', image: 'https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151033967.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid', video: '' },
        { username: 'SV', image: 'https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100233.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid', video: '' },
        { username: 'SV', image: 'https://img.freepik.com/free-photo/digital-art-young-student-school_23-2151065220.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid', video: '' },
        { username: 'SV', image: 'https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100239.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid', video: '' },
        { username: 'SV', image: 'https://img.freepik.com/free-photo/cartoon-style-hugging-day-celebration_23-2151033347.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid', video: '' },
        { username: 'SV', image: 'https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151034097.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid', video: '' },
        // Add more stories as needed
    ];

    function populateStories() {
        stories.forEach(story => {
            const storyElement = document.createElement('div');
            storyElement.classList.add('story');
            storyElement.innerHTML = `
                <img src="${story.image}" alt="${story.username}">
                <span>${story.username}</span>
            `;
            storyElement.addEventListener('click', () => playStory(story.video));
            storiesContainer.appendChild(storyElement);
        });
    }

    let videoTimer;

    function playStory(videoSrc) {
        storyVideo.src = videoSrc;
        storyVideo.play();
        storyModal.style.display = 'flex';
        startProgressBar();
    }

    function startProgressBar() {
        storyProgressBar.style.width = '0%';
        let width = 0;
        videoTimer = setInterval(() => {
            if (width >= 100) {
                clearInterval(videoTimer);
            } else {
                width += 0.1; // Update progress bar
                storyProgressBar.style.width = width + '%';
            }
        }, 15); // Adjust for the desired time
    }

    function resetProgressBar() {
        clearInterval(videoTimer);
        storyProgressBar.style.width = '0%';
    }

    function closeStoryModal() {
        storyVideo.pause(); // Stop the video
        storyVideo.currentTime = 0; // Reset the video time
        storyModal.style.display = 'none';
        resetProgressBar();
    }

    closeStory.addEventListener('click', closeStoryModal);

    populateStories();
});






  document.getElementById('dmIcon').addEventListener('click', function() {
            window.location.href = 'dm.html';
        });
  
























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
