import React from "react";
import { Carousel, InfoSlide1, carouselContainer1, carouselSlide1, carouselSlideItem1 } from "../components/n0x.library";
import { data, image } from "../components/n0x.vars";

  const SliderVxPrice = (props) => {
  const bgTint = props => props.theme.colors.tint.black[8]
  const bgImg = image.bg.vx
  const color =  props => props.theme.colors.white
  const textShadow = '2px 2px 6px #000000'
  const carouselShadow =  '.02em  .02em  .13em   .25em   #000000, -.02em   .02em   .13em  .25em   #000000, .02em    -.02em   .13em  .25em   #000000, -.02em   -.02em  .13em   .25em   #000000'

  return (
    <Carousel
      height = {'70vh'}
      radius = {'1em'}
      bgImage = {bgImg}
      filter = {'blur(.25em)'}
      shadow = {carouselShadow}
      tint = {bgTint}
      animate = {carouselContainer1}
      color = {color}
    >
      <InfoSlide1
        key={1}
        animateSlide={carouselSlide1}
        animateItem={carouselSlideItem1}
        color={color}
        shadow={textShadow}
        title={'The Teaser'}
        price={'1,200.00'}
        notes={'(Finished Product: Up To 15 Seconds)'}
        description={'A Short and Informative Teasers or Previews for Facebook or Instagram'}
      />
      <InfoSlide1
        key={2}
        animateSlide={carouselSlide1}
        animateItem={carouselSlideItem1}
        color={color}
        shadow={textShadow}
        title={'Social Media'}
        price={'3,500.00'}
        notes={'(Finished Product: Up To 90 Seconds)'}
        description={'Entertaining or Informative Videos for all Social Media Platforms. (Note: Instagram limits to 60 seconds)'}
      />
      <InfoSlide1
        key={3}
        animateSlide={carouselSlide1}
        animateItem={carouselSlideItem1}
        color={color}
        shadow={textShadow}
        title={'Full-Length'}
        price={'5,500.00'}
        notes={'(Finished Product: Up To 2.5 Minutes)'}
        description={'For Use On A Website Where Your Visitors Are Actively Looking for Information.'}
      />
      <InfoSlide1
        key={4}
        animateSlide={carouselSlide1}
        animateItem={carouselSlideItem1}
        color={color}
        shadow={textShadow}
        title={'Proven Interest Videos'}
        price={'8,000.00'}
        notes={'(Finished Product: 2.5 to 5 Minutes)'}
        description={'Ex: Mini-Documentaries, Interviews, Presentations for a Targeted or Established Audience.'}
      />
    </Carousel>
  );
};

export { SliderVxPrice };
