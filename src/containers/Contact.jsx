// eslint-disable-next-line
// @Flow
import React from "react";
import PageLayout from "../components/molecules/PageLayout";
import { Flex, Box, Text, Image, Link, Heading } from "rebass";
import bg1Png from "../static/images/bg-1.png";

const Contact = () => {
  return (
    <PageLayout title={"Contact Us"}>
      <Box>
        <Heading>Contact Us</Heading>
        <Box>
          <input type={"input"} placeholder={"Name"} />
        </Box>
        <Box>
          <input type={"input"} placeholder={"Email"} />
        </Box>
        <Box>
          <textarea type={"textarea"} placeholder={"Message"} />
        </Box>
      </Box>
    </PageLayout>
  );
};

export default Contact;
