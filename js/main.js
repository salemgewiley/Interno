const navMobileMenu = document.getElementById("nav_mobile_menu");
const navMenu = document.getElementById("nav_menu");

navMobileMenu.addEventListener("click", () => {
  navMenu.classList.toggle("nav-is-open");
});

//swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    960: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

// Scroll reveal animations
const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 2000,
  // delay: 600,
  // reset:true,
});

//hero
sr.reveal(".hero__text", { origin: "top" });
// steps
sr.reveal(".steps__step", { distance: "100px", interval: 100 });
// about
sr.reveal(".about__text", { origin: "left" });
sr.reveal(".about__img", { origin: "right" });

// testimonial
sr.reveal(".testimonial__bg", { distance: "100px", interval: 100 });
sr.reveal(".testimonial__title", {
  distance: "100px",
  interval: 100,
});
sr.reveal(".testimonial__slider", {
  origin: "top",
  distance: "100px",
  interval: 100,
  delay: 600,
});

// brands
sr.reveal(".brands", { distance: "100px", interval: 100, delay: 600 });

// work
sr.reveal(".work__title", {
  origin: "left",
  distance: "100px",
  interval: 100,
  delay: 600,
});
sr.reveal(".work__subtitle", {
  origin: "right",
  distance: "100px",
  interval: 100,
  delay: 600,
});
sr.reveal(".work__item1", {
  origin: "left",
  distance: "100px",
  interval: 100,
  delay: 200,
});
sr.reveal(".work__item2", {
  origin: "right",
  distance: "100px",
  interval: 100,
  delay: 200,
});
sr.reveal(".work__item3", {
  origin: "left",
  distance: "100px",
  interval: 100,
  delay: 200,
});
sr.reveal(".work__item4", {
  origin: "right",
  distance: "100px",
  interval: 100,
  delay: 200,
});
// stats
sr.reveal(".stats");
sr.reveal(".stats__item", {
  origin: "top",
  distance: "100px",
  interval: 100,
  delay: 600,
});
// news

sr.reveal(".news__title", {
  origin: "left",
  distance: "100px",
  interval: 100,
  delay: 600,
});
sr.reveal(".news__subtitle", {
  origin: "right",
  distance: "100px",
  interval: 100,
  delay: 600,
});
sr.reveal(".news__item1", {
  origin: "left",
  distance: "100px",
  interval: 100,
});
sr.reveal(".news__item2", {

  distance: "100px",
  interval: 100,
});
sr.reveal(".news__item3", {
  origin: "right",
  distance: "100px",
  interval: 100,
});

// contact
sr.reveal(".contact__title", {
  origin: "left",
  distance: "100px",
  interval: 100,
  delay: 600,
});
sr.reveal(".contact__subtitle", {
  origin: "right",
  distance: "100px",
  interval: 100,
  delay: 600,
});
