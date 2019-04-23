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

const RxPage = () => {
  return (
    <Layout
      pgTitle="alkenox-me: Audio & Visual Rx"
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
        Audio & Visual Rx
      </Heading>

      <Heading
        width={[1]}
        fontSize={[mobileH2, null, deskH2, null]}
        fontWeight="bold"
        my={4}
        textAlign="center"
        color={[brand.color.dkblue]}
      >
        Video Rx
      </Heading>

      <Text
        fontSize={[mobileT2, mobileT1, deskT2, deskT2]}
        textAlign="left"
        mx={[2, null, 5, null]}
        pb={5}
        color={[brand.color.dkblue]}
      >
        Although we try to plan everything perfectly and catch all the things
        that need to be removed from a shot before we hit the record button and
        call "Action!", it doesn't always run smoothly. We have limited time on
        locations, many shots to get through, and no matter how many people are
        helping sometimes things get left in the frame. Sandbags left in a
        corner during a moving shot or any number of other foreign objects that
        should not have found their way into the frame. If you've found yourself
        with footage that needs something removed, or maybe even added, into a
        shot, we may be able to help. As the saying goes, not everything can be
        fixed in Post. But we can sure try!
      </Text>

      <Heading
        width={[1]}
        fontSize={[mobileH2, null, deskH2, null]}
        fontWeight="bold"
        my={4}
        textAlign="center"
        color={[brand.color.dkblue]}
      >
        Audio Repair
      </Heading>

      <Text
        fontSize={[mobileT2, mobileT1, deskT2, deskT2]}
        textAlign="left"
        mx={[2, null, 5, null]}
        pb={5}
        color={[brand.color.dkblue]}
      >
        Capturing great audio is always a feat that requires intense planning.
        But it's even harder to control unless you're recording in a sound
        studio. If shooting outdoors, it is the worst case scenario. If shooting
        near water, or in a space with a lot of reverb, it's the worst! Although
        the audio may not ever be perfect when captured in these trouble areas,
        it does not mean that it cannot be improved upon even just the
        slightest. That little bit of fixing just might make it usable audio
        again.
      </Text>

      <Heading
        width={[1]}
        fontSize={[mobileH2, null, deskH2, null]}
        fontWeight="bold"
        my={4}
        textAlign="center"
        color={[brand.color.dkblue]}
      >
        Photo Repair
      </Heading>

      <Text
        fontSize={[mobileT2, mobileT1, deskT2, deskT2]}
        textAlign="left"
        mx={[2, null, 5, null]}
        pb={5}
        color={[brand.color.dkblue]}
      >
        Old pictures become damaged over time. Scratches, tears, wrinkles, water
        damage, etc. can all make the image that much harder to look at. If
        parts of your image are missing, we can do what we can to try and
        restore it from what is still there. Scratches, specs, wrinkles, and
        certain discolorations can be improved upon. If you need help restoring
        your memories, we may be able to help.
      </Text>

      <Text
        fontSize={[mobileT2, mobileT1, deskT1, deskT1]}
        textAlign="center"
        fontWeight="bold"
        mx={[2, null, 5, null]}
        py={5}
        color={[brand.color.dkblue]}
      >
        For any of our Rx Services, please contact us for a free consultation.
      </Text>
    </Layout>
  );
};

export default RxPage;
