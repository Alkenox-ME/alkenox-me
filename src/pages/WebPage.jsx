import React from "react";

import { Text, Banner, Box } from "../components/n0x.Bass";
import { Image, Heading } from "rebass";
import {
  n0x,
  image,
  data,
  brand,
  deskH1,
  deskH2,
  mobileH1,
  mobileH2,
  deskT1,
  deskT2,
  mobileT1,
  mobileT2
} from "../components/n0x.vars";
import { Layout } from "../components/n0x.elements";
import WebPricing from "../components/WebPricing";
import EveryWebPkg from "../components/EveryWebPkg";

const ArchImage =
  "https://github.com/alkenox/alkenox-me-images/blob/master/architect-architecture-black-and-white-1537008.jpg?raw=true";

const CodeImage =
  "https://github.com/Alkenox-ME/alkenox-me-images/blob/master/ai-artificial-intelligence-code-34676.jpg?raw=true";

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
      <Heading
        width={[1]}
        mt={5}
        py={5}
        textAlign="center"
        fontSize={[mobileH1, null, deskH1, null]}
        color={[brand.color.dkblue]}
      >
        Full Stack Web Development
      </Heading>

      <Banner src={ArchImage} width={[1]} position="top" crop="70vh" />

      <Text
        width={[1]}
        px={4}
        my={5}
        fontSize={[mobileT2, mobileT1, deskT1, deskT1]}
        color={[brand.color.dkblue]}
        textAlign="center"
      >
        Why should you have your website built by a professional instead of
      </Text>
      <Text
        width={[1]}
        px={4}
        my={1}
        fontSize={[mobileT2, mobileT1, deskT2, deskT2]}
        color={[brand.color.dkblue]}
      >
        No matter what, the decision is yours. It is about making your decision
        wisely. The only way to do that is by arming yourself with information
        and focusing on what your website needs to function for your success.
        How it looks is always going to be less important than its
        functionality. But a good balance is always our goal. If it's built
        right, it should only have to be built once.
      </Text>
      <Text
        width={[1]}
        px={4}
        my={5}
        fontSize={[mobileT2, mobileT1, deskT2, deskT2]}
        color={[brand.color.dkblue]}
      >
        The real question here isn't about the cost. It is "How much do you want
        to make?" DIY investment = $0. But you also get $0 return on that
        investment. If you want to make $300,000, then your investment would be
        3-4% of that, which is $9,000 to $12,000 with another $6,000 or 2% being
        spent on analytics, upgrades and promotions.
      </Text>
      <Text
        width={[1]}
        px={4}
        my={5}
        fontSize={[mobileT2, mobileT1, deskT2, deskT2]}
        color={[brand.color.dkblue]}
      >
        Creating a website without coding are your DIY sites like Wix, which are
        template driven like WordPress and Joomla. You have to put in the time
        the learn the system, and you are limited to whatever plugins or
        built-in options for functionality that they give you. Design options
        are also limited to whatever the templates will allow. A simple site
        that sticks to the basic design and functionality of the template you
        choose will typically cost you between $1,000 and $3,000 for a
        freelancer to build. If you get quoted $1,000, it is probable that the
        template will have minimal alterations from the original design. It will
        not be a fully custom website even if they say it is custom. It is only
        custom in that they geared it towards your company's logo and colors.
        However, these websites are also usually locked into the plugins that
        are available for those templates. So there are limitations for both
        styling and functionality that you have to consider. If you decide to
        have your site re-designed later, you may be forced to continue with the
        same platform you had chosen initially to keep your existing
        functionality; or you would have to go for a complete re-design in a
        completely different platform so that you can incorporate new design
        elements and functionality for modernization. A complete re-design would
        be a larger investment because it would be a brand new site. Especially
        if you are moving away from template based website builds to create a
        completely original one with a programmer. Can it give you everything
        you want and need for your business? For example, if your business is
        expected to grow, you need a site that is easily scalable. Of course,
        you also want your site to stand out, and DIY sites tend to be limited
        in what you can choose from in styling your website. Your brand is
        specific and you want people to recognize it right away. But your brand
        is not just your logo. It has a personality, a mission, and it wants to
        reach out and interact with your potential clients.
      </Text>

      <Text
        width={[1]}
        my={3}
        px={4}
        fontSize={[mobileT2, mobileT1, deskT2, deskT2]}
        color={[brand.color.dkblue]}
      >
        We build your website from the ground up based on your company's needs.
        Therefore, getting to know your business is a must in order to get a
        good understanding of your brand and how it should be portrayed. As full
        stack developers we are familiar with every part of the process, we work
        in smaller, well-rounded teams, and the need for lesser manpower means
        we can put your money to better use in other important areas.
      </Text>

      <Heading
        width={[1]}
        mt={5}
        px={4}
        py={5}
        fontSize={[mobileH2, null, deskH2, null]}
        textAlign="center"
        color={[brand.color.dkblue]}
      >
        Building The Prototype
      </Heading>

      <Text
        width={[1]}
        px={5}
        py={3}
        mx="auto"
        fontSize={[mobileT2, mobileT1, deskT2, deskT2]}
        color={[brand.color.dkblue]}
      >
        The first step, when beginning any project, is discussing your wants and
        needs with you. Based on what we learn about your company and brand,
        your answers to our questions, and the intel we gather about your
        competition, we will put together a design concept to help you stand out
        from the crowd. We begin with a defined logo, or a logo re-design, if
        that is what your brand needs. Then a wireframe to help show you what
        the flow of your new website will look like and where your major pieces
        (important images, videos, and product information) will appear. You
        will work with one or more of our artists/designers to develop the
        overall look, style, and functionality of your site.
      </Text>

      <Heading
        width={[1]}
        mx={5}
        mt={5}
        px={3}
        py={5}
        fontSize={[mobileH2, null, deskH2, null]}
        textAlign="center"
        color={[brand.color.dkblue]}
      >
        Crafting Your User Interface
      </Heading>

      <Text
        width={[1, null, 1 / 2, null]}
        px={5}
        my="auto"
        mx="auto"
        fontSize={[mobileT2, mobileT1, deskT2, deskT2]}
        color={[brand.color.dkblue]}
      >
        Your user interface is the key to your user's heart. It is your brands
        first impression and a unique design can help your brand stand out from
        the crowd. What we strive to do for you here, is put the art back into
        website design so we can break the cycle of "clinical feeling websites",
        while still helping you to convey your brand's personality and mission.
        You want your site to be eye-catching, interactive, and entertaining so
        that your visitors will want to come back again and again. We want to
        build that for you.
      </Text>

      <Image
        src={UiImage}
        alt="Ui Image"
        width={[1, null, 1 / 2, null]}
        crop="50vh"
        px={5}
        py={5}
        mx="auto"
        color={[brand.color.dkblue]}
      />

      <Heading
        width={[1]}
        mx={"auto"}
        mt={5}
        px={3}
        py={5}
        fontSize={[mobileH2, null, deskH2, null]}
        textAlign="center"
        color={[brand.color.dkblue]}
      >
        Programming
      </Heading>

      <Text
        width={[1]}
        px={5}
        my={4}
        mx="auto"
        fontSize={[mobileT2, mobileT1, deskT2, deskT2]}
        color={[brand.color.dkblue]}
      >
        The reasons we moved away from traditional website building frameworks
        and decided to go with full-on programming using JavaScript frameworks
        include:
      </Text>

      <Box
        width={2 / 3}
        fontSize={[brand.font.size.text.list]}
        mx="auto"
        mt={3}
        color={[brand.color.dkblue]}
      >
        <li>Full Control over the design.</li>
        <br />
        <li>Easily scalable with your business, right out of the box.</li>
        <br />
        <li>
          JavaScript is, by nature, interactive and we wanted to give sites a
          modern and fun look and feel to their user-interface.
        </li>
        <br />
        <li>
          These frameworks make the online forms/data input areas on your
          website more secure.
        </li>
      </Box>

      <Banner
        alt="image3"
        src={CodeImage}
        width={[1, 1, 3 / 4, 1 / 2]}
        crop="60vh"
        px={2}
        py={5}
        alignSelf="center"
        pb={5}
        color={[brand.color.dkblue]}
      />

      <Text
        width={[1]}
        px={5}
        pb={5}
        mx="auto"
        fontSize={[mobileT2, mobileT1, deskT2, deskT2]}
        color={[brand.color.dkblue]}
      >
        Here at Alkenox, we prefer to program your site from the ground up. This
        way we have total control and lot of freedom to get as creative as we
        want. Actual programming may take longer, but the over-all quality will
        be much better than what you will get from the traditional web building
        frameworks. Even if you move the management of your site to someone
        else, so long as they are familiar with the frameworks we used to build
        your site, they will have no problem with making changes.
      </Text>

      <Heading
        width={[1, 1, 1, 2 / 3]}
        mx="auto"
        mt={5}
        px={3}
        py={5}
        fontSize={[mobileH2, null, deskH2, null]}
        textAlign="center"
        color={[brand.color.dkblue]}
      >
        Defining Your Users' Experience
      </Heading>

      <Banner
        alt="image5"
        src={UxImage}
        width={[1, null, 1 / 2, null]}
        crop="50vh"
        px={5}
        py={5}
        mx="auto"
        color={[brand.color.dkblue]}
      />

      <Text
        width={[1, null, 1 / 2, null]}
        px={5}
        my="auto"
        mx="auto"
        fontSize={[mobileT2, mobileT1, deskT2, deskT2]}
        color={[brand.color.dkblue]}
      >
        We collect data about your target user base, and their preferences,
        based on your projects goal. This data will help us shape a meaningful
        user interface that will allow for a more intriguing overall experience.
      </Text>

      <Heading
        width={[1]}
        mx="auto"
        mt={5}
        px={3}
        py={5}
        fontSize={[mobileH2, null, deskH2, null]}
        textAlign="center"
        color={[brand.color.dkblue]}
      >
        SEO & Website Management
      </Heading>

      <Text
        width={[1]}
        px={5}
        my="auto"
        fontSize={[mobileT2, mobileT1, deskT2, deskT2]}
        color={[brand.color.dkblue]}
      >
        The main reason you build a website for your brand or business is, in
        part, to make it more official. Having a digital footprint on the web
        that is secure and professional is almost mandatory these days to gain
        the trust of your customers. If you don't have a website, people tend to
        question your business' validity. SEO, or Search Engine Optimization, is
        a necessary part of every website's build. Anyone in the web building
        community has to know how to make your website show up in at least the
        most popular search engines. If SEO is not a part of what they are able
        to offer you, it might be time to look elsewhere. The optimization
        begins in the verbage, and the programming of your site, so that
        keywords are picked up by the search engines. Giving you more visibility
        is the whole reason why a website is born.
      </Text>

      <Text
        width={[1]}
        px={5}
        my={5}
        fontSize={[mobileT2, mobileT1, deskT2, deskT2]}
        color={[brand.color.dkblue]}
      >
        After your design is up and running, we will manage your site for a
        minimum of six (6) months. This includes, at minimum, all of your site's
        basic needs by running common maintenance protocols, such as regular
        site backups, ensuring any plugins are up-to-date, running a database
        sweep, and doing routine website tests to check your site's performance,
        loading speed, and traffic numbers. After the initial six month term,
        you may take your site and data to your own hosting service or in-house
        management team, if you prefer.
      </Text>

      <EveryWebPkg />
      <br />
      <WebPricing />
    </Layout>
  );
};
export default WebPage;
