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
                    <P>
                        Alkenox Media & Entertainment is a branding and content creation agency. We create tailored,
                        edgy, and untraditionally entertaining content for businesses large and small for the promotion
                        of their brand, product or service. 
                    </P>
                    <P>
                        The main goal of content is to educate, to entertain, or to become socially valuable to your
                        audience while motivating their interaction with your brand. We like to accomplish this by
                        indirectly advertising a business through branded story-telling that people want to see and
                        experience because they are entertaining, fun, and out of the box. This way, you are essentially
                        giving them a memory they want to keep and something they can talk or laugh about with others.
                        In the end, it incites a stronger desire to share and interact with your brand voluntarily. No
                        force feeding necessary.
                    </P>
                </Box>
            </DeskFrame1>
        </PageLayout>
    );
};

export default About;
