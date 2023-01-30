import React from "react"
import cx from "classnames"
import { Button } from "../buttons"
import Draggable from "react-draggable"
import { Menu } from "../menu"
import Image from "next/image"
import { VerticalDivider } from "components/divider"

export interface PopupWindowProps {
  title: string
  defaultValue: string
}

export const Notepad = ({ title, defaultValue, handleNotepad }) => {
  const nodeRef = React.useRef(null)

  const [notePadMaximise, setNotePadMaximise] = React.useState(false)
  const [notePadMinimise, setNotePadMinimise] = React.useState(false)

  const handleMinimise = () => {
    setNotePadMinimise(true)
    console.log("minimize " + notePadMinimise)
  }

  const handleMaximise = () => {
    setNotePadMaximise(!notePadMaximise)
    console.log("maximise " + notePadMaximise)
  }

  const taskButtons = [
    {
      image: "/images/icons/functional-minimise.png",
      alt: "Minimise",
      interaction: handleMinimise,
    },
    {
      image: "/images/icons/functional-maximise.png",
      alt: "Maximise",
      interaction: handleMaximise,
    },
    {
      image: "/images/icons/functional-exit.png",
      alt: "Exit",
      interaction: handleNotepad,
    },
  ]

  return (
    <Draggable
      bounds="parent"
      handle=".handle"
      //disabled={notePadMaximise}
      nodeRef={nodeRef}
    >
      <div
        className={cx(
          "block absolute bg-gray shadow-button p-1.5 pl-1 z-50 left-32 top-20" +
            " " +
            (notePadMaximise ? "top-0 left-0 right-0 " : "w-720")
        )}
        ref={nodeRef}
      >
        <div className="flex justify-between pl-1.5 bg-blue text-white handle items-center">
          <div className="h-5 w-5 relative">
            <Image
              src={"/images/icons/notepad-file.png"}
              alt="notepad icon"
              layout="fill"
            />
          </div>
          <span>{title}</span>
          <div className="text-black flex gap-x-1 ml-auto">
            {taskButtons.map((mapItem, key) => (
              <Button
                key={key}
                width="tight"
                className="relative w-7 h-7 flex flex-center"
                onClick={mapItem.interaction}
              >
                <div className=" w-6 h-6 relative flex flex-center ">
                  <Image
                    src={mapItem.image}
                    alt={mapItem.alt}
                    layout="fill"
                    className="relative"
                  />
                </div>
              </Button>
            ))}
          </div>
        </div>

        <Menu />
        <div className="border-t-black border-l-black border-r-white border-b-white border-2">
          <div className="relative flex">
            <textarea
              id="area"
              name="area"
              cols={notePadMaximise ? 152 : 103}
              rows={notePadMaximise ? 25 : 10}
              defaultValue={defaultValue}
              className={cx(
                "flex bg-black shadow-button-active" + " " + notePadMaximise
                  ? "resize-none p-1 leading-5"
                  : "resize p-1"
              )}
            />
            <div className="w-7 bg-grey-light flex flex-col">
              <Button
                width="tight"
                className="relative w-7 h-7 p-2 flex items-center justify-center"
              >
                <Image
                  src={"/images/icons/functional-arrow-disabled.png"}
                  alt={""}
                  width="15px"
                  height="18px"
                  className="relative -rotate-90"
                />
              </Button>

              {/*
            Scrollbar
            <Button
              width="tight"
              className="relative w-7 h-32 flex flex-center"
            />*/}

              <Button
                width="tight"
                className="relative w-7 h-7 p-2 flex items-center justify-center mt-auto"
              >
                <Image
                  src={"/images/icons/functional-arrow-disabled.png"}
                  alt={""}
                  width="15px"
                  height="18px"
                  className="relative rotate-90"
                />
              </Button>
            </div>
          </div>

          <div className="flex">
            <div className="h-7 flex justify-between bg-grey-light grow">
              <Button
                width="tight"
                className="relative w-7 h-7 p-2 flex items-center justify-center"
              >
                <Image
                  src={"/images/icons/functional-arrow-disabled.png"}
                  alt={""}
                  width="15px"
                  height="18px"
                  className="relative rotate-180"
                />
              </Button>

              <Button
                width="tight"
                className="relative w-7 h-7 p-2 flex items-center justify-center"
              >
                <Image
                  src={"/images/icons/functional-arrow-disabled.png"}
                  alt={""}
                  width="15px"
                  height="18px"
                  className="relative"
                />
              </Button>
            </div>

            <div className="relative w-7 h-7 flex flex-center ml-auto overflow-hidden bg-gray">
              <div className="flex rotate-45 absolute -bottom-5 right-0 top-0 left:0">
                <div className="shadow-vertical-line w-1 mr-px rotate-180" />
                <div className="shadow-vertical-line w-1 mr-px rotate-180" />
                <div className="shadow-vertical-line w-1 mr-px rotate-180" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  )
}
