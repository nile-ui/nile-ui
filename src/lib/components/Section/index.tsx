import React, { useMemo } from 'react'
import { SectionProps } from './types'
import classNames from 'classnames'
import Title from '../Typography/Title'
import Container from '../Container'

export default function Section({className, children, title, titleProps, titleRef = null, wrapTitleWithContainer}: SectionProps) {

  const titleElement = useMemo(() => {
    if (!title) {
      return null
    }

    if (typeof title === 'string') {
      return <Title {...titleProps} ref={titleRef}>{title}</Title>
    }

    return title
  }, [title, titleProps, titleRef])

  return (
    <section className={classNames('section', className)}>
      {wrapTitleWithContainer ? <Container>{titleElement}</Container> : titleElement}
      {children}
    </section>
  )
}
