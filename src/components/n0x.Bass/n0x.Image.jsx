import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { base, brand } from "../n0x.vars";
import { Image as Img } from "rebass";

const Image = class extends PureComponent {
  render() {
    const {
      fontSize,
      color,
      children,
      width,
      height,
      src,
      borderRadius,
      bg,
      alignSelf,
      flex,
      order,
      m,
      mx,
      my,
      ml,
      mt,
      mr,
      mb,
      p,
      px,
      py,
      pl,
      pt,
      pr,
      pb
    } = this.props;

    return (
      <Img
        fontSize={fontSize}
        color={color}
        width={width}
        height={height}
        src={src}
        borderRadius={borderRadius}
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
      </Img>
    );
  }
};

Image.propTypes = {
  children: PropTypes.element,
  fontSize: PropTypes.arrayOf( PropTypes.number ),
  color: PropTypes.string,
  width: PropTypes.arrayOf( PropTypes.number ),
  height: PropTypes.arrayOf( PropTypes.number ),
  src: PropTypes.string,
  borderRadius: PropTypes.arrayOf( PropTypes.number ),
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

Image.defaultProps = {
  children: "",
  fontSize: base.font.size.t7,
  color: brand.color.light,
  width: 1,
  height: 1,
  borderRadius: 1,
  src: "",
  bg: "",
  alignSelf: "center",
  flex: "",
  order: "",
  m: "",
  mx: "",
  my: "",
  ml: "",
  mt: "",
  mr: "",
  mb: "",
  p: "",
  px: "",
  py: "",
  pl: "",
  pt: "",
  pr: "",
  pb: ""
};

export { Image };
