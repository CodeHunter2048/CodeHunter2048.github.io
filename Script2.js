// get all the navigation links
const navLinks = document.querySelectorAll('header nav a');

// add event listeners to the navigation links
navLinks.forEach(link => {
    link.addEventListener('click', event => {
        // prevent the default link behavior
        event.preventDefault();

        // get the content associated with the clicked link
        const linkContent = link.getAttribute('data-content');

        // hide all sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.style.display = 'none';
        });

        // show the appropriate section
        document.querySelector(`#${linkContent}`).style.display = 'block';
    });
});
