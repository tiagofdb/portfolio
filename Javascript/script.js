/* ============================== Typing animation ============================== */
var typed = new Typed(".typing", {
    strings: ["", "Designer", "3D Artist", "Graphic Designer", "Motion Designer", "Multimedia Designer"],
    typeSpeed: 100,
    BackSpeed: 150,
    loop: true
});

const navLinks = document.querySelectorAll('.nav li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');
    });
});

/* ============================== Experience drop ============================== */
// Visibility of each section
function toggleSection(section) {
    const sectionContent = document.getElementById(section);

    // Toggle the timeline to expand/collapse
    sectionContent.classList.toggle('active');

    // Toggle rotate the icon
    const sectionTitle = sectionContent.querySelector('.title');
    sectionTitle.classList.toggle("active");
}

/* =========================== Images clicker modal ============================= */
document.addEventListener("DOMContentLoaded", function () {
    // Function to update active link based on scroll position
    function updateActiveLink() {
        let sections = document.querySelectorAll('section');
        let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        sections.forEach(section => {
            let sectionTop = section.offsetTop;
            let sectionHeight = section.offsetHeight;
            let sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop - 150 && scrollPosition < sectionTop + sectionHeight) {
                document.querySelector('.nav li a.active').classList.remove('active');
                document.querySelector('.nav li a[href*=' + sectionId + ']').classList.add('active');
            }
        });
    }

    // Attach the scroll event listener
    window.addEventListener('scroll', updateActiveLink);

    // Attach click event to each trigger element
    document.querySelectorAll('.trigger').forEach(function (trigger) {
        trigger.addEventListener('click', function () {
            // Get the modal ID from the data-modal attribute
            var modalId = this.getAttribute('data-modal');
            var modal = document.getElementById(modalId);

            // Toggle the modal visibility
            if (modal) {
                modal.classList.toggle('open');
                resetMedia(modal); // Reset video and GIF when modal opens
            }

            // Add no-scroll class to body to prevent website scrolling
            document.body.classList.add('no-scroll');
            return false;
        });
    });

    // Attach click event to close buttons
    document.querySelectorAll('.btn-close').forEach(function (btn) {
        btn.addEventListener('click', function () {
            // Get the parent modal and close it
            var modal = this.closest('.modal-wrapper');
            if (modal) {
                modal.classList.remove('open');
                pauseVideos(modal); // Pause the videos when modal closes
            }

            // Remove no-scroll class from body to enable website scrolling
            document.body.classList.remove('no-scroll');
            return false;
        });
    });

    // Attach click event to modal wrappers to close when clicking outside the modal
    document.querySelectorAll('.modal-wrapper').forEach(function (modalWrapper) {
        modalWrapper.addEventListener('click', function (event) {
            // Check if the click is outside the modal content
            if (event.target === modalWrapper) {
                modalWrapper.classList.remove('open');
                pauseVideos(modalWrapper); // Pause the videos when modal closes

                // Remove no-scroll class from body to enable website scrolling
                document.body.classList.remove('no-scroll');
            }
        });
    });

    // Function to reset videos and GIFs
    function resetMedia(modal) {
        const videos = modal.querySelectorAll("video");
        const gifs = modal.querySelectorAll("img");

        videos.forEach(video => {
            video.currentTime = 0; // Reset video to the start
        });

        gifs.forEach(gif => {
            const gifSrc = gif.src; // Store the current GIF source
            gif.src = ""; // Temporarily clear the GIF source
            gif.src = gifSrc; // Reassign the source to reload the GIF
        });

        // Scroll the modal content to the top

        modal.querySelector(".modal").scrollTop = 0; // Reset scroll for the inner modal
    }

    // Function to pause all videos
    function pauseVideos(modal) {
        const videos = modal.querySelectorAll("video");
        videos.forEach(video => {
            video.pause(); // Immediately pause the video
        });
    }

});
document.querySelectorAll('video').forEach(video => {
	video.muted = true;
});


// Ensure the website scroll is visible when the page loads
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.remove('no-scroll');
});