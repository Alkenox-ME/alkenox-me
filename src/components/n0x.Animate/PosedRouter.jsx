import React from 'react';
import { Router, Location } from '@reach/router';
import posed, { PoseGroup } from 'react-pose';

const PosedRouter = ({ enter, exit, children }) => {
  const RouteContainer = posed.div({
    enter:{opacity: 1, delay: 1000, beforeChildren: true},
    exit:{opacity: 0, delay: 1000, afterChildren: true}
  });
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
