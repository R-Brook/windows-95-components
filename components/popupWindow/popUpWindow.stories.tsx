import { ComponentStory, ComponentMeta } from "@storybook/react"
import { PopupWindow } from "."

export default {
  title: "PopupWindow",
  component: PopupWindow,
  argTypes: {
    title: { control: "text" },
    children: { control: "text" },
  },
} as ComponentMeta<typeof PopupWindow>

const Template: ComponentStory<typeof PopupWindow> = (args) => (
  <PopupWindow {...args}></PopupWindow>
)

export const Primary = Template.bind({})
Primary.args = {
  children: "PopupWindow",
  title: "Exploring - C:\\",
}
