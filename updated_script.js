// Initialize Typed.js for the text animation
var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer", "Graphics Editor", "Casual Gamer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Select all sections and nav links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Intersection Observer callback function
const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add 'active' class when the section is in view
            entry.target.classList.add('active');
        } else {
            // Remove 'active' class when the section is out of view
            entry.target.classList.remove('active');
        }
    });
};

// Options for the Intersection Observer
const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.5 // Trigger when 50% of the section is visible
};

// Create an Intersection Observer instance
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Target all sections for observation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

document.addEventListener('DOMContentLoaded', function() {
    // Select the <section> element with the class 'skl'
    const section = document.querySelector('section.skl');

    // Function to update the section visibility based on the 'active' class
    function updateSectionVisibility() {
        if (section.classList.contains('active')) {
            section.style.visibility = 'visible';
        } else {
            section.style.visibility = 'hidden';
        }
    }

    // Initial check
    updateSectionVisibility();

    // Create a MutationObserver to monitor changes to the section's class attribute
    const mutationObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                updateSectionVisibility();
            }
        });
    });

    // Configure the observer to watch for changes in attributes
    if (section) {
        mutationObserver.observe(section, { attributes: true });
    }
});