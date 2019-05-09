// Core
import React from "react";
import { Link as Href } from "@reach/router";

// Styling
import styled from "styled-components/macro";
import { T2, Image, Box } from "../atoms";

const LabelBlock = ({
  link,
  label,
  bshadow,
  bradius,
  bgimg,
  fontSz,
  width,
  height
}) => {
  const Link = styled(Href)`
    font-family: ${props => props.theme.fonts.normal};
    color: ${props => props.theme.colors.link[0]};
    :hover {
      color: ${props => props.theme.colors.link[1]};
    }
  `;

  const LabelText = styled(T2)`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    z-index: 1;
    cursor: pointer;
    transition: 0.5s ease-in-out;
    opacity: 0.2;
  `;

  const LabelImage = styled(Image)`
    object-fit: cover;
    object-position: center;
    z-index: 0;
    transition: 0.5s ease-in-out;
    opacity: 1;
  `;

  const LabelBase = styled.div`
    &:hover ${LabelImage} {
      transition: 0.5s ease-in-out;
      opacity: 0.2;
    }
    &:hover ${LabelText} {
      transition: 0.5s ease-in-out;
      opacity: 1;
    }
  `;

  return (
    <Link exact="true" to={link} title={label} aria-label={label}>
      <LabelBase>
        <LabelText
          fontSize={fontSz}
          width={1}
          color="inherit"
          textAlign="center"
        >
          {label}
        </LabelText>
      </LabelBase>
    </Link>
  );
};

export { LabelBlock };
