import React from 'react'
import { TextProps } from './types'
import classNames from 'classnames'

const Text = React.forwardRef<HTMLSpanElement, TextProps>(({
  children,
  fontSize = 6,
  weight = 400,
  textAlign,
  underline,
  lineThrough,
  italic,
  lowercase,
  uppercase,
  capitalize,
  truncate,
  wrap,
  nowrap,
  break: _break,
  lineHeight = 'base',
  color = 'darkestGray',
  className,
  ...otherProps
}, ref) => {
return (
  <span ref={ref} className={classNames(`text-${color}`, {
      'text-truncate': truncate,
      'text-wrap': wrap,
      'text-nowrap': nowrap,
      'text-break': _break,
      'text-lowercase': lowercase,
      'text-uppercase': uppercase,
      'text-capitalize': capitalize,
      'text-italic': italic,
      'text-underline': underline,
      'text-linethrough': lineThrough,
      [`fs-${fontSize}`]: fontSize,
      [`fw-${weight}`]: weight,
      [`text-${textAlign}`]: textAlign,
      [`line-height-${lineHeight}`]: lineHeight,
  }, className)}
  {...otherProps}
  >
      {children}
  </span>
)
})

export default Text