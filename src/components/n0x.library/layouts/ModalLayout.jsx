import React, {useState, setState} from "react";
import { Location } from '@reach/router'
import styled from "styled-components/macro";
import { SeoPage } from "../elements";
import { Block } from "../atoms";
import posed, { PoseGroup } from 'react-pose'
import { Container } from "../animate";

const ModalLayout = (props) => {
  let Tint = styled(Container)`
    width: 100vw;
    min-height: 100vh;
    background-color: ${props.color || null};
  `;

  let Portal = posed.div({
    enter: {
      y: 0,
      opacity: 1,
      delay: 300,
      transition: {
        y: { type: 'spring', stiffness: 1000, damping: 15 },
        default: { duration: 300 }
      }
    },
    exit: {
      y: 50,
      opacity: 0,
      transition: { duration: 150 }
    }
  });

  let Shade = posed.div({
    enter: { opacity: 1 },
    exit: { opacity: 0 }
  });

let [visible, isVisible] = useState(false)

  return (
    <Location>
      {({ location }) => (
        <Tint key={location.children}>
          <Block px={"2%"} py={"6%"}>
            <SeoPage {...props} />
            {props.children}
          </Block>
        </Tint>
      )}
    </Location>
  );
};

export { ModalLayout };
