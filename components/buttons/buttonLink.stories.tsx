import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ButtonLink } from "./ButtonLink"

export default {
  title: "UI Elements/Single Button Link",
  component: ButtonLink,
  argTypes: {
    width: {
      options: ["wide", "tight"],
      control: { type: "radio" },
    },
    children: { control: "text" },
    href: { type: "string" },
  },
  args: {
    children: "Button",
    width: "wide",
    href: "https://www.bbc.co.uk",
  },
} as ComponentMeta<typeof ButtonLink>

const Template: ComponentStory<typeof ButtonLink> = (args) => (
  <ButtonLink {...args}></ButtonLink>
)

export const SingleButtonLink = Template.bind({})
