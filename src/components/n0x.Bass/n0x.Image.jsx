import React from "react";
import PropTypes from "prop-types";
import { base, brand } from "../n0x.vars";
import { Image as Img } from "rebass";

const Image = ({ children, width, height, alignSelf, ...props }) => {
    return (
      <Img
        width={width}
        height={height}
        alignSelf={alignSelf}
        {...props}
      />
    );
  }

Image.propTypes = {
  children: PropTypes.element,
  width: PropTypes.arrayOf( PropTypes.number ),
  height: PropTypes.arrayOf( PropTypes.number ),
  alignSelf: PropTypes.string,
};

Image.defaultProps = {
  children: "",
  width: 1,
  height: 1,
  alignSelf: "center",
};

export { Image };
