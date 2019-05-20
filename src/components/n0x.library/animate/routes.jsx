import posed from 'react-pose'

// Global Poses
export const RouteContainer = posed.div({
  enter:{ opacity: 1, beforeChildren: true },
  exit:{ opacity: 0, afterChildren: true }
});
export const Container = posed.div({
  enter: { staggerChildren: 80, delay: 600 },
  exit: { staggerChildren: 80, staggerDirection: -1, delay: 600 }
});
