import React from 'react';
import { Router, Location } from '@reach/router';
import { PoseGroup } from 'react-pose';
import { RouteContainer } from './routeAnimations'

const PosedRouter = ({ children }) => {

  return (
  <Location>
    {({ location }) => (
      <PoseGroup animateOnMount enterPose='enter' exitPose='exit' preEnterPose='exit'>
        <RouteContainer key={location.pathname}>
          <Router location={location}>{children}</Router>
        </RouteContainer>
      </PoseGroup>
    )}
  </Location>
);
}
export { PosedRouter }
