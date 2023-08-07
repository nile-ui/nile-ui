import React from 'react'
import { TableBodyProps } from './types'

export default function Body({children, ...otherProps}: TableBodyProps) {
  return (
    <tbody {...otherProps}>{children}</tbody>
  )
}
