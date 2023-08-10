import classNames from 'classnames'
import React from 'react'

export default function Body({
  children,
  className,
  ...otherProps
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) {
  return (
    <div {...otherProps} className={classNames('hero-body', className)}>
      {children}
    </div>
  )
}
