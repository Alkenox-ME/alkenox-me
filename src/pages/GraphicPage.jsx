import React from "react";
import ReactPlayer from "react-player";
import { Flex, Box, Text, Banner, Heading } from "../components/n0x.Bass";
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
  deskT1,
  deskT2,
  mobileT1,
  mobileT2
} from "../components/n0x.vars";
import { Image, Flex as Row, Box as Col } from "rebass";
import { Layout } from "../components/n0x.elements";

const GraphicPage = () => {
  return (
    <Layout
      pgTitle="alkenox-me: Graphic Design & Animation"
      image={`${image.bg.logo}`}
      copyYear={`${data.footer.year}`}
      copyCompany={`${data.footer.company}`}
      tint={n0x.tint.white}
    >
      <Heading
        width={1}
        mx={2}
        mt={5}
        textAlign="center"
        fontSize={[mobileH1, null, deskH1, null]}
        color={[brand.color.dkblue]}
      >
        Graphic Design & Animation
      </Heading>

      <Heading
        width={1}
        mt={5}
        mx={2}
        textAlign="center"
        fontSize={[mobileH2, null, deskH2, null]}
        color={[brand.color.light]}
      >
        Whiteboard / Glassboard Animation Videos
      </Heading>

      <Text
        width={1}
        px={4}
        my={5}
        textAlign="left"
        fontSize={[mobileT2, mobileT1, deskT2, deskT2]}
        color={[brand.color.light]}
      >
        These types of videos are animated explainer videos, usually created to
        add to your website or to post on social media. They are meant to
        capture your audience's attention and get them interested in what you
        have to share with them. Our talented artists will help you focus your
        story into a working script. Our directors will then take that script
        and have a storyboard put together for your approval before embarking on
        the main course of putting the animations together.
      </Text>

      <Box width={[1, null, 3 / 4, null]} my={3} mx="auto">
        <ReactPlayer
          url="https://github.com/alkenox/alkenox-me-videos/blob/master/whiteboard-enoch.mp4?raw=true"
          width="100%"
          height="100%"
          loop
          playing
          volume={0}
        />
      </Box>
      <Text
        width={1}
        textAlign="center"
        fontSize={[brand.font.size.heading.tags]}
      >
        Whiteboard Animation produced for Drs. Enoch and Lamei.
      </Text>

      <Heading
        width={1}
        mt={5}
        textAlign="center"
        fontSize={[mobileH2, null, deskH2, null]}
        color={[brand.color.light]}
      >
        Film & Television
      </Heading>

      <Text
        width={1}
        mx={5}
        my={5}
        textAlign="left"
        fontSize={[mobileT2, mobileT1, deskT2, deskT2]}
        color={[brand.color.dkblue]}
      >
        as';ldkf';disable
      </Text>

      <Box width={[1, null, 3 / 4, null]} my={5} mx="auto">
        <ReactPlayer
          url="https://github.com/alkenox/alkenox-me-videos/blob/master/talent-seq-joker.mp4?raw=true"
          width="100%"
          height="100%"
          loop
          playing
          volume={0}
        />
      </Box>

      <Heading
        width={1}
        mt={5}
        textAlign="center"
        fontSize={[mobileH2, null, deskH2, null]}
        color={[brand.color.dkblue]}
      >
        Animated GIFs
      </Heading>

      <Text
        width={1}
        mx={5}
        my={5}
        textAlign="left"
        fontSize={[mobileT2, mobileT1, deskT2, deskT2]}
        color={[brand.color.dkblue]}
      >
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
      </Text>

      <Box mx="auto" px={5} my={3}>
        <Image
          width={1}
          src="https://media.giphy.com/media/MVgLYGeuRP4JynEhNU/source.gif"
          alt="Sissy Promo Gif"
        />
        <Text
          width={6 / 8}
          mx="auto"
          py={3}
          textAlign="center"
          fontSize={[brand.font.size.heading.tags]}
          color={[brand.color.dkblue]}
        >
          3D animated GIF created to help advertise an indie feature film,
          "Sissy Carlyle" on social media.
        </Text>
      </Box>

      <Text
        width={1}
        mx={5}
        my={3}
        textAlign="left"
        fontSize={[mobileT2, mobileT1, deskT2, deskT2]}
        color={[brand.color.dkblue]}
      >
        How they can add value to your business: GIFS are easy to share due to
        their small file size, they help you to show your fun side to your
        audience, and they can add more context or emotion in a very short
        amount of time. The average GIF is 2 to 5 seconds in length, which is
        perfect for posting on social feeds to help convert more people to
        customers, more quickly. Brands can create a close relationship with
        their audience with the right GIF, as it can allow your brand to share
        geniune and engaging content. You can also use them to highlight a key
        function or feature of your product.
      </Text>

      <Heading
        width={1}
        mt={5}
        textAlign="center"
        fontSize={[mobileH2, null, deskH2, null]}
        color={[brand.color.dkblue]}
      >
        2D & 3D Logo Design & Animated Logos
      </Heading>

      <Text
        width={1}
        mx={5}
        my={5}
        textAlign="left"
        fontSize={[mobileT2, mobileT1, deskT2, deskT2]}
        color={[brand.color.dkblue]}
      >
        If you are just starting your business or giving it a make-over, your
        logo is the first thing people see. We want to help you with your new
        look. Whether you are looking for luxury, fun, glamor, simplicity, or
        purely professional, we would love to help! Our artists will come up
        with several drafts for you to look over after our consultation to get a
        feel for what you want. You will then let us know your color preferences
        or ideas for the logo and any changes you would like to see. We will
        then finish up the design per your specifications and deliver it to you
        digitally so you have what you need to add it to your website, business
        cards, and any other marketing materials you may need.
      </Text>
    </Layout>
  );
};

export default GraphicPage;
