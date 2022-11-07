import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { StartBar } from "."

export default {
  title: "UI Elements/Start Bar Component",
  component: StartBar,
  argTypes: {},
  args: {
    label: "Start Bar",
  },
} as ComponentMeta<typeof StartBar>

const Template: ComponentStory<typeof StartBar> = (args) => (
  <StartBar {...args} />
)

export const StartBarComponent = Template.bind({})
