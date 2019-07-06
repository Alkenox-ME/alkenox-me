import React from "react";
import posed, { PoseGroup } from "react-pose";
import styled from 'styled-components';
import { CaretLeft } from 'styled-icons/boxicons-regular/CaretLeft'
import { CaretRight } from 'styled-icons/boxicons-regular/CaretRight'
import { makeCarousel } from '../../lib'

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
  text-shadow: ${props => props.uiShadow ? props.uiShadow : 'inherit'};
    z-index: 100;
    position: absolute;
    left: 1em;
    color: ${props => props.uiColor ? props.uiColor : 'inherit'};
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
  text-shadow: ${props => props.uiShadow ? props.uiShadow : 'inherit'};
    z-index: 100;
    position: absolute;
    right: 1em;
    color: ${props => props.uiColor ? props.uiColor : 'inherit'};
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
    color: ${props => props.uiColor ? props.uiColor : 'inherit'};
    font-size: 1.5em;
    cursor: pointer;
    text-shadow: ${props => props.uiShadow ? props.uiShadow : 'inherit'};
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
  <Container {...props}>
    <PoseGroup animateOnMount enterPose='enter' exitPose='exit' preEnterPose='exit'>
      <AnimatedDiv key={position}>
        {props.children[position]}
      </AnimatedDiv>
    </PoseGroup>
    <Left onClick={handleClick} data-position={position - 1} {...props} />
    <Right  onClick={handleClick} data-position={position + 1} {...props} />
    <Dots>
      {Array(...Array(total)).map( (val, index) =>
        <Dot key={index} onClick={handleClick} data-position={index} {...props}>
          {index === position ? '● ' : '○ ' }
        </Dot>
      )}
    </Dots>
  </Container>
);

const Carousel = makeCarousel(CarouselUI);

  return (
    <Carousel { ...props }>

      {props.children}

    </Carousel>
  );
}

export { Slider, Slide, SlideItem }
