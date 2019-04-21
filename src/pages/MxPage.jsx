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

const MxPage = () => {
  return (
    <Layout
      pgTitle="alkenox-me: Music"
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
        Music for Picture
      </Heading>
      <Text
        fontSize={[mobileT2, mobileT1, deskT2, deskT2]}
        textAlign="left"
        mx={[2, null, 5, null]}
        pb={5}
        color={[brand.color.dkblue]}
      >
        We specialize in creating music for picture. Instead of taking a
        pre-made piece and editing it down to what will be used while making
        sure you have a biggining, middle and end with clean edits, a custom
        written piece can make for a better fit. Not only is it written to the
        time but it is an exclusive piece of music written to the emotion of
        your visual presentation or scene yielding a more unique immersed
        experience.
      </Text>
      <Heading
        width={[1]}
        fontSize={[mobileH2, null, deskH2, null]}
        fontWeight="bold"
        my={4}
        textAlign="center"
        color={[brand.color.dkblue]}
      >
        Film & Television Scoring
      </Heading>
      <Text
        width={[1]}
        fontSize={[mobileT2, mobileT1, deskT2, deskT2]}
        textAlign="left"
        mx={[2, null, 5, null]}
        color={[brand.color.dkblue]}
      >
        Our composers are skilled in creating a cinematic score for any genre.
        From traditional large action packed orchestra to subtle drone music to
        fill the background without impeding on the soundscape or dialog.
      </Text>

      <Box
        width={[1 / 2, null, 1 / 5, null]}
        fontSize={[brand.font.size.text.list]}
        mx={3}
        py={3}
        color={[brand.color.dkblue]}
      >
        <ul>
          <li>Free Consultation</li>
          <li>Spotting Session</li>
          <li>The SPRINT</li>
          <li>Delivery</li>
        </ul>
      </Box>

      <Heading
        width={1}
        fontSize={[mobileH2, null, deskH2, null]}
        fontWeight="bold"
        my={4}
        textAlign="center"
        color={[brand.color.dkblue]}
      >
        Interactive Scoring
      </Heading>
      <Text
        width={[1]}
        fontSize={[mobileT2, mobileT1, deskT2, deskT2]}
        textAlign="left"
        mx={[2, null, 5, null]}
        pb={5}
        color={[brand.color.dkblue]}
      >
        Interactive scoring can be a very complex endeaver. Depending on the
        project the music usually has to imply or convey something to the
        user/audience. For an easy example, let us use a mobile or console game.
        You have waiting music, background music, and scene music. Scene music
        is handled the same as film and television but the background music and
        sometimes the waiting music requires different variations that will help
        the player identify their situation. A neutral piece of music for
        exploration, a positive variation of the neutral piece that implies the
        player is in a place of interest, and a negative variation to imply the
        player is in danger. The complexity does not end there, the music also
        needs a beginning and an end while being unannoyingly loopable.
      </Text>

      <Heading
        width={[1]}
        fontSize={[mobileH2, null, deskH2, null]}
        fontWeight="bold"
        my={5}
        textAlign="center"
        color={[brand.color.dkblue]}
      >
        Source & Background Cue Production
      </Heading>
      <Text
        fontSize={[mobileT2, mobileT1, deskT2, deskT2]}
        textAlign="left"
        mx={[2, null, 5, null]}
        my={null}
        pb={5}
        color={[brand.color.dkblue]}
      >
        Source cues refer to music that is literally in the scene, unlike the
        score. It is like another character or a part of the set as it may be a
        song the character puts on their radio. Background cues Source and
        background cues require a more traditional singer/songwriter approach,
        making this type of production closer to a regular music production. For
        those under a tight time constraint, we suggest checking out our
        in-house library. You will only have to deal with one house for all
        rights, editing, and syncing needs.
      </Text>
    </Layout>
  );
};

export default MxPage;
