import React, { FC } from "react"
import cx from "classnames"

interface controlMenuItem {
  name: string
  action: () => void | null
}

export interface ControlMenuProps {
  menuItems: controlMenuItem[]
  className?: any
}

export const ControlMenu: FC<ControlMenuProps> = ({ menuItems, className }) => {
  return (
    <div className={cx(className, "bg-gray shadow-button w-36 absolute")}>
      <ul>
        {menuItems.map((item, key) => (
          <li key={key} className="relative">
            <button
              className="hover:bg-blue hover:text-white px-5 w-full text-left"
              onClick={item.action}
            >
              <span className="underline">
                {item.name.charAt(0).toUpperCase()}
              </span>
              {item.name.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
