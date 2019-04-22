import React from "react";
import ReactPlayer from "react-player";
import { Bounce } from "react-reveal";
import styled from "styled-components";
import { Flex, Box, Text, Banner } from "../components/n0x.Bass";
import { Image, Flex as Row, Heading } from "rebass";
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
  mobileH3,
  deskT1,
  deskT2,
  mobileT1,
  mobileT2,
  deskFoot,
  mobileFoot
} from "../components/n0x.vars";
import { Layout } from "../components/n0x.elements";

const SoundPage = () => {
  return (
    <Layout
      pgTitle="alkenox-me: Sound Design"
      image={`${image.bg.logo}`}
      copyYear={`${data.footer.year}`}
      copyCompany={`${data.footer.company}`}
      tint={n0x.tint.white}
    >
      <Heading
        width={1}
        my={5}
        fontSize={[mobileH1, null, deskH1, null]}
        textAlign="center"
        color={[brand.color.dkblue]}
      >
        Sound Design
      </Heading>

      <Text
        width={[1]}
        fontSize={[mobileT2, mobileT1, deskT2, deskT2]}
        textAlign="left"
        mx={[2, null, 5, null]}
        pb={5}
        color={[brand.color.dkblue]}
      >
        Sound is what connects your audience to your product. Whether it is
        designing the dings and whistles on your app, getting the right sounds
        for your game-scape, sound is what brings your audience into your
        creation and connects them to it. Whatever your needs, we can help! Hard
        effect, soft effect, foley and soundscaping for Film, Television, and
        Games. Branded Sound Icons for a project or company. Interactive
        projects ranging from audio navigation for the blind to the aesthetics
        of your user interface are welcome.
      </Text>

      <Heading
        width={[1]}
        fontSize={[mobileH2, null, deskH2, null]}
        fontWeight="bold"
        my={4}
        textAlign="center"
        color={[brand.color.dkblue]}
      >
        Film, Television, Games, & Apps
      </Heading>

      <Text
        width={[1]}
        fontSize={[mobileT2, mobileT1, deskT2, deskT2]}
        textAlign="left"
        mx={[2, null, 5, null]}
        pb={5}
        color={[brand.color.dkblue]}
      >
        We enjoy making imerssive soundscapes that glue to each other and to the
        picture on screen.
      </Text>

      <Heading
        width={[1]}
        fontSize={[mobileH2, null, deskH2, null]}
        fontWeight="bold"
        my={4}
        textAlign="center"
        color={[brand.color.dkblue]}
      >
        Branded Sound Crafting
      </Heading>

      <Text
        width={[1]}
        fontSize={[mobileT2, mobileT1, deskT2, deskT2]}
        textAlign="left"
        mx={[2, null, 5, null]}
        pb={5}
        color={[brand.color.dkblue]}
      >
        As a brand, you want to make sure that you are not only seen but heard.
        We all know LionsGate from the roar of the lion. We even know when it is
        that particular lion being played. We know the motif of the Warner
        Brother's trumpets or the chime of a Mac computer booting up. Why should
        n0t your brand have the same capability?
      </Text>
    </Layout>
  );
};

export default SoundPage;
