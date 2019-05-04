import React from 'react'
import PropTypes from 'prop-types'
import { base, brand } from '../n0x.vars'
import { Card as Col } from 'rebass'

const Card = ({fontSize, color, children, width, alignSelf, ...props}) => {
    return (
      <Col
        fontSize={fontSize}
        color={color}
        width={width}
        alignSelf={alignSelf}
        {...props}
      >
        {children}
      </Col>
    )
  }

Card.propTypes = {
  children: PropTypes.element,
  fontSize: PropTypes.arrayOf( PropTypes.number ),
  color: PropTypes.string,
  width: PropTypes.arrayOf( PropTypes.number ),
  alignSelf: PropTypes.string
};

Card.defaultProps = {
  children: '',
  fontSize: base.font.size.t7,
  color: brand.color.light,
  width: 1,
  alignSelf: 'center'
};

export { Card }
