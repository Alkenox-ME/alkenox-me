// Core
import React from 'react';

// Styling
import { n0x, base, image, data } from '../components/n0x.vars'
import { Image } from 'rebass';
import { Box, Heading, Text } from '../components/n0x.Bass';
import styled, {keyframes} from 'styled-components'
import posed from 'react-pose'

// Components
import { Layout } from '../components/n0x.elements';
import { Page, slideInRight, slideOutRight, slideInLeft, slideOutLeft } from '../components/n0x.Animate'

const AboutPage = () => {

      const Container = posed.div({
        enter: { staggerChildren: 80 },
        exit: { staggerChildren: 80, staggerDirection: -1 }
      });

  return (
    <Container>
      <Layout
        pgTitle='alkenox-me: about us'
        tint={n0x.tint.white}
        enter={{ staggerChildren: 80 }}
        leave={{ staggerChildren: 80, staggerDirection: -1 }}
      >
        <Heading textAlign="center" color="inherit" fontSize={[base.font.size.t3]}>
          About Us
        </Heading>
        <Box py={[4]} mx='auto' width={[1/3]}>
          <Image src={image.fg.yinYang} />
        </Box>
        <Text textAlign="center" fontSize={[base.font.size.t6]}>
          Alkenox Media & Entertainment is an independent media production company, officially
          founded in 2018, in the greater Atlanta area. At its core, we are a brother and sister
          team that, much like yin and yang, find our strengths to be complimentary. After working
          with each other on various projects in video production, animation, and web development
          over a five year span, Alkenox-ME was the next logical step.
        </Text>
        <Text textAlign="center" fontSize={[base.font.size.t4]}>
          Now, down to business...
        </Text>
        <Text textAlign="center" fontSize={[2, 3, 3, 4]}>
          Our work is tailored to provide our clients with custom, high-quality, professional
          digital media services. To allow for this freedom, all of our services are offered
          a-la-cart or via custom bundling, because no two projects are ever really the same.
        </Text>
        <Text textAlign="center" fontSize={[2, 3, 3, 4]}>
          Sight and Sound are the backbone of the user experience. Since one or both of these are
          always being stimulated, they are very important parts of sensory marketing and
          branding. Much like the opening sounds and images to a movie, you want your audience to
          feel the same kind of emotional connection with your business.
        </Text>
        <Text textAlign="center" fontSize={[2, 3, 3, 4]}>
          But brands are not limited to big companies and well known products. People, small
          businesses, individual artists, and more can all have their brand defined and shared
          with the world. If you want help growing your business by enhancing your visibility,
          give us a call for a free consultation.
        </Text>
      </Layout>
    </Container>
  );
};

export default AboutPage;
