import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { base, brand } from '../n0x.vars'
import { Flex as Row } from 'rebass'

const Flex = ({ fontSize, color, flexWrap, flexDirection, alignItems, justifyContent, children, width, bg, ...props }) => {
    return (
      <Row
        fontSize={ fontSize }
        color={ color }
        flexWrap={ flexWrap }
        flexDirection={ flexDirection }
        alignItems={ alignItems }
        justifyContent={ justifyContent }
        width={ width }
        bg={ bg }
        {...props}
      >
        {children}
      </Row>
    )
  }

Flex.propTypes = {
  children: PropTypes.element,
  fontSize: PropTypes.arrayOf( PropTypes.number ),
  color: PropTypes.string,
  flexWrap: PropTypes.string,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  width: PropTypes.arrayOf( PropTypes.number )
};

Flex.defaultProps = {
  children: {},
  fontSize: base.font.size.t7,
  color: brand.color.light,
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  width: 1
};

export { Flex }
