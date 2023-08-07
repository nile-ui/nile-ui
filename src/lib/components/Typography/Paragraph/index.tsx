import React from 'react'
import { ParagraphProps } from './types'
import classNames from 'classnames'

const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(({
  children,
  fontSize = 5,
  weight = 400,
  textAlign = 'left',
  underline,
  lineThrough,
  italic,
  lowercase,
  uppercase,
  capitalize = true,
  truncate,
  wrap = true,
  nowrap,
  break: _break = true,
  lineHeight = 'base',
  color = 'darkestGray',
  className,
  ...otherProps
}, ref) => {
return (
  <p ref={ref} className={classNames(`text-${color}`, 'mt-2 mb-4', {
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
  </p>
)
})

export default Paragraph