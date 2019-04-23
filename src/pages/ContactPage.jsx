// Core
import React from "react";

// Styling
import { n0x } from "../components/n0x.vars";
import { Heading } from "../components/n0x.Bass";

// Components
import { Layout } from "../components/n0x.elements";
import ContactForm from "../components/ContactForm";

// Page
const ContactPage = () => {
  return (
    <Layout pgTitle="alkenox-me: contact us" tint={n0x.tint.white}>
      <Heading
        mt={4}
        p={5}
        width={1}
        fontSize={[5, 5, 5, 6]}
        textAlign="center"
      >
        Contact Us
      </Heading>
      <ContactForm />
    </Layout>
  );
};

export default ContactPage;
