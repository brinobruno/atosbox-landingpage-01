/* const swiper = document.querySelector('.swiper')

swiper = new Swiper ('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
*/

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  distanceBetween: 10,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {

    830: {
      slidesPerView: 2,
      setWrapperSize: true
    },
    1200: {
      slidesPerView: 3,
      setWrapperSize: true
    },
    1400: {
      slidesPerView: 4,
      setWrapperSize: true
    }

  }
})