import React, { PureComponent } from 'react';
import styled from 'styled-components/macro'
import { image } from '../../n0x.vars'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SlickCarousel = ({children, ...settings}) => {
    return (
        <Slider {...settings}>
          {children}
        </Slider>
    );
  }
