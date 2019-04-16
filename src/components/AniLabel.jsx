// Core
import React, { useState, useEffect } from 'react';

// Styling
import { n0x, image, data } from './n0x.vars'
import { Flex, Card } from './n0x.Bass';
import withReveal, { Fade } from 'react-reveal';
import styled, { keyframes } from 'styled-components'
import { TransitionGroup, Transition, CSSTransition } from "react-transition-group";

// Components
import { LabelBlock } from './n0x.elements';
import Layout from './Layout';
import { Page, slideInRight, slideOutRight, slideInLeft, slideOutLeft } from './n0x.Animate'

const AniLabel = (props) => {
  const [isVisible, setVisible] = useState(true)
  useEffect(()=>{})
  return(
    <Card {...props}>
      <Fade {...props}>
        <LabelBlock {...props} />
      </Fade>
    </Card>
  )
}

export { AniLabel };
