import type { Meta, StoryObj } from "@storybook/react"

import { ControlMenu as ControlMenuComponent } from "."

const meta: Meta<typeof ControlMenuComponent> = {
  title: "UI Elements/Control Menu",
  component: ControlMenuComponent,
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
type Story = StoryObj<typeof ControlMenuComponent>

export const ControlMenu: Story = {
  args: {
    menuItems: [
      {
        name: "restore",
        action: () => console.log("restore"),
      },
      {
        name: "exit",
        action: () => console.log("exit"),
      },
    ],
  },
}
