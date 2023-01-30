import React, { FC } from "react"
import { ControlMenu } from "../controlMenu"
import { MENU } from "../../utilities/menu"

export interface MenuProps {
  menuItems?: object
}

export const Menu: FC<MenuProps> = ({}) => {
  const [controlMenuVisible, setControlMenuVisible] = React.useState("none")

  return (
    <>
      <div>
        <ul className="flex gap-x-3 ml-2 py-0.5">
          {Object.keys(MENU).map((mapItem) => (
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
                  <ControlMenu menuItems={MENU[`${mapItem}`]} />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
