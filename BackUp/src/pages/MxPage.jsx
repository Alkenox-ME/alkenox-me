import React from "react";
import ReactPlayer from "react-player";
import { Bounce } from "react-reveal";
import { Flex, Box, Text, Banner } from "../components/n0x.Bass";
import { Image, Heading } from "rebass";
import {
  n0x,
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
      pgTitle="alkenox-me: Music Production"
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
        Music Production
      </Heading>

      <Heading
        width={[1]}
        fontSize={[mobileH2, null, deskH2, null]}
        fontWeight="bold"
        my={4}
        textAlign="center"
        color={[brand.color.dkblue]}
      >
        Sonic Branding
      </Heading>

      <Text
        fontSize={[mobileT2, mobileT1, deskT2, deskT2]}
        textAlign="left"
        mx={[2, null, 5, null]}
        pb={5}
        color={[brand.color.dkblue]}
      >
        Human beings actually process sound faster than any of the other senses.
        Music and sound transcend language, culture and all things visual. So,
        creating an audio advertising "sonic identity" is important. You want
        your brand's image conveyed in an instant. It's a tool the biggest
        brands have been using for years to bring their audience along with them
        as they evolve. But what works for the big companies can also work for
        small companies who are just starting out and trying to make their brand
        a household name. Ultimately, exposing your audience to your brand's
        identity early on can help to expedite your growth and solidify your
        brand's place in the current market.
      </Text>

      <Heading
        width={[1]}
        fontSize={[mobileH2, null, deskH2, null]}
        fontWeight="bold"
        my={4}
        textAlign="center"
        color={[brand.color.dkblue]}
      >
        Original Music Score
      </Heading>
      <Text
        width={[1]}
        fontSize={[mobileT2, mobileT1, deskT2, deskT2]}
        textAlign="left"
        mx={[2, null, 5, null]}
        color={[brand.color.dkblue]}
      >
        Our composers are skilled in creating a cinematic score for any genre.
        From the traditional, large, action-packed orchestra to subtle drone
        music to fill the background without impeding on the soundscape or
        dialog. We specialize in creating music for picture. Instead of taking a
        pre-made piece of music and editing it down to what will be used (while
        making sure you have a beginning, middle and end with clean edits) a
        custom written piece can make for a better fit. Not only is it written
        to the time, but it is an exclusive piece of music written to the
        emotion of your visual presentation or scene, yielding a more unique and
        immersive experience.
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
        Interactive scoring can be a very complex endeaver. It is most commonly
        used in video games. But as more and more apps are becoming more
        interactive, interactive scoring is becoming more common outside of just
        game design. Depending on the project, the music usually has to imply or
        convey something to the user or audience. For an easy example, let us
        use a mobile or console game. You have waiting music, background music,
        and scene music. Scene music is created the same way it is for film and
        Television. But the background music, and sometimes the waiting music,
        requires different variations that will help the player identify their
        situation. A neutral piece of music for exploration, a positive
        variation of the neutral piece that implies the player is in a place of
        interest, and a negative variation to imply the player is in danger. The
        complexity does not end there. The music also needs a beginning and an
        end while being unannoyingly loopable.
      </Text>

      <Box width={[1, null, 1 / 2, null]} pb={5}>
        <ReactPlayer
          url="https://github.com/Alkenox-ME/alkenox-me-videos/blob/master/aeon-soundDesign.mp4?raw=true"
          width="100%"
          height="100%"
          controls
          playing
          loop
          volume={0}
        />
      </Box>

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
        Source cues refer to music that is literally in the scene, and are
        typically from records that your music supervisor would acquire a
        license to use. Background cues Source and background cues require a
        more traditional singer/songwriter approach, making this type of
        production closer to a regular music production. For those under a tight
        time constraint, we suggest checking out our in-house library. You will
        only have to deal with one house for all rights, editing, and syncing
        needs.
      </Text>
    </Layout>
  );
};

export default MxPage;
