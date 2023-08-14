import type { Meta, StoryObj } from "@storybook/react"

import { Alert as AlertComponent } from "."

const meta: Meta<typeof AlertComponent> = {
  title: "UI Elements/Alert",
  component: AlertComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    exit: { control: "text" },
    positionX: { control: "text" },
    positionY: { control: "text" },
    children: { control: "text" },
  },
}

export default meta
type Story = StoryObj<typeof AlertComponent>

export const Alert: Story = {
  args: {
    children: "Lorem ipsum",
    title: "Alert",
    exit: "https://github.com/R-Brook/windows-95-components",
    positionX: "20%",
    positionY: "50%",
  },
}
