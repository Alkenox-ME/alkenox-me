import * as React from 'react';
import PageLayout from '../components/molecules/PageLayout';
import DeskFrame1 from '../components/molecules/DeskFrame1';
import { Box } from '../components/atoms/grid';
import { List, Item, P, H1, H2, H3, H4 } from '../components/atoms/text';
import bg from '../static/images/bg-1.png';

const About: React.FC<{}> = () => {
    return (
        <PageLayout title={'About Us'}>
            <DeskFrame1 bg={`url(${bg}) center fixed`}>
                <Box>
                    <H1>About Us</H1>
                    <H2>Who We Are</H2>

                    <P>
                        Alkenox Media & Entertainment is a branding and content creation agency. We create tailored,
                        edgy, and untraditionally entertaining content for businesses large and small for the promotion
                        of their brand, product or service.
                    </P>

                    <H2>Our Values</H2>
                    <P>
                        The main goal of content is to educate, to entertain, or to become socially valuable to your
                        audience while motivating their interaction with your brand. We like to accomplish this by
                        indirectly advertising a business through branded stories that are entertaining, fun, and out of
                        the box. This way, you are essentially giving them an emotional memory that can incite a
                        stronger desire to share and interact with your brand.
                    </P>

                    <H2>What We Do</H2>
                    <P>
                        Because we create content, we offer a variety of services that play a part in the big picture of
                        your project.
                    </P>

                    <List>
                        <Item>• From Photography to VFX Editing & Motion Graphics</Item>
                        <Item>• Video projects short and long both scripted and unscripted</Item>
                        <Item>• Graphic Design and even 2D & 3D Animation</Item>
                    </List>

                    <P>Our team will help you make your project a reality.</P>
                    <P>No matter who you are.</P>

                    <List>
                        <Item>• An artist in need of a website or music video to help promote your work</Item>
                        <Item>
                            • An author who needs an audiobook that will bring your story to life through cinematic
                            soundscaping and voice actors
                        </Item>
                        <Item>
                            • A business with a physical product that needs to capture the hearts and minds of your
                            audience
                        </Item>
                    </List>

                    <P>We are here to help!</P>
                </Box>
            </DeskFrame1>
        </PageLayout>
    );
};

export default About;
