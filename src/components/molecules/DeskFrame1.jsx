// eslint-disable-next-line
// @Flow
import React from 'react';
import { Box, Screen, Shape } from '../atoms/grid';
import decorL from '../../static/images/decor-l.png';
import decorR from '../../static/images/decor-r.png';

const DeskFrame1 = ({ children, bg }) => {
    return (
        <Screen bg={bg}>
            <Shape width={'10%'}>
                <img src={decorL} alt="" width={'100%'} height={'100%'} />
            </Shape>
            <Shape width={'80%'}>{children}</Shape>
            <Shape width={'10%'}>
                <img src={decorR} alt="" width={'100%'} height={'100%'} />
            </Shape>
        </Screen>
    );
};

export default DeskFrame1;
