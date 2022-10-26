export const MENUKEYS = ["file", "edit", "view", "tools", "help"]

export const MENU = {
  file: [
    {
      name: "empty",
      action: () => console.log("foo"),
    },
    {
      name: "foo",
      action: () => console.log("file closed"),
    },
  ],
  edit: [
    {
      name: "empty",
      action: () => console.log("foo"),
    },
    {
      name: "foo",
      action: () => console.log("file closed"),
    },
  ],
  view: [
    {
      name: "empty",
      action: () => console.log("foo"),
    },
    {
      name: "foo",
      action: () => console.log("file closed"),
    },
  ],
  tools: [
    {
      name: "empty",
      action: () => console.log("foo"),
    },
    {
      name: "foo",
      action: () => console.log("file closed"),
    },
  ],
  help: [
    {
      name: "empty",
      action: () => console.log("foo"),
    },
    {
      name: "foo",
      action: () => console.log("file closed"),
    },
  ],
}

export const file = [
  {
    name: "empty",
    action: () => console.log("foo"),
  },
  {
    name: "close",
    action: () => `setControlMenuVisible(!controlMenuVisible)`,
  },
]

export const edit = [
  {
    name: "empty",
    action: () => console.log("foo"),
  },
  {
    name: "close",
    action: () => `setControlMenuVisible(!controlMenuVisible)`,
  },
]

export const view = [
  {
    name: "empty",
    action: () => console.log("foo"),
  },
  {
    name: "close",
    action: () => `setControlMenuVisible(!controlMenuVisible)`,
  },
]
export const tools = [
  {
    name: "empty",
    action: () => console.log("foo"),
  },
  {
    name: "close",
    action: () => `setControlMenuVisible(!controlMenuVisible)`,
  },
]
export const help = [
  {
    name: "empty",
    action: () => console.log("foo"),
  },
  {
    name: "close",
    action: () => `setControlMenuVisible(!controlMenuVisible)`,
  },
]
