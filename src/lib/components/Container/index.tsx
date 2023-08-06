import React from 'react'
import { ContainerProps } from './types'
import classNames from 'classnames'

export default function Container({className, fluid, children}: ContainerProps) {
  return (
    <div className={classNames('container', {
        'fluid': fluid
    }, className)}>{children}</div>
  )
}
