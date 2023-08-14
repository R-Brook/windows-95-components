import type { Meta, StoryObj } from "@storybook/react"

import { ButtonLink as ButtonLinkComponent } from "./ButtonLink"

const meta: Meta<typeof ButtonLinkComponent> = {
  title: "UI Elements/Buttons/Button Link",
  component: ButtonLinkComponent,
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
    href: { type: "string" },
  },
}

export default meta
type Story = StoryObj<typeof ButtonLinkComponent>

export const ButtonLink: Story = {
  args: {
    children: "Button",
    width: "wide",
    href: "https://www.bbc.co.uk",
  },
}
