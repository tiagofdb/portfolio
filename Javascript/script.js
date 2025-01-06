/* ============================== Typing animation ============================== */
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
/* =========================== Images clicker modal =============================*/
document.addEventListener("DOMContentLoaded", function() {
    // Attach click event to each trigger element
    document.querySelectorAll('.trigger').forEach(function(trigger) {
        trigger.addEventListener('click', function() {
            // Get the modal ID from the data-modal attribute
            var modalId = this.getAttribute('data-modal');
            var modal = document.getElementById(modalId);

            // Toggle the modal visibility
            if (modal) {
                modal.classList.toggle('open');
            }

            // Toggle the blur effect on the page wrapper
            document.querySelector('.page-wrapper').classList.toggle('blur-it');

            // Add no-scroll class to body to prevent scrolling
            document.body.classList.add('no-scroll');
            return false;
        });
    });

    // Attach click event to close buttons
    document.querySelectorAll('.btn-close').forEach(function(btn) {
        btn.addEventListener('click', function() {
            // Get the parent modal and close it
            var modal = this.closest('.modal-wrapper');
            if (modal) {
                modal.classList.remove('open');
            }

            // Remove the blur effect on the page wrapper
            document.querySelector('.page-wrapper').classList.remove('blur-it');

            // Remove no-scroll class from body to enable scrolling
            document.body.classList.remove('no-scroll');
            return false;
        });
    });

    // Attach click event to modal wrappers to close when clicking outside the modal
    document.querySelectorAll('.modal-wrapper').forEach(function(modalWrapper) {
        modalWrapper.addEventListener('click', function(event) {
            // Check if the click is outside the modal content
            if (event.target === modalWrapper) {
                modalWrapper.classList.remove('open');
                
                // Remove the blur effect on the page wrapper
                document.querySelector('.page-wrapper').classList.remove('blur-it');

                // Remove no-scroll class from body to enable scrolling
                document.body.classList.remove('no-scroll');
            }
        });
    });
});

// no-scroll class is not applied when the page loads
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.remove('no-scroll');
});