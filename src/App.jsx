// Core
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import loadable from "@loadable/component";

// Styling
import { Flex } from "./components/n0x.Bass";
import styled, { keyframes } from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import N0xTheme from "./styles/n0x.theme";

// Components
import { SeoGlobal, AnimatedSwitch, AnimatedRoute } from "./components/n0x.elements";
import { PageContainer } from './components/n0x.Animate'

// Pages
import HomePage from "./pages/HomePage";

// To Do: Red Colored words are links that need to be programmed for before and after click colors. Also, change links to correct addresses when site is finally live.

const AboutPage = loadable(() => import("./pages/AboutPage"));
const ContactPage = loadable(() => import("./pages/ContactPage"));
const SoundPage = loadable(() => import("./pages/SoundPage"));
const MxPage = loadable(() => import("./pages/MxPage"));
const WebPage = loadable(() => import("./pages/WebPage"));
const VxPage = loadable(() => import("./pages/VxPage"));
const GraphicPage = loadable(() => import("./pages/GraphicPage"));
const PhotoPage = loadable(() => import("./pages/PhotoPage"));
const RxPage = loadable(() => import("./pages/RxPage"));
const WebPkgs = loadable(() => import("./pages/WebPkgs"));

// The Core App
const App = () => {
  return (
    <N0xTheme>
      <Flex flexWrap='wrap'>
        <SeoGlobal
          defTitle="Alkenox Media & Entertainment, LLC."
          siteDesc="Welcome Home"
        />
        <Route
          render={({ location }) => {
            return (
              <PageContainer>
                <TransitionGroup component={null}>
                  <CSSTransition
                    timeout={300}
                    classNames="page"
                    key={location.key}
                  >
                    <Switch location={location}>
                      <Route exact path="/" component={HomePage} />
                      <Route exact path="/about-us" component={AboutPage} />
                      <Route exact path="/contact-us" component={ContactPage} />
                      <Route exact path="/sound-design" component={SoundPage} />
                      <Route exact path="/music-production" component={MxPage} />
                      <Route exact path="/web-design" component={WebPage} />
                      <Route exact path="/video-production" component={VxPage} />
                      <Route exact path="/graphic-design" component={GraphicPage} />
                      <Route exact path="/photography" component={PhotoPage} />
                      <Route exact path="/digital-media-repair" component={RxPage} />
                      <Route exact path="/web-packages" component={WebPkgs} />
                      <Redirect to="/" />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </PageContainer>
            );
          }}
        />
      </Flex>
    </N0xTheme>
  );
};

export default App;
