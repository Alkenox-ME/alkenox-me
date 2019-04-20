import React from "react";
import PropTypes from "prop-types";
import { base, brand } from "../n0x.vars";
import { Heading as Text1 } from "rebass";

const Heading = ({
  fontSize,
  color,
  fontFamily,
  fontWeight,
  textAlign,
  children,
  width,
  alignSelf,
  ...props
}) => {
  return (
    <Text1
      fontSize={fontSize}
      color={color}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      textAlign={textAlign}
      width={width}
      alignSelf={alignSelf}
      {...props}
    >
      {children}
    </Text1>
  );
};

Heading.propTypes = {
  children: PropTypes.element,
  fontSize: PropTypes.arrayOf(PropTypes.number),
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.string,
  textAlign: PropTypes.arrayOf(PropTypes.number),
  width: PropTypes.arrayOf(PropTypes.number),
  alignSelf: PropTypes.string
};

Heading.defaultProps = {
  children: "",
  fontSize: base.font.size.t1,
  color: "",
  fontFamily: base.font.family.sans,
  fontWeight: "bold",
  textAlign: "center",
  width: 1,
  alignSelf: "center"
};

export { Heading };
