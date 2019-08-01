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
                        As content creators, we offer a variety of services that play a part in the big picture of your
                        project.
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
                                <P p={'0'} m={'0'} tshadow={shadow}>
                                    From Photography, VFX Editing & Motion Graphics 
                                </P>
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
                                <P p={'0'} m={'0'} tshadow={shadow}>
                                    To Video Production short and long - both scripted and unscripted 
                                </P>
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
                                <P p={'0'} m={'0'} tshadow={shadow}>
                                    To Graphic Design and even 2D & 3D Animation
                                </P>
                            </Box>
                        </Box>
                    </Slider>

                    <P p={'0'} m={'0'}>
                        {' '}
                        Our team will help you make your project a reality.{' '}
                    </P>
                </Box>
            </DeskFrame1>

            <DeskFrame1 bg={`url(${bg})  fixed center`}>
                <P> No matter who you are.  </P>

                <Slider ms={5000}>
                    <Box
                        p={'0em'}
                        m={'0em'}
                        width={'80vw'}
                        height={'40vh'}
                        bg={`url(${artist})  scroll`}
                        bgposition={'center center'}
                    >
                        <Box m={'30vh 0 0 0'}>
                            <P p={'0'} m={'0'} tshadow={shadow}>
                                An artist in need of a website or music video to help promote your work 
                            </P>
                        </Box>
                    </Box>

                    <Box
                        p={'0em'}
                        m={'0em'}
                        width={'80vw'}
                        height={'40vh'}
                        bg={`url(${author})  scroll`}
                        bgposition={'center center'}
                    >
                        <Box m={'30vh 0 0 0'}>
                            <P p={'0'} m={'0'} tshadow={shadow}>
                                An author who needs an audiobook that will bring your story to life through cinematic
                                soundscaping and voice actors 
                            </P>
                        </Box>
                    </Box>

                    <Box
                        p={'0em'}
                        m={'0em'}
                        width={'80vw'}
                        height={'40vh'}
                        bg={`url(${product})  scroll`}
                        bgposition={'center center'}
                    >
                        <Box m={'30vh 0 0 0'}>
                            <P p={'0'} m={'0'} tshadow={shadow}>
                                A business with a physical product that needs to capture the hearts and minds of your
                                audience
                            </P>
                        </Box>
                    </Box>
                </Slider>

                <P>We are here to help!</P>
            </DeskFrame1>
        </PageLayout>
    );
};

export default Home;
