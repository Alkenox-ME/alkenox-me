import React, { PureComponent } from 'react';
import Card from './posedCarouselCard';
import Swipe from 'react-easy-swipe';

class CardCarousel extends PureComponent {
  constructor() {
    super();
    this.state = {
      cards: [
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
    let workingCards = this.state.cards;
    workingCards.forEach( card => {
      card.position = card.position === 1 ? 3 : --card.position;
      }
    )
    this.setState({cards: workingCards})
  }

  prevCard = () => {
    let workingCards = this.state.cards;
    workingCards.forEach( card => {
      card.position = card.position === 3 ? 1 : ++card.position;
      }
    )
    this.setState({cards: workingCards})
  }

  render() {

    const styles= {
      layout: {
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '1000px'
      },
      card: {
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
        onSwipeRight={this.nextCard}
        onSwipeLeft={this.prevCard}
      >
        <div
          style={styles.arrow}
          onClick={this.prevCard}
        >
          prev
        </div>
        { this.state.cards.map( (card, index) =>
          <Card
            key={index}
            style={styles.card}
            image={card.image}
            position={card.position}
          />)
        }
        <div
            style={styles.arrow}
            onClick={this.nextCard}
        >
          next
        </div>
      </Swipe>
    )
  }
}

export { CardCarousel }
