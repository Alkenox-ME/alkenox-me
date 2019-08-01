import * as React from 'react';
import PageLayout from '../components/molecules/PageLayout';
import DeskFrame1 from '../components/molecules/DeskFrame1';
import { Screen, Box } from '../components/atoms/grid';
import { List, Item, P, H1, H2, H3, H4 } from '../components/atoms/text';
import Slider from '../components/Slider';
import bg from '../static/images/bg-1.png';
import b1l from '../static/images/branding-1-l.png';
import b1r from '../static/images/branding-1-r.png';
import b2 from '../static/images/branding-2.png';
import b3 from '../static/images/branding-3.png';
import b4 from '../static/images/branding-4.png';
import b5 from '../static/images/branding-5.png';

const Branding: React.FC<{}> = () => {
    return (
        <PageLayout title={'Our Branding Service'}>
            <Screen position={'relative'} bg={`url(${bg}) center fixed`}>
                <Box
                    zindex={0}
                    left={'0'}
                    width={'100%'}
                    height={'100%'}
                    position={'absolute'}
                    bgsize={'contain'}
                    bg={`url(${b1l}) no-repeat local`}
                    bgposition={'left top'}
                />
                <H1 zindex={10}>Our Branding Service</H1>
                <Box
                    zindex={0}
                    right={'0'}
                    width={'100%'}
                    height={'100%'}
                    position={'absolute'}
                    bgsize={'contain'}
                    bg={`url(${b1r}) no-repeat local`}
                    bgposition={'right bottom'}
                />
            </Screen>
            <Screen position={'relative'} bg={`url(${bg}) center fixed`}>
                <Box lp={2} position={'absolute'} left={'0'}>
                    <H2 zindex={10}>Video Production</H2>
                    <P>
                        Videos are a great way to impart your brand's purpose and culture to your audience, quickly and
                        easily. Entertainment value equates to your video becoming more memorable and shareable, which
                        also makes your brand more popular and brings you that much closer to becoming a household name.
                    </P>
                </Box>
                <Box
                    zindex={0}
                    right={'0'}
                    width={'100%'}
                    height={'100%'}
                    position={'absolute'}
                    bgsize={'contain'}
                    bg={`url(${b2}) no-repeat local`}
                    bgposition={'right top'}
                />
            </Screen>
            <Screen position={'relative'} bg={`url(${bg}) center fixed`}>
                <Box lp={2} position={'absolute'} right={'0'}>
                    <H2 zindex={10}>Website Design & Development</H2>

                    <P>
                        We will design a unique website that best reflects and expresses your brand's personality. It
                        will aid in connecting your brand with your audience in a way that stands out from the crowd. It
                        will also act, not only as a portal for information, but as a way to engage your audience to
                        interact with your brand. In this way, your website will also give you a way to measure the
                        results of your campaigns.
                    </P>
                </Box>
                <Box
                    zindex={0}
                    left={'0'}
                    width={'100%'}
                    height={'100%'}
                    position={'absolute'}
                    bgsize={'contain'}
                    bg={`url(${b3}) no-repeat local`}
                    bgposition={'left bottom'}
                />
            </Screen>
            <Screen position={'relative'} bg={`url(${bg}) center fixed`}>
                <Box lp={2} position={'absolute'} right={'0'}>
                    <H2 zindex={10}>Logo Design</H2>
                    <P>
                        We will help you design your logo from scratch, or we can use a pre-existing concept as the base
                        for your design.
                    </P>
                    <P>Once the design has your final approval, we provide you with the basic amenities, such as:</P>
                    <List>
                        <Item>Business Card Design</Item>
                        <Item>Brochure Design</Item>
                        <Item>Letterheads</Item>
                        <Item>Envelopes</Item>
                        <Item>Labels</Item>
                    </List>
                    <P>We can also provide other amenities, such as:</P>
                    <List>
                        <Item>Novelty Items</Item>
                        <Item>Memorabilia</Item>
                        <Item>Product Packaging</Item>
                        <Item>and More...</Item>
                    </List>
                </Box>
                <Box
                    zindex={0}
                    left={'0'}
                    width={'100%'}
                    height={'100%'}
                    position={'absolute'}
                    bgsize={'contain'}
                    bg={`url(${b4}) no-repeat local`}
                    bgposition={'left top'}
                />
            </Screen>
        </PageLayout>
    );
};

export default Branding;
