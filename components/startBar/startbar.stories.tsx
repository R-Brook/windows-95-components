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
  <div className="absolute bottom-32 left-0 w-full ">
    <StartBar {...args} />
  </div>
)

export const StartBarComponent = Template.bind({})
