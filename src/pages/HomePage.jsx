// Core
import React from 'react';

// Styling
import { n0x, image, data } from '../components/n0x.vars'
import { Flex, Card } from '../components/n0x.Bass';
import { Fade } from 'react-reveal';
import styled, {keyframes} from 'styled-components'

// Components
import { LabelBlock } from '../components/n0x.elements';
import Layout from '../components/Layout';

// Variables
const tint = n0x.tint.black[ 0 ];
const width = '100%';
const height = '29vh';
const bradius = 60;
const bshadow = `1em 1em 1em ${n0x.tint.black[0]}`;
const fontSz = [ 5, 6, 6, 6 ];

const delay1 = 500;
const delay2 = 800;
const delay3 = 1200;
const delay4 = 3000;
const delay5 = 1600;
const delay6 = 1900;
const delay7 = 2200;
const duration1 = 3000;

// Actual Page
const HomePage = () => {
 return(
     <Layout
       pgTitle='alkenox-me: home'
       image={`${image.bg.logo}`}
       copyYear={`${data.footer.year}`}
       copyCompany={`${data.footer.company}`}
       tint={n0x.tint.black[0]}
     >
       <Flex px={[4]} py={[3]}>
         <Card opacity={0.7} px={2} py={2} width={[1, 1, 1, 1 / 2]}>
           <Fade left appear enter={true} exit={true} duration={duration1} delay={delay1}>
             <LabelBlock
               label="Sound Design"
               bgimg={image.bg.sound}
               link="/sound-design"
               tint={tint}
               width={width}
               height={height}
               bradius={bradius}
               bshadow={bshadow}
               fontSz={fontSz}
             />
           </Fade>
         </Card>

         <Card opacity={0.7} px={2} py={2} width={[1, 1, 1, 1 / 2]}>
           <Fade right appear enter={true} exit={true} duration={duration1} delay={delay2}>
             <LabelBlock
               label="Music Production"
               bgimg={image.bg.mx}
               link="/music-production"
               tint={tint}
               width={width}
               height={height}
               bradius={bradius}
               bshadow={bshadow}
               fontSz={fontSz}
             />
           </Fade>
         </Card>

         <Card opacity={0.7} px={2} py={2} width={[1, 1, 1, 1 / 4]}>
           <Fade left appear enter={true} exit={true} duration={duration1} delay={delay3}>
             <LabelBlock
               label="Photography"
               bgimg={image.bg.photo}
               link="/photography"
               tint={tint}
               width={width}
               height={height}
               bradius={bradius}
               bshadow={bshadow}
               fontSz={fontSz}
             />
           </Fade>
         </Card>

         <Card opacity={0.7} px={2} py={2} width={[1, 1, 1, 2 / 4]}>
           <Fade appear enter={true} exit={true} duration={duration1} delay={delay4}>
             <LabelBlock
               label="Video Production"
               bgimg={image.bg.vx}
               link="/video-production"
               tint={tint}
               width={width}
               height={height}
               bradius={bradius}
               bshadow={bshadow}
               fontSz={fontSz}
             />
           </Fade>
         </Card>

         <Card opacity={0.7} px={2} py={2} width={[1, 1, 1, 1 / 4]}>
           <Fade right appear enter={true} exit={true} duration={duration1} delay={delay5}>
             <LabelBlock
               label="Graphic Design"
               bgimg={image.bg.graphic}
               link="/graphic-design"
               tint={tint}
               width={width}
               height={height}
               bradius={bradius}
               bshadow={bshadow}
               fontSz={fontSz}
             />
           </Fade>
         </Card>

         <Card opacity={0.7} px={2} py={2} width={[1, 1, 1, 1 / 2]}>
           <Fade left appear enter={true} exit={true} duration={duration1} delay={delay6}>
             <LabelBlock
               label="Full Stack Web Development"
               bgimg={image.bg.web}
               link="/web-design"
               tint={tint}
               width={width}
               height={height}
               bradius={bradius}
               bshadow={bshadow}
               fontSz={fontSz}
             />
           </Fade>
         </Card>

         <Card opacity={0.7} px={2} py={2} width={[1, 1, 1, 1 / 2]}>
           <Fade right appear enter={true} exit={true} duration={duration1} delay={delay7}>
             <LabelBlock
               label="Digital Media Rx"
               bgimg={image.bg.rx}
               link="/digital-media-repair"
               tint={tint}
               width={width}
               height={height}
               bradius={bradius}
               bshadow={bshadow}
               fontSz={fontSz}
             />
           </Fade>
         </Card>
       </Flex>
     </Layout>
);
}
export default HomePage;
