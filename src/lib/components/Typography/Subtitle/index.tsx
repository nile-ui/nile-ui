import React from 'react'
import { SubtitleProps } from './types'
import classNames from 'classnames'

const Subtitle = React.forwardRef<HTMLHeadingElement, SubtitleProps>(({
  children,
  fontSize,
  weight,
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
  lineHeight,
  color = 'darkestGray',
  className,
  ...otherProps
}, ref) => {
return (
  <h1 ref={ref} className={classNames('subtitle', `text-${color}`, {
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
  </h1>
)
})

export default Subtitle