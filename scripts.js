document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Typing Effect Logic ---
    const phrases = [
        "Cybersecurity Student.", 
        "Full Stack Tinkerer.", 
        "Networking Enthusiast.", 
        "Cloud Architect in Training."
    ];
    const typingTextElement = document.getElementById('typing-text');
    const cursor = document.getElementById('cursor');
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentPhrase = phrases[phraseIndex];

        if (!isDeleting) {
            // Typing forward
            typingTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        } else {
            // Deleting
            typingTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            // Pause at the end of the phrase
            isDeleting = true;
            setTimeout(type, 1500); // Wait longer before starting to delete
        } else if (isDeleting && charIndex === 0) {
            // Finished deleting, move to next phrase
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(type, 500); // Wait short time before typing next phrase
        } else {
            // Continue typing or deleting
            const speed = isDeleting ? 70 : 120; // Faster deletion speed
            setTimeout(type, speed);
        }
    }

    // Start the typing sequence
    type();

    // --- 2. Mobile Menu Toggle ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = mobileMenu.querySelectorAll('a');

    mobileMenuButton.addEventListener('click', () => {
        // Toggle the 'hidden' class to show/hide the menu
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when a link is clicked (improves UX)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // --- 3. Smooth Scrolling for Navigation ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});
