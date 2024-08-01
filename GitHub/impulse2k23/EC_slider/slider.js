document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        clearInterval(slider.animationId); // Stop the automatic scroll when dragging
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
        startAutoScroll(); // Resume the automatic scroll when mouse leaves
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
        startAutoScroll(); // Resume the automatic scroll when mouse is up
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 8; // Adjust scroll speed
        slider.scrollLeft = scrollLeft - walk;
    });

    // Function to start automatic scroll
    function startAutoScroll() {
        slider.animationId = setInterval(() => {
            slider.scrollLeft += 1;
        }, 30); // Adjust speed of the auto-scroll
    }

    startAutoScroll(); // Start automatic scroll on load
});
