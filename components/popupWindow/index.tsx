import React from "react"
import { Button } from "../buttons"

export interface PopupWindowProps {
  title: string
}

export const PopupWindow = ({ title, children }: any) => {
  const menu = ["file", "edit", "view", "tools", "help"]
  const toolBarButtons = ["_", "O", "x"]

  return (
    <div className="block bg-gray shadow-button w-10/12 p-1.5">
      <div className="flex justify-between pl-1.5 bg-blue text-white">
        {title}
        <div className="text-black flex gap-x-1">
          {toolBarButtons.map((item) => (
            <Button width="tight" key="item" className="p-3">
              {item}
            </Button>
          ))}
        </div>
      </div>
      <ul className="flex gap-x-3 ml-2">
        {menu.map((mapItem) => (
          <li key={mapItem}>
            <button>
              <span className=" underline ">
                {mapItem.charAt(0).toUpperCase()}
              </span>
              {mapItem.slice(1)}
            </button>
          </li>
        ))}
      </ul>
      <div className="bg-white">{children}</div>
    </div>
  )
}
