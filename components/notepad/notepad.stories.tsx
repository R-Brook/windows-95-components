import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Notepad } from "."

export default {
  title: "UI Elements/Notepad App",
  component: Notepad,
  argTypes: {
    title: { control: "text" },
    defaultValue: { control: "text" },
  },
  args: {
    children: "Lorem ipsum",
    title: "Notepad",
    defaultValue: 'Lorem ipsum'
  },
} as ComponentMeta<typeof Notepad>

const Template: ComponentStory<typeof Notepad> = (args) => (
  <div className="relative h-720">
    <Notepad {...args}></Notepad>
  </div>
)

export const NotepadApp = Template.bind({})
