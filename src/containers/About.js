// Core
import React from "react";

// Styling
import { data, image } from "../components/n0x.vars";

// Components
import { PageLayout, P, H1, H2, Image, List, ListItem } from "../components/n0x.library";

const About = () => {
  return (
    <PageLayout
      pgTitle={`Home: ${data.name.company.trendy}`}
      pgDesc={null}
      color={props => props.theme.colors.tint.white[1]}
    >
      <H1>Who We Are</H1>
      <Image width="30%" height="10%" src={image.fg.yinYang} />
      <P py="2vh">
        Alkenox Media & Entertainment is a branding and content creation agency.
        We create tailored, edgy, and untraditionally entertaining content for
        businesses large or small for the promotion of your brand, your product
        or service, and your brand’s personality. Branding is who you are.
        Marketing is how you build awareness. We can help with both! Your
        success is important to us.
      </P>
      <H2>Our Values</H2>
      <P py="2vh">
        The main goal of content is to inform/educate, to entertain, give some
        form of emotional satisfaction, or to become socially valuable while
        keeping your audience’s attention and motivating their interaction with
        your brand. We add a cinematic quality to our work whenever possible
        because it helps to maintain the interest of audiences. By indirectly
        advertising your business through branded stories that people want to
        see because they are entertaining, fun, and out of the box from what
        they would normally expect, you are essentially giving them a memory
        they want to keep with your brand attached to it. Which tends to incite
        a stronger response and a desire to share and interact with your brand.
      </P>
      <H2>What We Do</H2>
      <P py="2vh">
        Because we create content, we offer a variety of services that play a
        part in the big picture of your project.
      </P>
      <List listStyle={ 'disc inside' } p={ '0 10vw'}>
        <ListItem>From Photography to VFX Editing & Motion Graphics</ListItem>
        <ListItem>Video projects short and long both scripted and unscripted</ListItem>
        <ListItem>Graphic Design and even 2D & 3D Animation</ListItem>
      </List>
      <P py="2vh" talignCenter tIndent={ 0 }>Our team will help you make your project a reality.</P>
      <P py="2vh" talignCenter tIndent={ 0 }>
        No matter who you are.
      </P>
      <List listStyle={ 'disc inside' } p={ '0 10vw'}>
        <ListItem>An artist in need of a website or music video to help
        promote your work</ListItem>
        <ListItem>An author who needs an audiobook that will bring your
        story to life through cinematic soundscaping and voice actors</ListItem>
        <ListItem>A business with a physical product that needs to capture the hearts and
        minds of your audience</ListItem>
      </List>
      <P py="2vh" talignCenter tIndent={ 0 }>We are here to help!</P>
    </PageLayout>
  );
};

export default About;
