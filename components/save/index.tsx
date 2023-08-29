import React, { FC } from "react"
import cx from "classnames"
import { Button } from "@/components/buttons"
import { Menu } from "@/components/menu"
import Image from "next/legacy/image"
import { TaskButton, TaskButtonLink } from "@/components/taskButtons"

import { Alert } from "../alert"

export interface SaveProps {
  title: string
  exit?: string
  positionX: string | number
  positionY: string | number
  exitFunction?: () => void
  children: React.ReactNode
}

export const Save: FC<SaveProps> = ({
  title,
  exit,
  positionX,
  positionY,
  exitFunction,
  children,
}) => {
  return (
    <Alert
      title={"Save as"}
      exitFunction={exitFunction}
      positionX={positionX}
      positionY={positionY}
      zIndex={"z-30"}
    >
      <textarea
        id="area"
        name="area"
        cols={76}
        rows={8}
        key={""}
        defaultValue={""}
        onChange={
          (e) =>
            console.log("foo") /*setTempNotepadData(e.currentTarget.value)*/
        }
        className={cx("flex bg-black shadow-button-active resize-none p-1")}
      />
    </Alert>
  )
}
