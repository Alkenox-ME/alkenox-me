import posed from 'react-pose'

const heading = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 30
  }
}

const paragraph = {
  exit: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0,
  delay: ({ wordIndex }) => wordIndex * 30 }
}


export const char1 = props => props.animate ? props.animate : heading;
export const char2 = props => props.animate ? props.animate : paragraph;

export const T1 = posed.h1(props => props.animate ? props.animate : heading);
export const T2 = posed.h2(props => props.animate ? props.animate : heading);
export const T3 = posed.h3(props => props.animate ? props.animate : heading);
export const T4 = posed.h4(props => props.animate ? props.animate : heading);
export const T5 = posed.h5(props => props.animate ? props.animate : heading);
export const T6 = posed.h6(props => props.animate ? props.animate : heading);
export const T = posed.p(props => props.animate ? props.animate : paragraph);
