// eslint-disable-next-line
// @Flow
import React from 'react';
import { meta } from '../lib';
import { Box, Text } from 'rebass';
import footerbg from '../static/images/bg-footer2.png';

const Footer = () => {
    return (
        <Box>
            <Text>
                Copyright &copy; {meta.copyright.year}&nbsp;{meta.copyright.company} All rights reserved.
            </Text>
        </Box>
    );
};

export default Footer;
