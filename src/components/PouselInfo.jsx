import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
// import { Bounce, Slide, Fade } from "react-reveal";
import {PoseGroup} from 'react-pose'
import styled, { css } from 'styled-components/macro'
import { CarouselSlide, BgBox, Slider, Box, carouselContainer1, carouselSlide1, carouselSlideItem1 } from "../components/n0x.library";
import { data, image } from "../components/n0x.vars";
import '../static/aniSlider/horizontal.css'

const PouselInfo = (props) => {
  const height = '70vh'
  const bgTint = props => props.theme.colors.tint.black[8]
  const bgImg = image.bg.vx
  const radius = '1em'
  const textShadow = '2px 2px 6px #000000'
  const carouselShadow =  '.02em  .02em  .13em   .25em   #000000, -.02em   .02em   .13em  .25em   #000000, .02em    -.02em   .13em  .25em   #000000, -.02em   -.02em  .13em   .25em   #000000'

  return (
    <Box position={'relative'} mx={"2%"} height={height}  bRadius={'1em'}>

      <BgBox
        height={'100%'}
        bgImage={bgImg}
        filter={'blur(.25em)'}
        bRadius={radius}
        boxShadow={ carouselShadow }
      >

        <BgBox
          width={'100%'}
          height={'100%'}
          bgColor={bgTint}
          bRadius={radius}
        />

      </BgBox>

      <Slider anim={carouselContainer1}>
        <CarouselSlide
          key={1}
          animateSlide={carouselSlide1}
          animateItem={carouselSlideItem1}
          color={props => props.theme.colors.white}
          shadow={textShadow}
          title={'The Teaser'}
          price={'1,200.00'}
          notes={'(Finished Product: Up To 15 Seconds)'}
          description={'A Short and Informative Teasers or Previews for Facebook or Instagram'}
        />
        <CarouselSlide
          key={2}
          animateSlide={carouselSlide1}
          animateItem={carouselSlideItem1}
          color={props => props.theme.colors.white}
          shadow={textShadow}
          title={'Social Media'}
          price={'3,500.00'}
          notes={'(Finished Product: Up To 90 Seconds)'}
          description={'Entertaining or Informative Videos for all Social Media Platforms. (Note: Instagram limits to 60 seconds)'}
        />
        <CarouselSlide
          key={3}
          animateSlide={carouselSlide1}
          animateItem={carouselSlideItem1}
          color={props => props.theme.colors.white}
          shadow={textShadow}
          title={'Full-Length'}
          price={'5,500.00'}
          notes={'(Finished Product: Up To 2.5 Minutes)'}
          description={'For Use On A Website Where Your Visitors Are Actively Looking for Information.'}
        />
        <CarouselSlide
          key={4}
          animateSlide={carouselSlide1}
          animateItem={carouselSlideItem1}
          color={props => props.theme.colors.white}
          shadow={textShadow}
          title={'Proven Interest Videos'}
          price={'8,000.00'}
          notes={'(Finished Product: 2.5 to 5 Minutes)'}
          description={'Ex: Mini-Documentaries, Interviews, Presentations for a Targeted or Established Audience.'}
        />
      </Slider>

    </Box>
  );
};

export { PouselInfo };
