import React from "react"
import { Button } from "../buttons"
import Draggable from "react-draggable"
import { Menu } from "../menu"

export interface PopupWindowProps {
  title: string
}

export const PopupWindow = ({ title, children }: any) => {
  // To be replaced with icons
  const toolBarButtons = ["_", "O", "x"]

  return (
    <Draggable bounds="parent" handle=".handle">
      <div className="block absolute bg-gray shadow-button p-1.5 w-720 z-50 left-32 top-20 ">
        <div className="flex justify-between pl-1.5 bg-blue text-white handle">
          {title}
          <div className="text-black flex gap-x-1">
            {toolBarButtons.map((item) => (
              <Button width="tight" key="item" className="p-3">
                {item}
              </Button>
            ))}
          </div>
        </div>

        <Menu />

        <div className="bg-white">{children}</div>
      </div>
    </Draggable>
  )
}
