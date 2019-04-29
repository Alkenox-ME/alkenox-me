import React from "react";
import { Flex, Text, Banner, Box } from "../components/n0x.Bass";
import { n0x, brand, data } from "../components/n0x.vars";
import { PageLayout, T, T1, T2, Img, List, ListItem } from "../components/n0x.library";
import WebPricing from "../components/WebPricing";
import EveryWebPkg from "../components/EveryWebPkg";

const ArchImage =
  "https://github.com/alkenox/alkenox-me-images/blob/master/architect-architecture-black-and-white-1537008.jpg?raw=true";

const ProtoImage =
  "https://github.com/alkenox/alkenox-me-images/blob/master/black-black-and-white-close-up-1496139.jpg?raw=true";

const CodeImage =
  "https://github.com/Alkenox-ME/alkenox-me-images/blob/master/ai-artificial-intelligence-code-34676.jpg?raw=true";

const MngImage =
  "https://github.com/alkenox/alkenox-me-images/blob/master/adult-business-data-1181316.jpg?raw=true";

const UxImage =
  "https://github.com/alkenox/alkenox-me-images/blob/master/business-camera-coffee-1509428.jpg?raw=true";

const UiImage =
  "https://github.com/alkenox/alkenox-me-images/blob/master/laptop-iphone-smartphone-mobile-screen-apple-753019-pxhere.com.jpg?raw=true";

const WebPage = () => {
  return (
    <PageLayout
      pgTitle={`Home: ${data.name.company.trendy}`}
      pgDesc={null}
      color={props => props.theme.colors.black}
      opacity={[.9]}
    >
      <T1>
        Full Stack Web Development
      </T1>

      <Banner src={ArchImage} width={[1]} position="top" crop="70vh" />

      <T>
        Why should you have your website built by a professional instead of
        building it yourself at a DIY site, like Wix? There is nothing saying
        that you can't. You have to decide for yourself if your business is
        worth the investment and if it needs more than a DYI site can provide.
        Can it give you everything you want and need for your business? For
        example, if your business is expected to grow, you need a site that is
        easily scalable. Of course, you also want your site to stand out, and
        DIY sites tend to be limited in what you can choose from in styling your
        website. Your brand is specific and you want people to recognize it
        right away. But your brand is not just your logo. It has a personality,
        a mission, and it wants to reach out and interact with your potential
        clients.
      </T>

      <T>
        We build your website from the ground up based on your company's needs.
        Therefore, getting to know your business is a must in order to get a
        good understanding of your brand and how it should be portrayed. As full
        stack developers we are familiar with every part of the process, we work
        in smaller, well-rounded teams, and the need for lesser manpower means
        we can put your money to better use in other important areas.
      </T>

      <T2>
        Building The Prototype
      </T2>

      <T>
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
      </T>

      <T2>
        Crafting Your User Interface
      </T2>


      <T>
        Your user interface is the key to your user's heart. It is your brands
        first impression and a unique design can help your brand stand out
        from the crowd. What we strive to do for you here, is put the art back
        into website design so we can break the cycle of "clinical feeling
        websites", while still helping you to convey your brand's personality
        and mission. You want your site to be eye-catching, interactive, and
        entertaining so that your visitors will want to come back again and
        again. We want to build that for you.
      </T>

      <Img
        src={UiImage}
        alt="Ui Image"
        width={[1, 1, 3 / 4, 1 / 2]}
        py="auto"
        mx="auto"
        mb={5}
        color={[brand.color.dkblue]}
      />

      <T2>
        Programming
      </T2>

      <T>
        The reasons we moved away from traditional website building frameworks
        and decided to go with full-on programming using JavaScript frameworks
        include:
      </T>

      <List>
        <ListItem>Full Control over the design.</ListItem>
        <br />
        <ListItem>Easily scalable with your business, right out of the box.</ListItem>
        <br />
        <ListItem>
          JavaScript is, by nature, interactive and we wanted to give sites a
          modern and fun look and feel to their user-interface.
        </ListItem>
        <br />
        <ListItem>
          These frameworks make the online forms/data input areas on your
          website more secure.
        </ListItem>
      </List>

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

      <T>
        Here at Alkenox, we prefer to program your site from the ground up. This
        way we have total control and lot of freedom to get as creative as we
        want. Actual programming may take longer, but the over-all quality will
        be much better than what you will get from the traditional web building
        frameworks. Even if you move the management of your site to someone
        else, so long as they are familiar with the frameworks we used to build
        your site, they will have no problem with making changes.
      </T>

      <T2>
        Defining Your Users' Experience
      </T2>

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

      <T>
        We collect data about your target user base, and their preferences,
        based on your projects goal. This data will help us shape a meaningful
        user interface that will allow for a more intriguing overall experience.
      </T>

      <T2>
        SEO & Website Management
      </T2>

      <T>
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
      </T>

      <T>
        After your design is up and running, we will manage your site for a
        minimum of six (6) months. This includes, at minimum, all of your site's
        basic needs by running common maintenance protocols, such as regular
        site backups, ensuring any plugins are up-to-date, running a database
        sweep, and doing routine website tests to check your site's performance,
        loading speed, and traffic numbers. After the initial six month term,
        you may take your site and data to your own hosting service or in-house
        management team, if you prefer.
      </T>

      <EveryWebPkg />
      <WebPricing />
    </PageLayout>
  );
};
export default WebPage;
