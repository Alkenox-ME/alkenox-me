import React, { useCallback, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { TextBlockConfig } from '../../animate'

// getHeight :: (Integer, Element) -> Integer
export const getHeight = (rows, el) => {
  const {
    borderBottomWidth,
    borderTopWidth,
    lineHeight,
    paddingBottom,
    paddingTop
  } = window.getComputedStyle(el)

  const rowHeight = rows == null ? 0 : parseFloat(lineHeight) *
    parseInt(rows, 10) +
    parseFloat(borderBottomWidth) +
    parseFloat(borderTopWidth) +
    parseFloat(paddingBottom) +
    parseFloat(paddingTop)

  const scrollHeight = el.scrollHeight +
    parseFloat(borderBottomWidth) +
    parseFloat(borderTopWidth)

  return Math.max(rowHeight, scrollHeight)
}

// resize :: (Integer, Element) -> ()
export const resize = (rows, el) => {
  if (el) {
    el.style.height = '0'
    el.style.height = `${getHeight(rows, el)}px`
  }
}

// ExpandingTextarea :: Props -> <textarea />
const ExpandingTextarea = ({props}) => {

  const TextBlock = TextBlockConfig;

  const ref = useRef(null)

  useEffect(
    () => {
      resize(props.rows, ref.current)
    },
    [ props.rows, props.value ]
  )

  const handleInput = useCallback(
    e => {
      props.onChange(e)
      props.onInput(e)
      resize(props.rows, ref.current)
    },
    [props]
  )

  return (
    <TextBlock
      {...props}
      onInput={handleInput}
      ref={ref}
    />
  )
}

ExpandingTextarea.defaultProps = {
  onChange: Function.prototype,
  onInput: Function.prototype
}

export { ExpandingTextarea }
