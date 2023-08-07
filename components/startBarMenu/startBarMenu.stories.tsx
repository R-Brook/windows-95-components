import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { StartBarMenu } from "."
import { startBarMainMenu } from "@/utilities/startBarMainMenu"

export default {
  title: "UI Elements/Start Bar Menu",
  component: StartBarMenu,
  argTypes: {
    //title: { control: "text" },
    //children: { control: "text" },
  },
  args: {
    //children: "PopupWindow",
    //title: "Exploring - C:\\",
  },
} as ComponentMeta<typeof StartBarMenu>

const Template: ComponentStory<typeof StartBarMenu> = (args) => (
  <div className="relative h-720">
    <StartBarMenu menuItems={startBarMainMenu}></StartBarMenu>
  </div>
)

export const StartBarMenuComponent = Template.bind({})
StartBarMenuComponent.storyName = "Start Bar Menu"
