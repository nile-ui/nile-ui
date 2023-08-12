import React from 'react'
import { StoryFn } from '@storybook/react'
import Button from '../lib/components/Button'
import { ButtonProps } from '../lib/components/Button/types'

export default {
  title: 'Button',
  component: Button,
}

//@ts-ignore
const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  color: "primary",
};