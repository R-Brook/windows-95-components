import React, { FC } from "react"
import Image from "next/image"
import { HorizontalDivider } from "@/components/divider"
import { startBarMainMenu } from "@/utilities/startBarMainMenu"
import Link from "next/link"

export interface MenuProps {
  menuItems?: object
}

export const StartBarMenu: FC<MenuProps> = ({}) => {
  //const [controlMenuVisible, setControlMenuVisible] = React.useState("none")

  return (
    <>
      <div className="absolute left-1 flex bottom-10 bg-gray shadow-button z-50">
        <div className="relative w-10 m-1 mr-0 bg-grey-darker">
          <span className="inline-block w-max origin-bottom-left text-white left-11 bottom-0 absolute  -rotate-90 text-4xl p-1 pl-2 font-simple">
            <span className="text-grey-light font-bold -mr-2">Windows</span> 95
          </span>
        </div>

        <ul className="flex flex-col">
          {startBarMainMenu.map((mapItem) => (
            <button
              key={mapItem.name}
              className="relative  hover:bg-blue hover:text-white pr-1 text-left"
              onClick={() => {
                mapItem.action
              }}
            >
              {mapItem.name === "Shut Down..." && <HorizontalDivider />}
              <Link href="/shutDownOptions">
                <li className=" pl-3 py-2 w-full flex items-center">
                  <div className="h-12 w-12 relative">
                    <Image
                      src={mapItem.file}
                      alt={mapItem.name}
                      fill
                      sizes="100vw"
                    />
                  </div>
                  <span className=" pl-4 pr-10 text-xl">
                    <span className="underline">
                      {mapItem.name.charAt(0).toUpperCase()}
                    </span>
                    {mapItem.name.slice(1)}
                  </span>
                  {mapItem.hasSubMenu && (
                    <span className="ml-auto mr-1">&#9654;</span>
                  )}
                </li>
              </Link>
            </button>
          ))}
        </ul>
      </div>
    </>
  )
}
