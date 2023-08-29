import React, { FC } from "react"
import cx from "classnames"
import Draggable from "react-draggable"
import { TaskButton } from "@/components/taskButtons"
import Link from "next/link"

export interface AlertProps extends React.HTMLProps<HTMLDialogElement> {
  title: string
  exit?: string
  exitFunction?: () => void
  positionX: string | number
  positionY: string | number
  children: React.ReactNode
  zIndex?: string
}

export const Alert: FC<AlertProps> = ({
  title,
  exit,
  exitFunction,
  positionX,
  positionY,
  children,
  zIndex,
  className,
}) => {
  const nodeRef = React.useRef(null)

  return (
    <Draggable
      bounds="parent"
      handle=".handle"
      positionOffset={{ x: `${positionX}`, y: `${positionY}` }}
      nodeRef={nodeRef}
    >
      <div
        className={cx(
          className,
          `block bg-gray shadow-button p-1.5 pl-1 w-500
          ${zIndex ? zIndex : "z-10"}`
        )}
        ref={nodeRef}
      >
        <div className="flex justify-between pl-1.5 bg-blue text-white handle items-center">
          <h1>{title}</h1>
          <div className="text-black flex gap-x-1 ml-auto">
            {exit && (
              <Link href={exit}>
                <TaskButton
                  image={"/images/icons/functional-exit.png"}
                  alt={"Exit"}
                  interaction={() => console.log("shut down")}
                />
              </Link>
            )}
            {exitFunction && (
              <TaskButton
                image={"/images/icons/functional-exit.png"}
                alt={"Exit"}
                interaction={() => exitFunction}
              />
            )}
          </div>
        </div>

        <div className="p-5">{children}</div>
      </div>
    </Draggable>
  )
}
