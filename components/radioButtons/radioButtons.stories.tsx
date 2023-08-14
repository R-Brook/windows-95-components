import type { Meta, StoryObj } from "@storybook/react"

import { RadioButton as RadioButtonComponent } from "."

const meta: Meta<typeof RadioButtonComponent> = {
  title: "UI Elements/RadioButton",
  component: RadioButtonComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
  },
}

export default meta
type Story = StoryObj<typeof RadioButtonComponent>

export const RadioButton: Story = {
  args: {
    label: "I agree",
  },
}
