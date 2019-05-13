import React from "react";
import { useState, useEffect, useRef } from "react";
import posed, { PoseGroup } from "react-pose";
import styled from 'styled-components/macro';
import { CaretLeft, CaretRight, Pause, Play } from 'styled-icons/boxicons-regular'
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

function Slider(props) {
  let AnimatedDiv = styled(
    posed.div(props.anim || null)
  )`
  display: inline-block;
  width: 100%;
  `;

  let Carousel = styled.div`
    min-height: ${props => props.height ? props.height : '100%'};
    position: relative;
    display: block;
    ${border}
  `

  let Left = styled(CaretLeft)`
        position: absolute;
        left: 0;
        color: ${props => props.theme.colors.white};
        min-height: ${props => props.height ? props.height : '100%'};
        width: 3em;
      `

  let Right = styled(CaretRight)`
        position: absolute;
        right: 0;
        color: ${props => props.theme.colors.white};
        min-height: ${props => props.height ? props.height : '100%'};
        width: 3em;
      `

  let [sliderIndex, setSlideIndex] = useState(0);
  let [isPlaying, setIsPlaying] = useState(true);
  useEffect(
    () => {
      let cTimeout = null;
      if (isPlaying) {
        cTimeout = setTimeout(function() {
          setSlideIndex((sliderIndex + 1) % props.children.length);
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
            )) ||
            null
          );
        })}
      </PoseGroup>
      <Left onClick={() => setSlideIndex((sliderIndex - 1) % props.children.length)} />
      <Right onClick={() => setSlideIndex((sliderIndex + 1) % props.children.length)} />
    </Carousel>
  );
}
export { Slider, Slide, SlideItem }
