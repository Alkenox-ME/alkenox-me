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
                        edgy, and untraditionally entertaining content for businesses large or small for the promotion
                        of your brand, product or service. Branding is who you are. Marketing is how you build
                        awareness. We can help with both! Your success is important to us.
                    </P>

                    <H2>Our Values</H2>
                    <P>
                        The main goal of content is to inform/educate, to entertain, give some form of emotional
                        satisfaction, or to become socially valuable while keeping your audience’s attention and
                        motivating their interaction with your brand. We add a cinematic quality to our work whenever
                        business through branded stories that people want to see because they are entertaining, fun, and
                        out of the box, you are essentially giving them an emotional memory, inciting a stronger
                        response / desire to share and interact with your brand.
                    </P>

                    <H2>What We Do</H2>
                    <P>
                        Because we create content, we offer a variety of services that play a part in the big picture of
                        your project.
                    </P>
                    <List>
                        <Item>• From Photography to VFX Editing & Motion Graphics</Item>
                    </List>
                </Box>
            </DeskFrame1>
        </PageLayout>
    );
};

export default About;
