// Core
import React from "react";
import loadable from "@loadable/component";

// Styling

// Components
import { n0x, data, image } from './components/n0x.vars'
import { PosedRouter, GlobalLayout, Footer, Nav } from './components/n0x.library'

// Pages
import Home from "./containers/Home";

// To Do: Red Colored words are links that need to be programmed for before and after click colors. Also, change links to correct addresses when site is finally live.

const Services = loadable(() => import("./containers/Services"));
const About = loadable(() => import("./containers/About"));
const Contact = loadable(() => import("./containers/Contact"));
const Sound = loadable(() => import("./containers/Sound"));
const Mx = loadable(() => import("./containers/Mx"));
const Web = loadable(() => import("./containers/Web"));
const Vx = loadable(() => import("./containers/Vx"));
const Graphic = loadable(() => import("./containers/Graphic"));
const Photo = loadable(() => import("./containers/Photo"));
const Rx = loadable(() => import("./containers/Rx"));

// The Core App
const App = () => {
    return (
      <GlobalLayout
        defTitle={data.name.company.full}
        siteDesc={data.meta.desc.site}
        image={image.bg.logo}
      >
        <Nav />
        <PosedRouter>
          <Home exact path={"/"} key={'home'} />
          <Services path={"services"} key={'services'} />
          <Sound path={"services/sound-design"} key={'sound'} />
          <Mx path={"services/music-production"} key={'music'} />
          <Web path={"services/web-design"} key={'web'} />
          <Vx path={"services/video-production"} key={'video'} />
          <Graphic path={"services/graphic-design"} key={'graphic'} />
          <Photo path={"services/photography"} key={'photo'} />
          <Rx path={"services/digital-media-repair"} key={'repair'} />
          <About path={"about-us"} key={'about'} />
          <Contact path={"contact-us"} key={'contact'} />

        </PosedRouter>
        <Footer
          copyYear={data.footer.year}
          copyCompany={data.name.company.full}
        />
      </GlobalLayout>
    );
  };

export default App;
