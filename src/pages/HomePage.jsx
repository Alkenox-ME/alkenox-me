// Core
import React, { PureComponent } from 'react';

// Styling
import { n0x, image, data } from '../components/n0x.vars'
import { Card } from '../components/n0x.Bass';
import posed from 'react-pose'

// Components
import { Layout } from '../components/n0x.elements';
import { AniLabel } from '../components/AniLabel'

// Variables
const tint = n0x.tint.black[ 0 ];
const height = '29vh';
const bradius = 60;
const bshadow = `.75em .75em 1em ${n0x.tint.black[0]}`;
const fontSz = [ 5, 6, 6, 6 ];

const Container = posed.div( {
  enter: { staggerChildren: 80 },
  exit: { staggerChildren: 80, staggerDirection: -1 }
} );
const Sound = posed.div( {
  enter: { x: 0, opacity: 1 },
  exit: { x: -1000, opacity: 0 }
} );
const Mx = posed.div( {
  enter: { x: 0, opacity: 1 },
  exit: { x: 1000, opacity: 0 }
} );
const Photo = posed.div( {
  enter: { x: 0, opacity: 1 },
  exit: { x: -1000, opacity: 0 }
} );
const Vx = posed.div( {
  enter: { x: 0, opacity: 1 },
  exit: { x: 0, opacity: 0 }
} );
const Gx = posed.div( {
  enter: { x: 0, opacity: 1 },
  exit: { x: 1000, opacity: 0 }
} );
const Web = posed.div( {
  enter: { x: 0, opacity: 1 },
  exit: { x: -1000, opacity: 0 }
} );
const Rx = posed.div( {
  enter: { x: 0, opacity: 1 },
  exit: { x: 1000, opacity: 0 }
} );
// Actual Page
const HomePage = () => {
  return (
    <Container>
     <Layout
       pgTitle={`Home: ${data.name.company.trendy}`}
       pgDesc={null}
     >
       <Card
         opacity={0.7}
         px={2}
         py={2}
         width={[1, null, null, 1 / 2]}
       >
         <Sound>
           <AniLabel
             label="Sound Design"
             bgimg={image.bg.sound}
             link="/sound-design"
             tint={tint}
             height={height}
             bradius={bradius}
             bshadow={bshadow}
             fontSz={fontSz}
           />
         </Sound>
       </Card>

       <Card
         opacity={0.7}
         px={2}
         py={2}
         width={[1, null, null, 1 / 2]}
       >
         <Mx>
           <AniLabel
             enter={{ x: 0, opacity: 1 }}
             leave={{ x: 1000, opacity: 0 }}
             label="Music Production"
             bgimg={image.bg.mx}
             link="/music-production"
             tint={tint}
             height={height}
             bradius={bradius}
             bshadow={bshadow}
             fontSz={fontSz}
           />
         </Mx>
       </Card>

       <Card
         opacity={0.7}
         px={2}
         py={2}
         width={[1, null, null, 1 / 4]}
       >
         <Photo>
           <AniLabel
             enter={{ x: 0, opacity: 1 }}
             leave={{ x: -1000, opacity: 0 }}
             label="Photography"
             bgimg={image.bg.photo}
             link="/photography"
             tint={tint}
             height={height}
             bradius={bradius}
             bshadow={bshadow}
             fontSz={fontSz}
           />
         </Photo>
       </Card>

       <Card
         opacity={0.7}
         px={2}
         py={2}
         width={[1, null, null, 1 / 2]}
       >
         <Vx>
           <AniLabel
             enter={{ x: 0, opacity: 1 }}
             leave={{ x: 0, opacity: 0 }}
             label="Video Production"
             bgimg={image.bg.vx}
             link="/video-production"
             tint={tint}
             height={height}
             bradius={bradius}
             bshadow={bshadow}
             fontSz={fontSz}
           />
         </Vx>
       </Card>

       <Card
         opacity={0.7}
         px={2}
         py={2}
         width={[1, null, null, 1 / 4]}
       >
         <Gx>
           <AniLabel
             enter={{ x: 0, opacity: 1 }}
             leave={{ x: 1000, opacity: 0 }}
             label="Graphic Design"
             bgimg={image.bg.graphic}
             link="/graphic-design"
             tint={tint}
             height={height}
             bradius={bradius}
             bshadow={bshadow}
             fontSz={fontSz}
           />
         </Gx>
       </Card>

       <Card
         opacity={0.7}
         px={2}
         py={2}
         width={[1, null, null, 1 / 2]}
       >
         <Web>
           <AniLabel
             enter={{ x: 0, opacity: 1 }}
             leave={{ x: -1000, opacity: 0 }}
             label="Full Stack Web Development"
             bgimg={image.bg.web}
             link="/web-design"
             tint={tint}
             height={height}
             bradius={bradius}
             bshadow={bshadow}
             fontSz={fontSz}
           />
         </Web>
       </Card>

       <Card
         opacity={0.7}
         px={2}
         py={2}
         width={[1, null, null, 1 / 2]}
       >
         <Rx>
           <AniLabel
             enter={{ x: 0, opacity: 1 }}
             leave={{ x: 1000, opacity: 0 }}
             label="Digital Media Rx"
             bgimg={image.bg.rx}
             link="/digital-media-repair"
             tint={tint}
             height={height}
             bradius={bradius}
             bshadow={bshadow}
             fontSz={fontSz}
           />
         </Rx>
       </Card>
     </Layout>
   </Container>
  )
}

export default HomePage;
