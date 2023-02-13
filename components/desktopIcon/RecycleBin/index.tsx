import React, { FC } from "react"
import { DesktopIcon } from ".."
import { ControlMenu } from "../../controlMenu"

export const RecycleBin = () => {
  const [recycleBinEmpty, setRecycleBinEmpty] = React.useState(false)
  const [controlMenuVisible, setControlMenuVisible] = React.useState(false)

  const action = [
    {
      name: "empty",
      action: () => setRecycleBinEmpty(!recycleBinEmpty),
    },
    {
      name: "close",
      action: () => setControlMenuVisible(false),
    },
  ]

  return (
    <div className="relative" data-testid="recycleBin">
      <DesktopIcon
        image={
          recycleBinEmpty
            ? "/images/icons/recycle-bin-empty.ico"
            : "/images/icons/recycle-bin-full.ico"
        }
        alt="Recycle Bin"
        name="Recycle Bin"
        onClick={() => setControlMenuVisible(!controlMenuVisible)}
      />
      {controlMenuVisible && (
        <ControlMenu menuItems={action} className=" ml-16 " />
      )}
    </div>
  )
}
