var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 16,
    freeMode: true,
    breakpoints: {
  576: {
    slidesPerView: 2,
    slidesPerGroup: 2,
  },
  768: {
    slidesPerView: 3,
    slidesPerGroup: 3,
  },
},
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });   

