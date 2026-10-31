function updateWidth() {
    document.querySelector('#viewport-size span').textContent =
        window.innerWidth;
}

updateWidth();

window.addEventListener('resize', updateWidth);