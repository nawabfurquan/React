import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Input from './Input'

export default {
    title: 'Input',
    component: Input,
    argTypes: { onClick: {action: 'handleClick'} }
} as ComponentMeta<typeof Input>;


const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Small = Template.bind({})
Small.args = {
    size: "small"
}

export const Medium = Template.bind({})
Medium.args = {
    size: "medium"
}

export const Large = Template.bind({})
Large.args = {
    size: "large"
}