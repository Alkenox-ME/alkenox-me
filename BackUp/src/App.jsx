// Core
import React from "react";
import loadable from "@loadable/component";

// Styling

// Components
// import { MainLayout } from "./components/n0x.elements";
import { n0x, data, image } from './components/n0x.vars'
import { PosedRouter, GlobalLayout, Footer, Nav } from './components/n0x.library'

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
      <GlobalLayout
        defTitle={data.name.company.full}
        siteDesc={data.meta.desc.site}
        image={image.bg.logo}
      >
        <Nav />
        <PosedRouter>
          <HomePage exact path={"/"} key={'home'} />
          <AboutPage path={"about-us"} key={'about'} />
          <ContactPage path={"contact-us"} key={'contact'} />
          <SoundPage path={"sound-design"} key={'sound'} />
          <MxPage path={"music-production"} key={'music'} />
          <WebPage path={"web-design"} key={'web'} />
          <WebPkgs path={"web-design/packages"} key={'webPkgs'} />
          <VxPage path={"video-production"} key={'video'} />
          <GraphicPage path={"graphic-design"} key={'graphic'} />
          <PhotoPage path={"photography"} key={'photo'} />
          <RxPage path={"digital-media-repair"} key={'repair'} />
        </PosedRouter>
        <Footer
          copyYear={data.footer.year}
          copyCompany={data.name.company.full}
        />
      </GlobalLayout>
    );
  };

export default App;
