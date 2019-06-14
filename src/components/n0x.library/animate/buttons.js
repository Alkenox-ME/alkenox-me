import styled from 'styled-components/macro'
import posed from 'react-pose'

// Buttons
export const Button1 = {
  pressable: true,
  init: { scale: 1 },
  press: { scale: .998 }
};

export const Button2 = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)',
  },
  hover: {
    scale: 1.2,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)',
  },
  press: {
    scale: 1.1,
    boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
  }
});

export const BtnLogo = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    opacity: .8,
  },
  hover: {
    opacity: 1,
  },
  press: {
  }
});

export const Btn1 =
  posed.div(Button1)
