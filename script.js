const toggleButton = document.getElementById('toggle');
const navBarLinks = document.getElementById('navBarLinks');

toggleButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active');
})