import * as React from 'react';
import PageLayout from '../components/molecules/PageLayout';
import DeskFrame1 from '../components/molecules/DeskFrame1';
import { Box } from '../components/atoms/grid';
import { List, Item, P, H1, H2, H3, H4 } from '../components/atoms/text';
import bg from '../static/images/bg-1.png';
import logo from '../static/images/logo-landscape.png';
import Slider from '../components/Slider';
import React, { Component } from 'react';
import ReactPlayer from 'react-player';

const graphics = 'https://media.giphy.com/media/MVgLYGeuRP4JynEhNU/source.gif';
const vfx = 'https://media.giphy.com/media/2w5OEVjSb7f3Y9UQRr/source.gif';
const vidpro = 'https://media.giphy.com/media/8JQ9uF8Oe1Ktmmdd8o/source.gif';

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

                    <H3>What We Do</H3>
                    <P p={'1em 0'} m={'0 0 5vh 0'} lineheight={'1.5em'}>
                        We use art, story, and technology to enhance and differentiate your brand from the rest.
                        Everywhere you look, people are having digital experiences on computers, laptops, pads, cellular
                        devices, TVs, and gaming systems. It has become the way of life, to explore the world digitally,
                        before embarking on a physical interaction. We design for an emotional connection that motivates
                        exploration and interaction with your brand.
                    </P>

                    <Slider ms={5000}>
                        <Box
                            p={'0em'}
                            m={'0em'}
                            width={'80%'}
                            height={'90%'}
                            bg={`url(${vfx})  scroll`}
                            bgposition={'center center'}
                        >
                            <Box m={'45vh 0 0 0'}>
                                <H4 p={'0'} m={'0'} tshadow={shadow}>
                                    Title Sequences
                                </H4>
                            </Box>
                        </Box>

                        <Box
                            p={'0em'}
                            m={'0em'}
                            width={'80%'}
                            height={'90%'}
                            bg={`url(${vidpro})  scroll`}
                            bgposition={'center center'}
                        >
                            <Box m={'45vh 0 0 0'}>
                                <H4 p={'0'} m={'0'} tshadow={shadow}>
                                    3D Animation & Sound Design
                                </H4>
                            </Box>
                        </Box>

                        <Box
                            p={'0em'}
                            m={'0em'}
                            width={'80%'}
                            height={'90%'}
                            bg={`url(${graphics})  scroll`}
                            bgposition={'center center'}
                        >
                            <Box m={'45vh 0 0 0'}>
                                <H4 p={'0'} m={'0'} tshadow={shadow}>
                                    Animated GIFs
                                </H4>
                            </Box>
                        </Box>

                        <Box
                            p={'0em'}
                            m={'0em'}
                            width={'80%'}
                            height={'100%'}
                            style={{ background: 'rgba(0, 0, 0, 0)' }}
                        >
                            <ReactPlayer
                                url="https://github.com/Alkenox-ME/alkenox-me-videos/blob/master/trailer-mosaic.mp4?raw=true"
                                style={{ background: 'rgba(0, 0, 0, 0)' }}
                                width={'80%'}
                                height={'100%'}
                                volume={'.6'}
                                controls={'true'}
                            />
                            <H4 p={'0'} m={'25vh 0 0 0'} tshadow={shadow} position={'absolute'}>
                                "Mosaic" Movie Trailer
                            </H4>
                        </Box>

                        <Box p={'0em'} m={'0em'} width={'100%'} height={'100%'}>
                            <ReactPlayer
                                url="https://github.com/Alkenox-ME/alkenox-me-videos/blob/master/Robin%20Goodfellow-V2.mp4?raw=true"
                                width={'80%'}
                                height={'100%'}
                                volume={'.6'}
                                controls={'true'}
                            />
                            <H4 p={'0'} m={'25vh 0 0 0'} tshadow={shadow} position={'absolute'}>
                                "Robin Goodfellow" Movie Trailer
                            </H4>
                        </Box>

                        <Box p={'0em'} m={'0em'} width={'100%'} height={'100%'}>
                            <ReactPlayer
                                url="https://github.com/Alkenox-ME/alkenox-me-videos/blob/master/artefaektsLogoSequence.mp4?raw=true"
                                width={'80%'}
                                height={'100%'}
                                volume={'.6'}
                                controls={'true'}
                            />
                            <H4 p={'0'} m={'25vh 0 0 0'} tshadow={shadow} position={'absolute'}>
                                3D Animated Logo
                            </H4>
                        </Box>

                        <Box p={'0em'} m={'0em'} width={'100%'} height={'100%'}>
                            <ReactPlayer
                                url="https://github.com/Alkenox-ME/alkenox-me-videos/blob/master/The_Smile_Solution_Whitboard.mp4?raw=true"
                                width={'80%'}
                                height={'100%'}
                                volume={'.6'}
                                controls={'true'}
                            />
                            <H4 p={'0'} m={'25vh 0 0 0'} tshadow={shadow} position={'absolute'}>
                                Whiteboard Animation
                            </H4>
                        </Box>
                    </Slider>
                </Box>

                <Box></Box>
            </DeskFrame1>
        </PageLayout>
    );
};

export default Home;
