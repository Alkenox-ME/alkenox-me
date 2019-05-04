import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { base, brand } from '../n0x.vars'
import { Box as Col } from 'rebass'

const Box = class extends PureComponent {
  render() {
    const { fontSize, children, width, alignSelf, ...props} = this.props

    return (
      <Col
        fontSize={fontSize}
        width={width}
        alignSelf={alignSelf}
        {...props}
      >
        {children}
      </Col>
    )
  }
}

Box.propTypes = {
  children: PropTypes.element,
  fontSize: PropTypes.number,
  width: PropTypes.arrayOf( PropTypes.number ),
  alignSelf: PropTypes.string,
};

Box.defaultProps = {
  children: '',
  fontSize: base.font.size.t7,
  width: 1,
  alignSelf: 'center',
};

export { Box }
