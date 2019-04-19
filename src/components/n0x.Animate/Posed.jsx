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
