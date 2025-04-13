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

/*-----------------*/
const slidePrevList = document.getElementsByClassName('slide-prev');

for (let i = 0; i < slidePrevList.length; i++) {
    const classList = slidePrevList[i].parentElement.parentElement.nextElementSibling;
    const liList = classList.getElementsByTagName('li');

    if (classList.clientWidth < (liList.length * 260)) {
        slidePrevList[i].classList.add('slide-prev-hover');
        slidePrevList[i].addEventListener('click', transformPrev);
    } else {
        const arrowContainer = slidePrevList[i].parentElement;
        arrowContainer.removeChild(slidePrevList[i].nextElementSibling);
        arrowContainer.removeChild(slidePrevList[i])
    }
}