import React from 'react'
import { AvatarProps } from './types'
import classNames from 'classnames'

export default function Avatar({
  color,
  size,
  className,
  circle,
  square,
  image,
  alt,
  children,
  showBadge,
  badgeContent,
  badgeColor,
  badgePosition,
  ...otherProps
}: AvatarProps) {
  return (
    <div
      className={classNames(
        'avatar',
        color,
        size,
        {
          circle: circle,
          square: square,
        },
        className
      )}
      {...otherProps}
    >
      {image ? (
        <img src={image} alt={alt} className='avatar-image' />
      ) : (
        <span className='avatar-content'>{children}</span>
      )}
      {showBadge && (
        <span className={classNames('avatar-badge', badgeColor, badgePosition)}>
          {badgeContent}
        </span>
      )}
    </div>
  )
}
