new Vue({
  el: "#app",
  data: () => ({
    anim: null,
    activeSlide: 0,
    activeSection: 0,
    selectedKeys: {
      0: {
        slides: [
          {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            description: "Aliquam sed purus commodo, mattis dui ut",
            creditTitle: "Photographed by",
            credit: "Laurus Molden",
            image: "/images/main/tiket img1.png",
            color: "#558B2F",
          },
          {
            title: "Aliquam sed purus commodo, mattis dui ut, suscipit risus",
            description: "Proin aliquet ipsum quis arcu",
            creditTitle: "Photographed by",
            credit: "John Wizinger",
            image: "https://unsplash.it/700?image=11",
            color: "#009688",
          },
          {
            title: "Proin aliquet ipsum quis arcu hendrerit elementum",
            description: "Lorem ipsum dolor sit amet, consectetur",
            creditTitle: "Photographed by",
            credit: "Jacob Bodo",
            image: "https://unsplash.it/700?image=12",
            color: "#FFC107",
          },
        ],
        activeSlide: 0,
      },
      1: "news",
      2: "dyk",
    },
    slides: [
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        description: "Aliquam sed purus commodo, mattis dui ut",
        creditTitle: "Photographed by",
        credit: "Laurus Molden",
        image: "/images/main/tiket img1.png",
        color: "#558B2F",
      },
      {
        title: "Aliquam sed purus commodo, mattis dui ut, suscipit risus",
        description: "Proin aliquet ipsum quis arcu",
        creditTitle: "Photographed by",
        credit: "John Wizinger",
        image: "https://unsplash.it/700?image=11",
        color: "#009688",
      },
      {
        title: "Proin aliquet ipsum quis arcu hendrerit elementum",
        description: "Lorem ipsum dolor sit amet, consectetur",
        creditTitle: "Photographed by",
        credit: "Jacob Bodo",
        image: "https://unsplash.it/700?image=12",
        color: "#FFC107",
      },
    ],
  }),
  computed: {
    slideImage() {
      console.log("slide image");
      return {
        backgroundImage: `url("${this.slides[this.activeSlide].image}")`,
      };
    },
    activeItem() {
      // return this.slides[this.activeSlide]
      return this.selectedKeys[this.activeSection].slides[
        this.selectedKeys[this.activeSection].activeSlide
      ];
    },
    buttonColor() {
      return {
        backgroundColor: this.slides[this.activeSlide].color,
      };
    },
    descriptionColor() {
      return {
        color: this.slides[this.activeSlide].color,
      };
    },
  },
  methods: {
    nextSlide() {
      console.log("next", this.activeSlide);

      let selectedSlide = this.selectedKeys[this.activeSection];
      let slides = selectedSlide.slides;
      let activeSlide = selectedSlide.activeSlide;
      console.log("variables: ", slides, activeSlide);
      if (activeSlide >= slides.length - 1) {
        console.log("reset");
        this.activeSlide = 0;
        this.selectedKeys[this.activeSection].activeSlide = 0;
      } else {
        console.log("add");
        this.activeSlide++;
        this.selectedKeys[this.activeSection].activeSlide++;
      }
    },
    enter(el, onComplete) {
      console.log("ENTER");
      let timeline = anime.timeline({ complete: onComplete });
      timeline.add({
        targets: [
          ".centered h1",
          ".centered h3",
          ".centered h6",
          ".centered h5",
          ".centered button",
        ],
        translateY: [250, 0],
        easing: "easeOutSine",
        duration: 500,
        opacity: [0, 1],
        delay: (el, i, l) => i * 100,
      });
      timeline.add({
        targets: ".paginator",
        translateX: [-50, 0],
        easing: "easeOutSine",
        duration: 300,
        opacity: [0, 1],
        offset: 0,
      });
    },
    leave(el, onComplete) {
      console.log("LEAVE");

      let timeline = anime.timeline({
        complete: onComplete,
      });

      timeline.add({
        targets: [
          ".part.text h1",
          ".part.text h3",
          ".centered h6",
          ".centered h5",
          ".centered button",
        ],
        translateY: [0, -250],
        easing: "easeInExpo",
        duration: 500,
        opacity: [1, 0],
        delay: (el, i, l) => i * 100,
      });
      timeline.add({
        targets: ".paginator",
        translateX: [0, 120],
        easing: "easeInExpo",
        duration: 300,
        opacity: [1, 0],
        offset: 0,
      });
    },
    imgEnter(el, onComplete) {
      // console.log('Enter')
      onComplete();
      this.anim = anime({
        targets: el,
        translateY: ["100%", 0],
        easing: "easeOutCubic",
        duration: 600,
        delay: 600,
      });
      // this.anim.play
      // this.isImageLoaded (el.getAttribute('src'))
    },
    imgLeave(el, onComplete) {
      anime({
        targets: el,
        translateY: [0, "-100%"],
        easing: "easeOutSine",
        duration: 600,
        delay: 700,
        complete: onComplete,
      });
    },

    isImageLoaded(src) {
      this.isLoaded = false;
      var img = new Image();
      img.onload = () => {
        // the image is ready
        this.isLoaded = true;
        // console.log('loaded')
        // this.anim.play
      };
      img.onerror = function () {
        // the image has failed
      };
      img.src = src;
    },
  },
});
