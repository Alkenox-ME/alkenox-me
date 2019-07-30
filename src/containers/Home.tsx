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
    return (
        <PageLayout title={'Home'}>
            <DeskFrame1 bg={`url(${bg})  fixed center`}>
                <img src={logo} alt="" width={'100%'} height={'100%'} />
            </DeskFrame1>

            <DeskFrame1 bg={`url(${bg})  fixed center`}>
                <Box>
                    <Box p={0} size={'1em'}>
                        <H1 lineheight={'.5em'}>Alkenox</H1>
                    </Box>
                    <Box p={0} size={'0.5em'}>
                        <H1 lineheight={'.5em'}>Media & Entertainment, LLC.</H1>
                    </Box>
                    <P>
                        As content creators, we offer a variety of services that play a part in the big picture of your
                        project.
                    </P>

                    <Slider ms={5000}>
                        <Box
                            p={'0em'}
                            m={'0em'}
                            width={'60vw'}
                            height={'50vh'}
                            bg={`url(${vfx})  scroll`}
                            bgposition={'center center'}
                        >
                            <Box bg={'rgba(0,0,0,0.5)'}>
                                <H4>From Photography, VFX Editing & Motion Graphics </H4>
                            </Box>
                        </Box>

                        <Box
                            p={'0em'}
                            m={'0em'}
                            width={'60vw'}
                            height={'50vh'}
                            bg={`url(${vidpro})  scroll`}
                            bgposition={'center center'}
                        >
                            <Box bg={'rgba(0,0,0,0.5)'}>
                                <H4>To Video Production short and long - both scripted and unscripted </H4>
                            </Box>
                        </Box>

                        <Box
                            p={'0em'}
                            m={'0em'}
                            width={'60vw'}
                            height={'50vh'}
                            bg={`url(${graphics})  scroll`}
                            bgposition={'center center'}
                        >
                            <Box bg={'rgba(0,0,0,0.5)'}>
                                <H4>To Graphic Design and even 2D & 3D Animation</H4>
                            </Box>
                        </Box>
                    </Slider>

                    <P> Our team will help you make your project a reality. </P>
                </Box>
            </DeskFrame1>

            <DeskFrame1 bg={`url(${bg})  fixed center`}>
                <P> No matter who you are.  </P>

                <Slider ms={5000}>
                    <Box p={'0em'} m={'0em'} width={'50vw'} height={'50vh'} bg={`url(${artist})  scroll center`}>
                        <Box lineheight={'2em'} bg={'rgba(0,0,0,0.5)'}>
                            <H4>An artist in need of a website or music video to help promote your work </H4>
                        </Box>
                    </Box>

                    <Box p={'0em'} m={'0em'} width={'50vw'} height={'50vh'} bg={`url(${author})  scroll center`}>
                        <Box lineheight={'2em'} bg={'rgba(0,0,0,0.5)'}>
                            <H4>
                                An author who needs an audiobook that will bring your story to life through cinematic
                                soundscaping and voice actors 
                            </H4>
                        </Box>
                    </Box>

                    <Box p={'0em'} m={'0em'} width={'50vw'} height={'50vh'} bg={`url(${product})  scroll center`}>
                        <Box lineheight={'2em'} bg={'rgba(0,0,0,0.5)'}>
                            <H4>
                                A business with a physical product that needs to capture the hearts and minds of your
                                audience
                            </H4>
                        </Box>
                    </Box>
                </Slider>

                <P>We are here to help!</P>
            </DeskFrame1>
        </PageLayout>
    );
};

export default Home;
