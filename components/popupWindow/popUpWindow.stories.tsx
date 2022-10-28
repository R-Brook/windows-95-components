import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { PopupWindow } from "."

export default {
  title: "UI Elements/Generic Popup Window",
  component: PopupWindow,
  argTypes: {
    title: { control: "text" },
    children: { control: "text" },
  },
  args: {
    children: "Lorem ipsum",
    title: "Exploring - C:\\",
  },
} as ComponentMeta<typeof PopupWindow>

const Template: ComponentStory<typeof PopupWindow> = (args) => (
  <div className="relative h-720">
    <PopupWindow {...args}></PopupWindow>
  </div>
)

export const GenericPopupWindow = Template.bind({})
