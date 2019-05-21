import React from 'react';
import { FormBlock, Box, P, Button2, Input, TextArea, Submit } from './n0x.library';

const ContactFormNetlify = class extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', msg: '' };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    fetch('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: {
        name: this.state.name,
        email: this.state.email,
        msg: this.state.msg
      }
    })
      .then(() =>
        alert(`Thanks, ${this.state.name}. We will be in touch with you at ${this.state.email}!`)
      )
      .catch(error => alert(`Wuh-Oh! ${error}`));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, msg } = this.state;
    return (
      <FormBlock name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <Box py='1vh'>
          <P talignCenter pb='1vh'>Your Name:</P>
          <Input p='1em' type="text" name="name" value={name} onChange={this.handleChange} />
        </Box>
        <Box py='1vh'>
          <P talignCenter pb='1vh'>Your Email:</P>
          <Input p='1em' type="email" name="email" value={email} onChange={this.handleChange} />
        </Box>
        <Box py='1vh'>
          <P talignCenter pb='1vh'>Message:</P>
          <TextArea p='1em' autosize="true" name="msg" value={msg} onChange={this.handleChange} />
        </Box>
        <Box py='2vh'>
          <Submit type="submit" onClick={this.handleSubmit}>
            Send
          </Submit>
        </Box>
      </FormBlock>
    );
  }
}
export default ContactFormNetlify;
