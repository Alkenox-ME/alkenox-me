import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from 'styled-components/macro'
import { PoseGroup } from "react-pose"
import { RouteContainer } from "../../animate";
import { text, space, fx, getRule, link } from "../../lib";
import { modalButton } from "./modalLauncherStyles";
import Modal from "./Modal";

const ModalTrigger = class extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  handleToggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    const { label, children } = this.props;
    const { showModal } = this.state;
    const Trigger = styled.li`
      display: ${getRule("display", "inline")};
      text-align: ${getRule("talign", "inherit")};
      cursor: pointer;
      ${link}
      ${space}
      ${fx}
    `
    return (
      <div>
        <Trigger
          onClick={() => this.handleToggleModal()}
        >
          {label}
        </Trigger>

        {showModal && (
          <Modal onCloseRequest={() => this.handleToggleModal()}>
            <PoseGroup animateOnMount enterPose='enter' exitPose='exit' preEnterPose='exit'>
              <RouteContainer key={children}>
                {children}
              </RouteContainer>
            </PoseGroup>
          </Modal>
        )}
      </div>
    );
  }
}

ModalTrigger.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  sheet: PropTypes.object,
  classes: PropTypes.object
};

export default ModalTrigger;
