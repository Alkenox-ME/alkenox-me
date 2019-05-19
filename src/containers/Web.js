import React from "react";
import { data } from "../components/n0x.vars";
import {
  PageLayout,
  Box,
  TP1,
  P,
  H1,
  H2,
  Image,
  List,
  ListItem,
  colors
} from "../components/n0x.library";

const ArchImage =
  "https://github.com/alkenox/alkenox-me-images/blob/master/architect-architecture-black-and-white-1537008.jpg?raw=true";

const CodeImage =
  "https://github.com/Alkenox-ME/alkenox-me-images/blob/master/ai-artificial-intelligence-code-34676.jpg?raw=true";

const UxImage =
  "https://github.com/alkenox/alkenox-me-images/blob/master/business-camera-coffee-1509428.jpg?raw=true";

const UiImage =
  "https://github.com/Alkenox-ME/alkenox-me-images/blob/master/dark-future-futuristic-1840139.jpg?raw=true";

const Web = () => {
  return (
    <PageLayout
      pgTitle={`Home: ${data.name.company.trendy}`}
      pgDesc={null}
      color={colors.tint.white[3]}
    >
      <H1>Full Stack Web Development</H1>

      <Image src={ArchImage} alt="ArchImage" height="60vh" />

      <P pt="4%">
        Why should you have your website built by a professional instead of
        building it yourself at a DIY site, like Wix?
      </P>

      <P pt="4%">
        No matter what, the decision is yours. It is about making your decision
        wisely. The only way to do that is by arming yourself with information
        and focusing on what your website needs to function for your success.
        How it looks is always going to be less important than its
        functionality. But a good balance is always our goal.
      </P>

      <P pt="4%">
        The real question here isn't about the cost. It is "How much do you want
        to make?" DIY investment = $0. But you also get $0 return on that
        investment. The younger generation is internet savvy and therefore
        heavily reliant on it to give them their impression of your business. If
        you do not have an internet presence, or if your site is not well-made,
        you can lose out on many customer conversions because it is harder to
        trust a business that does not have a strong internet presence and
        personality. Essentially, your site is the equivalent to putting your
        best face forward. First impressions are everything, especially on the
        world wide web.
      </P>

      <P pt="4%">
        All websites have their limitations due to the platforms on which they
        were built. These limitations include, but are not limited to:
      </P>

      <Box lp={1} px="20%" pt="2%">
        <List lstyleDisc>
          <ListItem>
            Limitations on plugin choices available to improve the functionality
            of the website.
          </ListItem>
          <br />
          <ListItem>
            Plugins are limited in how much they can be customized.
          </ListItem>
          <br />
          <ListItem>
            Templates are limited in design flexibility because at some point,
            it becomes a complete reprogramming, to give it the design elements
            that you actually want.
          </ListItem>
          <br />
          <ListItem>
            If the template you chose and the platform it was built upon are not
            scalable with your business, you will need to pay more money for a
            complete re-design on a completely different platform.
          </ListItem>
          <br />
          <ListItem>
            DIY sites tend to be even more limited in design and functionality
            options than other platforms.
          </ListItem>
        </List>
      </Box>

      <P pt="4%">
        If you receive a quote of roughly $1,000 to build or re-design your
        site, it is probable that it is an existing template and there will be
        minimal alterations made to the original design. It will not be a fully
        custom website even if the claim is there. In most cases, it is only
        custom in that they replaced the logo, colors, added your images, and
        your choice of plugins to the existing template. In the end, your brand
        is specific and you want people to recognize it right away. But your
        brand is not just your logo. It has a personality, a mission, and it
        wants to reach out and interact with your potential clients.
      </P>
      <P pt="4%">
        Getting to know your business is a must in order to have a good
        understanding of your brand and how it should be portrayed. As full
        stack developers, we are familiar with every part of the web development
        process and work in smaller, well-rounded teams.
      </P>
      <P pt="4%">
        We build your website from the ground up based on your company's needs.
        Therefore, getting to know your business is a must in order to get a
        good understanding of your brand and how it should be portrayed. As full
        stack developers we are familiar with every part of the process, we work
        in smaller, well-rounded teams, and the need for lesser manpower means
        we can put your money to better use in other important areas.
      </P>

      <H2 pt="5%">Building The Prototype</H2>

      <P>
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
      </P>

      <H2 pt="5%">Crafting Your User Interface</H2>

      <Box lp={2} px="3%">
        <TP1>
          Your user interface is the key to your user's heart. It is your brands
          first impression and a unique design can help your brand stand out
          from the crowd. What we strive to do for you here, is put the art back
          into website design so we can break the cycle of "clinical feeling
          websites", while still helping you to convey your brand's personality
          and mission. You want your site to be eye-catching, interactive, and
          entertaining so that your visitors will want to come back again and
          again. We want to build that for you.
        </TP1>
      </Box>

      <Image lp={2} src={UiImage} alt="Ui Image" my="5%" height={50} />

      <H2 pt="5%">Programming</H2>

      <P>
        The reasons we moved away from traditional website building frameworks
        and decided to go with full-on programming using JavaScript frameworks
        include:
      </P>

      <Box lp={1} px="30%" pt="3%">
        <List lstyleDisc>
          <ListItem>Full Control over the design.</ListItem>
          <ListItem>
            Easily scalable with your business, right out of the box.
          </ListItem>
          <ListItem>
            JavaScript is, by nature, interactive and we wanted to give sites a
            modern and fun look and feel to their user-interface.
          </ListItem>
          <ListItem>
            These frameworks make the online forms/data input areas on your
            website more secure.
          </ListItem>
        </List>
      </Box>

      <Image
        lp={2}
        alt="image3"
        src={CodeImage}
        height={60}
        px="2%"
        py="5%"
        pb="2%"
      />

      <Box lp={2} px="3%">
        <TP1>
          Here at Alkenox, we prefer to program your site from the ground up.
          This way we have total control a and lot more freedom to get as
          creative as we want. Actual programming may take longer, but the
          over-all quality will be much better than what you will get from the
          traditional web building frameworks. Even if you move the management
          of your site to someone else, so long as they are familiar with the
          frameworks we used to build your site, they will have no problem with
          making changes.
        </TP1>
      </Box>

      <H2 pt="5%">Defining Your Users' Experience</H2>

      <Image lp={1} height={70} px="10%" pb="2%" src={UxImage} alt="image5" />

      <P>
        We collect data about your target user base, and their preferences,
        based on your projects goal. This data will help us shape a meaningful
        user interface that will allow for a more intriguing overall experience.
      </P>

      <H2 pt="5%">SEO & Website Management</H2>

      <P>
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
      </P>

      <P py="4%">
        After your design is up and running, we will manage your site for a
        minimum of six (6) months. This includes, at minimum, all of your site's
        basic needs by running common maintenance protocols, such as regular
        site backups, ensuring any plugins are up-to-date, running a database
        sweep, and doing routine website tests to check your site's performance,
        loading speed, and traffic numbers. After the initial six month term,
        you may take your site and data to your own hosting service or in-house
        management team, if you prefer.
      </P>
    </PageLayout>
  );
};

export default Web;
