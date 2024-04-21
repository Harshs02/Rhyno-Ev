document.addEventListener("DOMContentLoaded", function() {
    const starsContainer = document.querySelector(".stars-container");
    const numberOfStars = 100; // Adjust the number of stars

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement("div");
        star.className = "stars";
        star.style.left = `${Math.random() * 100}%`; // Randomize horizontal position
        star.style.animationDuration = `${Math.random() * 3 + 2}s`; // Randomize animation duration
        starsContainer.appendChild(star);
    }

    // Fade in sections
    const sections = document.querySelectorAll('.section');
    fadeInSections();

    window.addEventListener('scroll', fadeInSections);

    function fadeInSections() {
        sections.forEach(section => {
            if (isElementInViewport(section)) {
                section.classList.add('active');
            }
        });
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});

