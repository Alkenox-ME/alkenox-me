// Core
import React from "react";

// Styling
import { n0x, image, data } from "../components/n0x.vars";

// Components
import { PageLayout, H1, colors } from "../components/n0x.library";
import ContactForm from "../components/ContactForm";

// Page
const NotFound = () => {
  return (
    <PageLayout
      pgTitle={`Contact Us: ${data.name.company.trendy}`}
      pgDesc={null}
      color={colors.tint.white[3]}
    >
      <H1>Wuh Oh!</H1>
    </PageLayout>
  );
};

export default NotFound;
