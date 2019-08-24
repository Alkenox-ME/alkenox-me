// eslint-disable-next-line
// @Flow
import React from 'react';

import PageLayout from '../components/molecules/PageLayout';
import { Flex, Box, Text, Image, Link, Heading } from 'rebass';
import Slider from '../components/Slider';
import bg from '../static/images/bg-1.png';
import c1l from '../static/images/content-1-l.png';
import c1r from '../static/images/content-1-r.png';
import c2 from '../static/images/content-2.png';
import c3 from '../static/images/content-3.png';
import c4 from '../static/images/content-4.png';
import c5 from '../static/images/content-5.png';

const Content = () => {
    return (
        <PageLayout title={'Content Creation'}>
            <Heading>Content Creation</Heading>
            <Text>
                Marketing builds awareness. But the content attached to your marketing campaign is what will makes the
                awareness last. Your content, and product/service quality, are what transforms your brand into a
                household name rather than a passing thought. To help aid you in this mission, we feel that giving your
                content a strong entertainment value with a cinematic polish, raises your content’s value. Your content
                becomes something more memorable, and therefore shareable, to your audience. The shareability of your
                brand increases the value of your brand.
            </Text>
            <Box>
                <Heading>Website Design & Development</Heading>
                <Text>
                    Brands come in many forms, from well-known conglomerates to small businesses that need a unique
                    online presence, or athletes looking to engage with fans and sponsors world-wide. Either way, you
                    need a website that extends your brand’s personality to your target audience, as well as establishes
                    a way to connect with them and keep them involved.
                </Text>
            </Box>
            <Box>
                <Heading>Video Production</Heading>
                <Text>
                    There are many great uses for videos, including the ability to quickly and effectively walk a
                    consumer through an overview of your product or service, and how it works.
                </Text>
                <Text>
                    A branded story that indirectly advertises your product or service, is a great way to entertain your
                    audience, while advertising to your consumers. Making the story something that is entertaining and
                    stimulating creates a memorable experience that naturally has your brand attached.
                </Text>
                <Text>
                    We use cinematic techniques in production and cinematic polishing in post-production for a sleek,
                    professional result. We use story-telling and/or motion graphics to raise the entertainment value of
                    your video which will yield memorable and socially shareable results.
                </Text>
            </Box>
            <Box>
                <Heading>Graphic Design</Heading>
                <Text>
                    When you have a unique product, it’s only right to have unique graphics for the packaging, and to
                    use for promotions. We will help you design your packaging and marketing materials from scratch,
                    from a concept, or build it around your own artist's designs.
                </Text>
            </Box>
        </PageLayout>
    );
};

export default Content;
