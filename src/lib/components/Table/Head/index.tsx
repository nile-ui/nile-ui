import React from 'react'
import { TableHeadProps } from './types'

export default function Head({children, ...otherProps}: TableHeadProps) {
  return (
    <thead {...otherProps}>{children}</thead>
  )
}
