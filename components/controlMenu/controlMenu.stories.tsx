import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ControlMenu } from "."

export default {
  title: "ControlMenu",
  component: ControlMenu,
  argTypes: {
    //title: { control: "text" },
    //children: { control: "text" },
  },
} as ComponentMeta<typeof ControlMenu>

const foo = [
  {
    name: "restore",
    action: () => console.log("restore"),
  },
]

const Template: ComponentStory<typeof ControlMenu> = (args) => (
  <div className="relative h-720">
    <ControlMenu menuItems={foo}></ControlMenu>
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  //children: "PopupWindow",
  //title: "Exploring - C:\\",
}
