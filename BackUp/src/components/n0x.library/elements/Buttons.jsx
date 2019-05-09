import React from 'react';
import styled from 'styled-components/macro';
import { Home } from '../../../static/home.svg'
import { About } from '../../../static/about.svg'
import { Contact } from '../../../static/contact.svg'

const BtnShape = styled.button`
  z-index: 10000;
  width: 8em;
  height: 8em;
  margin: .25em;
  border-radius: 100%;
  border-width: 0;
  background-color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
  opacity: 0.3;
  transition: all 0.25s ease-in-out;
  &:hover,
  &:focus {
    opacity: 0.9;
    transition: all 0.25s ease-in-out;
  }
`;

export const HomeBtn = () => (
  <BtnShape role="img" title="Home" aria-label="Home" >
    <Home/>
  </BtnShape>
);

export const AboutBtn = () => (
  <BtnShape role="img" title="About Us" aria-label="About Us" >
    <About/>
  </BtnShape>
);

export const ContactBtn = () => (
  <BtnShape role="img" title="Contact Us" aria-label="Contact Us" >
    <Contact/>
  </BtnShape>
);
