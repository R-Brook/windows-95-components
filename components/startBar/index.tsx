import React, { FC } from "react"
import Image from "next/image"
import { Button } from "../buttons"
import { VerticalDivider } from "../divider"
export interface StartBarProps {
  //primary: boolean
}

export const StartBar: FC<StartBarProps> = ({}) => {
  return (
    <div className="bg-gray border-2 border-t-gray-light border-gray inset-0 flex max-w-screen-lg m-auto">
      <Button width="tight" className="border-0 px-2 mt-0.5 flex items-center">
        <span className="relative block h-6 w-8 my-1 mr-1 mx-0.5">
          <Image
            src="/images/start-logo.png"
            alt="Windows 95 logo"
            layout="fill"
          />
        </span>
        <span className="text-xl">Start</span>
      </Button>
      <VerticalDivider />
      <div className="block px-10 mx-1 mt-0.5 font-bold">icons</div>
      <VerticalDivider />
      <div className="block px-10 mx-1 mt-0.5 font-bold flex-grow">
        programmes
      </div>
      <VerticalDivider />
      <div className="block bg-gray border-2 border-b-gray-light border-r-gray-light border-l-gray-dark border-t-gray-dark m-0 my-0.5 px-3 py-0.5 text-xl flex-initial">
        8:06 PM
      </div>
    </div>
  )
}
