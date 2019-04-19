import React from "react";
import ReactPlayer from "react-player";
import { Flex, Box, Text, Banner, Heading } from "../components/n0x.Bass";
import {
  n0x,
  base,
  image,
  data,
  brand,
  deskH1,
  deskH2,
  deskH3,
  deskH4,
  mobileH1,
  mobileH2,
  deskT1,
  deskT2,
  mobileT1,
  mobileT2
} from "../components/n0x.vars";
import { Image, Flex as Row, Box as Col } from "rebass";
import { Layout } from "../components/n0x.elements";

const GraphicPage = () => {
  return (
    <Layout
      pgTitle="alkenox-me: Graphic Design"
      image={`${image.bg.logo}`}
      copyYear={`${data.footer.year}`}
      copyCompany={`${data.footer.company}`}
      tint={n0x.tint.white}
    >
      <Heading
        width={1}
        mx={2}
        mt={5}
        textAlign="center"
        fontSize={[mobileH1, null, deskH1, null]}
        color={[brand.color.dkblue]}
      >
        2D & 3D Graphic Design
      </Heading>

      <Heading
        width={1}
        mt={5}
        mx={2}
        textAlign="center"
        fontSize={[mobileH2, null, deskH2, null]}
        color={[brand.color.light]}
      >
        Whiteboard / Glassboard Animation Videos
      </Heading>

      <Text
        width={1}
        px={4}
        my={5}
        textAlign="left"
        fontSize={[mobileT2, mobileT1, deskT2, deskT2]}
        color={[brand.color.light]}
      >
        These types of videos are usually created to add to your website or for
        posting on social media. These are usually advertising or explainer
        videos, meant to capture your audience's attention and get them
        interested in what you have to share with them. Our talented artists
        will help you focus your story into a working script. Our directors will
        then take that script and have a storyboard put together for your
        approval before embarking on the main course of putting the animations
        together.
      </Text>

      <Box width={[1, null, 3 / 4, null]} my={3} mx="auto">
        <ReactPlayer
          url="https://github.com/alkenox/alkenox-me-videos/blob/master/whiteboard-enoch.mp4?raw=true"
          width="100%"
          height="100%"
          loop
          playing
          volume={0}
        />
      </Box>
      <Text
        width={1}
        textAlign="center"
        fontSize={[brand.font.size.heading.tags]}
      >
        Whiteboard Animation produced for Drs. Enoch and Lamei
      </Text>

      <Heading
        width={1}
        mt={5}
        textAlign="center"
        fontSize={[mobileH2, null, deskH2, null]}
        color={[brand.color.light]}
      >
        Film & Television
      </Heading>

      <Text
        width={1}
        mx={5}
        my={5}
        textAlign="left"
        fontSize={[mobileT2, mobileT1, deskT2, deskT2]}
        color={[brand.color.dkblue]}
      >
        as';ldkf';disable
      </Text>

      <Box width={[1, null, 3 / 4, null]} my={5} mx="auto">
        <ReactPlayer
          url="https://github.com/alkenox/alkenox-me-videos/blob/master/talent-seq-joker.mp4?raw=true"
          width="100%"
          height="100%"
          loop
          playing
          volume={0}
        />
      </Box>

      <Heading
        width={1}
        mt={5}
        textAlign="center"
        fontSize={[mobileH2, null, deskH2, null]}
        color={[brand.color.dkblue]}
      >
        Animated Gifs
      </Heading>

      <Text
        width={1}
        mx={5}
        my={5}
        textAlign="left"
        fontSize={[mobileT2, mobileT1, deskT2, deskT2]}
        color={[brand.color.dkblue]}
      />

      <Box mx="auto">
        <Image
          width={1}
          src="https://media.giphy.com/media/MVgLYGeuRP4JynEhNU/source.gif"
          alt="Sissy Promo Gif"
        />
      </Box>

      <Heading
        width={1}
        mt={5}
        textAlign="center"
        fontSize={[mobileH2, null, deskH2, null]}
        color={[brand.color.dkblue]}
      >
        2D & 3D Logo Design & Animated Logos
      </Heading>

      <Text
        width={1}
        mx={5}
        my={5}
        textAlign="left"
        fontSize={[mobileT2, mobileT1, deskT2, deskT2]}
        color={[brand.color.dkblue]}
      />
    </Layout>
  );
};

export default GraphicPage;
