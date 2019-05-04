import React, { PureComponent } from 'react';
import posed, { PoseGroup } from 'react-pose';

const Popup = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 300,
    transition: {
      y: { type: 'spring', stiffness: 1000, damping: 15 },
      default: { duration: 300 }
    }
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 150 }
  }
});

const Shade = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

const Modal = class extends PureComponent {
  state = { isVisible: false };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        isVisible: !this.state.isVisible
      });
    }, 2000);
  }

  render() {
    const { isVisible } = this.state;

    return (
      <PoseGroup>
        {isVisible && [
          // If animating more than one child, each needs a `key`
          <Shade key="shade" />,
          <Popup key="modal" />
        ]}
      </PoseGroup>
    );
  }
}

export { Modal }