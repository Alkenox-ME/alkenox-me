import React from "react";
import ReactPlayer from "react-player";
import { Bounce } from "react-reveal";
import {
  Block,
  Box,
  HMenu,
  MenuItem,
  UTitle,
  UText,
  UFX,
  List,
  ListItem,
  Image,
  Href,
  T,
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  PT,
  TP,
  BTN,
  Divider,
  SoundBlock,
  MxBlock,
  PhotoBlock,
  VxBlock,
  GxBlock,
  WebBlock,
  RxBlock,
  BGimg,
  BGcolor,
  FT,
  Banner
} from "../components/n0x.library";
import { n0x, base, image, data } from "../components/n0x.vars";
import { PageLayout } from "../components/n0x.library";

const RxPage = () => {
  return (
    <PageLayout
      pgTitle={`Home: ${data.name.company.trendy}`}
      pgDesc={null}
      color={props => props.theme.colors.whitetint[3]}
    >
      <T1>Audio & Visual Rx</T1>

      <T2>Video Rx</T2>

      <T>
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
      </T>

      <T2>Audio Repair</T2>

      <T>
        Capturing great audio is always a feat that requires intense planning.
        But it's even harder to control unless you're recording in a sound
        studio. If shooting outdoors, it is the worst case scenario. If shooting
        near water, or in a space with a lot of reverb, it's the worst! Although
        the audio may not ever be perfect when captured in these trouble areas,
        it does not mean that it cannot be improved upon even just the
        slightest. That little bit of fixing just might make it usable audio
        again.
      </T>

      <T2>Photo Repair</T2>

      <Box lp={4} px={'2%'}>
        <Image height={80} src={image.fg.photoRx1before} />
        <TP talignCenter>Before</TP>
      </Box>

      <Box lp={4} px={'2%'}>
        <Image height={80} src={image.fg.photoRx1after} />
        <TP talignCenter>After</TP>
      </Box>

      <Box lp={4} px={'2%'}>
        <Image height={80} src={image.fg.photoRx2before} />
        <TP talignCenter>Before</TP>
      </Box>

      <Box lp={4} px={'2%'}>
        <Image height={80} src={image.fg.photoRx2after} />
        <TP talignCenter>After</TP>
      </Box>

      <T>
        Old pictures become damaged over time. Scratches, tears, wrinkles, water
        damage, etc. can all make the image that much harder to look at. If
        parts of your image are missing, we can do what we can to try and
        restore it from what is still there. Scratches, specs, wrinkles, and
        certain discolorations can be improved upon. If you need help restoring
        your memories, we may be able to help.
      </T>

      <T>
        For any of our Rx Services, please contact us for a free consultation.
      </T>
    </PageLayout>
  );
};

export default RxPage;
