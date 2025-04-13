const backToTop = document.getElementById('backtotop');

const checkScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY !== 0) {
        backToTop.classList.add('show')
    } else {
        backToTop.classList.remove('show')
    }
}

const moveBackToTop = () => {
    if (window.scrollY > 0) {
        window.scrollTo({top: 0, behavior: 'smooth'})

    }
}

window.addEventListener('scroll', checkScroll);
backToTop.addEventListener('click', moveBackToTop)