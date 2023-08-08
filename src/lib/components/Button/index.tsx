import React, { forwardRef } from 'react'
import { ButtonProps } from './types'
import classNames from 'classnames'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    color,
    size = "md",
    bordered,
    children,
    flat,
    square,
    pill,
    circle,
    block,
    loading,
    floating,
    noFloat,
    link,
    icon,
    ...buttonProps
}, ref) => {
    return (
        <button
            ref={ref}
            className={classNames('btn', color, size, {
                'square': square,
                'bordered': bordered,
                'block': block,
                'flat': flat,
                'pill': pill,
                'floating': floating,
                'no-float': noFloat,
                'link': link,
                'loading': loading,
                'icon': icon,
                'circle': circle,
            }, className)}
            {...buttonProps}
        >
            {children}
        </button>
    )
})

export default Button