// Core
import React from "react";

// Styling
import { image, data } from "../components/n0x.vars";

// Components
import { PageLayout, colors, P, H1, H2 } from "../components/n0x.library";

// Actual Page
const Home = () => {
  return (
    <PageLayout
      pgTitle={`Home: ${data.name.company.trendy}`}
      pgDesc={null}
      color={props => props.theme.colors.tint.white[3]}
    >
      <H1 m="0">Alkenox</H1>
      <H2 m="0">Media & Entertainment</H2>
      <P py="2vh">
        Our goal is to help your project, brand, and/or product reach your
        end-user/audience while delivering as much of an immersed experience as
        possible. With professional grade components being implemented in
        consumer grade devices, our audience and users expect more out of their
        experience. Therefore we as co-creators must be vigilant in the quality
        and uniqueness of our work and our brand. It's quick and easy to grab a
        template but you will soon find that the modification options are
        limited and they may not truely reflect how you would like your
        brand/project presented. We find it is often better to build it from the
        ground up to ensure we can add or modify anything we need and be able to
        mold it to how we need it. Our boutique artists, writers, and composers
        offer unique exclusive work which helps things to feel less
        "cookie-cutter-ish" and thereby helping to stand out from the crowd.
      </P>
      <P py="2vh">
        Our passion is creating an end result that people can connect with or
        immerse themselves in. Something that is unique and "moon-glorious". We
        want to make everything feel like a work of art - and with technology
        growing the way that it is, we can.
      </P>
      <P py="2vh">
        Our mission is to make your vision as close to a reality as possible
        through standard or other exploratory means.
      </P>
    </PageLayout>
  );
};

export default Home;
