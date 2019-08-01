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
                <P zindex={10}>
                    Branding, marketing and advertising are all tools that work together to help promote your business.
                    Branding is what your company believes in, it's reason for being, and how customers feel about your
                    business and products. Marketing embraces strategies to build awareness of your company's products
                    and services, while promoting and protecting the brand. Advertising is focused mostly on acquiring
                    customers and driving sales.
                </P>
                <P zindex={10}>
                    Building a strong brand takes time. For all of these to work together seamlessly, you need a brand
                    strategy in place to help promote long-term success. Make sure your company has a strong message and
                    focus that will resonate with customers. Once you are clear on your company's reason for being,
                    everything else will fall into place starting with:
                </P>
                <List zindex={10}>
                    <Item>• A strong visual image (your logo) </Item>
                    <Item>• Your company's voice and personality (guided by its purpose)</Item>
                    <Item>
                        • Create brand standards for marketing materials (gives your brand consistency in the eyes of
                        your customers)
                    </Item>
                    <Item>
                        • Publish and promote a style guide to make sure all employees, contractors, and advertising and
                        marketing agencies you work with follow the brand's visual identity.
                    </Item>
                </List>
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
                    <H2 zindex={10}>Logo Design</H2>
                    <P>We help you design your logo from scratch or we can build it off of a pre-made concept.</P>
                    <P>
                        There are many other great uses for videos. For instance, you can't deny the fact that some
                        consumers understand more through visual aids rather than reading or hearing a description. A
                        video can quickly and effectively walk your audience through an overview of your product or
                        service and how it works.
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
                        Your website will likely be the first handshake between you and a consumer. Therefore, the
                        design and functionality of your user-interface is extremely important to entice new visitors to
                        become repeat visitors and more involved in your brand. It can even be used to yield a
                        measurable result of your marketing/advertising campaign.
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
                        Wether you are a new company or an old company looking to spruce up your brand or you have a new
                        product. We help you create your logo from scratch or build it using a previously created
                        concept.
                    </P>
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
