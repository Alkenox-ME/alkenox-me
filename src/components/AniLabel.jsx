// Core
import React, { useState, useEffect, PureComponent } from 'react';

// Styling
import { n0x, image, data } from './n0x.vars'
import { Flex, Card } from './n0x.Bass';
import withReveal, { Fade } from 'react-reveal';
import styled, { keyframes } from 'styled-components'
import { TransitionGroup, Transition as Transit, CSSTransition } from "react-transition-group";
import anime from 'animejs'
import { Spring, config, Transition } from 'react-spring/renderprops'

// Components
import { Label } from './Label';
import Layout from './Layout';
import { Page, slideInRight, slideOutRight, slideInLeft, slideOutLeft } from './n0x.Animate'



const AniLabel = ({show, from, enter, leave, delay, ...props}) => {
  return(
    <Card {...props}>
      <Transition
        update
        items={show}
        from={ from }
        enter={ enter }
        leave={ leave }
        config={ delay }
      >
        {show => spring =>
          <Label style={spring} {...props}/>
        }
      </Transition>
    </Card>
    )
}

export { AniLabel };
