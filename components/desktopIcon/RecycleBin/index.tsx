import React, { FC } from "react"
import { DesktopIcon } from ".."
import { ControlMenu } from "../../controlMenu"

export const RecycleBin = () => {
  const [recycleBinEmpty, setRecycleBinEmpty] = React.useState(false)
  const [controlMenuVisible, setControlMenuVisible] = React.useState(false)

  const foo = [
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
    <div className="relative">
      <DesktopIcon
        image={
          recycleBinEmpty
            ? "/images/icons/recycle-bin-empty.ico"
            : "/images/icons/recycle-bin-full.ico"
        }
        alt="Recycle Bin"
        name="Recycle Bin"
        /*onClick={() => setRecycleBinEmpty(!recycleBinEmpty)}*/
        onClick={() => setControlMenuVisible(!controlMenuVisible)}
      />
      {controlMenuVisible && (
        <ControlMenu menuItems={foo} className=" ml-16 " />
      )}
    </div>
  )
}
