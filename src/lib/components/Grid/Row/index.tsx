import React from 'react'
import { RowProps } from './types'
import classNames from 'classnames'

export default function Row({
    children,
    noGap,
    gap,
    gapX,
    gapY,
    columns = 12,
    smGapX,
    mdGapX,
    lgGapX,
    xlGapX,
    xxlGapX,
    smGapY,
    mdGapY,
    lgGapY,
    xlGapY,
    xxlGapY,
    smGap,
    mdGap,
    lgGap,
    xlGap,
    xxlGap,
    className,
    ...otherProps
}: RowProps) {

  return (
    <div className={classNames('row', {
        'no-gap': noGap,
        [`has-gap-${gap}`]: gap,
        [`has-gap-x-${gapX}`]: gapX,
        [`has-gap-y-${gapY}`]: gapY,
        [`sm-has-gap-${smGap}`]: smGap,
        [`md-has-gap-${mdGap}`]: mdGap,
        [`lg-has-gap-${lgGap}`]: lgGap,
        [`xl-has-gap-${xlGap}`]: xlGap,
        [`xxl-has-gap-${xxlGap}`]: xxlGap,
        [`sm-has-gap-y-${smGapY}`]: smGapY,
        [`md-has-gap-y-${mdGapY}`]: mdGapY,
        [`lg-has-gap-y-${lgGapY}`]: lgGapY,
        [`xl-has-gap-y-${xlGapY}`]: xlGapY,
        [`xxl-has-gap-y-${xxlGapY}`]: xxlGapY,
        [`sm-has-gap-x-${smGapX}`]: smGapX,
        [`md-has-gap-x-${mdGapX}`]: mdGapX,
        [`lg-has-gap-x-${lgGapX}`]: lgGapX,
        [`xl-has-gap-x-${xlGapX}`]: xlGapX,
        [`xxl-has-gap-x-${xxlGapX}`]: xxlGapX,
        'has-1-column': columns === 1,
        [`has-${columns}-columns`]: columns !== 1,
    }, className)} {...otherProps}>{children}</div>
  )
}