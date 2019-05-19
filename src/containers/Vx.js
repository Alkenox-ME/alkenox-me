import React from "react";
import ReactPlayer from "react-player";
import { Box, List, ListItem, Image, P, H1, H2, H3, TP, TP1, PageLayout } from "../components/n0x.library";
import { data, image } from "../components/n0x.vars";
import { SliderVxPrice } from '../components/SliderVxPrice'

const Teamwork =
  "https://github.com/Alkenox-ME/alkenox-me-images/blob/master/achievement-agreement-arms-1068523.jpg?raw=true";
const Editing =
  "https://github.com/Alkenox-ME/alkenox-me-images/blob/master/computer-connection-data-1188751.jpg?raw=true";
const Production =
  "https://github.com/Alkenox-ME/alkenox-me-images/blob/master/action-clapper-film-director-1117132.jpg?raw=true";

const Vx = (props) => {

  return (
    <PageLayout
      pgTitle={`Home: ${data.name.company.trendy}`}
      pgDesc={null}
      color={props => props.theme.colors.tint.white[3]}
    >
      <H1 mb={["3%"]}>Video Production</H1>

      <H2>Web Video</H2>

      <P mb={["3%"]}>

        Whenever you surf the internet, you find yourself faced with at least
        one web video on almost every site you visit, that were created to
        explain products, services, and tell stories to anyone willing to stick
        around and watch. Most lazy web surfers tend to stop when faced with a
        video, which is why web videos have become a way to capture your
        visitors' attention and convert them into explorers first, and then
        customers.

      </P>

      <P>

        Whether you need a short internet commercial for your business, have a
        story to tell, or have video and images that you need turned into
        something with purpose; we are here to help.

      </P>
      <Box lp={2} pt="5%" pb="2%" px="2%">
        <ReactPlayer
          url="https://github.com/Alkenox-ME/alkenox-me-videos/blob/master/trailer-mosaic.mp4?raw=true"
          width="100%"
          height="100%"
          controls
          playing
          loop
          volume={0}
        />
        <TP talignCenter fontSize={0.75}>

          Movie Trailer for the Indie Feature Film "Mosaic" with all original
          scoring, sound design, and 3D Motion Graphics.

        </TP>
      </Box>

      <Box lp={2} pt="4%" pb="2%" px="2%">
        <ReactPlayer
          url="https://github.com/alkenox/alkenox-me-videos/blob/master/talent-seq-joker.mp4?raw=true"
          width="100%"
          height="100%"
          loop
          playing
          volume={0}
        />
        <TP talignCenter fontSize={0.75}>

          Opening Credits created for a short film "Joker's Wild".

        </TP>
      </Box>

      <H2>
      Our Process
      </H2>

      <H3 pb="5%">Pre-Production</H3>

      <Image
        bRadius=".75em"
        boxShadow="
        0.01em  0.01em  0.25em   0.25em   #444d56,
        -0.01em   0.01em        .10em  0.05em   #444d56,
        0.01em    -0.01em        .1em  0.01em   #444d56,
        -0.01em   -0.01em  0.10em   0.01em   #444d56"
        lp={2}
        height="50vh"
        src={Teamwork}
        alt="Teamwork"
      />

      <Box lp={2} px="3%">
        <TP1 talignLeft>

          We come together and figure out what it is you need, get you a quote
          on how much it will cost to effectively produce your project, and sort
          out the shooting schedule with the script that you will either provide
          us with or that we will help you write. This is the most important
          part of any production process. Without good planning, the entire
          project can lose its focus and fall apart very quickly.

        </TP1>
      </Box>

      <H3 py="5%">Production</H3>

      <Box lp={2} px="3%">
        <TP1 talignLeft>

          We embark upon what we have planned out for our shooting schedule. We
          arrive on location, with rehearsed talent, and begin collecting all
          the shots and audio that we need to create your video. In some cases,
          certain audio and/or images may be acquired or created in
          post-production. Any kind of motion graphics, sound effects,
          voice-overs, or visual effects would be completed in Post.

        </TP1>
      </Box>

      <Image
        bRadius=".75em"
        boxShadow="
        0.01em  0.01em  0.25em   0.25em   #444d56,
        -0.01em   0.01em        .25em  0.05em   #444d56,
        0.01em    -0.01em        1em  0.5em   #444d56,
        -0.01em   -0.01em  0.10em   0.01em   #444d56"
        lp={2}
        height="50vh"
        src={Production}
        alt="Production"
      />

      <H3 py="5%">
      Post-Production
      </H3>

      <Image
        bRadius=".75em"
        boxShadow="
        0.01em  0.01em  0.25em   0.25em   #444d56,
        -0.01em   0.01em        .25em  0.05em   #444d56,
        0.01em    -0.01em        1em  0.5em   #444d56,
        -0.01em   -0.01em  0.10em   0.01em   #444d56"
        lp={2}
        height="50vh"
        src={Editing}
        alt="Editing"
      />

      <Box lp={2} px="3%">
        <TP1 talignLeft>

          Here is where we log all the footage and photographs if there are any
          before we begin editing. The time it takes to log everything depends
          on how much footage we have gathered. Basic video editing can take
          from 30 minutes to an hour for each minute of finished video. Basic
          video editing is finding the best shots, cutting them together, and
          adding in some basic transitions. More advanced editing can take much
          longer because now we are talking about adding in animations, visual
          effects, and compositing. Essentially, the more complex a video is,
          the more time and money it will require.

        </TP1>
      </Box>

      <H3>Types of Videos</H3>

      <Box lp={1} px="20%">
        <List>
          <ListItem>
            Branded Video - Under 60 seconds and Builds Awareness
          </ListItem>
          <ListItem>
            Commercial Video - 30 seconds or less and generates
            awareness/excitement
          </ListItem>
          <ListItem>
            Company Story Video - 3 minutes or less and used in the "About Us"
            or "Our Team" section of your website
          </ListItem>
          <ListItem>
            Explainer Video - 2 minutes or less and designed to explain your
            company, product, service, or subject. (whiteboard animation)
          </ListItem>
          <ListItem>
            Customer Testimonial Video - 3 minutes or less and are authentic
            accounts of how your products or services helped your customer
          </ListItem>
          <ListItem>
            Movie Trailer - 2 minutes 30 seconds or less (average full length
            trailer) and drums up buzz and excitement for your movie
          </ListItem>
        </List>
      </Box>

      <H1 color="#f6f8fa" textShadow="4px 4px 12px #000000" pt=".13em" pb=".13em">
        Video Production Pricing
      </H1>

      <SliderVxPrice />

    </PageLayout>
  );
};

export default Vx;
