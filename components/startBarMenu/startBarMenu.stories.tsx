import type { Meta, StoryObj } from "@storybook/react"

import { StartBarMenu as StartBarMenuComponent } from "."

const meta: Meta<typeof StartBarMenuComponent> = {
  title: "UI Elements/StartBarMenu",
  component: StartBarMenuComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    //title: { control: "text" },
    //children: { control: "text" },
  },
}

export default meta
type Story = StoryObj<typeof StartBarMenuComponent>

export const StartBarMenu: Story = {
  args: {
    //children: "PopupWindow",
    //title: "Exploring - C:\\",
  },
}
