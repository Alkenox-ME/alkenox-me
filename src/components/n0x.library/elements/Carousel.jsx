import React, { PureComponent } from "react";
import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";
import styled, { css } from "styled-components";

// Adding directional arrows to help navigate carousel:

const width = "100%";
const height = "70vh";

const Background = styled.div`
  background-image: url(${props => props.url || null});
  background-size: ${props => props.bgSize || "cover"};
  background-position: ${props => props.bgPosition || "center"};
  background-attachment: ${props => props.bgAttachment || null};
  background-origin: ${props => props.bgOrigin || null};
  border-radius: 1em;
  filter: ${props => props.filter || null};
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  box-shadow: 0.15em 0.15em 0.75em 0.5em #24292e,
    -0.15em 0.15em 1em 0.5em #24292e, 0.1em -0.1em 1em 0.5em #6c6c6c,
    -0.1em -0.1em 0.75em 0.5em #6c6c6c;
  border-radius: ${props => props.bRadius || null};
  position: relative;
  overflow: hidden;
  width: ${width};
  min-height: ${height};
`;

const Arrow = styled.div`
  text-shadow: 1px 1px 1px #fff;
  z-index: 100;
  line-height: ${height};
  text-align: center;
  position: absolute;
  top: 0;
  width: 10%;
  font-size: 2em;
  cursor: pointer;
  user-select: none;
  ${props =>
    props.right
      ? css`
          left: 90%;
        `
      : css`
          left: 0%;
        `}
`;

const Dot = styled.span`
  font-size: 1.5em;
  text-color: {
  }
  cursor: pointer;
  text-shadow: 1px 1px 1px #fff;
  user-select: none;
`;
const Dots = styled.span`
  position: absolute;
  bottom: 10%;
  display: block;
  text-align: center;
  width: ${width};
  z-index: 100;
  text-color: ${color};
`;

const CarouselUI = ({ position, handleClick, children, total, ...props }) => (
  <Container {...props}>
    <Background {...props} />
    {children}
    <Arrow onClick={handleClick} data-position={position - 1}>
      {"<"}
    </Arrow>
    <Arrow right onClick={handleClick} data-position={position + 1}>
      {">"}
    </Arrow>
    <Dots>
      {Array(...Array(total)).map((val, index) => (
        <Dot key={index} onClick={handleClick} data-position={index}>
          {index === position ? "● " : "○ "}
        </Dot>
      ))}
    </Dots>
  </Container>
);
const Carousel = makeCarousel(CarouselUI);

export { Carousel };
