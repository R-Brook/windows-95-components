import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Button } from "."

export default {
  title: "Button",
  component: Button,
  argTypes: {
    width: {
      options: ["wide", "tight"],
      control: { type: "radio" },
    },
    children: { control: "text" },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}></Button>
)

export const Primary = Template.bind({})
Primary.args = {
  children: "Button",
  width: "tight",
}
