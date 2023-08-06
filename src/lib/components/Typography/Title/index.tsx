import React from 'react'
import { TitlePropsWithChildren } from './types'
import classNames from 'classnames'

const Title = React.forwardRef<HTMLHeadingElement, TitlePropsWithChildren>(({
  children,
  variant = 3,
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
  <h1 ref={ref} className={classNames(`title-${variant}`, `text-${color}`, {
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

export default Title