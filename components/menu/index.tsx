import React, { FC } from "react"
import { ControlMenu } from "components/controlMenu"
import { MENU, MENUKEYS } from "utilities/menu"

export interface MenuProps {
  title: string
}

export const Menu: FC<MenuProps> = ({ title }) => {
  const [controlMenuVisible, setControlMenuVisible] = React.useState(false)

  //console.log(MENU.)
  //console.log(Object.keys(MENU))

  return (
    <div>
      <li>
        <button onClick={() => setControlMenuVisible(!controlMenuVisible)}>
          <span className="underline">{title.charAt(0).toUpperCase()}</span>
          {title.slice(1)}
        </button>
      </li>
      {controlMenuVisible && <ControlMenu menuItems={MENU.file} />}
      {/*Object.keys(MENU).map(
        (mapItem) => mapItem === title && console.log(mapItem, title)
      )*/}
    </div>
  )
}
