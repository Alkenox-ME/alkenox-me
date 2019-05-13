import React, { PureComponent } from 'react';
import styled from 'styled-components/macro'
import { image } from '../../n0x.vars'
import { PopSlideCarousel as Carousel } from './PopSlideCarousel';

const Slide = styled.div`
min-width: 100%;
height: 50vh;
margin: 0 16px;
cursor: pointer;
`
const PopCarousel = class extends PureComponent {
  state = {
    slideIndex: 0
  };

  setSlideIndex = slideIndex => {
    this.setState({ slideIndex });
  };

  render() {
    const { slideIndex } = this.state;

    const slides = [image.bg.logo, image.bg.photo, image.bg.mx];

    return (
      <div>
        <Carousel
          slideIndex={slideIndex}
          onSlideChange={this.setSlideIndex}
          className="wrapper"
        >
          {slides.map((b, index) => (
            <Slide
              key={index}
              className="slide"
              style={{ backgroundColor: b }}
              onClick={() => this.setSlideIndex(index)}
            />
          ))}
        </Carousel>
      </div>
    );
  }
}
export { PopCarousel }
