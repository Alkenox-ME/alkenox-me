import posed from 'react-pose'

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
