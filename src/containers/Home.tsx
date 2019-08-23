import * as React from "react";
import { nox } from "../components/theme/overRide";
import PageLayout from "../components/molecules/PageLayout";
import { Flex, Box, Text, Image, Link, Heading } from "rebass";
import bg from "../static/images/bg-1.png";
import logo from "../static/images/logo-landscape.png";
import Slider from "../components/Slider";
import ReactPlayer from "react-player";

const graphics = "https://media.giphy.com/media/MVgLYGeuRP4JynEhNU/source.gif";
const vfx = "https://media.giphy.com/media/2w5OEVjSb7f3Y9UQRr/source.gif";
const vidpro = "https://media.giphy.com/media/8JQ9uF8Oe1Ktmmdd8o/source.gif";

const Home: React.FC<{}> = () => {
  let shadow =
    "0.1em 0.1em 0.5em rgba(0,0,0,1), -0.1em 0.1em 0.5em rgba(0,0,0,1), 0.1em -0.1em 0.5em rgba(0,0,0,1), -0.1em -0.1em 0.5em rgba(0,0,0,1)";
  return (
    <PageLayout title={"Home"}>
      <Image src={logo} alt="logo" width={"100%"} height={"100%"} />

      <Box
        p={5}
        fontSize={5}
        width={[1, 1, 1 / 2]}
        color="rgba(222, 222, 222, 1)"
      >
        <Heading>What We Do</Heading>

        <Text>
          At Alkenox Media & Entertainment, we use art, story, and technology to
          enhance and differentiate your brand from the rest. Everywhere you
          look, people are having digital experiences on computers, laptops,
          pads, cellular devices, TVs, and gaming systems. It has become the way
          of life, to explore the world digitally, before embarking on a
          physical interaction. We design for an emotional connection that
          motivates exploration and interaction with your brand.
        </Text>

        <Slider ms={5000}>
          <Box>
            <Heading>Title Sequences</Heading>
          </Box>
          <Box>
            <Heading>3D Animation & Sound Design</Heading>
          </Box>
          <Box>
            <Heading>Animated GIFs</Heading>
          </Box>

          <Box>
            <ReactPlayer
              url="https://github.com/Alkenox-ME/alkenox-me-videos/blob/master/trailer-mosaic.mp4?raw=true"
              style={{ background: "rgba(0, 0, 0, 0)" }}
              width={"80%"}
              height={"100%"}
              volume={".6"}
              controls={"true"}
            />
            <Heading>"Mosaic" Movie Trailer</Heading>
          </Box>

          <Box>
            <ReactPlayer
              url="https://github.com/Alkenox-ME/alkenox-me-videos/blob/master/Robin%20Goodfellow-V2.mp4?raw=true"
              width={"80%"}
              height={"100%"}
              volume={".6"}
              controls={"true"}
            />
            <Heading>"Robin Goodfellow" Movie Trailer</Heading>
          </Box>

          <Box>
            <ReactPlayer
              url="https://github.com/Alkenox-ME/alkenox-me-videos/blob/master/artefaektsLogoSequence.mp4?raw=true"
              width={"80%"}
              height={"100%"}
              volume={".6"}
              controls={"true"}
            />
            <Heading>3D Animated Logo</Heading>
          </Box>

          <Box>
            <ReactPlayer
              url="https://github.com/Alkenox-ME/alkenox-me-videos/blob/master/The_Smile_Solution_Whitboard.mp4?raw=true"
              width={"80%"}
              height={"100%"}
              volume={".6"}
              controls={"true"}
            />
            <Heading>Whiteboard Animation</Heading>
          </Box>
        </Slider>
      </Box>
    </PageLayout>
  );
};

export default Home;
