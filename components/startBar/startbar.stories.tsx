import type { Meta, StoryObj } from "@storybook/react"

import { StartBar as StartBarComponent } from "."

const meta: Meta<typeof StartBarComponent> = {
  title: "UI Elements/StartBar",
  component: StartBarComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof StartBarComponent>

export const StartBar: Story = {
  args: {},
}
