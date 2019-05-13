import posed from 'react-pose'

// Global Poses
export const Container = posed.div({
  enter: { staggerChildren: 80 },
  exit: { staggerChildren: 80, staggerDirection: -1 }
});
export const RouteContainer = posed.div({
  enter:{opacity: 1, delay: 1000, beforeChildren: true},
  exit:{opacity: 0, delay: 1000, afterChildren: true}
});

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

// Buttons
export const Button1 = posed.button({
  pressable: true,
  init: { scale: 1 },
  press: { scale: 0.8 }
});

export const Button2 = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)',
    zIndex: 0
  },
  hover: {
    scale: 1.2,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)',
    zIndex: 1
  },
  press: {
    scale: 1.1,
    boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
  }
});

// Form
export const TextInput = posed.input({
  focusable: true,
  init: {
    color: '#aaa',
    outlineWidth: '0px',
    outlineOffset: '0px',
    scale: 1
  },
  focus: {
    color: '#000',
    outlineWidth: '12px',
    outlineOffset: '5px',
    outlineColor: '#AB36FF',
    scale: 1.2
  }
});

export const TextBlockConfig = posed.textarea({
  focusable: true,
  init: {
    color: '#aaa',
    outlineWidth: '0px',
    outlineOffset: '0px',
    scale: 1
  },
  focus: {
    color: '#000',
    outlineWidth: '12px',
    outlineOffset: '5px',
    outlineColor: '#AB36FF',
    scale: 1.2
  }
});

// HomePage Poses
export const Sound = posed.div( {
  enter: { x: 0, opacity: 1 },
  exit: { x: -1000, opacity: 0 }
} );
export const Mx = posed.div( {
  enter: { x: 0, opacity: 1 },
  exit: { x: 1000, opacity: 0 }
} );
export const Photo = posed.div( {
  enter: { x: 0, opacity: 1 },
  exit: { x: -1000, opacity: 0 }
} );
export const Vx = posed.div( {
  enter: { x: 0, opacity: 1 },
  exit: { x: 0, opacity: 0 }
} );
export const Gx = posed.div( {
  enter: { x: 0, opacity: 1 },
  exit: { x: 1000, opacity: 0 }
} );
export const Web = posed.div( {
  enter: { x: 0, opacity: 1 },
  exit: { x: -1000, opacity: 0 }
} );
export const Rx = posed.div( {
  enter: { x: 0, opacity: 1 },
  exit: { x: 1000, opacity: 0 }
} );
