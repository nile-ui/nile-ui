import React from 'react'
import { TableProps } from './types'
import classNames from 'classnames'
import Head from './Head'
import Footer from './Footer'
import Row from './Row'
import Cell from './Cell'
import Body from './Body'

function Table({children, color, striped, bordered, square, flat, ...otherProps}: TableProps) {
  return (
    <div className='has-table'>
        <table className={classNames('table', color, {
            'bordered': bordered,
            'square': square,
            'striped': striped,
            'flat': flat,
        })} {...otherProps}>
            {children}
        </table>
    </div>
  )
}

Table.Head = Head
Table.Body = Body
Table.Footer = Footer
Table.Row = Row
Table.Cell = Cell

export default Table