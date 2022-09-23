import React, { FC } from "react"
import Image from "next/image"
import imageFile from "./assets/start-logo.png"
import { Button } from "../buttons"
export interface StartBarProps {
  //primary: boolean
}

export const StartBar: FC<StartBarProps> = ({}) => {
  return (
    <div className="bg-gray border-4 border-t-gray-light border-gray inset-0 ">
      <Button width="tight">
        <span className="flex gap-1 ">
          <Image
            src="/images/start-logo.png"
            alt="Windows 95 logo"
            width="25px"
            height="20px"
          />
          Start
        </span>
      </Button>
    </div>
  )
}
