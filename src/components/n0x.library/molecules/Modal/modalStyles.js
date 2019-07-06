import { css, keyframes } from 'styled-components'
import { breakpoint } from "../../style";

  // Fade in open animation
  export const show = keyframes`
    0% {
      display: none;
      opacity: 0;
    }
    1% {
      display: flex;
      opacity: 0;
    }
    100% {
      opacity: 1;
    };
    `

  // Modal wrapper
  export const modalOverlay = css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1000;
    animation: ${show} .5s ease;
    overflow-x: hidden;
    overflow-y: auto;
    background: rgba(0, 0, 0, .9);
  `

  // Modal itself
  export const modalStyle = css`
    width: 100vw;
    box-shadow: 0 0 0.625em rgba(0, 0, 0, 0.2);

`

  // Modal wrapper
  export const modalButton = css`
    border: 0;
    cursor: pointer;

    &:hover: {
    }
  `

  // Close button
  export const closeButton = css`
    position: fixed;
    top: 0;
    right: 0;
    background: #fff;
    width: 2.5rem;
    height: 2.5rem;
    padding: 0;
    border: 0;
    cursor: pointer;
    outline: 0;
    box-shadow: 0 0 0.625em rgba(0, 0, 0, 0.2);

    &:before, &:after: {
      content: '""';
      position: absolute;
      top: 1.2em;
      left: 0.25em;
      width: 2em;
      height: 0.1em;
      background-color: #888;
    }

    &:before: {
      transform: rotate(45deg);
    }

    &:after: {
      transform: rotate(-45deg);
    }

    &:hover:before, &:hover:after: {
      background-color: #444;
    }
`
