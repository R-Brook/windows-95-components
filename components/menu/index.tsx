import React, { FC } from "react"
import { ControlMenu } from "../controlMenu"

export interface MenuProps {
  menuItems: object
}

export const Menu: FC<MenuProps> = ({ menuItems }) => {
  const [controlMenuVisible, setControlMenuVisible] = React.useState("none")

  return (
    <>
      <div>
        <ul className="flex gap-x-3 ml-2 py-0.5">
          {Object.keys(menuItems).map((mapItem) => (
            <li key={mapItem}>
              <button
                onClick={() =>
                  controlMenuVisible === mapItem
                    ? setControlMenuVisible("none")
                    : setControlMenuVisible(mapItem)
                }
              >
                <span className="underline">
                  {mapItem.charAt(0).toUpperCase()}
                </span>
                {mapItem.slice(1)}
                {controlMenuVisible === mapItem && (
                  // @TODO: Refactor next line
                  // eslint-disable-next-line
                  <ControlMenu menuItems={menuItems[`${mapItem}`]} />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
