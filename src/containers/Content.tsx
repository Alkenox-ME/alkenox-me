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
                    Marketing builds awareness. But the content is what builds it to last. Your content (and
                    product/service quality) is what transforms your brand into a household name; rather than a passing
                    thought. To help aid you in this mission, we feel entertainment value with a cinematic polish raises
                    your content’s value. Your content becomes something more shareable and memorable to your audience,
                    thereby increasing the value of your brand.
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
                        Brands come in many forms, from the big conglomerate everyone knows, to the small business just
                        getting started, and the athlete or artist looking to engage with fans and sponsors worldwide.
                        Either way, you need a website that extends your brand’s personality to your target audience as
                        well as establish a way to connect with them and keep them involved.
                    </P>
                    <P>
                        We use cinematic techniques in production and cinematic polishing in post-production for a
                        sleek, professional, memorable and socially shareable results.
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
                        Audio Novel Production
                    </H2>
                    <P>
                        Some books don't require much to convey their stories, messages or lessons. But then there are
                        those novels that require a more cinematic approach. We offer all the bells and whistles for an
                        audio novel. Including true voice actors, a cinematic music bed, and full soundscaping. Let us
                        bring your novel to life.
                    </P>
                </Box>
                <Box
                    p={'0'}
                    right={'0'}
                    zindex={0}
                    width={'100%'}
                    height={'100%'}
                    position={'absolute'}
                    bgsize={'contain'}
                    bg={`url(${c3}) no-repeat local`}
                    bgposition={'right bottom'}
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
                        When you have a unique product, it’s only right to have unique graphics to package it in and to
                        promote it with. We will help you design your packaging and marketing materials from scratch,
                        from a concept, or build around your own artist’s designs.
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
