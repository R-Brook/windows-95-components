import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Alert } from "."

export default {
  title: "UI Elements/Alert",
  component: Alert,
  argTypes: {
    title: { control: "text" },
    defaultValue: { control: "text" },
  },
  args: {
    children: "Lorem ipsum",
    title: "Alert",
    defaultValue: "Lorem ipsum",
    exit: "foo",
  },
} as ComponentMeta<typeof Alert>

const Template: ComponentStory<typeof Alert> = (args) => (
  <div className="relative h-720">
    <Alert {...args}></Alert>
  </div>
)

export const AlertBox = Template.bind({})
