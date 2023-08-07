import React from "react"

import { ComponentStory, ComponentMeta } from "@storybook/react"

import { RadioButton } from "."

export default {
  title: "UI Elements/RadioButton",
  component: RadioButton,
  argTypes: {
    label: { control: "text" },
  },
} as ComponentMeta<typeof RadioButton>

const SingleTemplate: ComponentStory<typeof RadioButton> = (args) => (
  <RadioButton {...args} />
)

export const Single = SingleTemplate.bind({})

Single.args = {
  label: "I agree",
}

const GroupTemplate: ComponentStory<typeof RadioButton> = (args) => (
  <fieldset>
    <legend>Are you sure you want to:</legend>
    <RadioButton {...args[0]} />
    <RadioButton {...args[1]} />
    <RadioButton {...args[2]} />
  </fieldset>
)

export const Group = GroupTemplate.bind({})

Group.args = {
  0: {
    label: "one",
    name: "group",
    defaultChecked: true,
  },
  1: {
    label: "two",
    name: "group",
    defaultChecked: false,
  },
  2: {
    label: "three",
    name: "group",
    defaultChecked: false,
  },
}
