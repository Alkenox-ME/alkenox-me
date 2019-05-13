import React from "react";
import { useState, useEffect, useRef } from "react";
import posed, { PoseGroup } from "react-pose";
import styled from 'styled-components/macro';
import { CaretLeft, CaretRight } from 'styled-icons/boxicons-regular'
import { carouselContainer1, carouselSlide1, carouselSlideItem1, carouselContainer2, carouselSlide2, carouselSlideItem2 } from './posedElements'
import { border } from '../lib'

const SlideItem = styled(
    posed.li(props => props.anim)
  )`
    width: 100%;
`;

const Slide = styled(
    posed.ul(props => props.anim || null)
  )`
    list-style: none;
    display: block;
  `;

const Slider = (props) => {
  let AnimatedDiv = styled(
    posed.div(props.anim || null)
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


  useEffect(
    () => {
          setSlideIndex((sliderIndex + 0) % props.children.length);
    },
    [sliderIndex, props.children.length]
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
        <Left onClick={() => setSlideIndex(sliderIndex - 1) % props.children.length} />
      </Arrow>

      <Arrow>
        <Right onClick={() => setSlideIndex(sliderIndex + 1) % props.children.length} />
      </Arrow>

    </Carousel>
  );
}

export { Slider, Slide, SlideItem }
