import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Person from './Person'

export default {
    title: 'Person',
    component: Person,
} as ComponentMeta<typeof Person>


export const Primary: ComponentStory<typeof Person> = () => <Person name="John" age={30} email='abc@xyz.com'/> 