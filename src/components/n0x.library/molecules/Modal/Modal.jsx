import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import isNil from "lodash/fp/isNil";
import styled from 'styled-components/macro'
import { PoseGroup } from 'react-pose';
import {modalOverlay, modalStyle, closeButton } from "./modalStyles";
import { RouteContainer, Container } from '../../animate'

const Modal = class extends PureComponent {
  constructor(props) {
    super(props);

    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keyup", this.handleKeyUp, false);
    document.addEventListener("click", this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.handleKeyUp, false);
    document.removeEventListener("click", this.handleOutsideClick, false);
  }

  handleKeyUp(e) {
    const { onCloseRequest } = this.props;
    const keys = {
      27: () => {
        e.preventDefault();
        onCloseRequest();
        window.removeEventListener("keyup", this.handleKeyUp, false);
      }
    };

    if (keys[e.keyCode]) {
      keys[e.keyCode]();
    }
  }

  handleOutsideClick(e) {
    const { onCloseRequest } = this.props;

    if (!isNil(this.modal)) {
      if (!this.modal.contains(e.target)) {
        onCloseRequest();
        document.removeEventListener("click", this.handleOutsideClick, false);
      }
    }
  }

  render() {
    const { onCloseRequest, children } = this.props;

    const Overlay = styled.div`
      ${modalOverlay}
    `

    const Body = styled.div`
      ${modalStyle}
    `

    const CloseBtn = styled.button`
      ${closeButton}
    `

    return (
      <Overlay onClick={onCloseRequest}>
        <Body ref={node => (this.modal = node)}>
          <PoseGroup animateOnMount enterPose='enter' exitPose='exit' preEnterPose='exit'>
            <Container key={children.key}>
              {children}
            </Container>
          </PoseGroup>
        </Body>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  onCloseRequest: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  sheet: PropTypes.object,
  classes: PropTypes.object
};

export default Modal;
