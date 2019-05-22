import React from "react";
import { Block, P } from "../atoms";

const Tier = (props) => {
    return (
      <Block {...props}>
        <P {...props}>
          {props.title}
        </P>

        <P {...props}>
          {props.price}
        </P>
        <P {...props}>
          {props.length}
        </P>

        <P {...props}>
          {props.desc}
        </P>
      </Block>
    );
  };

export default Tier;
