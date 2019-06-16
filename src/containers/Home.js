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
      pgDesc={"Welcome to Alkenox Media & Entertainment"}
      color={props => props.theme.colors.alpha}
    >
      <span />
    </PageLayout>
  );
};

export default Home;
