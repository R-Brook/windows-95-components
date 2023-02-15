import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { HorizontalDivider } from "."

export default {
  title: "UI Elements/Divider",
  component: HorizontalDivider,
  argTypes: {},
} as ComponentMeta<typeof HorizontalDivider>

const Template: ComponentStory<typeof HorizontalDivider> = (args) => (
  <div className=" h-7 w-3 flex">
    <HorizontalDivider />
  </div>
)

export const Horizontal = Template.bind({})
Horizontal.args = {
  label: "Horizontal Divider",
}
