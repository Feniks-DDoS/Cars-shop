
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    effect:"slide",
    effect:"fade",
    fadeEffect: {
        crossFade:true,
    },
    loop: false, // Уберите loop, если не нужно зацикливание
    navigation: true,
  });

  // Логика для кнопок
  const buttons = document.querySelectorAll('.go-to-slide');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const slideIndex = parseInt(button.getAttribute('data-slide'), 10);
      swiper.slideTo(slideIndex - 1); // Слайды в Swiper начинаются с 0
    });
  });