document.addEventListener("DOMContentLoaded", function() {
    // Scroll animations for sections
    const sections = document.querySelectorAll("section");

    function revealSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight - 50) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections(); // Run once on page load

    // Floating Colorful Bubbles Animation
    const bubbleContainer = document.querySelector(".bubbles");

    function createBubbles() {
        for (let i = 0; i < 20; i++) {
            let bubble = document.createElement("span");
            let size = Math.random() * 50 + 10;
            let duration = Math.random() * 8 + 5;
            let position = Math.random() * 100;
            let colors = ["rgba(255, 69, 96, 0.4)", "rgba(102, 255, 102, 0.4)", "rgba(51, 153, 255, 0.4)", "rgba(255, 204, 0, 0.4)"];
            let randomColor = colors[Math.floor(Math.random() * colors.length)];

            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            bubble.style.left = `${position}%`;
            bubble.style.animationDuration = `${duration}s`;
            bubble.style.background = randomColor;

            bubbleContainer.appendChild(bubble);

            setTimeout(() => {
                bubble.remove();
            }, duration * 1000);
        }
    }

    setInterval(createBubbles, 3000);
});
