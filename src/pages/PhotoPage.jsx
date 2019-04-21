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

const PhotoPage = () => {
  return (
    <Layout
      pgTitle="alkenox-me: Video"
      image={`${image.bg.logo}`}
      copyYear={`${data.footer.year}`}
      copyCompany={`${data.footer.company}`}
      tint={n0x.tint.white}
    >
      <Heading
        width={1}
        mt={5}
        fontSize={[mobileH1, null, deskH1, null]}
        textAlign="center"
        color={[brand.color.dkblue]}
      >
        Photography
      </Heading>
    </Layout>
  );
};

export default PhotoPage;
