// Core
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import loadable from "@loadable/component";

// Styling
import { Flex } from "./components/n0x.Bass";
import N0xTheme from "./styles/n0x.theme";

// Components
import { SeoGlobal, AnimatedSwitch, AnimatedRoute } from "./components/n0x.elements";

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
        <AnimatedSwitch
          animationClassName="page-slide"
          animationTimeout={300}>
          <AnimatedRoute exact path="/" component={HomePage} />
          <AnimatedRoute exact path="/about-us" component={AboutPage} />
          <AnimatedRoute exact path="/contact-us" component={ContactPage} />
          <AnimatedRoute exact path="/sound-design" component={SoundPage} />
          <AnimatedRoute exact path="/music-production" component={MxPage} />
          <AnimatedRoute exact path="/web-design" component={WebPage} />
          <AnimatedRoute exact path="/video-production" component={VxPage} />
          <AnimatedRoute exact path="/graphic-design" component={GraphicPage} />
          <AnimatedRoute exact path="/photography" component={PhotoPage} />
          <AnimatedRoute exact path="/digital-media-repair" component={RxPage} />
          <AnimatedRoute exact path="/web-packages" component={WebPkgs} />
          <Redirect to="/" />
        </AnimatedSwitch>
      </Flex>
    </N0xTheme>
  );
};

export default App;
