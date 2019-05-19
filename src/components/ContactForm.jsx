import React, { Component } from 'react';
import { FormBlock, P, Button2 } from './n0x.library';
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
      <FormBlock name="contact" onSubmit={this.handleSubmit}>
        <P>Your Name:</P>
        <Input type="text" name="name" value={name} onChange={this.handleChange} />
        <P>Your Email:</P>
        <Input type="email" name="email" value={email} onChange={this.handleChange} />
        <P>Message:</P>
        <TextArea autosize="true" name="msg" value={msg} onChange={this.handleChange} />
        <Button2 type="submit" onClick={this.handleSubmit}>
          Send
        </Button2>
      </FormBlock>
    );
  }
}
export default ContactForm;
