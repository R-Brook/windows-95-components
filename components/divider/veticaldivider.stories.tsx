import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { VerticalDivider } from "."

export default {
  title: "UI Elements/Divider",
  component: VerticalDivider,
  argTypes: {},
} as ComponentMeta<typeof VerticalDivider>

const Template: ComponentStory<typeof VerticalDivider> = (args) => (
  <div className=" h-7 w-3 flex">
    <VerticalDivider />
  </div>
)

export const Vertical = Template.bind({})
Vertical.args = {
  label: "Vertical Divider",
}
