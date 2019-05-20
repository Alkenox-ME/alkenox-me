import posed from 'react-pose'

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
    zIndex: 1
  },
  hover: {
    scale: 1.2,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)',
    zIndex: 10
  },
  press: {
    scale: 1.1,
    boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
  }
});
