// Core
import React, { useState } from 'react';

// Styling
import { n0x, image, data } from '../components/n0x.vars'
import { Flex, Card } from '../components/n0x.Bass';
import { withReveal, Fade, Zoom } from 'react-reveal';
import styled, {keyframes} from 'styled-components'
import { TransitionGroup, Transition, CSSTransition } from "react-transition-group";

// Components
import { LabelBlock } from '../components/n0x.elements';
import Layout from '../components/Layout';
import { Page, slideInRight, slideOutRight, slideInLeft, slideOutLeft, fadeInLeft, fadeInRight, fadeOutLeft, fadeOutRight, fadeIn, fadeOut } from '../components/n0x.Animate'
import { AniLabel } from '../components/AniLabel'

  const AniPage = styled(Page)`
    &.page-enter {
      animation: ${slideInLeft} 0.2s forwards;
    }
    &.page-exit {
      animation: ${slideOutLeft} 0.2s forwards;
    }
  `;

  // Variables
  const tint = n0x.tint.black[ 0 ];
  const height = '29vh';
  const bradius = 60;
  const bshadow = `.75em .75em 1em ${n0x.tint.black[0]}`;
  const fontSz = [ 5, 6, 6, 6 ];

  const delay1 = 300;
  const delay2 = 600;
  const delay3 = 900;
  const delay4 = 1900;
  const delay5 = 1000;
  const delay6 = 1300;
  const delay7 = 1600;
  const duration1 = 1000;

// Actual Page
const HomePage = () => {

 return(
   <AniPage>
     <Layout
       pgTitle='alkenox-me: home'
       image={`${image.bg.logo}`}
       copyYear={`${data.footer.year}`}
       copyCompany={`${data.footer.company}`}
       tint={n0x.tint.black[0]}
     >
       <AniLabel
         left
         duration={duration1}
         delay={delay1}
         opacity={0.7}
         px={2}
         py={2}
         width={[1, null, null, 1 / 2]}
         label="Sound Design"
         bgimg={image.bg.sound}
         link="/sound-design"
         tint={tint}
         height={height}
         bradius={bradius}
         bshadow={bshadow}
         fontSz={fontSz}
       />

       <AniLabel
         right
         duration={duration1}
         delay={delay2}
         opacity={0.7}
         px={2}
         py={2}
         width={[1, null, null, 1 / 2]}
         label="Music Production"
         bgimg={image.bg.mx}
         link="/music-production"
         tint={tint}
         height={height}
         bradius={bradius}
         bshadow={bshadow}
         fontSz={fontSz}
       />

       <AniLabel
         left
         duration={duration1}
         delay={delay3}
         opacity={0.7}
         px={2}
         py={2}
         width={[1, null, null, 1 / 4]}
         label="Photography"
         bgimg={image.bg.photo}
         link="/photography"
         tint={tint}
         height={height}
         bradius={bradius}
         bshadow={bshadow}
         fontSz={fontSz}
       />

       <AniLabel
         duration={duration1}
         delay={delay4}
         opacity={0.7}
         px={2}
         py={2}
         width={[1, null, null, 1 / 2]}
         label="Video Production"
         bgimg={image.bg.vx}
         link="/video-production"
         tint={tint}
         height={height}
         bradius={bradius}
         bshadow={bshadow}
         fontSz={fontSz}
       />

       <AniLabel
         right
         duration={duration1}
         delay={delay5}
         opacity={0.7}
         px={2}
         py={2}
         width={[1, null, null, 1 / 4]}
         label="Graphic Design"
         bgimg={image.bg.graphic}
         link="/graphic-design"
         tint={tint}
         height={height}
         bradius={bradius}
         bshadow={bshadow}
         fontSz={fontSz}
       />

       <AniLabel
         left
         duration={duration1}
         delay={delay6}
         opacity={0.7}
         px={2}
         py={2}
         width={[1, null, null, 1 / 2]}
         label="Full Stack Web Development"
         bgimg={image.bg.web}
         link="/web-design"
         tint={tint}
         height={height}
         bradius={bradius}
         bshadow={bshadow}
         fontSz={fontSz}
       />

       <AniLabel
         right
         duration={duration1}
         delay={delay7}
         opacity={0.7}
         px={2}
         py={2}
         width={[1, null, null, 1 / 2]}
         label="Digital Media Rx"
         bgimg={image.bg.rx}
         link="/digital-media-repair"
         tint={tint}
         height={height}
         bradius={bradius}
         bshadow={bshadow}
         fontSz={fontSz}
       />
     </Layout>
   </AniPage>
 )
}

export default HomePage;
