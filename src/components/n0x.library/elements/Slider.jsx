import React, { PureComponent } from "react";
import styled from "styled-components";
import { Image } from "../components/n0x.library";
import { ChevronLeft } from "styled-icons/boxicons-regular/ChevronLeft";
import { ChevronRight } from "styled-icons/boxicons-regular/ChevronRight";
import { PrimitiveDot } from "styled-icons/octicons/PrimitiveDot";

const CarouselLeftArrow = class extends PureComponent {
  render() {
    const LeftArrow = styled.a`
      position: absolute;
      top: 50%;
      display: block;
      color: #111;
      cursor: pointer;
      opacity: 0.75;
      transform: translateY(-50%);
      transition: opacity 0.15s cubic-bezier(0.4, 0, 1, 1);
      left: 32px;
      :focus {
        outline: 0;
      }

      :hover {
        opacity: 0.5;
      }
    `;

    return (
      <LeftArrow onClick={this.props.onClick}>
        <ChevronLeft />
      </LeftArrow>
    );
  }
};

const CarouselRightArrow = class extends PureComponent {
  render() {
    const RightArrow = styled.a`
      position: absolute;
      top: 50%;
      display: block;
      color: #111;
      cursor: pointer;
      opacity: 0.75;
      transform: translateY(-50%);
      transition: opacity 0.15s cubic-bezier(0.4, 0, 1, 1);
      right: 32px;
      :focus {
        outline: 0;
      }

      :hover {
        opacity: 0.5;
      }
    `;

    return (
      <RightArrow onClick={this.props.onClick}>
        <ChevronRight />
      </RightArrow>
    );
  }
};

const CarouselIndicator = class extends PureComponent {
  render() {
    const Indicator = styled.a`
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-top: 20px;
      display: block;
      width: 24px;
      height: 3px;
      background-color: #111;
      cursor: pointer;
      opacity: .15;
      transition: opacity .15s cubic-bezier(.4, 0, 1, 1);

      :hover {
        opacity: .5;
      }

      --active {
        ,
        :hover {
          opacity: .75;
    }
  }
}
    `;

    return (
      <Indicator onClick={this.props.onClick}>
        <PrimitiveDot />
      </Indicator>
    );
  }
};

const CarouselSlide = class extends PureComponent {
  render() {
    const Slide = styled.li`
    margin-right: auto;
    margin-left: auto;
    display: none;
    max-width: 900px;
    list-style-type: none;
    text-align: center;
    @media (max-width: 991px) {
    padding-right: 60px;
    padding-left: 60px;
}

    --active {
      display: block;
  }
}
    `;

    return (
      <Slide>
        <this.props.children />
      </Slide>
    );
  }
};

export default Slider;
