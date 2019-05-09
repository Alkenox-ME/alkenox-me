import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Block, T } from "../atoms";

const Tier = class extends PureComponent {
  render() {
    const { title, price, length, desc, ...props } = this.props;
    return (
      <Block {...props}>
        <T {...props}>
          {title}
        </T>

        <T {...props}>
          {price}
        </T>
        <T {...props}>
          {length}
        </T>

        <T {...props}>
          {desc}
        </T>
      </Block>
    );
  }
};

export {Tier};
