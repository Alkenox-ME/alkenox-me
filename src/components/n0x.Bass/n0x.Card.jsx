import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { base, brand } from '../n0x.vars'
import { Card as Col } from 'rebass'

const Card = class extends PureComponent {
  render() {
    const { fontSize, color, children, width, bg, alignSelf, flex, order, m, mx, my, ml, mt, mr, mb, p, px, py, pl, pt, pr, pb } = this.props
    const { border, borderColor, borderRadius, boxShadow, backgroundImage, backgroundSize, backgroundPosition, backgroundRepeat, opacity, variant } = this.props

    return (
      <Col
        fontSize={fontSize}
        color={color}
        border={border}
        borderColor={borderColor}
        borderRadius={borderRadius}
        boxShadow={boxShadow}
        backgroundImage={backgroundImage}
        backgroundSize={backgroundSize}
        backgroundPosition={backgroundPosition}
        backgroundRepeat={backgroundRepeat}
        opacity={opacity}
        variant={variant}
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

Card.propTypes = {
  children: PropTypes.element,
  fontSize: PropTypes.arrayOf( PropTypes.number ),
  color: PropTypes.string,
  border: PropTypes.string,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.arrayOf( PropTypes.number ),
  boxShadow: PropTypes.string,
  backgroundImage: PropTypes.string,
  backgroundSize: PropTypes.string,
  backgroundPosition: PropTypes.string,
  backgroundRepeat: PropTypes.string,
  opacity: PropTypes.string,
  variant: PropTypes.string,
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

Card.defaultProps = {
  children: '',
  fontSize: base.font.size.t7,
  color: brand.color.light,
  border: '',
  borderColor: '',
  borderRadius: '',
  boxShadow: '',
  backgroundImage: '',
  backgroundSize: '',
  backgroundPosition: '',
  backgroundRepeat: '',
  opacity: '',
  variant: '',
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

export { Card }
