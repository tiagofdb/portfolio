/* ============================== typing animation ============================== */
var typed = new Typed(".typing",{
	strings:["","Designer","Graphic Designer","Motion Designer","Multimedia Designer"],
	typeSpeed:100,
	BackSpeed:150,
	loop:true
})
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('#nav li a');
    const navItems = document.querySelectorAll('#nav li');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            navItems.forEach(item => item.classList.remove('active')); // Remove the class from all nav items
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.classList.add('active'); // Add the class to the target element
        });
    });
});