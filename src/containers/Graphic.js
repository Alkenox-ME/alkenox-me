import React from "react";
import ReactPlayer from "react-player";
import { PageLayout, Box, Image, P, H1, H2, TP, colors } from "../components/n0x.library";
import { data } from "../components/n0x.vars";

const Graphic = () => {
  return (
    <PageLayout
      pgTitle={`Home: ${data.name.company.trendy}`}
      pgDesc={null}
      color={colors.tint.white[3]}
    >
      <H1>2D & 3D Graphic Design</H1>

      <H2>Whiteboard / Glassboard Animation Videos</H2>

      <P>
        These types of videos are animated explainer videos, usually created to
        add to your website or to post on social media. They are meant to
        capture your audience's attention and get them interested in what you
        have to share with them. Our talented artists will help you focus your
        story into a working script. Our directors will then take that script
        and have a storyboard put together for your approval before embarking on
        the main course of putting the animations together.
      </P>

      <Box lp={1.5} pt="50px" pb={2} px={2}>
        <ReactPlayer
          url="https://github.com/Alkenox-ME/alkenox-me-videos/blob/master/The_Smile_Solution_Whitboard.mp4?raw=true"
          width="100%"
          height="100%"
          loop
          playing
          volume={0}
        />
        <TP>Whiteboard Animation produced for Drs. Enoch and Lamei</TP>
      </Box>

      <H2>Animated GIFs</H2>

      <P>
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
      </P>

      <Box lp={2} px="20px" py="46px">
        <Image
          boxShadow="0.01em 0.01em 0.08em .20em #ffffff,
          -0.01em 0.01em .08em 0.1em #24292e, 0.01em -0.01em .04em 0.1em #6c6c6c,
          -0.01em -0.01em 0.08em 0.50em #6c6c6c"
          src="https://media.giphy.com/media/MVgLYGeuRP4JynEhNU/source.gif"
          alt="Sissy GIF"
        />

        <TP>
          3D animated GIF created by one of our artists to help advertise an
          indie feature film, "Sissy Carlyle" on social media.
        </TP>
      </Box>

      <Box lp={2} px="20px" py="40px">
        <Image
          boxShadow="0.02em 0.02em 0.15em .35em #24292e,
          -0.02em 0.02em .15em 0.35em #24292e, 0.2em -0.2em .15em 0.35em #6c6c6c,
          -0.1em -0.1em 0.15em 0.25em #6c6c6c"
          src="https://media.giphy.com/media/8lNgT2uFKdFDh7b2l2/giphy.gif"
          alt="'The 12 Lives of Sissy Carlyle' info GIF"
        />

        <TP>
          2D Animated Info GIF created for "The 12 Lives of Sissy Carlyle" indie
          feature.
        </TP>
      </Box>

      <P pt={2} pb={5}>
        How they can add value to your business: GIFS are easy to share due to
        their small file size, they help you to show your fun side to your
        audience, and they can add more context or emotion in a very short
        amount of time. The average GIF is 2 to 5 seconds in length, which is
        perfect for posting on social feeds to help convert more people to
        customers, more quickly. Brands can create a close relationship with
        their audience with the right GIF, as it can allow your brand to share
        geniune and engaging content. You can also use them to highlight a key
        function or feature of your product.
      </P>

      <H2>2D & 3D Logo Design & Animated Logos</H2>

      <Box lp={2} pt={5} pb={2} px={2}>
        <ReactPlayer
          url="https://github.com/Alkenox-ME/alkenox-me-videos/blob/master/artefaektsLogoSequence.mp4?raw=true"
          width="100%"
          height="100%"
          loop
          playing
          volume={0}
        />
        <TP>3D Animated Logo</TP>
      </Box>

      <Box lp={2} pt={5} pb={2} px={2}>
        <ReactPlayer
          url="https://github.com/Alkenox-ME/alkenox-me-videos/blob/master/logo-seq.mp4?raw=true"
          width="100%"
          height="100%"
          loop
          playing
          volume={0}
        />
        <TP>3D Animated Logo</TP>
      </Box>

      <P py={5}>
        We can also design 2d or 3D custom logo animations for your company's
        brand. Having an animated logo seems to have become the norm for a solid
        brand to have as a part of how they convey their brand personality.
        They've been used for commercials and...
      </P>
    </PageLayout>
  );
};

export default Graphic;
