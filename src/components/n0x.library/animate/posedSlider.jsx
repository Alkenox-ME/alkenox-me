import React from "react";
import { useState, useEffect, useRef } from "react";
import posed, { PoseGroup } from "react-pose";
import styled, { css } from 'styled-components/macro';
import { CaretLeft, CaretRight } from 'styled-icons/boxicons-regular'
import { carouselContainer1, carouselSlide1, carouselSlideItem1, carouselContainer2, carouselSlide2, carouselSlideItem2 } from './posedElements'
import { border, makeCarousel } from '../lib'

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

const width = '100%', height = '100%';

const Slider = (props) => {

  let AnimatedDiv = styled(
    posed.div(props.anim || null)
  )`
  display: inline-block;
  width: 100%;
  `;

  let Container = styled.div`
    border-radius: ${props => props.bRadius ? props.bRadius : 0};
    position: relative;
    overflow: hidden;
    width: ${width};
    height: ${height};
  `;

  let Left = styled(CaretLeft)`
    text-shadow: .01em .01em .01em #000;
    z-index: 100;
    position: absolute;
    left: 1em;
    color: ${props => props.theme.colors.white};
    min-height: ${props => props.height ? props.height : '100%'};
    width: 3em;
    cursor: pointer;
    user-select: none;
    opacity: .5;
    transition: all .5s ease;
    :hover {
      opacity: .9;
      transition: all .5s ease;
    }
  `

  let Right = styled(CaretRight)`
    text-shadow: .01em .01em .01em #000;
    z-index: 100;
    position: absolute;
    right: 1em;
    color: ${props => props.theme.colors.white};
    min-height: ${props => props.height ? props.height : '100%'};
    width: 3em;
    cursor: pointer;
    user-select: none;
    opacity: .5;
    transition: all .5s ease;
    :hover {
      opacity: .9;
      transition: all .5s ease;
    }
  `;

  const Dot = styled.span`
    color: ${props => props.theme.colors.white};
    font-size: 1.5em;
    cursor: pointer;
    text-shadow: .01em .01em .01em #000;
    user-select: none;
    opacity: .5;
    transition: all .5s ease;
    :hover {
      opacity: .9;
      transition: all .5s ease;
    }
  `;

  const Dots = styled.span`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 1em;
    text-align: center;
    width: ${width};
    z-index: 100;
  `;

  const CarouselUI = ({ position, total, handleClick, children }) => (
  <Container>
    <PoseGroup animateOnMount enterPose='enter' exitPose='exit' preEnterPose='exit'>
      <AnimatedDiv key={position}>
        {props.children[position]}
      </AnimatedDiv>
    </PoseGroup>
    <Left onClick={handleClick} data-position={position - 1} />
    <Right  onClick={handleClick} data-position={position + 1} />
    <Dots>
      {Array(...Array(total)).map( (val, index) =>
        <Dot key={index} onClick={handleClick} data-position={index}>
          {index === position ? '● ' : '○ ' }
        </Dot>
      )}
    </Dots>
  </Container>
);

const Carousel = makeCarousel(CarouselUI);

  return (
    <Carousel>

      {props.children}

    </Carousel>
  );
}

export { Slider, Slide, SlideItem }
