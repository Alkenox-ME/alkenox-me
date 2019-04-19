// Core
import React from 'react';

// Styling
import { n0x, image, data } from '../components/n0x.vars'
import { Card } from '../components/n0x.Bass';
import { Container, Sound, Mx, Photo, Vx, Gx, Web, Rx } from '../components/n0x.Animate'

// Components
import { Layout, LabelBlock } from '../components/n0x.elements';

// Variables
const tint = n0x.tint.black[ 0 ];
const height = '29vh';
const bradius = 60;
const bshadow = `.75em .75em 1em ${n0x.tint.black[0]}`;
const fontSz = [ 5, 6, 6, 6 ];

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
            <LabelBlock
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
            <LabelBlock
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
            <LabelBlock
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
            <LabelBlock
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
            <LabelBlock
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
            <LabelBlock
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
            <LabelBlock
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
