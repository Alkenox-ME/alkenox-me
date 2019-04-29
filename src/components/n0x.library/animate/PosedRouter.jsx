import React from 'react';
import { Router, Location } from '@reach/router';
import { RouteContainer } from './posedElements'
import { PoseGroup } from 'react-pose';

const PosedRouter = ({ enter, exit, children }) => {

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
