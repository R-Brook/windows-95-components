import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { RecycleBin } from "."

export default {
  title: "RecycleBin",
  component: RecycleBin,
} as ComponentMeta<typeof RecycleBin>

const Template: ComponentStory<typeof RecycleBin> = () => (
  <div className="relative h-720">
    <RecycleBin />
  </div>
)

export const Primary = Template.bind({})
