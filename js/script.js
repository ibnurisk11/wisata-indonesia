// Loading Animation
window.addEventListener('load', function() {
    const loaderWrapper = document.querySelector('.loader-wrapper');
    loaderWrapper.style.opacity = '0';
    setTimeout(() => {
        loaderWrapper.style.display = 'none';
    }, 100); // Changed from 500 to 100
});