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
                        Alkenox Media & Entertainment is an independent branding and content creation company with a
                        focus on the digital experience. We create tailored, edgy, and untraditionally entertaining
                        content for  the promotion of your brand and it's products or services.
                    </P>

                    <P>
                        The main goal of content is to inform or educate, to entertain, to give some form of emotional
                        satisfaction, or to become socially valuable (ie. clickable, relatable, and shareable). Meeting
                        these requirements keeps your audience’s attention and motivates their interaction with your
                        brand. By connecting your brand with your audience through added entertainment value, you give
                        them a branded memory they will want to keep. This incites a stronger response, and desire, to
                        interact with your brand.
                    </P>

                    <H2>Our Values</H2>
                    <P>
                        Our goal is to indirectly advertise your business through branded stories that people want to
                        see because they are entertaining, fun, and out of the box from what they would normally expect.
                    </P>
                </Box>
            </DeskFrame1>
        </PageLayout>
    );
};

export default About;
