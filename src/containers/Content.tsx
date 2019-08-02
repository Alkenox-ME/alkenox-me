import * as React from 'react';
import PageLayout from '../components/molecules/PageLayout';
import DeskFrame1 from '../components/molecules/DeskFrame1';
import { Screen, Box } from '../components/atoms/grid';
import { List, Item, P, H1, H2, H3, H4 } from '../components/atoms/text';
import Slider from '../components/Slider';
import bg from '../static/images/bg-1.png';
import c1l from '../static/images/content-1-l.png';
import c1r from '../static/images/content-1-r.png';
import c2 from '../static/images/content-2.png';
import c3 from '../static/images/content-3.png';
import c4 from '../static/images/content-4.png';
import c5 from '../static/images/content-5.png';

const Content: React.FC<{}> = () => {
    return (
        <PageLayout title={'Content Creation'}>
            <Screen position={'relative'} bg={`url(${bg}) center fixed`}>
                <Box
                    p={'0'}
                    zindex={0}
                    width={'100%'}
                    height={'100%'}
                    position={'absolute'}
                    bgsize={'contain'}
                    bg={`url(${c1l}) no-repeat local`}
                    bgposition={'left bottom'}
                />
                <H1 zindex={10}>Content Creation</H1>
                <P zindex={10}>
                    Marketing builds awareness. But the content attached to your marketing campaign is what will makes
                    the awareness last. Your content, and product/service quality, are what transforms your brand into a
                    household name rather than a passing thought. To help aid you in this mission, we feel that giving
                    your content a strong entertainment value with a cinematic polish, raises your content’s value. Your
                    content becomes something more memorable, and therefore shareable, to your audience. The
                    shareability of your brand increases the value of your brand.
                </P>

                <Box
                    p={'0'}
                    zindex={0}
                    width={'100%'}
                    height={'100%'}
                    position={'absolute'}
                    bgsize={'contain'}
                    bg={`url(${c1r}) no-repeat local`}
                    bgposition={'right top'}
                />
            </Screen>
            <Screen position={'relative'} p={'0'} bg={`url(${bg}) center fixed`}>
                <Box p={'0 1.5em'} lp={2} position={'absolute'} right={'0'}>
                    <H2 p={'0'} m={'0'} zindex={10}>
                        Website Design & Development
                    </H2>
                    <P>
                        Brands come in many forms, from well-known conglomerates to small businesses that need a unique
                        online presence, or athletes looking to engage with fans and sponsors world-wide. Either way,
                        you need a website that extends your brand’s personality to your target audience, as well as
                        establishes a way to connect with them and keep them involved.
                    </P>
                </Box>
                <Box
                    p={'0'}
                    zindex={0}
                    width={'100%'}
                    height={'100%'}
                    position={'absolute'}
                    left={'0'}
                    bgsize={'contain'}
                    bg={`url(${c2}) no-repeat local`}
                    bgposition={'left top'}
                />
            </Screen>

            <Screen position={'relative'} bg={`url(${bg}) center fixed`}>
                <Box p={'0 1.5em'} lp={2} position={'absolute'} left={'0'}>
                    <H2 p={'0'} m={'0'} zindex={10}>
                        Video Production
                    </H2>
                    <P>
                        There are many great uses for videos, including the ability to quickly and effectively walk a
                        consumer through an overview of your product or service, and how it works.
                    </P>
                    <P>
                        A branded story that indirectly advertises your product or service, is a great way to entertain
                        your audience, while advertising to your consumers. Making the story something that is
                        entertaining and stimulating creates a memorable experience that naturally has your brand
                        attached.
                    </P>
                    <P>
                        We use cinematic techniques in production and cinematic polishing in post-production for a
                        sleek, professional result. We use story-telling and/or motion graphics to raise the
                        entertainment value of your video which will yield memorable and socially shareable results.
                    </P>
                </Box>
                <Box
                    p={'0'}
                    zindex={0}
                    right={'0'}
                    width={'100%'}
                    height={'100%'}
                    position={'absolute'}
                    bgsize={'contain'}
                    bg={`url(${c4}) no-repeat local`}
                    bgposition={'right top'}
                />
            </Screen>

            <Screen position={'relative'} bg={`url(${bg}) center fixed`}>
                <Box p={'0 1.5em'} lp={2} position={'absolute'} right={'0'}>
                    <H2 p={'0'} m={'0'} zindex={10}>
                        Graphic Design
                    </H2>
                    <P>
                        When you have a unique product, it’s only right to have unique graphics for the packaging, and
                        to use for promotions. We will help you design your packaging and marketing materials from
                        scratch, from a concept, or build it around your own artist's designs.
                    </P>
                </Box>
                <Box
                    p={'0'}
                    left={'0'}
                    zindex={0}
                    width={'100%'}
                    height={'100%'}
                    position={'absolute'}
                    bgsize={'contain'}
                    bg={`url(${c5}) no-repeat local`}
                    bgposition={'left top'}
                />
            </Screen>
        </PageLayout>
    );
};

export default Content;
