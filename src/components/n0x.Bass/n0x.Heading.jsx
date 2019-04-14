import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { base, brand } from '../n0x.vars'
import { Heading as Text1 } from 'rebass'

const Heading = class extends PureComponent {
  render() {
    const { fontSize, color, fontFamily, fontWeight, textAlign, lineHeight, letterSpacing, children, width, bg, alignSelf, flex, order,m, mx, my, ml, mt, mr, mb, p, px, py, pl, pt, pr, pb } = this.props

    return (
      <Text1
        fontSize={fontSize}
        color={color}
        fontFamily={fontFamily}
        fontWeight={fontWeight}
        textAlign={textAlign}
        lineHeight={lineHeight}
        letterSpacing={letterSpacing}
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
      </Text1>
    )
  }
}

Heading.propTypes = {
  children: PropTypes.element,
  fontSize: PropTypes.arrayOf( PropTypes.number ),
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.string,
  textAlign: PropTypes.arrayOf( PropTypes.number ),
  lineHeight: PropTypes.arrayOf( PropTypes.number ),
  letterSpacing: PropTypes.arrayOf( PropTypes.number ),
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

Heading.defaultProps = {
  children: '',
  fontSize: base.font.size.t1,
  color: brand.color.light,
  fontFamily: base.font.family.sans,
  fontWeight: 'bold',
  textAlign: 'center',
  lineHeight: '',
  letterSpacing: '',
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

export { Heading }
