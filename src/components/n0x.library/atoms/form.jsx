
import styled from "styled-components/macro";
import { text, space, size, backgroundColor, border, position, utility, fx, shape, ExpandingTextarea, radio, form, inputs, textarea } from "../style";
import { getRule } from "../lib";
import { Button1, TextInput } from "../animate";

export const FormBlock = styled.form`
  margin: auto;
  width: ${ props => props.width || '80vw' };
  height: ${ props => props.height || '100%' };
  font-style: italic;
  font-weight: bold;
  text-decoration: none;
  border-radius: ${ props => props.borderRadius || '1em' };
  padding: 1em;
  border: inset 1px solid #333;
  box-shadow: ${ props => props.boxShadow || '0px 0px 8px rgba(0, 0, 0, 0.3)' };
`;

export const Input = styled.input`
  display: block;
  width: ${ props => props.width || '100%' };
  border: ${ props => props.border || '1px solid #999' };
  height: ${ props => props.height || '5vh' };
  box-shadow: ${ props => props.boxShadow || '0px 0px 8px rgba(0, 0, 0, 0.3)' };
  border-radius: ${ props => props.borderRadius || '.5em' };
  ${space}
  :focus {
    border: ${ props => props.borderFocus || '1px solid #09C' };
  }
`;

export const TextArea = styled.textarea`
  display: block;
  width: ${ props => props.width || '100%' };
  border: ${ props => props.border || '1px solid #999' };
  height: ${ props => props.height || '25vh' };
  box-shadow: ${ props => props.boxShadow || '0px 0px 8px rgba(0, 0, 0, 0.3)' };
  border-radius: ${ props => props.borderRadius || '.5em' };
  ${space}
  :focus {
    border: ${ props => props.borderFocus || '1px solid #09C' };
  }
`;

export const Submit = styled.button`
  cursor: pointer;
  transition: all 1s ease;
  width: ${ props => props.width || '100%' };
  background: ${ props => props.bgColor || '#09C' };
  color: ${ props => props.color ||  props.theme.colors.white };
  height: ${ props => props.height || '6vh' };
  border-radius: ${ props => props.borderRadius || '.5em' };
  border: ${ props => props.border || '1px solid #999' };
  ${space}
  :hover {
    transition: all 1s ease;
    background: ${ props => props.bgColor2 || props.theme.colors.white };
    color: ${ props => props.color2 || '#09C' };
  }
`;
