import React from 'react'
import { ColProps } from './types'
import classNames from 'classnames'

export default function Col({
    children,
    className,
    size,
    sizeSm,
    sizeMd,
    sizeLg,
    sizeXl,
    sizeXxl,
    offset,
    offsetSm,
    offsetMd,
    offsetLg,
    offsetXl,
    offsetXxl,
    contentWidth,
    orderFirst,
    orderLast,
}: ColProps) {
  return (
    <div className={classNames('column', {
        [`size-${size}`]: size,
        [`sm-size-${sizeSm}`]: sizeSm,
        [`md-size-${sizeMd}`]: sizeMd,
        [`lg-size-${sizeLg}`]: sizeLg,
        [`xl-size-${sizeXl}`]: sizeXl,
        [`xxl-size-${sizeXxl}`]: sizeXxl,
        [`has-offset-${offset}`]: offset,
        [`sm-has-offset-${offsetSm}`]: offsetSm,
        [`md-has-offset-${offsetMd}`]: offsetMd,
        [`lg-has-offset-${offsetLg}`]: offsetLg,
        [`xl-has-offset-${offsetXl}`]: offsetXl,
        [`xxl-has-offset-${offsetXxl}`]: offsetXxl,
        'content-width': contentWidth,
        'order-first': orderFirst,
        'order-last': orderLast
    }, className)}>{children}</div>
  )
}
