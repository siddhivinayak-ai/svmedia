document.addEventListener('DOMContentLoaded', () => {
  const editProfileBtn = document.getElementById('editProfileBtn');
  const editProfileModal = document.getElementById('editProfileModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const saveProfileBtn = document.getElementById('saveProfileBtn');

  editProfileBtn.addEventListener('click', () => {
      editProfileModal.style.display = 'flex';
  });

  closeModalBtn.addEventListener('click', () => {
      editProfileModal.style.display = 'none';
  });

  saveProfileBtn.addEventListener('click', () => {
      const newUsername = document.getElementById('editUsername').value;
      const newEmail = document.getElementById('editEmail').value;
      const newBio = document.getElementById('editBio').value;
      const newWebsite = document.getElementById('editWebsite').value;

      document.getElementById('username').innerText = newUsername;
      document.getElementById('bioText').innerText = newBio.replace(/\n/g, '<br>');
      document.getElementById('websiteLink').innerText = newWebsite;
      document.getElementById('websiteLink').href = newWebsite;

      editProfileModal.style.display = 'none';
  });

  window.onclick = (event) => {
      if (event.target === editProfileModal) {
          editProfileModal.style.display = 'none';
      }
  };

  const tabs = document.querySelectorAll('.tab');
  const content = document.querySelector('.content');

//   tabs.forEach(tab => {
//       tab.addEventListener('click', () => {
//           document.querySelector('.tab.active').classList.remove('active');
//           tab.classList.add('active');
//           loadContent(tab.dataset.tab);
//       });
//   });

//   const loadContent = (tab) => {
//       content.innerHTML = ''; // Clear existing content
//       // Load new content based on the selected tab
//       if (tab === 'posts') {
//           content.innerHTML = '<p>Post section here... Everyhting in this is not working.  Very much more modifications are needed . All this is for Demo Purpose . Understood Boys </p>';
//       } else if (tab === 'reels') {
//           content.innerHTML = '<p>Reels content goes here...</p>';
//       } else if (tab === 'tagged') {
//           content.innerHTML = '<p>Tagged content goes here...</p>';
//       }
//   };

  loadContent('posts'); // Load posts content by default
});























document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const content = document.querySelector('.content');

    // Event listener for tabs
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelector('.tab.active').classList.remove('active');
            tab.classList.add('active');
            loadContent(tab.dataset.tab);
        });
    });

    // Function to load content based on the selected tab
    const loadContent = (tab) => {
        content.innerHTML = ''; // Clear existing content

        if (tab === 'posts') {
            content.innerHTML = `
                <h2>Posts</h2>
                <div class="post">
                    <img src="posts/d.png" alt="Post Image 1">
                    <p>Sample Post 1 Description</p>
                </div>
                <div class="post">
                    <img src="posts/b.png" alt="Post Image 2">
                    <p>Sample Post 2 Description</p>
                </div>
                <div class="post">
                    <img src="posts/c.png" alt="Post Image 3">
                    <p>Sample Post 3 Description</p>
                </div>
                <div class="post">
                    <img src="posts/e.png" alt="Post Image 4">
                    <p>Sample Post 4 Description</p>
                </div>
            `;
        } else if (tab === 'reels') {
            content.innerHTML = `
                <h2>Reels</h2>
                <div class="reel">
                    <video src="https://www.w3schools.com/html/mov_bbb.mp4" controls></video>
                    <p>Sample Reel 1</p>
                </div>
                <div class="reel">
                    <video src="https://www.w3schools.com/html/mov_bbb.mp4" controls></video>
                    <p>Sample Reel 2</p>
                </div>
                <div class="reel">
                    <video src="https://www.w3schools.com/html/mov_bbb.mp4" controls></video>
                    <p>Sample Reel 3</p>
                </div>
            `;
        } else if (tab === 'tagged') {
            content.innerHTML = `
                <h2>Tagged</h2>
                <div class="tagged">Sample Tagged Content 1</div>
                <div class="tagged">Sample Tagged Content 2</div>
                <div class="tagged">Sample Tagged Content 3</div>
                <div class="tagged">Sample Tagged Content 4</div>
                <div class="tagged">Sample Tagged Content 5</div>
            `;
        }
    };

    // Load default content
    loadContent('posts');
});

