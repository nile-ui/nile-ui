import classNames from 'classnames'
import React from 'react'
import { HeroBodyProps } from './types'

export default function Body({
  children,
  className,
  ...otherProps
}: HeroBodyProps) {
  return (
    <div {...otherProps} className={classNames('hero-body', className)}>
      {children}
    </div>
  )
}
