import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Button } from "."

export default {
  title: "UI Elements/Button",
  component: Button,
  argTypes: {
    width: {
      options: ["wide", "tight"],
      control: { type: "radio" },
    },
    children: { control: "text" },
  },
  args: {
    children: "Button",
    width: "wide",
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}></Button>
)

export const SingleButton = Template.bind({})
SingleButton.storyName = "Button"
