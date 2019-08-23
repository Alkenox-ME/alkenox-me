import * as React from 'react';
import PageLayout from '../components/molecules/PageLayout';
import DeskFrame1 from '../components/molecules/DeskFrame1';
import { Screen, Box } from '../components/atoms/grid';
import { List, Item, P, H1, H2, H3, H4 } from '../components/atoms/text';
import { Flex, Box, Text, Image, Link, Heading } from 'rebass';
import Slider from '../components/Slider';
import bg from '../static/images/bg-1.png';
import b1l from '../static/images/branding-1-l.png';
import b1r from '../static/images/branding-1-r.png';
import b2 from '../static/images/branding-2.png';
import b3 from '../static/images/branding-3.png';
import b4 from '../static/images/branding-4.png';
import b5 from '../static/images/branding-5.png';

const Branding: React.FC<{}> = () => {
    let shadow =
        '.2em .2em 0.25em rgba(0,0,0,1), -.2em .2em 0.25em rgba(0,0,0,1), .2em -.2em 0.25em rgba(0,0,0,1), -.2em -.2em 0.25em rgba(0,0,0,1)';
    return (
        <PageLayout title={'Our Branding Service'}>
            <Box>
                <Heading>Our Branding Service</Heading>
                <Text>
                    Branding, marketing and advertising are all tools that work together to help promote your business.
                    Branding is what your company believes in, it's reason for being, and how customers feel about your
                    business and products. Marketing embraces strategies to build awareness of your company's products
                    and services, while promoting and protecting the brand. Advertising is focused mostly on acquiring
                    customers and driving sales.
                </Text>
                <Text>
                    Building a strong brand takes time. For all of these to work together seamlessly, you need a brand
                    strategy in place to help promote long-term success. Make sure your company has a strong message and
                    focus that will resonate with customers. Once you are clear on your company's reason for being,
                    everything else will fall into place starting with:
                </Text>
                <ul>
                    <li>• A strong visual image (your logo) </li>
                    <li>• Your company's voice and personality (guided by its purpose)</li>
                    <li>
                        • Create brand standards for marketing materials (gives your brand consistency in the eyes of
                        your customers)
                    </li>
                    <li>
                        • Publish and promote a style guide to make sure all employees, contractors, and advertising and
                        marketing agencies you work with follow the brand's visual identity.
                    </li>
                </ul>
            </Box>
            <Box>
                <Heading>Logo Design</Heading>
                <Text>
                    We help you design your logo from scratch, or we can use a pre-existing concept as the base for your
                    design.
                </Text>
                <Box>
                    <Text>
                        Once the design has your final approval, we will provide you with the basic amenities, such as:
                    </Text>
                    <ul>
                        <li>Business Card Design</li>
                        <li>Brochure Design</li>
                        <li>Letterheads</li>
                        <li>Envelopes</li>
                        <li>Labels</li>
                    </ul>
                </Box>

                <Box>
                    <Text>We can also provide other amenities, such as:</Text>
                    <ul>
                        <li>Novelty Items</li>
                        <li>Memorabilia</li>
                        <li>Product Packaging</li>
                        <li>and More...</li>
                    </ul>
                </Box>
            </Box>
            <Box>
                <Heading>Website Design & Development</Heading>
                <Text>
                    We will design a unique website that best reflects and expresses your brand's personality. It will
                    aid in connecting your brand with your audience in a way that stands out from the crowd. It will
                    also act, not only as a portal for information, but as a way to engage your audience to interact
                    with your brand. In this way, your website will also give you a way to measure the results of your
                    campaigns.
                </Text>
            </Box>
            <Box>
                <Heading>Video Production</Heading>
                <Text>
                    Videos are a great way to impart your brand's purpose and culture to your audience, quickly and
                    easily. Entertainment value equates to your video becoming more memorable and shareable, which also
                    makes your brand more popular and brings you that much closer to becoming a household name.
                </Text>
            </Box>
        </PageLayout>
    );
};

export default Branding;
