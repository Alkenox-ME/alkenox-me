import React, { PureComponent } from "react";
import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";
import styled, { css } from "styled-components";

// Adding directional arrows to help navigate carousel:

const width = "100%";
const height = "600px";
const Container = styled.div`
  border: 1px solid black;
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
  font-size: 3em;
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
