import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { StartBar } from "."

export default {
  title: "Start Bar",
  component: StartBar,
  argTypes: {},
} as ComponentMeta<typeof StartBar>

const Template: ComponentStory<typeof StartBar> = (args) => (
  <StartBar {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  label: "Start Bar",
}
