import React, { Component } from 'react';
import { Flex, Box } from './n0x.Bass';
import { Input } from 'antd';

const TextArea = Input;

class ContactForm extends Component {
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
      <form name="contact" onSubmit={this.handleSubmit}>
        <Flex flexWrap="wrap" justifyContent="center">
          <Box p={3} width={[1]}>
            Your Name:
            <Input type="text" name="name" value={name} onChange={this.handleChange} />
          </Box>

          <Box p={3} width={[1]}>
            Your Email:
            <Input type="email" name="email" value={email} onChange={this.handleChange} />
          </Box>

          <Box p={3} width={[1]}>
            Message:
            <TextArea autosize="true" name="msg" value={msg} onChange={this.handleChange} />
          </Box>

          <Box p={3} width="auto" alignSelf="center">
            <button type="submit" onClick={this.handleSubmit}>
              Send
            </button>
          </Box>
        </Flex>
      </form>
    );
  }
}
export default ContactForm;
