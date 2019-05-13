import React from "react";
import { useState, useEffect, useRef } from "react";
import posed, { PoseGroup } from "react-pose";
import styled from 'styled-components/macro';
import { CaretLeft, CaretRight, Pause, Play } from 'styled-icons/boxicons-regular'
// import { CaretRight } from 'styled-icons/boxicons-regular/CaretRight'
import { Button2, Container, carousel, sliduh, slideContainer, MainContainer, ListContainer, Item } from './posedElements'
import { backgroundImage, border, fx, utility, position, space } from '../lib'

const SlideItem = (props) => {
  let Item = styled(
  posed.div(sliduh)
)`
  width: 100%;
`;
return (
    <PoseGroup animateOnMount enterPose='enter' exitPose='exit' preEnterPose='exit'>
      <Item key={props.children}>{props.children}</Item>
    </PoseGroup>
    )
}

const Slide = ( props ) => {
  let AnimatedDiv = styled(
    posed.div(slideContainer)
  )`
    display: block;
  `;

  return (
  <AnimatedDiv>
    {props.children}
  </AnimatedDiv>
  );
}

const Slider = (props) => {

  let AnimatedDiv = styled(
    posed.div(carousel)
  )`
  display: inline-block;
  margin: auto 0;
  width: 100%;
  `;

  let Carousel = styled.div`
    position: relative;
    display: block;
    ${border}
  `

  let Arrow = styled.div`
    position: absolute;
    top: 30vh;
    width: 100%;
    color: ${props => props.theme.colors.white};
  `

  let Left = styled(CaretLeft)`
        position: absolute;
        width: 3em;
        left: 0;
      `

  let Right = styled(CaretRight)`
        position: absolute;
        width: 3em;
        right: 0;
      `

  let [sliderIndex, setSlideIndex] = useState(0);
  let [isPlaying, setIsPlaying] = useState(true);

  useEffect(
    () => {
      let cTimeout = null;
      if (isPlaying) {
        cTimeout = setTimeout(function() {
          setSlideIndex((sliderIndex + 0) % props.children.length);
        }, 3000);
      }
      return () => {
        window.clearTimeout(cTimeout);
      };
    },
    [isPlaying, sliderIndex, props.children.length]
  );

  return (
    <Carousel>

      <PoseGroup animateOnMount enterPose='enter' exitPose='exit' preEnterPose='exit'>
        {props.children.map(function(child, indx) {
          return (
            (indx === sliderIndex && (
              <AnimatedDiv key={indx}>
                {props.children[sliderIndex]}
              </AnimatedDiv>
            )) || null
          );
        })}
      </PoseGroup>

      <Arrow>
        <Left onClick={() => setSlideIndex((sliderIndex - 1) % props.children.length)} />
      </Arrow>

      <Arrow>
        <Right onClick={() => setSlideIndex((sliderIndex + 1) % props.children.length)} />
      </Arrow>

    </Carousel>
  );
}

export { Slider, Slide, SlideItem }
