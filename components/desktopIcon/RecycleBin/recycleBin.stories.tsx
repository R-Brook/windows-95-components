import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { RecycleBin } from "."

export default {
  title: "UI Elements/Recycle Bin",
  component: RecycleBin,
} as ComponentMeta<typeof RecycleBin>

const Template: ComponentStory<typeof RecycleBin> = () => <RecycleBin />

export const DesktopRecycleBin = Template.bind({})
DesktopRecycleBin.storyName = "Recycle Bin"
