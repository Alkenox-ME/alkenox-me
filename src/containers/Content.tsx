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
import c6 from '../static/images/content-6.png';
import c7 from '../static/images/content-7.png';
import c8 from '../static/images/content-8.png';

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
                <P>
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
                <Box lp={2} position={'absolute'} right={'0'}>
                    <H2 zindex={10}>Video Production</H2>
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
                        entertainment value of your video, which will yield memorable and socially shareable results.
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
                <Box lp={2} position={'absolute'} left={'0'}>
                    <H2 zindex={10}>Cinematic Audio Book Production</H2>
                    <P>
                        While standard audio books are great, they are usually done utilizing the bare minimum needed to
                        tell the story. We would like to take your novel to the next level using cinematic audio
                        techniques to tell your story. With these techniques, everyone, including the vision impaired,
                        would be able to be encompassed by your story, giving it a 3D audio feel.
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
                <Box lp={2} position={'absolute'} left={'0'}>
                    <H2 zindex={10}>Marketing & Memorabilia</H2>
                    <P>We develop designs for your merchandise or memorabilia including:</P>
                    <List>
                        <Item>Flyer Design </Item>
                        <Item>Novelty (Pins, Stickers, etc)</Item>
                        <Item>Merchandise (Mugs, Shirts, etc) </Item>
                        <Item>Poster Design </Item>
                        <Item>and More!</Item>
                    </List>
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
                <Box lp={2} position={'absolute'} right={'0'}>
                    <H2 zindex={10}>Game Audio</H2>
                    <P>
                        We are capable of handling all interactive audio needs; from soundscaping to music production.
                        Our goal is to give your game it's own signature sounds that will enhance your brand and give
                        your audience the best gaming experience possible. They will know your game when they hear it.
                    </P>
                    <List>
                        <Item>Interactive Sound-Scaping</Item>
                        <Item>Voice-Actors</Item>
                        <Item>Interactive Music Beds</Item>
                    </List>
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
                    bgposition={'left bottom'}
                />
            </Screen>
            <Screen position={'relative'} bg={`url(${bg}) center fixed`}>
                <Box lp={2} position={'absolute'} right={'0'}>
                    <H2 zindex={10}>Website Design & Development</H2>
                    <P>
                        We will design and develop your website using scalable javascript frameworks that add to your
                        site's security; as well as visually engaging aesthetics that will help to keep your audience's
                        attention.
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
                    bg={`url(${c6}) no-repeat local`}
                    bgposition={'left top'}
                />
            </Screen>
            <Screen position={'relative'} bg={`url(${bg}) center fixed`}>
                <Box lp={2} position={'absolute'} left={'0'}>
                    <H2 zindex={10}>Graphic Design</H2>
                    <P>
                        Graphic Design & Animation tailored to your brand and its message. We specialize in Logo Design,
                        2D & 3D Modeling, Motion Graphics and Animation. Graphic Design applies to several forms of
                        communication:
                    </P>
                    <List>
                        <Item>Visual Brand Identity </Item>
                        <Item>Marketing & Advertising Materials </Item>
                        <Item>User Interface (such as Web Design) </Item>
                        <Item>Publications (such as Books & Magazines) </Item>
                        <Item>Packaging </Item>
                        <Item>Motion Graphic Design (Animated Logos, Title Sequences, GIF's, etc.)</Item>
                        <Item>Art & Illustration (T-shirt Design, Motion Graphics, Infographics, Album Art, etc.)</Item>
                    </List>
                </Box>
                <Box
                    p={'0'}
                    right={'0'}
                    zindex={0}
                    width={'100%'}
                    height={'100%'}
                    position={'absolute'}
                    bgsize={'contain'}
                    bg={`url(${c7}) no-repeat local`}
                    bgposition={'right bottom'}
                />
            </Screen>
            <Screen position={'relative'} p={'0'} bg={`url(${bg}) center fixed`}>
                <Box lp={2} position={'absolute'} left={'0'}>
                    <H2 zindex={10}>Other Content</H2>
                    <P>
                        There are endless types of content and unique ideas to create. Talk to us about yours and we can
                        work together to create a plan.
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
                    bg={`url(${c8}) no-repeat local`}
                    bgposition={'right top'}
                />
            </Screen>
        </PageLayout>
    );
};

export default Content;
