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
import { n0x, base, image, data, brand } from "../components/n0x.vars";
import { PageLayout } from "../components/n0x.library";
import VxPricing from "../components/VxPricing";

const Teamwork =
  "https://github.com/Alkenox-ME/alkenox-me-images/blob/master/achievement-agreement-arms-1068523.jpg?raw=true";
const Editing =
  "https://github.com/Alkenox-ME/alkenox-me-images/blob/master/computer-connection-data-1188751.jpg?raw=true";
const Production =
  "https://github.com/Alkenox-ME/alkenox-me-images/blob/master/action-clapper-film-director-1117132.jpg?raw=true";

const VxPage = () => {
  return (
    <PageLayout
      pgTitle={`Home: ${data.name.company.trendy}`}
      pgDesc={null}
      color={props => props.theme.colors.whitetint[3]}
    >
      <T1>Video Production</T1>

      <T>Web Video</T>

      <T>
        Whenever you surf the internet, you find yourself faced with at least
        one web video on almost every site you visit, that were created to
        explain products, services, and tell stories to anyone willing to stick
        around and watch. Most lazy web surfers tend to stop when faced with a
        video, which is why web videos have become a way to capture your
        visitors' attention and convert them into explorers first, and then
        customers.
      </T>

      <T>
        Whether you need a short internet commercial for your business, have a
        story to tell, or have video and images that you need turned into
        something with purpose; we are here to help.
      </T>
      <Box lp={1.5} p={5}>
        <ReactPlayer
          url="https://github.com/alkenox/alkenox-me-videos/blob/master/trailer-mosaic.mp4?raw=true"
          width="100%"
          height="100%"
          controls
          playing
          loop
          volume={0}
        />
      </Box>
      <T>
        Movie Trailer for the Indie Feature Film "Mosaic" with all original
        scoring, sound design, and 3D Motion Graphics.
      </T>

      <ReactPlayer
        url="https://github.com/alkenox/alkenox-me-videos/blob/master/talent-seq-joker.mp4?raw=true"
        width="100%"
        height="100%"
        loop
        playing
        volume={0}
      />

      <T>Opening Credits created for a short film "Joker's Wild".</T>

      <T2>Our Process</T2>

      <T3>Pre-Production</T3>

      <Image height={40} src={Teamwork} alt="Teamwork" />

      <T>
        We come together and figure out what it is you need, get you a quote on
        how much it will cost to effectively produce your project, and sort out
        the shooting schedule with the script that you will either provide us
        with or that we will help you write. This is the most important part of
        any production process. Without good planning, the entire project can
        lose its focus and fall apart very quickly.
      </T>

      <T3>Production</T3>

      <T>
        We embark upon what we have planned out for our shooting schedule. We
        arrive on location, with rehearsed talent, and begin collecting all the
        shots and audio that we need to create your video. In some cases,
        certain audio and/or images may be acquired or created in
        post-production. Any kind of motion graphics, sound effects,
        v4oice-overs, or visual effects would be completed in Post.
      </T>

      <Image height={40} src={Production} alt="Production" />

      <T3>Post-Production</T3>

      <Banner crop={"40vh"} src={Editing} alt="Editing" />

      <T>
        Here is where we log all the footage and photographs if there are any
        before we begin editing. The time it takes to log everything depends on
        how much footage we have gathered. Basic video editing can take from 30
        minutes to an hour for each minute of finished video. Basic video
        editing is finding the best shots, cutting them together, and adding in
        some basic transitions. More advanced editing can take much longer
        because now we are talking about adding in animations, visual effects,
        and compositing. Essentially, the more complex a video is, the more time
        and money it will require.
      </T>

      <T4>Types of Videos</T4>

      <List>
        <ListItem>
          {" "}
          Branded Video - Under 60 seconds and Builds Awareness
        </ListItem>
        <br />
        <ListItem>
          Commercial Video - 30 seconds or less and generates
          awareness/excitement
        </ListItem>
        <br />
        <ListItem>
          Company Story Video - 3 minutes or less and used in the "About Us" or
          "Our Team" section of your website
        </ListItem>
        <br />
        <ListItem>
          Explainer Video - 2 minutes or less and designed to explain your
          company, product, service, or subject. (whiteboard animation)
        </ListItem>
        <br />
        <ListItem>
          Customer Testimonial Video - 3 minutes or less and are authentic
          accounts of how your products or services helped your customer
        </ListItem>
        <br />
        <ListItem>
          Movie Trailer - 2 minutes 30 seconds or less (average full length
          trailer) and drums up buzz and excitement for your movie
        </ListItem>
        <br />
      </List>

      <VxPricing />
    </PageLayout>
  );
};

export default VxPage;
