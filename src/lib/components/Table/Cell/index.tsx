import React from 'react'
import { TableCellProps } from './types'

export default function Cell({children, as = 'td', ...otherProps}: TableCellProps) {
  if (as === 'td') {
    return (
      <td {...otherProps}>{children}</td>
    )
  }

  return (
    <th {...otherProps}>{children}</th>
  )
}
