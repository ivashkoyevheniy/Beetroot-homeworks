function navBtnsList() {
    const navBtnsContainer = document.querySelector('.navigation__bar');
    
    navBtnsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('navigation__link')) {
            navStateChange(event.target);
        }
    });
}

navBtnsList();

function navStateChange(target) {
    const navButtonsIcons = document.querySelectorAll('.navigation__elem-mark');
    for (i = 0; i < navButtonsIcons.length; i++) {
        if (navButtonsIcons[i].classList.contains('fas')) {
            navButtonsIcons[i].classList.remove('fas');
            navButtonsIcons[i].classList.add('far');
        }
    }

    target.firstElementChild.classList.add('fas');
    target.firstElementChild.classList.remove('far');
}