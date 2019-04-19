import React from "react";
import { Link } from "@reach/router";
import { Flex, Text, Heading, Banner } from "../components/n0x.Bass";
import { Image } from "rebass";
import { n0x, base, image, data } from "../components/n0x.vars";
import { Layout } from "../components/n0x.elements";

const ArchImage =
  "https://github.com/alkenox/alkenox-me-images/blob/master/architect-architecture-black-and-white-1537008.jpg?raw=true";

const ProtoImage =
  "https://github.com/alkenox/alkenox-me-images/blob/master/black-black-and-white-close-up-1496139.jpg?raw=true";

const CodeImage =
  "https://github.com/alkenox/alkenox-me-images/blob/master/computer-technology-number-web-internet-line-1295472-pxhere.com.jpg?raw=true";

const MngImage =
  "https://github.com/alkenox/alkenox-me-images/blob/master/adult-business-data-1181316.jpg?raw=true";

const UxImage =
  "https://github.com/alkenox/alkenox-me-images/blob/master/business-camera-coffee-1509428.jpg?raw=true";

const UiImage =
  "https://github.com/alkenox/alkenox-me-images/blob/master/laptop-iphone-smartphone-mobile-screen-apple-753019-pxhere.com.jpg?raw=true";

const WebPage = () => {
  return (
    <Layout
      pgTitle="alkenox-me: Full Stack Web Development"
      image={`${image.bg.logo}`}
      copyYear={`${data.footer.year}`}
      copyCompany={`${data.footer.company}`}
      tint={n0x.tint.white}
    >
      <Flex p={5}>
        <Heading
          className="headingSz"
          width={[1]}
          mx="auto"
          mt={5}
          px={3}
          py={5}
          textAlign="center"
          fontSize={base.font.size.t1}
        >
          Full Stack Web Development
        </Heading>

        <Banner src={ArchImage} width={[1 / 2]} pl={5} height="100%" />

        <Text width={[1, 1, 3 / 4, 1 / 2]} p={5} fontSize={[2, 3, 4, 5]}>
          We build your website from the ground up, from frontend to backend,
          including databases. Everything is built based on your company's
          needs. Therefore, getting to know your business is a must. This way we
          can get a good understanding of your brand and how it should be
          perceived by your visitors.
        </Text>

        <Heading
          className="headingSz"
          width={[1]}
          mx="auto"
          mt={5}
          px={3}
          py={5}
          fontSize={[1, 1, 2, 4]}
          textAlign="center"
        >
          Building The Prototype
        </Heading>

        <Banner
          src={ProtoImage}
          alt="image2"
          width={[1]}
          height="100%"
          px={2}
          py="auto"
          mx="auto"
        />

        <Text
          width={[1]}
          px={5}
          py={5}
          my={3}
          mx="auto"
          fontSize={[2, 3, 4, 5]}
        >
          The first step when beginning any project is discussing your wants and
          needs with you. Based on what we gather about your company or brand,
          your answers to our questions, and intel we gather about your
          competition, we will put together a design concept to help you stand
          out from the crowd, beginning with a wireframe to help show you what
          the flow of your new website will look like and where your major
          pieces (important images, videos, and product information) will
          appear. You will work with one or more of our artists/designers to
          develop the overall look, style, and functionality of your site.
        </Text>

        <Heading
          className="headingSz"
          width={[1, 1, 1, 2 / 3]}
          mx="auto"
          mt={5}
          px={3}
          py={5}
          fontSize={[1, 1, 2, 4]}
          textAlign="center"
        >
          Programming
        </Heading>

        <Text
          width={[1, 1, 3 / 4, 1 / 2]}
          px={2}
          my="auto"
          mx="auto"
          fontSize={[2, 3, 4, 5]}
        >
          Once we have a prototype to build from, we can hand it over to our
          programming department where your custom design will become functional
          code.
        </Text>

        <Image
          alt="image3"
          src={CodeImage}
          width={[1, 1, 3 / 4, 1 / 2]}
          height="100%"
          px={2}
          py="auto"
          mx="auto"
          pb={5}
        />

        <Heading
          className="headingSz"
          width={[1, 1, 1, 2 / 3]}
          mx="auto"
          my={5}
          p={5}
          fontSize={[1, 1, 2, 4]}
          textAlign="center"
        >
          Website Management & SEO
        </Heading>

        <Banner
          src={MngImage}
          alt="image4"
          width={[1, 1, 3 / 4, 1 / 2]}
          px={2}
          py="auto"
          mx="auto"
        />

        <Text
          width={[1, 1, 3 / 4, 1 / 2]}
          px={2}
          my="auto"
          mx="auto"
          fontSize={[2, 3, 4, 5]}
        >
          After your design is up and running, we will manage your site for a
          minimum of six (6) months. This includes, at minimum, all of your
          site's basic needs. After the initial six month term, you may take
          your site and data to your own hosting service or in-house management
          team.
        </Text>

        <Text width={[1]} p={5} fontSize={[2, 3, 4, 5]}>
          After the initial six (6) month term you may take your site and data
          to your own hosting service or in-house management team.
        </Text>

        <Heading
          className="headingSz"
          width={[1, 1, 1, 2 / 3]}
          mx="auto"
          mt={5}
          px={3}
          py={5}
          fontSize={[1, 1, 2, 4]}
          textAlign="center"
        >
          Defining Your Users' Experience
        </Heading>

        <Image
          alt="image5"
          src={UxImage}
          width={[1, 1, 3 / 4, 1 / 2]}
          height="50%"
          px={2}
          py={5}
          mx="auto"
        />

        <Text
          width={[1, 1, 3 / 4, 1 / 2]}
          px={2}
          my="auto"
          mx="auto"
          fontSize={[2, 3, 4, 5]}
        >
          We collect data about your target user base and their preferences
          based on your projects goal. This data will help us shape a meaningful
          user interface that will allow for a more intriguing overall
          experience.
        </Text>

        <Heading
          className="headingSz"
          width={[1, 1, 1, 2 / 3]}
          mx="auto"
          mt={5}
          px={3}
          py={5}
          fontSize={[1, 1, 2, 4]}
          textAlign="center"
        >
          Crafting Your User Interface
        </Heading>

        <Text
          width={[1, 1, 3 / 4, 1 / 2]}
          px={2}
          my="auto"
          mx="auto"
          fontSize={[2, 3, 4, 5]}
        >
          Your user interface is the key to your user's heart. It is your brands
          first impression and a unique design can help your brand stand out
          from the crowd. What we strive to do for you here, is put the art back
          into website design so we can break the cycle of "clinical feeling
          websites", while still helping you to convey your brand's character,
          mission, and .
        </Text>

        <Image
          src={UiImage}
          alt="image6"
          width={[1, 1, 3 / 4, 1 / 2]}
          height="50%"
          px={2}
          py="auto"
          mx="auto"
          mb={5}
        />

        <Text
          width={1}
          mx="auto"
          textAlign="center"
          fontSize={5}
          my={5}
          color="red"
        >
          <Link to="/contact-us">Contact Us</Link>
          Today for a FREE Quote!
        </Text>
      </Flex>
    </Layout>
  );
};
export default WebPage;
