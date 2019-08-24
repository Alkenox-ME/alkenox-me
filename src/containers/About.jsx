// eslint-disable-next-line
// @Flow
import React from 'react';
import PageLayout from '../components/molecules/PageLayout';
import { Flex, Box, Text, Image, Link, Heading } from 'rebass';
import bg from '../static/images/bg-1.png';

const About = () => {
    return (
        <PageLayout title={'About Us'}>
            <Box>
                <Heading>About Us</Heading>
                <Heading>Who We Are</Heading>
                <Text>
                    Alkenox Media & Entertainment is an independent branding and content creation company with a focus
                    on the digital experience. We create tailored, edgy, and untraditionally entertaining content for 
                    the promotion of your brand and it's products or services.
                </Text>

                <Text>
                    The main goal of content is to inform or educate, to entertain, to give some form of emotional
                    satisfaction, or to become socially valuable (ie. clickable, relatable, and shareable). Meeting
                    these requirements keeps your audience’s attention and motivates their interaction with your brand.
                    By connecting your brand with your audience through added entertainment value, you give them a
                    branded memory they will want to keep. This incites a stronger response, and desire, to interact
                    with your brand.
                </Text>

                <Heading>Our Mission</Heading>

                <Text>
                    Alkenox Media & Entertainment's mission is to help small companies grow their client base by
                    creating a shareable company image and digital content that is out of the box, motivates brand
                    interaction, and connects with their audience on an emotional/relateable level.
                </Text>

                <Heading>Core Values</Heading>

                <ul>
                    <li>Commitment to our clients</li>
                    <li>Quality in everything we do</li>
                    <li>Keep learning, growing and evolving</li>
                    <li>Be professional, but be real</li>
                    <li>Share and Listen to all ideas</li>
                    <li>Experimentation is encouraged</li>
                    <li>We are all responsible</li>
                    <li>Work as a team</li>
                    <li>Have fun doing what you love</li>
                    <li>Trust is everything</li>
                    <li>Treat everyone with respect</li>
                </ul>
            </Box>
        </PageLayout>
    );
};

export default About;
