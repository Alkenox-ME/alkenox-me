import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { base, brand } from "../n0x.vars";
import { Text as Text2 } from "rebass";

const Text = ({ fontSize, color, fontFamily, fontWeight, textAlign, children, width, alignSelf, ...props }) => {
    return (
      <Text2
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
      </Text2>
    );
  }

Text.propTypes = {
  children: PropTypes.element,
  fontSize: PropTypes.arrayOf( PropTypes.number ),
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.string,
  textAlign: PropTypes.arrayOf( PropTypes.number ),
  width: PropTypes.arrayOf( PropTypes.number ),
  alignSelf: PropTypes.string,
};

Text.defaultProps = {
  children: "",
  fontSize: `${base.font.size.t4}`,
  color: `${brand.color.light}`,
  fontFamily: `${base.font.family.sans}`,
  fontWeight: "normal",
  textAlign: "",
  width: 1,
  alignSelf: "center",
};

export { Text };
