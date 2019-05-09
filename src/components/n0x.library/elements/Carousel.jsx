import React, { PureComponent } from "react";
import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";
import styled, { css } from "styled-components";

// Adding directional arrows to help navigate carousel:

const width = "100%";
const height = "550px";
const Wrapper = styled.div`
  position: relative;
`;

const Background = styled.div`
  background-image: url("https://github.com/Alkenox-ME/alkenox-me-images/blob/master/audience-band-blur-1870438.jpg?raw=true");
  background-size: ${props => props.bgSize || "cover"};
  background-position: ${props => props.bgPosition || "center"};
  background-attachment: ${props => props.bgAttachment || null};
  background-origin: ${props => props.bgOrigin || null};
  filter: blur(8px);
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  box-shadow: 0.15em 0.15em 0.75em 0.5em #24292e,
    -0.15em 0.15em 1em 0.5em #24292e, 0.1em -0.1em 1em 0.5em #6c6c6c,
    -0.1em -0.1em 0.75em 0.5em #6c6c6c;

  position: relative;
  overflow: hidden;
  width: ${width};
  height: ${height};
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
const CarouselUI = ({ position, handleClick, children }) => (
  <Container>
    <Background />
    {children}
    <Arrow onClick={handleClick} data-position={position - 1}>
      {"<"}
    </Arrow>
    <Arrow right onClick={handleClick} data-position={position + 1}>
      {">"}
    </Arrow>
  </Container>
);
const Carousel = makeCarousel(CarouselUI);

export { Carousel };
