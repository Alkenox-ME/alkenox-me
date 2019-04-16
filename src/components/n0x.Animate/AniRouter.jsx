import React, { PureComponent } from 'react'
import { Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const AniRouter = class extends PureComponent {
  render(){

    const { durationMs, classNames, children } = this.props

    return(
        <Route
          render={({ location }) => {
            return (
              <PageContainer>
                <TransitionGroup component={null}>
                  <CSSTransition
                    timeout={durationMs}
                    classNames={classNames}
                    key={location.key}
                  >
                    { children }
                  </CSSTransition>
                </TransitionGroup>
              </PageContainer>
            );
          }}
        />
    )
  }
}

export { AniRouter }
