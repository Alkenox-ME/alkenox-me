import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
// import { Bounce, Slide, Fade } from "react-reveal";
import {PoseGroup} from 'react-pose'
import styled, { css } from 'styled-components/macro'
import { CaretLeft, CaretRight, Pause, Play } from 'styled-icons/boxicons-regular'
import {
  BgBox,
  Box,
  BoxIt,
  List,
  ListItem,
  BGimg,
  Image,
  T,
  T1,
  T2,
  T3,
  T4,
  T5,
  TP,
  TP1
} from "../atoms/pureAtoms";
import { Slider } from '../animate/posedSlider'
import { data, image } from "../../n0x.vars";

const CarouselInfo = (props) => {

  return (
      <Box position={'relative'} mx={"2%"} height={'70vh'}  bRadius={'1em'}>

        <BgBox
          height={'100%'}
          bgImage={image.bg.vx}
          filter={'blur(.25em)'}
          bRadius={'1em'}
          boxShadow="
          .02em  .02em  .13em   .25em   #444d56,
          -.02em   .02em   .13em  .25em   #444d56,
          .02em    -.02em   .13em  .25em   #444d56,
          -.02em   -.02em  .13em   .25em   #444d56"
        >

          <BgBox
            width={'100%'}
            height={'100%'}
            bgColor={props => props.theme.colors.tint.black[8]}
            bRadius={'1em'}
          />

        </BgBox>

        <Slider>
          {props.children}
        </Slider>

      </Box>
  );
};

export { CarouselInfo };
