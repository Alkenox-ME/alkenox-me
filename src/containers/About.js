// Core
import React from "react";

// Styling
import { data, image } from "../components/n0x.vars";

// Components
import { PageLayout, P, H1, H5, Image } from "../components/n0x.library";

const About = () => {
  return (
    <PageLayout
      pgTitle={`Home: ${data.name.company.trendy}`}
      pgDesc={null}
      color={props => props.theme.colors.tint.white[3]}
    >
      <H1>About Us</H1>

      <Image lp={5} height={40} src={image.fg.yinYang} />

      <P pt={5}>
        Alkenox Media & Entertainment is an independent media production
        company, officially founded in 2018, in the greater Atlanta area. At its
        core, we are a brother and sister team that, much like yin and yang,
        find our strengths to be complimentary. After working with each other on
        various projects in video production, animation, and web development
        over a five year span, Alkenox-ME was the next logical step.
      </P>
      <H5>Now, down to business...</H5>
      <P>
        Our work is tailored to provide our clients with custom, high-quality,
        professional digital media services. To allow for this freedom, all of
        our services are offered a-la-cart or via custom bundling, because no
        two projects are ever really the same.
      </P>
      <P py={3}>
        Sight and Sound are the backbone of the user experience. Since one or
        both of these are always being stimulated, they are very important parts
        of sensory marketing and branding. Much like the opening sounds and
        images to a movie, you want your audience to feel the same kind of
        emotional connection with your business.
      </P>
      <P>
        But brands are not limited to big companies and well known products.
        People, small businesses, individual artists, and more can all have
        their brand defined and shared with the world. If you want help growing
        your business by enhancing your visibility, give us a call for a free
        consultation.
      </P>
    </PageLayout>
  );
};

export default About;
