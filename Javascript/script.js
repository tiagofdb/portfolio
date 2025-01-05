/* ============================== typing animation ============================== */
var typed = new Typed(".typing",{
	strings:["","Designer","3D Artist","Graphic Designer","Motion Designer","Multimedia Designer"],
	typeSpeed:100,
	BackSpeed:150,
	loop:true
})
const navLinks = document.querySelectorAll('.nav li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');
    });
});
/* ============================== experience drop ============================== */
// Function to toggle the visibility of each section
function toggleSection(section) {
    const sectionContent = document.getElementById(section);

    // Toggle the active class on the timeline to expand/collapse
    sectionContent.classList.toggle('active');

    // Toggle the active class on the title to rotate the icon
    const sectionTitle = sectionContent.querySelector('.title');
    sectionTitle.classList.toggle("active");
}
/* ==============================  Portfolio Gallery  ============================== */
const portfolioData = [
    {
        images: ["Images/Render_5.jpg", "Images/Render_5.jpg", "Images/Render_5.jpg", "Images/Render_5.jpg"]
    },
    {
        images: ["Images/123.png", "Images/123_1.png", "Images/123_2.png"]
    },
    {
        images: ["Images/img1.png", "Images/img1_1.png", "Images/img1_2.png", "Images/img1_3.png"]
    },
    {
        images: ["Images/mockup3.png", "Images/mockup3_1.png"]
    },
    {
        images: ["Images/tracker.jpeg", "Images/tracker_1.jpeg", "Images/tracker_2.jpeg"]
    },
    {
        images: ["Images/jenga.jpeg", "Images/jenga_1.jpeg"]
    }
];

let currentIndex = 0;

function openPopup(index) {
    currentIndex = index;
    
    // Clear previous images
    const galleryContainer = document.getElementById('popup-gallery-images');
    galleryContainer.innerHTML = "";

    // Add all images for the selected portfolio item
    portfolioData[currentIndex].images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.alt = "Gallery Image";
        imgElement.classList.add('popup-img'); // Add a class for styling
        galleryContainer.appendChild(imgElement);
    });

    // Show the popup
    document.getElementById('popup-gallery').classList.add('active');
    document.body.classList.add('no-scroll'); // Disable page scroll
}

function closePopup() {
    document.getElementById('popup-gallery').classList.remove('active');
    document.body.classList.remove('no-scroll'); // Enable page scroll
}

// Ensure no-scroll class is not applied when the page loads
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.remove('no-scroll');
});