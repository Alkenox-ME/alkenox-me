import React from 'react';
import posed from 'react-pose';
import { Image } from '../atoms'

const Content = posed.div({
  1: {
    marginTop: '5%',
    marginLeft: '25%',
  },
  2: {
    marginLeft: "10%",
    marginTop: "15%",
  },
  3: {
    marginLeft: "40%",
    marginTop: "25%",
  },
  10: {
    zIndex: 30,
    transition: {duration: 0},
  },
  20: {
    zIndex: 20,
    transition: {duration: 0},
  },
  30: {
    zIndex: 10,
    transition: {duration: 0},
  },
});

const Slide = props => (
  <Content style={props.style} pose={[props.position, props.position*10]}>
    <Image src={props.image} style={style}/>
  </Content>
)

const style = {
  width: '100%',
}

export { Slide };
