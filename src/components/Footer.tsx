import React from 'react';
import { meta } from '../lib';
import { P } from './atoms/text';
import { Box } from './atoms/grid';
import footerbg from '../static/images/bg-footer2.png';

const Footer: React.FC = () => {
    return (
        <Box size={'.7rem'} bg={'rgba(0,0,0,1)'} height={'2.5em'} position={'fixed'} bottom={'0'}>
            <P talign={'center'}>
                Copyright &copy; {meta.copyright.year}&nbsp;{meta.copyright.company} All rights reserved.
            </P>
        </Box>
    );
};

export default Footer;
