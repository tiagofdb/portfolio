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