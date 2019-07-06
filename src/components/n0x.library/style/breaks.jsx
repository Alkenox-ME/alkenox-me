import styled, {css} from 'styled-components'

export const breakpoint = [0, 60, 120]

export const breakpoints = {
    ms: 0,
    lp: 960,
    tv: 1920
  }

export  const media = Object.keys(breakpoints).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${breakpoints[label] / 16}px) {
        ${css(...args)}
      }
    `

    return acc
  }, {})
