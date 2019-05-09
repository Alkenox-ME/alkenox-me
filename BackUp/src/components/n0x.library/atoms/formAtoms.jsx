import React from 'react'
import { decamelize } from 'humps';
import styled, { css } from "styled-components/macro";
import { text, space, size, backgroundImage, backgroundColor, border, list, position, utility, textUnderline, textShadow, shadow, shape, ExpandingTextarea, radio } from '../config'
import { Button1, Button2, TextInput } from '../animate'

const getRule = (ruleName, defaultRule) => (props) => {
  const foundRule = Object.keys(props).find(key => key.startsWith(ruleName));
  if (!foundRule || !props[foundRule]) {
    return defaultRule;
  }

  const [, ...rule] = decamelize(foundRule, { separator: '-' }).split('-');
  return rule.join('-');
};

export const FormBlock = styled.form`
  display: ${props => (props.inline ? 'inline-flex' : 'flex')};
  flex-direction: ${getRule('direction', 'row')};
  flex-wrap: ${getRule('wrap', 'wrap')};
  justify-content: ${getRule('justify', 'center')};
  align-items: ${getRule('items', 'stretch')};
  align-content: ${getRule('content', 'stretch')};
  ${space}
  ${border}
`;

export const FormGroup = styled.fieldset`
  ${utility}
  ${position}
  ${space}
  ${shape}
`

export const Input = styled(TextInput)`
  text-align: ${getRule('talign', 'left')};
  max-width: 80vw;
  ${text}
  ${space}
  ${size}
  ${shadow}
`

export const Radio = styled.div`
  ${radio}
`

export const TextArea = styled(ExpandingTextarea)`
  text-align: ${getRule('talign', 'left')};
  max-width: 80vw;
  ${text}
  ${space}
  ${size}
  ${shadow}
`

export const Selection = styled.select`
  text-align: ${getRule('talign', 'left')};
  max-width: 80vw;
  ${text}
  ${size}
  ${space}
  ${shadow}
`

export const Select = styled.option`
  text-align: ${getRule('talign', 'left')};
  max-width: 80vw;
  ${text}
  ${space}
  ${shadow}
`

export const InputLabel = styled.label`
  text-align: ${getRule('talign', 'left')};
  max-width: 80vw;
  ${text}
  ${space}
  ${size}
  ${shadow}
`

export const Caption = styled.legend`
  text-align: ${getRule('talign', 'left')};
  max-width: 80vw;
  ${text}
  ${space}
  ${size}
  ${shadow}
`

export const Submit = styled(Button1)`
  cursor: pointer;
  text-align: ${getRule('talign', 'center')};
  ${text}
  ${shape}
  ${space}
  ${shadow}
  ${border}
  ${backgroundColor}
`
