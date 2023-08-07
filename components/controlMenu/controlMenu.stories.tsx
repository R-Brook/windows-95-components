import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ControlMenu } from "."

export default {
  title: "UI Elements/Control Menu",
  component: ControlMenu,
  argTypes: {
    //title: { control: "text" },
    //children: { control: "text" },
  },
  args: {
    //children: "PopupWindow",
    //title: "Exploring - C:\\",
  },
} as ComponentMeta<typeof ControlMenu>

const foo = [
  {
    name: "restore",
    action: () => console.log("restore"),
  },
  {
    name: "exit",
    action: () => console.log("exit"),
  },
]

const Template: ComponentStory<typeof ControlMenu> = (args) => (
  <div className="relative h-720">
    <ControlMenu menuItems={foo}></ControlMenu>
  </div>
)

export const SimpleControlMenu = Template.bind({})
SimpleControlMenu.storyName = "Control Menu"
