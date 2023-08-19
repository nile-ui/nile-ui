import React from 'react'
import classNames from 'classnames'
import { ButtonGroupProps } from './types'

export default function Container({className, children, ...otherProps}: ButtonGroupProps) {
  return <div className={classNames('btn-group', className)} {...otherProps}>{children}</div>
}
