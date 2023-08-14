import type { Meta, StoryObj } from "@storybook/react"
import { VerticalDivider as VerticalDividerComponent } from "."

const meta: Meta<typeof VerticalDividerComponent> = {
  title: "UI Elements/Dividers/Vertical",
  component: VerticalDividerComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className=" w-7 h-40 flex">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof VerticalDividerComponent>

export const VerticalDivider: Story = {
  parameters: {
    backgrounds: { default: "box" },
  },
}
