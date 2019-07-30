import React from 'react';
import { meta } from '../lib';
import { P } from './atoms/text';
import { Box } from './atoms/grid';
import footerbg from '../static/images/bg-footer.png';

const Footer: React.FC = () => {
    return (
        <Box size={'.7rem'} bg={'rgba(5, 5, 5, 1)'} height={'2.5rem'}>
            <P>
                Copyright &copy; {meta.copyright.year}&nbsp;{meta.copyright.company} All rights reserved.
            </P>
        </Box>
    );
};

export default Footer;
