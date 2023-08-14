import { NotepadProvider } from "@/services/notepad"
import type { Meta, StoryObj } from "@storybook/react"

import { Notepad as NotepadComponent } from "."

const meta: Meta<typeof NotepadComponent> = {
  title: "UI Elements/Notepad",
  component: NotepadComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <NotepadProvider>
        <Story />
      </NotepadProvider>
    ),
  ],
  argTypes: {
    fullscreen: { control: "boolean" },
  },
}

export default meta
type Story = StoryObj<typeof NotepadComponent>

export const Notepad: Story = {
  args: {
    fullscreen: false,
  },
}
