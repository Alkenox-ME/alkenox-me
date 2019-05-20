// Core
import React from "react";

// Styling
import { image, data } from "../components/n0x.vars";

// Components
import { PageLayout, colors, H1 } from "../components/n0x.library";

// Actual Page
const Home = () => {
  return (
    <PageLayout
      pgTitle={`Home: ${data.name.company.trendy}`}
      pgDesc={null}
      color={props => props.theme.colors.tint.white[3]}
    >
      <H1>Home</H1>
    </PageLayout>
  );
};

export default Home;
