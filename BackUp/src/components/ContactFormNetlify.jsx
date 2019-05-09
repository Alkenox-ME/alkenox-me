import React from 'react';
import { Flex, Box } from './n0x.Bass';
import { Input } from 'antd';

const TextArea = Input;

const ContactFormNetlify = () => {
    return (
      <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <Flex flexWrap="wrap" justifyContent="center">
          <Box p={3} width={[1]}>
            Your Name:
            <Input type="text" name="name" />
          </Box>

          <Box p={3} width={[1]}>
            Your Email:
            <Input type="email" name="email" />
          </Box>

          <Box p={3} width={[1]}>
            Message:
            <TextArea autosize="true" name="msg" />
          </Box>

          <Box p={3} width="auto" alignSelf="center">
            <button type="submit">
              Send
            </button>
          </Box>
        </Flex>
      </form>
    );
  }
export default ContactFormNetlify;
