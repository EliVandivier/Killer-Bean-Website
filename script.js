document.addEventListener("DOMContentLoaded", function () {
    const starsContainer = document.querySelector('.stars');
    createRandomStars();

    function createRandomStars() {
        const i = 1;
        const starCount = 500; // Adjust the number of stars
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = `${Math.random() * 100}vw`;
            star.style.top = `${Math.random() * 100}vh`;
            star.style.animationDuration = `${(Math.random() * 20)}s`; // Adjust animation duration
            starsContainer.appendChild(star);
        }
    }
});
