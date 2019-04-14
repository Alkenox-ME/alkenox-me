import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { base, brand } from '../n0x.vars'
import { Box as Col } from 'rebass'

const Box = class extends PureComponent {
  render() {
    const { fontSize, color, children, width, bg, alignSelf, flex, order, m, mx, my, ml, mt, mr, mb, p, px, py, pl, pt, pr, pb } = this.props

    return (
      <Col
        fontSize={fontSize}
        color={color}
        width={width}
        bg={bg}
        alignSelf={alignSelf}
        flex={flex}
        order={order}
        m={m}
        mx={mx}
        my={my}
        ml={ml}
        mt={mt}
        mr={mr}
        mb={mb}
        p={p}
        px={px}
        py={py}
        pl={pl}
        pt={pt}
        pr={pr}
        pb={pb}
      >
        {children}
      </Col>
    )
  }
}

Box.propTypes = {
  children: PropTypes.element,
  fontSize: PropTypes.number,
  color: PropTypes.string,
  width: PropTypes.arrayOf( PropTypes.number ),
  bg: PropTypes.string,
  alignSelf: PropTypes.string,
  flex: PropTypes.arrayOf( PropTypes.number ),
  order: PropTypes.arrayOf( PropTypes.number ),
  m: PropTypes.arrayOf( PropTypes.number ),
  mx: PropTypes.arrayOf( PropTypes.number ),
  my: PropTypes.arrayOf( PropTypes.number ),
  ml: PropTypes.arrayOf( PropTypes.number ),
  mt: PropTypes.arrayOf( PropTypes.number ),
  mr: PropTypes.arrayOf( PropTypes.number ),
  mb: PropTypes.arrayOf( PropTypes.number ),
  p: PropTypes.arrayOf( PropTypes.number ),
  px: PropTypes.arrayOf( PropTypes.number ),
  py: PropTypes.arrayOf( PropTypes.number ),
  pl: PropTypes.arrayOf( PropTypes.number ),
  pt: PropTypes.arrayOf( PropTypes.number ),
  pr: PropTypes.arrayOf( PropTypes.number ),
  pb: PropTypes.arrayOf( PropTypes.number )
};

Box.defaultProps = {
  children: '',
  fontSize: base.font.size.t7,
  color: brand.color.light,
  width: 1,
  bg: '',
  alignSelf: 'center',
  flex: '',
  order: '',
  m: '',
  mx: '',
  my: '',
  ml: '',
  mt: '',
  mr: '',
  mb: '',
  p: '',
  px: '',
  py: '',
  pl: '',
  pt: '',
  pr: '',
  pb: ''
};

export { Box }
