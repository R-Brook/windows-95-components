import type { Meta, StoryObj } from "@storybook/react"
import { Button as ButtonComponent } from "."

const meta: Meta<typeof ButtonComponent> = {
  title: "UI Elements/Buttons/Button",
  component: ButtonComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    width: {
      options: ["wide", "tight"],
      control: { type: "radio" },
    },
    children: { control: "text" },
  },
}

export default meta
type Story = StoryObj<typeof ButtonComponent>

export const Button: Story = {
  args: {
    children: "Button",
    width: "wide",
  },
}
