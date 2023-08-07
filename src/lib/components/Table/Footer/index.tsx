import React from 'react'
import { TableFooterProps } from './types'

export default function Footer({children, ...otherProps}: TableFooterProps) {
  return (
    <tfoot {...otherProps}>{children}</tfoot>
  )
}
