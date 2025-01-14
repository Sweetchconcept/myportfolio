
// JavaScript: Enhance interactivity for a modern portfolio site

// Image slider functionality
const images = document.querySelectorAll('.image');
let currentIndex = 0;

function switchImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

setInterval(switchImage, 3000);

// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Dynamic project filtering (future-proofing for more projects)
const projectItems = document.querySelectorAll('.project-item');
const searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.placeholder = 'Filter projects...';
searchInput.classList.add('project-search');

const projectsContainer = document.querySelector('#projects');
projectsContainer.style.display = 'flex';
projectsContainer.style.flexDirection = 'column';
projectsContainer.style.alignItems = 'flex-end';
projectsContainer.prepend(searchInput);

searchInput.addEventListener('input', () => {
    const searchQuery = searchInput.value.toLowerCase();

    projectItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(searchQuery) ? 'block' : 'none';
    });
});

// Contact form validation (modern practices)
const contactForm = document.createElement('form');
contactForm.id = 'contactForm';
contactForm.style.marginTop = '20px';
contactForm.style.padding = '20px';
contactForm.style.border = '1px solid #ccc';
contactForm.style.borderRadius = '10px';
contactForm.style.backgroundColor = '#f9f9f9';
contactForm.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
contactForm.innerHTML = `
    <label for="name" style="display: block; margin-bottom: 8px; font-weight: bold;">Name:</label>
    <input type="text" id="name" name="name" required style="width: 100%; padding: 10px; margin-bottom: 15px; border: 1px solid #ddd; border-radius: 5px;">

    <label for="email" style="display: block; margin-bottom: 8px; font-weight: bold;">Email:</label>
    <input type="email" id="email" name="email" required style="width: 100%; padding: 10px; margin-bottom: 15px; border: 1px solid #ddd; border-radius: 5px;">

    <label for="message" style="display: block; margin-bottom: 8px; font-weight: bold;">Message:</label>
    <textarea id="message" name="message" required style="width: 100%; padding: 10px; margin-bottom: 15px; border: 1px solid #ddd; border-radius: 5px; height: 100px;"></textarea>

    <button type="submit" style="padding: 10px 20px; background-color: #333; color: #fff; border: none; border-radius: 5px; cursor: pointer;">Send Message</button>
`;

// Image slider functionality
function initImageSlider() {
    const images = document.querySelectorAll('.image');
    let currentIndex = 0;

    function switchImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    setInterval(switchImage, 3000);
}

// Initialize the slider when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initImageSlider);


document.querySelector('#contact').appendChild(contactForm);


contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);

    alert(`Thank you, ${formData.get('name')}! Your message has been sent.`);
    contactForm.reset();
});



