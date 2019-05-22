import React from "react";
import { TH3, TH4, TH5 } from "../../atoms";
import { Slide, SlideItem } from "./carouselBase";

const InfoSlide1 = ( props ) => {

  return (
    <Slide anim={ props.animateSlide || null }>
      <SlideItem key={ 1 } anim={ props.animateTitle || props.animateItem || null }>
        <TH3
          color={ props.colorTitle || props.color || null }
          textShadow={ props.shadowTitle || props.shadow || null }
          { ...props.title }
        >
          { props.title || null }
        </TH3>
      </SlideItem>

      <SlideItem key={ 2 } anim={ props.animatePrice || props.animateItem || null }>
        <TH3
          color={ props.colorPrice || props.color || null }
          textShadow={ props.shadowPrice || props.shadow || null }
          { ...props.price }
        >
          Starting @ ${ props.price || null }
        </TH3>
      </SlideItem>

      <SlideItem key={ 3 } anim={ props.animateNotes || props.animateItem || null }>
        <TH4
          color={ props.colorNotes || props.color || null }
          textShadow={ props.shadowNotes || props.shadow || null }
          { ...props.notes }
        >
          { props.notes || null }
        </TH4>
      </SlideItem>

      <SlideItem key={ 4 } anim={ props.animateDescription || props.animateItem || null }>
        <TH5
          talignCenter
          color={ props.colorDescription || props.color || null }
          textShadow={ props.shadowDescription || props.shadow || null }
          { ...props.description }
        >
          { props.description || null }
        </TH5>
      </SlideItem>
    </Slide>
  );
};

export default InfoSlide1 ;
