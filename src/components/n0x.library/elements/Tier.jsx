import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Block, P } from "../atoms";

const Tier = class extends PureComponent {
  render() {
    const { title, price, length, desc, ...props } = this.props;
    return (
      <Block {...props}>
        <P {...props}>
          {title}
        </P>

        <P {...props}>
          {price}
        </P>
        <P {...props}>
          {length}
        </P>

        <P {...props}>
          {desc}
        </P>
      </Block>
    );
  }
};

export {Tier};
