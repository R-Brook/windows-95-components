import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Alert } from "."

export default {
  title: "UI Elements/Alert",
  component: Alert,
  argTypes: {
    title: { control: "text" },
    exit: { control: "text" },
    positionX: { control: "text" },
    positionY: { control: "text" },
  },
  args: {
    children: "Lorem ipsum",
    title: "Alert",
    exit: "https://github.com/R-Brook/windows-95-components",
    positionX: "20%",
    positionY: "50%",
  },
} as ComponentMeta<typeof Alert>

const Template: ComponentStory<typeof Alert> = (args) => (
  <div className="relative h-720">
    <Alert {...args}></Alert>
  </div>
)

export const AlertBox = Template.bind({})
AlertBox.storyName = "Alert"
