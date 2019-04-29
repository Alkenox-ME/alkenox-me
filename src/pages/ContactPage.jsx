// Core
import React from "react";

// Styling
import { n0x, image, data } from "../components/n0x.vars";

// Components
import { PageLayout, T1 } from "../components/n0x.library";
import ContactForm from "../components/ContactForm";

// Page
const ContactPage = () => {
  return (
    <PageLayout
      pgTitle={`Contact Us: ${data.name.company.trendy}`}
      pgDesc={null}
      color={props => props.theme.colors.black}
      opacity={[0.9]}
    >
      <T1>Contact Us</T1>
      <ContactForm />
    </PageLayout>
  );
};

export default ContactPage;
