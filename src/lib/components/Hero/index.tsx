import classNames from 'classnames'
import React from 'react'
import { HeroProps } from './types'
import Body from './Body'

function Hero({
  color,
  size,
  halfScreen,
  fullScreen,
  fullScreenWithNavbar,
  className,
  children,
  ...otherProps
}: HeroProps) {
  return (
    <div
      className={classNames(
        'hero',
        color,
        size,
        {
          'half-screen': halfScreen,
          'full-screen': fullScreen,
          'full-screen-navbar': fullScreenWithNavbar,
        },
        className
      )}
      {...otherProps}
    >
      {children}
    </div>
  )
}

Hero.Body = Body

export default Hero
