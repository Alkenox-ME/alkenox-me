import * as React from 'react';
import PageLayout from '../components/molecules/PageLayout';
import DeskFrame1 from '../components/molecules/DeskFrame1';
import { Box } from '../components/atoms/grid';
import { List, Item, P, H1, H2, H3, H4 } from '../components/atoms/text';
import bg from '../static/images/bg-1.png';

const Contact: React.FC<{}> = () => {
    return (
        <PageLayout title={'Contact Us'}>
            <DeskFrame1 bg={`url(${bg}) center fixed`}>
                <Box>
                    <H1>Contact Us</H1>
                    <Box p={'0.5em 0'}>
                        <input type={'input'} placeholder={'Name'} />
                    </Box>
                    <Box p={'0.5em 0'}>
                        <input type={'input'} placeholder={'Email'} />
                    </Box>
                    <Box p={'0.5em 0'}>
                        <textarea type={'textarea'} placeholder={'Message'} />
                    </Box>
                </Box>
            </DeskFrame1>
        </PageLayout>
    );
};

export default Contact;
