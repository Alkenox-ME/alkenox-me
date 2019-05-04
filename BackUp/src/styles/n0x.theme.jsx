// Core
import React, { PureComponent } from "react";
import PropTypes from "prop-types";

// Styling
import { ThemeProvider } from "styled-components";
import { n0x, base, element, image } from "../components/n0x.vars";
import "./App.scss";

const N0xTheme = class extends PureComponent {
  render() {
    const theme = {
      breakpoints: [
        n0x.breakpoint[0],
        n0x.breakpoint[1],
        n0x.breakpoint[2],
        n0x.breakpoint[3]
      ],
      bg: {
        logo: image.bg.logo,
        tint: n0x.tint.black
      },
      color: {
        fg: n0x.color.light,
        bg: n0x.color.black
      },
      link: {
        color: {
          base: element.link.color.base,
          hover: element.link.color.hover
        }
      },
      font: {
        family: {
          sans: base.font.family.sans,
          serif: base.font.family.serif,
          mono: base.font.family.mono
        }
      }
    };

    const { children } = this.props;

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  }
};

N0xTheme.propTypes = {
  children: PropTypes.element
};

N0xTheme.defaultProps = {
  children: ""
};

export default N0xTheme;
