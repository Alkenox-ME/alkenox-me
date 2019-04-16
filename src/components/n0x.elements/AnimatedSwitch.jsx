import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled, {keyframes} from 'styled-components'

    const PageContainer = styled.div`
      position: relative;
      width: 100vw;
      height: 100vh;
    `;

const AnimatedSwitch = ({ animationClassName, animationTimeout, children }) => (
  <Route render={({ location }) => (
    <PageContainer>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={animationTimeout}
          classNames={animationClassName}
        >
          <Switch location={location}>
            {children}
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </PageContainer>
  )} />
);

export {AnimatedSwitch};
