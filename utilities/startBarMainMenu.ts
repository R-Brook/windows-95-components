export const startBarMainMenu = [
  {
    file: "/images/icons/programs.png",
    name: "Programs",
    action: "",
    hasSubMenu: true,
  },
  {
    file: "/images/icons/my-documents.png",
    name: "Documents",
    action: "",
    hasSubMenu: true,
    subMenu: [
      {
        file: "/images/icons/my-documents.png",
        name: "accessories",
        action: () => console.log("new"),
      },
      {
        file: "/images/icons/my-documents.png",
        name: "games",
        action: () => console.log("new"),
      },
    ],
  },
  {
    file: "/images/icons/settings.png",
    name: "Settings",
    action: "",
    hasSubMenu: true,
    subMenu: [
      {
        file: "/images/icons/my-documents.png",
        name: "lorem",
        action: () => console.log("new"),
      },
      {
        file: "/images/icons/my-documents.png",
        name: "ipsum",
        action: () => console.log("new"),
      },
    ],
  },
  {
    file: "/images/icons/find.png",
    name: "Find",
    action: "",
    hasSubMenu: true,
    subMenu: [
      {
        name: "accessories",
        action: () => console.log("new"),
      },
      {
        name: "games",
        action: () => console.log("new"),
      },
    ],
  },
  {
    file: "/images/icons/help-book.png",
    name: "Help",
    action: "",
    hasSubMenu: false,
    subMenu: [],
  },
  {
    file: "/images/icons/run.png",
    name: "Run...",
    action: "",
    hasSubMenu: false,
    subMenu: [],
  },
  {
    file: "/images/icons/shut-down.png",
    name: "Shut Down...",
    action: "",
    hasSubMenu: false,
    subMenu: [],
  },
]
