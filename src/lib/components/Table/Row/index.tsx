import React from 'react'
import { TableRowProps } from './types'

export default function Row({children, ...otherProps}: TableRowProps) {
  return (
    <tr {...otherProps}>{children}</tr>
  )
}
