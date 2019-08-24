// eslint-disable-next-line
// @Flow
import React from 'react';
import { Router as Pipeline, Location } from '@reach/router';
import posed, { PoseGroup } from 'react-pose';

// Global Poses
const RouteContainer = posed.div({
    enter: { opacity: 1, beforeChildren: true },
    exit: { opacity: 0, afterChildren: true },
});
const Container = posed.div({
    enter: { staggerChildren: 80, delay: 600 },
    exit: { staggerChildren: 80, staggerDirection: -1, delay: 600 },
});

const Router = ({ children }) => {
    return (
        <Location>
            {({ location }) => (
                <PoseGroup animateOnMount enterPose="enter" exitPose="exit" preEnterPose="exit">
                    <RouteContainer key={location.pathname}>
                        <Pipeline location={location}>{children}</Pipeline>
                    </RouteContainer>
                </PoseGroup>
            )}
        </Location>
    );
};
export default Router;
