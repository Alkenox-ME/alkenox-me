import React from "react";
// import { Bounce, Slide, Fade } from "react-reveal";
import {
  T,
  T1,
  T2,
  T3,
  T4,
  T5,
  TP,
  TP1
} from "../atoms/pureAtoms";
import {
  Slide,
  SlideItem
} from "../animate/posedSlider";
import { PoseGroup } from 'react-pose'

const CarouselSlide = (props) => {

  return (
    <Slide anim={ props.animateSlide || null }>
      <SlideItem key={ 1 } anim={ props.animateTitle || props.animateItem || null }>
        <T3
          color={ props.colorTitle || props.color || null }
          textShadow={ props.shadowTitle || props.shadow || null }
        >
          { props.title || null }
        </T3>
      </SlideItem>

      <SlideItem key={ 2 } anim={ props.animatePrice || props.animateItem || null }>
        <T4
          color={ props.colorPrice || props.color || null }
          textShadow={ props.shadowPrice || props.shadow || null }
        >
          Starting @ ${ props.price || null }
        </T4>
      </SlideItem>

      <SlideItem key={ 3 } anim={ props.animateNotes || props.animateItem || null }>
        <T4
          color={ props.colorNotes || props.color || null }
          textShadow={ props.shadowNotes || props.shadow || null }
        >
          { props.notes || null }
        </T4>
      </SlideItem>

      <SlideItem key={ 4 } anim={ props.animateDescription || props.animateItem || null }>
        <T5
          talignCenter
          color={ props.colorDescription || props.color || null }
          textShadow={ props.shadowDescription || props.shadow || null }
        >
          { props.description || null }
        </T5>
      </SlideItem>
    </Slide>
  );
};

export { CarouselSlide };
