import React from 'react';
import { FormBlock, P, Button2 } from './n0x.library';
import { Input } from 'antd';

const TextArea = Input;

const ContactFormNetlify = () => {
    return (
      <FormBlock name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <P>Your Name:</P>
        <Input type="text" name="name" />
        <P>Your Email:</P>
        <Input type="email" name="email" />
        <P>Message:</P>
        <TextArea autosize="true" name="msg" />
        <Button2 type="submit">
          Send
        </Button2>
      </FormBlock>
    );
  }
export default ContactFormNetlify;
