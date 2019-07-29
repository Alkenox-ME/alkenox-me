import * as React from 'react';
import styled, { css } from 'styled-components';
import { nox } from './theme/NoxTheme';
import { Box, Shape } from './atoms/grid';

const useInterval = (callback, delay) => {
    const savedCallback = React.useRef();

    // Remember the latest callback.
    React.useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    React.useEffect(() => {
        const tick = () => {
            savedCallback.current();
        };
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
};

const SSliderWrapper = styled.div`
    display: flex;
`;

interface ISliderSlide {
    active?: boolean;
}

const SSliderSlide = styled.div<ISliderSlide>`
    flex: 0 0 auto;
    opacity: ${props => (props.active ? 1 : 0)};
    transition: all 0.5s ease;
    width: 100%;
`;

interface ISliderProps {
    currentSlide: number;
}

const SSliderSlides = styled.div<ISliderProps>`
    display: flex;
    ${props =>
        props.currentSlide &&
        css`
            transform: translateX(-${props.currentSlide * 100}%);
        `};
    transition: all 0.5s ease;
`;

const Dot = styled.span`
    color: ${nox.main.color.fg.link[0]};
    font-size: 1.5em;
    cursor: pointer;
    text-shadow: ${nox.main.color.tint.black[1]};
    user-select: none;
    opacity: 0.5;
    transition: all 0.5s ease;
    :hover {
        opacity: 0.9;
        transition: all 0.5s ease;
    }
`;

const Dots = styled.span`
    left: 0;
    right: 0;
    bottom: 1em;
    text-align: center;
    width: 100%;
    z-index: 100;
`;

interface IProps {
    children: JSX.Element[];
    ms: number;
    p?: string;
}

const Slider = ({ children, ms, p }: IProps) => {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [delay, setDelay] = React.useState(ms);

    const activeSlide = children.map((slide, index) => (
        <SSliderSlide active={currentSlide === index} key={index}>
            {slide}
        </SSliderSlide>
    ));

    useInterval(() => {
        // Your custom logic here
        setCurrentSlide((currentSlide + 1) % activeSlide.length);
    }, delay);

    const handleMouseOver = e => {
        setDelay(null);
    };

    const handleMouseOut = e => {
        setDelay(ms);
    };

    const handleNext = e => {
        () => {
            setCurrentSlide((currentSlide + 1) % activeSlide.length);
        };
    };

    const handlePrev = e => {
        () => {
            setCurrentSlide((currentSlide - 1 + activeSlide.length) % activeSlide.length);
        };
    };

    return (
        <Box p={p} onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>
            <SSliderWrapper>
                <SSliderSlides currentSlide={currentSlide}>{activeSlide}</SSliderSlides>
            </SSliderWrapper>
            <Box p={'1em'} bottom={'0em'}>
                <Dots>
                    {Array(...Array(activeSlide.length)).map((val, index) => (
                        <Dot key={index} onClick={() => setCurrentSlide(index)} data-position={index}>
                            {index === currentSlide ? '● ' : '○ '}
                        </Dot>
                    ))}
                </Dots>
            </Box>
        </Box>
    );
};

export default Slider;
