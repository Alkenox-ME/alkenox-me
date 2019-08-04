import * as React from 'react';
import PageLayout from '../components/molecules/PageLayout';
import DeskFrame1 from '../components/molecules/DeskFrame1';
import { Box } from '../components/atoms/grid';
import { List, Item, P, H1, H2, H3, H4 } from '../components/atoms/text';
import bg from '../static/images/bg-1.png';
import logo from '../static/images/logo-landscape.png';
import Slider from '../components/Slider';

const graphics = 'https://media.giphy.com/media/8JQ9uF8Oe1Ktmmdd8o/source.gif';
const vfx = 'https://media.giphy.com/media/2w5OEVjSb7f3Y9UQRr/source.gif';
const vidpro = 'https://media.giphy.com/media/229roNqcyGIZNfWCfj/source.gif';
const artist =
    'https://github.com/Alkenox-ME/alkenox-me-images/blob/master/acoustic-guitar-cellphone-close-up-1164763.jpg?raw=true';
const product =
    'https://github.com/Alkenox-ME/alkenox-me-images/blob/master/apps-business-cellular-telephone-278998.jpg?raw=true';
const author = 'https://github.com/Alkenox-ME/alkenox-me-images/blob/master/audiobook-3106986.jpg?raw=true';

const Home: React.FC<{}> = () => {
    let shadow =
        '0.1em 0.1em 0.5em rgba(0,0,0,1), -0.1em 0.1em 0.5em rgba(0,0,0,1), 0.1em -0.1em 0.5em rgba(0,0,0,1), -0.1em -0.1em 0.5em rgba(0,0,0,1)';
    return (
        <PageLayout title={'Home'}>
            <DeskFrame1 bg={`url(${bg})  fixed center`}>
                <img src={logo} alt="" width={'100%'} height={'100%'} />
            </DeskFrame1>

            <DeskFrame1 bg={`url(${bg})  fixed center`}>
                <Box>
                    <Box p={'0'} m={'0'} size={'1em'}>
                        <H1 p={'0'} m={'0'} lineheight={'1em'}>
                            Alkenox
                        </H1>
                        <H1 p={'0'} m={'0'} size={'1em'} lineheight={'1em'}>
                            Media & Entertainment, LLC.
                        </H1>
                    </Box>
                    <P p={'1em 0'} m={'0'} lineheight={'1.4em'}>
                        We use art, story, and technology to enhance and differentiate your brand from the rest.
                        Everywhere you look, people are having digital experiences on computers, laptops, pads, cellular
                        devices, TVs, and gaming systems. It has become the way of life, to explore the world digitally
                        before interacting with it in the real world. We design for an emotional connection that
                        motivates exploration and interaction with your brand.
                    </P>

                    <Slider ms={5000}>
                        <Box
                            p={'0em'}
                            m={'0em'}
                            width={'80vw'}
                            height={'40vh'}
                            bg={`url(${vfx})  scroll`}
                            bgposition={'center center'}
                        >
                            <Box m={'30vh 0 0 0'}>
                                <H4 p={'0'} m={'0'} tshadow={shadow}>
                                    Photography & Motion Graphics 
                                </H4>
                            </Box>
                        </Box>

                        <Box
                            p={'0em'}
                            m={'0em'}
                            width={'80vw'}
                            height={'40vh'}
                            bg={`url(${vidpro})  scroll`}
                            bgposition={'center center'}
                        >
                            <Box m={'30vh 0 0 0'}>
                                <H4 p={'0'} m={'0'} tshadow={shadow}>
                                    Video Production & VFX Editing 
                                </H4>
                            </Box>
                        </Box>

                        <Box
                            p={'0em'}
                            m={'0em'}
                            width={'80vw'}
                            height={'40vh'}
                            bg={`url(${graphics})  scroll`}
                            bgposition={'center center'}
                        >
                            <Box m={'30vh 0 0 0'}>
                                <H4 p={'0'} m={'0'} tshadow={shadow}>
                                    Graphic Design & 3D Animation
                                </H4>
                            </Box>
                        </Box>
                    </Slider>

                    <P p={'0'} m={'0'}>
                        .
                    </P>
                </Box>
            </DeskFrame1>
        </PageLayout>
    );
};

export default Home;
