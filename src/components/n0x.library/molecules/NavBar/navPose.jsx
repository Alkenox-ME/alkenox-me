import posed from 'react-pose';

export const Content = posed.nav({
  closed: { height: 0 },
  open: { height: 'auto' }
});

export const Sidebar = posed.ul({
  open: {
    x: 0,
    delayChildren: 200,
    staggerChildren: 50
  },
  closed: { x: '-100vw', delay: 300 }
})

export const Item = posed.li({
  open: { x: 0, opacity: 1 },
  closed: { x: 20, opacity: 0 }
})
