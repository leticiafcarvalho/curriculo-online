document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        section.style.opacity = 0;
        setTimeout(() => {
            section.style.opacity = 1;
            section.style.transition = "opacity 0.5s";
        }, 500);
    });
});
