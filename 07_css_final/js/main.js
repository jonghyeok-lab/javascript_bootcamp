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
const transformPrev = (event) => {
    const slidePrev = event.target; // 이벤트가 가진 요소 가져옴
    const slideNext = slidePrev.nextElementSibling;

    const classList = slidePrev.parentElement.parentElement.nextElementSibling;
    let activeLi = classList.getAttribute('data-position');
    const liList = classList.getElementsByTagName('li');

    const liWidth = liList[0]?.offsetWidth || 0;
    if (classList.clientWidth < (liList.length * 260 + Number(activeLi))) {
        activeLi = Number(activeLi) - 260;

        if (classList.clientWidth > (liList.length * 260 + Number(activeLi))) {
            slidePrev.style.color = '#cfd8dc';
            slidePrev.classList.remove('slide-prev-hover')
        }

        slideNext.style.color = '#2f3059';
        slideNext.classList.add('slide-next-hover');
    }

    classList.style.transition = 'transform 1s'; // transform속성에 애니메이션 효과를 1초 줌
    classList.style.transform = 'translateX(' + String(activeLi) + 'px)'; //
    classList.setAttribute('data-position', activeLi);
}

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