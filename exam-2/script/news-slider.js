const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    slidesPerView: 3,
    loop: true,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});