document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.reels-container');
    const videos = document.querySelectorAll('.video');
    const likeBtn = document.querySelector('.like-btn');

    let scrollTimeout;
    let lastScrollLeft = 0;

    // Function to play the video that is currently in view
    function playVisibleVideo() {
        videos.forEach((video) => {
            const rect = video.getBoundingClientRect();
            if (rect.left >= 0 && rect.right <= window.innerWidth) {
                video.play();
            } else {
                video.pause();
                video.currentTime = 0; // Reset the video to the beginning
            }
        });
    }

    container.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);

        scrollTimeout = setTimeout(() => {
            const scrollLeft = container.scrollLeft;
            if (scrollLeft > lastScrollLeft) {
                // Scrolling right
                const nextIndex = Math.round(scrollLeft / window.innerWidth);
                container.scrollTo({
                    left: nextIndex * window.innerWidth,
                    behavior: 'smooth'
                });
            } else {
                // Scrolling left
                const prevIndex = Math.round(scrollLeft / window.innerWidth);
                container.scrollTo({
                    left: Math.max(0, prevIndex * window.innerWidth),
                    behavior: 'smooth'
                });
            }
            lastScrollLeft = scrollLeft;

            playVisibleVideo(); // Play the video that is currently in view
        }, 100);
    });

    likeBtn.addEventListener('dblclick', () => {
        likeBtn.classList.toggle('liked');
    });

    // Play the first video on page load
    playVisibleVideo();
});

document.addEventListener('DOMContentLoaded', () => {
    const uploadBtn = document.querySelector('.upload-btn');
    const videoUploadInput = document.querySelector('#videoUpload');

    uploadBtn.addEventListener('click', () => {
        videoUploadInput.click();  // Trigger the file input dialog
    });

    videoUploadInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            // Handle the selected file (e.g., upload it to a server or display it)
            console.log('Selected file:', file);
            // You can also add logic here to preview or upload the file
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const createReelBtn = document.querySelector('.create-reel-btn');

    createReelBtn.addEventListener('click', () => {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                // Handle the camera stream (e.g., display it in a video element or record it)
                console.log('Camera stream:', stream);
                // You can create a video element and set its srcObject to the stream
            })
            .catch(error => {
                console.error('Error accessing camera:', error);
            });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const commentBtn = document.querySelector('.comment-btn');
    const commentPopup = document.querySelector('#comment-popup');
    const closePopupBtn = document.querySelector('.close-popup-btn');
    const postCommentBtn = document.querySelector('.post-comment-btn');
    const commentInput = document.querySelector('#comment-input');

    commentBtn.addEventListener('click', () => {
        commentPopup.classList.add('show');
    });

    closePopupBtn.addEventListener('click', () => {
        commentPopup.classList.remove('show');
    });

    postCommentBtn.addEventListener('click', () => {
        const commentText = commentInput.value.trim();
        if (commentText) {
            // Save the comment and add it to the list of previous comments
            console.log('Comment posted:', commentText);
            // You might want to append the comment to a list or send it to a server
            commentInput.value = ''; // Clear the input after posting
            commentPopup.classList.remove('show');
        } else {
            alert('Please enter a comment.');
        }
    });
});






























