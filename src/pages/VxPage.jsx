import React from "react";
import ReactPlayer from "react-player";
import { Bounce } from "react-reveal";
import styled from "styled-components";
import { Flex, Box, Text, Banner } from "../components/n0x.Bass";
import { Image, Flex as Row, Heading } from "rebass";
import { n0x, base, image, data, brand } from "../components/n0x.vars";
import { PageLayout } from "../components/n0x.library";
import VxPricing from "../components/VxPricing";

const VideoPrices =
  "https://github.com/Alkenox-ME/alkenox-me-images/blob/master/BasicVideoProdPkgs.png?raw=true";
const LiveCamera =
  "https://github.com/Alkenox-ME/alkenox-me-images/blob/master/blur-camera-camera-equipment-639090.jpg?raw=true";
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
      color={props => props.theme.colors.black}
      opacity={[.9]}
    >
      <Flex>
        <Heading
          width={1}
          mt={5}
          fontSize={[brand.font.size.heading.main]}
          textAlign="center"
          color={[brand.color.dkblue]}
        >
          Video Production
        </Heading>

        <Text
          fontSize={brand.font.size.heading.sub1}
          fontWeight="bold"
          my={4}
          color={[brand.color.dkblue]}
        >
          Web Video
        </Text>

        <Text
          fontSize={[brand.font.size.text.body]}
          textAlign="left"
          mx={5}
          color={[brand.color.dkblue]}
        >
          Whenever you surf the internet, you find yourself faced with at least
          one web video on almost every site you visit, that were created to
          explain products, services, and tell stories to anyone willing to
          stick around and watch. Most lazy web surfers tend to stop when faced
          with a video, which is why web videos have become a way to capture
          your visitors' attention and convert them into explorers first, and
          then customers.
        </Text>

        <Text
          width={[1]}
          fontSize={[brand.font.size.text.body]}
          mx={5}
          py={4}
          textAlign="left"
          color={[brand.color.dkblue]}
        >
          Whether you need a short internet commercial for your business, have a
          story to tell, or have video and images that you need turned into
          something with purpose; we are here to help.
        </Text>

        <Box width={[1, null, 2 / 3, null]}>
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

        <Text
          width={6 / 8}
          mx="auto"
          py={3}
          textAlign="center"
          fontSize={[brand.font.size.text.body]}
          color={[brand.color.dkblue]}
        >
          Movie Trailer for the Indie Feature Film "Mosaic" with all original
          scoring and 3D Motion Graphics.
        </Text>

        <Heading
          width={1}
          fontSize={[brand.font.size.heading.sub1]}
          textAlign="center"
          mt={5}
          pt={5}
          color={[brand.color.dkblue]}
        >
          Our Process
        </Heading>

        <Heading
          width={1}
          fontSize={[brand.font.size.heading.sub2]}
          py={5}
          textAlign="center"
          color={[brand.color.dkblue]}
        >
          Pre-Production
        </Heading>

        <Box width={1 / 2}>
          <Bounce left duration={1300} delay={500}>
            <Banner
              crop={"40vh"}
              width={1}
              px={4}
              my={5}
              src={Teamwork}
              alt="Teamwork"
            />
          </Bounce>
        </Box>

        <Text
          width={[1, null, 1 / 2, null]}
          my="auto"
          pt={4}
          fontSize={[brand.font.size.text.body]}
          color={[brand.color.dkblue]}
        >
          <Bounce right>
            We come together and figure out what it is you need, get you a quote
            on how much it will cost to effectively produce your project, and
            sort out the shooting schedule with the script that you will either
            provide us with or that we will help you write. This is the most
            important part of any production process. Without good planning, the
            entire project can lose its focus and fall apart very quickly.
          </Bounce>
        </Text>

        <Heading
          width={1}
          mx="auto"
          py={5}
          fontSize={[brand.font.size.heading.sub2]}
          textAlign="center"
          color={[brand.color.dkblue]}
        >
          Production
        </Heading>

        <Text
          width={[1, null, 1 / 2, null]}
          my="auto"
          p={5}
          fontSize={[brand.font.size.text.body]}
          color={[brand.color.dkblue]}
        >
          <Bounce>
            We embark upon what we have planned out for our shooting schedule.
            We arrive on location, with rehearsed talent, and begin collecting
            all the shots and audio that we need to create your video. In some
            cases, certain audio and/or images may be acquired or created in
            post-production. Any kind of motion graphics, sound effects,
            v4oice-overs, or visual effects would be completed in Post.
          </Bounce>
        </Text>

        <Box width={1 / 2}>
          <Bounce right duration={1300} delay={100}>
            <Banner
              crop={"40vh"}
              width={1}
              px={4}
              my={5}
              src={Production}
              alt="Production"
            />
          </Bounce>
        </Box>

        <Heading
          width={1}
          mx="auto"
          my={5}
          fontSize={[brand.font.size.heading.sub2]}
          textAlign="center"
          color={[brand.color.dkblue]}
        >
          Post-Production
        </Heading>

        <Box width={1 / 2} pb={5}>
          <Bounce left duration={1300} delay={100}>
            <Banner
              crop={"40vh"}
              width={1}
              px={4}
              my={5}
              src={Editing}
              alt="Editing"
            />
          </Bounce>
        </Box>

        <Text
          width={[1, 1, 1 / 2, 1 / 2]}
          mx="auto"
          my="auto"
          px={2}
          pt={4}
          fontSize={[brand.font.size.text.body]}
          color={[brand.color.dkblue]}
        >
          <Bounce right>
            Here is where we log all the footage and photographs if there are
            any before we begin editing. The time it takes to log everything
            depends on how much footage we have gathered. Basic video editing
            can take from 30 minutes to an hour for each minute of finished
            video. Basic video editing is finding the best shots, cutting them
            together, and adding in some basic transitions. More advanced
            editing can take much longer because now we are talking about adding
            in animations, visual effects, and compositing. Essentially, the
            more complex a video is, the more time and money it will require.
          </Bounce>
        </Text>

        <Heading
          width={1}
          textAlign="center"
          mx="auto"
          mt={5}
          py={5}
          fontSize={[brand.font.size.heading.sub2]}
          color={[brand.color.dkblue]}
        >
          Types of Videos
        </Heading>
        <Box
          width={[1 / 2]}
          fontSize={[brand.font.size.text.list]}
          mx={5}
          py={3}
          color={[brand.color.dkblue]}
        >
          <ul>
            <li> Branded Video - Under 60 seconds and Builds Awareness</li>
            <br />
            <li>
              Commercial Video - 30 seconds or less and generates
              awareness/excitement
            </li>
            <br />
            <li>
              Company Story Video - 3 minutes or less and used in the "About Us"
              or "Our Team" section of your website
            </li>
            <br />
            <li>
              Explainer Video - 2 minutes or less and designed to explain your
              company, product, service, or subject. (whiteboard animation, )
            </li>
            <br />
            <li>
              Customer Testimonial Video - 3 minutes or less and are authentic
              accounts of how your products or services helped your customer
            </li>
            <br />
            <li>
              Movie Trailer - 2 minutes 30 seconds or less (average full length
              trailer) and drums up buzz and excitement for your movie
            </li>
            <br />
            <li>
              Whiteboard Animation - 3 mins or less used as explainer videos and
              social media advertisements.
            </li>
          </ul>
        </Box>
        <VxPricing />
      </Flex>
    </PageLayout>
  );
};

export default VxPage;
