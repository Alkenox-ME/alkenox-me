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
                <P zindex={10}>
                    This is our reason for being. 65% of your audience are visual learners and content creation takes on
                    many forms. But not just any content will deliver returns in the form of brand loyalty, building a
                    reputation, generating leads and brand awareness. You need actionable information that has a long
                    shelf life and reinforces your brand.
                </P>
                <List zindex={10}>
                    <Item>Imagery (drawn or photographed)</Item>
                    <Item>Blogs, Vlogs & Podcasts</Item>
                    <Item>Videos (from Branded Stories to Commercials)</Item>
                    <Item>Animated Videos (2D & 3D) </Item>
                    <Item>Promotional Websites</Item>
                    <Item>Interactive Web Apps</Item>
                </List>
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
                        Pre-Production, Production, and Post Production are the three main parts of the video production
                        process. Our hand-picked team covers your project from beginning to end. We help you plan,
                        staff, and problem-solve through it all to get your product to the finish line.
                    </P>
                    <List>
                        <Item>Product / Service </Item>
                        <Item>Explanatory / Informative </Item>
                        <Item>Branded Story </Item>
                        <Item>Commercial</Item>
                    </List>
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
                    <H2 zindex={10}>Website Design & Development</H2>
                    <P>
                        We will design and develop your website using scalable javascript frameworks that add to your
                        site's security; as well as visually engaging aesthetics that will entertain your audience,
                        while disseminating important information.
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
                        Communicating messages visually by utilizing images and typography seems like it should be easy.
                        But there are many design elements that you can use in varying combinations to get your message
                        across. So many options and choices can make settling on a final design difficult. Allow us to
                        help you create a visually stimulating and enticing presentation to help motivate your audience
                        to interact with your brand.
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
        </PageLayout>
    );
};

export default Content;
