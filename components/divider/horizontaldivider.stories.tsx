import type { Meta, StoryObj } from "@storybook/react"
import { HorizontalDivider as HorizontalDividerComponent } from "."

const meta: Meta<typeof HorizontalDividerComponent> = {
  title: "UI Elements/Dividers/Horizontal",
  component: HorizontalDividerComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className=" h-7 w-40 flex">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof HorizontalDividerComponent>

export const HorizontalDivider: Story = {
  parameters: {
    backgrounds: { default: "box" },
  },
}
