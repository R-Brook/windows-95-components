import type { Meta, StoryObj } from "@storybook/react"

import { RecycleBin as RecycleBinComponent } from "."

const meta: Meta<typeof RecycleBinComponent> = {
  title: "UI Elements/RecycleBin",
  component: RecycleBinComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof RecycleBinComponent>

export const RecycleBin: Story = {}
