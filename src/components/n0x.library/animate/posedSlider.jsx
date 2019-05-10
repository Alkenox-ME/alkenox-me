
import React, { PureComponent } from 'react';
import { Slide } from './posedSlide';
import Swipe from 'react-easy-swipe';

export const Slider = class extends PureComponent {
  constructor() {
    super();
    this.state = {
      slides: [
        {
          image: 'https://source.unsplash.com/random/800x800',
          position: 1,
        },
        {
          image: 'https://source.unsplash.com/random/700x700',
          position: 2,
        },
        {
          image: 'https://source.unsplash.com/random/600x600',
          position: 3,
        },
      ]
    }
  }

  nextCard = () => {
    let workingSlides = this.state.slides;
    workingSlides.forEach( slide => {
      slide.position = slide.position === 1 ? 3 : --slide.position;
      }
    )
    this.setState({slides: workingSlides})
  }

  prevCard = () => {
    let workingSlides = this.state.slides;
    workingSlides.forEach( slide => {
      slide.position = slide.position === 3 ? 1 : ++slide.position;
      }
    )
    this.setState({slides: workingSlides})
  }

  render() {

    const styles= {
      layout: {
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '1000px'
      },
      slide: {
        width: '50%',
        position: 'absolute',
      },
      arrow: {
        fontSize: '24px',
      }
    }

    return (
      <Swipe
        style={styles.layout} id={'slider'}
        onSwipeRight={this.nextSlide}
        onSwipeLeft={this.prevSlide}
      >
        <div
          style={styles.arrow}
          onClick={this.prevSlide}
        >
          prev
        </div>
        { this.state.slides.map( (slide, index) =>
          <Slide
            key={index}
            style={styles.slide}
            image={slide.image}
            position={slide.position}
          />)
        }
        <div
          style={styles.arrow}
          onClick={this.nextSlide}
        >
          next
        </div>
      </Swipe>
    )
  }
}
