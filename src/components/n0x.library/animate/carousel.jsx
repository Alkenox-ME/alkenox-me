import posed from 'react-pose'

// Carousel
export const carouselContainer1 = {
  enter: { opacity: 1, beforeChildren: true },
  exit: { opacity: 0 }
};
export const carouselSlide1 = {
  enter: { staggerChildren: 80 },
  exit: { staggerChildren: 80, afterChildren: true, staggerDirection: -1 }
};
export const carouselSlideItem1 = {
  enter: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 }
};
export const carouselContainer2 = {
  enter: { opacity: 1, beforeChildren: true },
  exit: { opacity: 0 }
};
export const carouselSlide2 = {
  enter: {
    staggerChildren: 80
  },
  exit: {
    staggerChildren: 80,
    staggerDirection: -1,
    afterChildren: true
   }
};
export const carouselSlideItem2 = {
  enter: {
    zIndex: 50,
    x: 0,
    opacity: 1,
  },
  exit: {
    zIndex: 1,
    x: "-100%",
    opacity: 0,
    afterChildren: true
  }
}
