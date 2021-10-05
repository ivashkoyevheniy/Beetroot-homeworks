function sliderBtnsList() {
    const sliderButtons = document.querySelectorAll('.slider__dot-link');
    for (let i = 0; i < sliderButtons.length; i++) {
        const sliderButton = sliderButtons[i];
        sliderButton.addEventListener('click', slider);
    }
}
sliderBtnsList();

function slider() {
    const sliderButtonIcon = document.querySelectorAll('.slider__dot'),
        slideID = this.id.toString().slice(-1) - 1,
        activeSlide = document.querySelector(".slider__container--active"),
        isButtonActive = sliderButtonIcon[slideID].classList.contains('fas'),
        slider = document.querySelectorAll('.slider__container');
    if (!isButtonActive) {
        for (i = 0; i < sliderButtonIcon.length; i++) {
            if (sliderButtonIcon[i].classList.contains('fas')) {
                sliderButtonIcon[i].classList.remove('fas');
                sliderButtonIcon[i].classList.add('far');
            }
            activeSlide.classList.add('slider__container--hiidden');
            activeSlide.classList.remove('slider__container--active');
            this.firstElementChild.classList.add('fas');
            slider[slideID].classList.remove('slider__container--hiidden');
            slider[slideID].classList.add('slider__container--active');
        }
    }
}
