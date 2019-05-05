import React from "react";
import ReactPlayer from "react-player";
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

const GraphicPage = () => {
  return (
    <PageLayout
      pgTitle={`Home: ${data.name.company.trendy}`}
      pgDesc={null}
      color={props => props.theme.colors.whitetint[3]}
    >
      <T1>2D & 3D Graphic Design</T1>

      <T2>Whiteboard / Glassboard Animation Videos</T2>

      <T>
        These types of videos are animated explainer videos, usually created to
        add to your website or to post on social media. They are meant to
        capture your audience's attention and get them interested in what you
        have to share with them. Our talented artists will help you focus your
        story into a working script. Our directors will then take that script
        and have a storyboard put together for your approval before embarking on
        the main course of putting the animations together.
      </T>

      <Box lp={1.5} pt={5} pb={2} px={2}>
        <ReactPlayer
          url="https://github.com/alkenox/alkenox-me-videos/blob/master/whiteboard-enoch.mp4?raw=true"
          width="100%"
          height="100%"
          loop
          playing
          volume={0}
        />
        <TP>Whiteboard Animation produced for Drs. Enoch and Lamei</TP>
      </Box>

      <T2>Animated GIFs</T2>

      <T>
        The GIF (Graphical Interchange Format), was invented in 1987 by Steve
        Wilhite, who was looking for a way to animate images in the smallest
        file size possible. GIFs can be created from a series of images, or even
        video (minus the sound), into a continuous loop that plays
        automatically. Their common uses include keeping your brand from
        appearing too serious, keeping your audience engaged in your brand's
        personality, giving your brand a dose of youthfulness in the eyes of
        your audience, providing visual instructions, building excitement for a
        future product, and they can help you and/or your brand more
        approachable.
      </T>

      <Box lp={2} px={2} pt={4}>
        <Image
          src="https://media.giphy.com/media/MVgLYGeuRP4JynEhNU/source.gif"
          alt="Sissy GIF"
        />

        <TP>
          3D animated GIF created by one of our artists to help advertise an
          indie feature film, "Sissy Carlyle" on social media.
        </TP>
      </Box>

      <Box lp={2} px={2} pt={4}>
        <Image
          src="https://media.giphy.com/media/8lNgT2uFKdFDh7b2l2/giphy.gif"
          alt="'The 12 Lives of Sissy Carlyle' info GIF"
        />

        <TP>
          2D Animated Info GIF created for "The 12 Lives of Sissy Carlyle" indie
          feature.
        </TP>
      </Box>

      <T pt={2} pb={5}>
        How they can add value to your business: GIFS are easy to share due to
        their small file size, they help you to show your fun side to your
        audience, and they can add more context or emotion in a very short
        amount of time. The average GIF is 2 to 5 seconds in length, which is
        perfect for posting on social feeds to help convert more people to
        customers, more quickly. Brands can create a close relationship with
        their audience with the right GIF, as it can allow your brand to share
        geniune and engaging content. You can also use them to highlight a key
        function or feature of your product.
      </T>

      <T2>2D & 3D Logo Design & Animated Logos</T2>

      <Box lp={2} pt={5} pb={2} px={2}>
        <ReactPlayer
          url="https://github.com/alkenox/alkenox-me-videos/blob/master/whiteboard-enoch.mp4?raw=true"
          width="100%"
          height="100%"
          loop
          playing
          volume={0}
        />
        <TP>Whiteboard Animation produced for Drs. Enoch and Lamei</TP>
      </Box>

      <Box lp={2} pt={5} pb={2} px={2}>
        <ReactPlayer
          url="https://github.com/alkenox/alkenox-me-videos/blob/master/whiteboard-enoch.mp4?raw=true"
          width="100%"
          height="100%"
          loop
          playing
          volume={0}
        />
        <TP>Whiteboard Animation produced for Drs. Enoch and Lamei</TP>
      </Box>

      <T py={5}>
        Animated logo clips are commonly used for film and TV, at the start of a
        movie o
      </T>
    </PageLayout>
  );
};

export default GraphicPage;
