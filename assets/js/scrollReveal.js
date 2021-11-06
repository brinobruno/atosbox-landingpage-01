const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
  })
  
  scrollReveal.reveal(
    `.c1 img, .c1 .text,
    .c2 h3, .c2 .swiper, .c2 .specialist-quote,
    .c3 .c3-left, .c3 .c3-right,
    .c4 .c4-title, .c4 .about-benefits, .c4 a,
    .c5 .c5-title, .c5 .c5-description, .c5 .locations-menu, .c5 .locations-buttons, .c5 .locations-description,
    .c6 .c6-title, .c6 .c6-description, .c6 .faq-accordion,
    .c7 .c7-title, .c7 .c7-description, .c7 .catch-phrase, .c7 a, .c7 .social-icons,
    .footer-container img, .footer-container p
    `,
    { interval: 100 }
  )