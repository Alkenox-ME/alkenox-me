import React from "react";
import PropTypes from "prop-types";
import { base, brand } from "../n0x.vars";
import { Image as Img } from "rebass";
import styled from "styled-components";

const Banner = ({crop, width, height, borderRadius, alignSelf, ...props}) => {

    const Bannerized = styled(Img)`
      height: ${crop};
      object-fit: cover;
      object-position: center;
    `;

    return (
      <Bannerized
        width={width}
        height={height}
        borderRadius={borderRadius}
        alignSelf={alignSelf}
        {...props}
      />
    );
  }

Banner.propTypes = {
  crop: PropTypes.arrayOf(PropTypes.string),
  width: PropTypes.arrayOf(PropTypes.number),
  height: PropTypes.arrayOf(PropTypes.number),
  borderRadius: PropTypes.arrayOf(PropTypes.number),
  alignSelf: PropTypes.string,
};

Banner.defaultProps = {
  width: 1,
  height: 1,
  borderRadius: 1,
  crop: "30vh",
  alignSelf: "center",
};

export { Banner };
