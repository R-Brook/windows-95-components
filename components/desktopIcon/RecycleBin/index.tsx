import React, { FC } from "react"
import { DesktopIcon } from ".."

export const RecycleBin = () => {
  const [recycleBinEmpty, setRecycleBinEmpty] = React.useState(false)

  return (
    <DesktopIcon
      image={
        recycleBinEmpty
          ? "/images/icons/recycle-bin-empty.ico"
          : "/images/icons/recycle-bin-full.ico"
      }
      alt="Recycle Bin"
      name="Recycle Bin"
      onClick={() => setRecycleBinEmpty(!recycleBinEmpty)}
    />
  )
}
