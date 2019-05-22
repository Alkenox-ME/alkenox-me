import React from "react";
import { BgBox, Box } from "../../atoms";
import { Slider } from "./carouselBase";

const Carousel = props => {
  return (
    <Box
      position={"relative"}
      mx={"2%"}
      height={props.height}
      bRadius={props.radius}
    >
      <BgBox
        height={"100%"}
        bgImage={props.bgImage}
        filter={props.filter}
        bRadius={props.radius}
        boxShadow={props.shadow}
      >
        <BgBox
          width={"100%"}
          height={"100%"}
          bgColor={props.tint}
          bRadius={props.radius}
        />
      </BgBox>

      <Slider
        anim={props.animate}
        uiShadow={props.shadow}
        uiColor={props.color}
      >
        {props.children}
      </Slider>
    </Box>
  );
};

export default Carousel ;
