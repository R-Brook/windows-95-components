import React from "react"
import cx from "classnames"
import Draggable from "react-draggable"
import { TaskButton } from "@/components/taskButtons"
import Link from "next/link"

export interface AlertProps {
  title: string
  exit: string
}

export const Alert = ({ title, exit, children, className }) => {
  const nodeRef = React.useRef(null)

  return (
    <Draggable bounds="parent" handle=".handle" nodeRef={nodeRef}>
      <div
        className={cx(
          "block absolute bg-gray shadow-button p-1.5 pl-1 z-50 w-540"
        )}
        ref={nodeRef}
      >
        <div className="flex justify-between pl-1.5 bg-blue text-white handle items-center">
          <h1>{title}</h1>
          <div className="text-black flex gap-x-1 ml-auto">
            <Link href={exit}>
              <TaskButton
                image={"/images/icons/functional-exit.png"}
                alt={"Exit"}
                interaction={() => console.log("shut down")}
              />
            </Link>
          </div>
        </div>

        <div className="p-5">{children}</div>
      </div>
    </Draggable>
  )
}
