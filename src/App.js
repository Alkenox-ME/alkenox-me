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
          <About path={"/about-us"} key={'about'} />
          <Contact path={"/contact-us"} key={'contact'} />
          <Sound path={"/sound-design"} key={'sound'} />
          <Mx path={"/music-production"} key={'music'} />
          <Web path={"/web-design"} key={'web'} />
          <Vx path={"/video-production"} key={'video'} />
          <Graphic path={"/graphic-design"} key={'graphic'} />
          <Photo path={"/photography"} key={'photo'} />
          <Rx path={"/digital-media-repair"} key={'repair'} />
        </PosedRouter>
        <Footer
          copyYear={data.footer.year}
          copyCompany={data.name.company.full}
        />
      </GlobalLayout>
    );
  };

export default App;
