import * as React from 'react';
import PageLayout from '../components/molecules/PageLayout';
import DeskFrame1 from '../components/molecules/DeskFrame1';
import { Box } from '../components/atoms/grid';
import { List, Item, P, H1, H2, H3, H4 } from '../components/atoms/text';
import { Flex, Box, Text, Image, Link, Heading } from 'rebass';
import bg from '../static/images/bg-1.png';

const Contact: React.FC<{}> = () => {
    return (
        <PageLayout title={'Contact Us'}>
            <Box>
                <Heading>Contact Us</Heading>
                <Box>
                    <input type={'input'} placeholder={'Name'} />
                </Box>
                <Box>
                    <input type={'input'} placeholder={'Email'} />
                </Box>
                <Box>
                    <textarea type={'textarea'} placeholder={'Message'} />
                </Box>
            </Box>
        </PageLayout>
    );
};

export default Contact;
