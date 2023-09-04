var splide = new Splide(".splide", {
  type: "loop",
  // padding: '5rem',
});

splide.mount();

// var splide = new Splide(".splide-tiket", {
//   type: "loop",
//   // padding: '5rem',
// });

// splide.mount();

// option
// https://splidejs.com/guides/options/#type

var splide = new Splide(".splide-tiket", {
  type: "slide",
  // perPage: 2,
  padding: "5rem",
  gap: "10px",
  start: 1,
});

splide.mount();
