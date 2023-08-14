import type { Preview } from "@storybook/react"
import "../css/globals.css"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: {
      default: "desktop",
      values: [
        {
          name: "desktop",
          value: "#008080",
        },
        {
          name: "box",
          value: "#C0C0C0",
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
