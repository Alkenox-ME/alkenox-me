// Core
import React from "react";

// Styling
import {
  n0x,
  image,
  data,
  brand,
  deskH1,
  deskH4,
  mobileH1,
  mobileH2,
  deskT2,
  mobileT1,
  mobileT2
} from "../components/n0x.vars";
import { Image } from "rebass";
import { Box, Heading, Text } from "../components/n0x.Bass";

// Components
import { Layout } from "../components/n0x.elements";

const AboutPage = () => {
  return (
    <Layout
      pgTitle="alkenox-me: about us"
      image={`${image.bg.logo}`}
      copyYear={`${data.footer.year}`}
      copyCompany={`${data.footer.company}`}
      tint={n0x.tint.white}
    >
      <Heading
        textAlign="center"
        color={[brand.color.dkblue]}
        fontSize={[mobileH1, null, deskH1, null]}
      >
        About Us
      </Heading>
      <Box py={[4]} px={5} mx="auto" width={[2 / 3, null, 1 / 2, 1 / 4]}>
        <Image src={image.fg.yinYang} />
      </Box>
      <Text
        mx={4}
        py={3}
        textAlign="left"
        fontSize={[mobileT2, mobileT1, deskT2, deskT2]}
        color={[brand.color.dkblue]}
      >
        Alkenox Media & Entertainment is an independent media production
        company, officially founded in 2018, in the greater Atlanta area. At its
        core, we are a brother and sister team that, much like yin and yang,
        find our strengths to be complimentary. After working with each other on
        various projects in video production, animation, and web development
        over a five year span, Alkenox-ME was the next logical step.
      </Text>
      <Text
        py={3}
        textAlign="center"
        fontSize={[mobileH2, null, deskH4, null]}
        color={[brand.color.dkblue]}
      >
        Now, down to business...
      </Text>
      <Text
        mx={4}
        py={3}
        textAlign="left"
        fontSize={[mobileT2, mobileT1, deskT2, deskT2]}
        color={[brand.color.dkblue]}
      >
        Our work is tailored to provide our clients with custom, high-quality,
        professional digital media services. To allow for this freedom, all of
        our services are offered a-la-cart or via custom bundling, because no
        two projects are ever really the same.
      </Text>
      <Text
        mx={4}
        py={3}
        textAlign="left"
        fontSize={[mobileT2, mobileT1, deskT2, deskT2]}
        color={[brand.color.dkblue]}
      >
        Sight and Sound are the backbone of the user experience. Since one or
        both of these are always being stimulated, they are very important parts
        of sensory marketing and branding. Much like the opening sounds and
        images to a movie, you want your audience to feel the same kind of
        emotional connection with your business.
      </Text>
      <Text
        mx={4}
        py={3}
        textAlign="left"
        fontSize={[mobileT2, mobileT1, deskT2, deskT2]}
        color={[brand.color.dkblue]}
      >
        But brands are not limited to big companies and well known products.
        People, small businesses, individual artists, and more can all have
        their brand defined and shared with the world. If you want help growing
        your business by enhancing your visibility, give us a call for a free
        consultation.
      </Text>
    </Layout>
  );
};

export default AboutPage;
