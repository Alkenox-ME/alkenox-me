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
                    <H1 p={'2em 0 0 0'}>About Us</H1>
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

                    <H2>Our Mission</H2>

                    <P>
                        Alkenox Media & Entertainment's mission is to help small companies grow their client base by
                        creating a shareable company image and digital content that is out of the box, motivates brand
                        interaction, and connects with their audience on an emotional/relateable level.
                    </P>

                    <H2>Core Values</H2>

                    <List p={'0 0 2em 0'}>
                        <Item>Treat all with respect</Item>
                        <Item>Quality in everything we do</Item>
                        <Item>Keep learning and growing in your craft.</Item>
                        <Item>Be professional.</Item>
                        <Item>Collaboration - Always share ideas, no matter how cheesy.</Item>
                        <Item>Experimentation is expected and allowed.</Item>

                        <Item>Accountabilty - We are all responsible for our part in every project.</Item>
                        <Item>Ownership - As independent contractors, we all must take initiative in our roles.</Item>
                        <Item>Teamwork - There is no "I" in Team.</Item>
                        <Item>Innovative Thinking is key to delivering our out of the box promise.</Item>
                        <Item>Have Fun - Extremely important for the cultivation of out of the box creativity.</Item>
                        <Item>Trust - </Item>
                        <Item>Commitment to our Clients - </Item>
                    </List>
                </Box>
            </DeskFrame1>
        </PageLayout>
    );
};

export default About;
