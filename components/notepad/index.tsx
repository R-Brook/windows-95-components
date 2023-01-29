import React from "react"
import { Button } from "../buttons"
import Draggable from "react-draggable"
import { Menu } from "../menu"
import Image from "next/image"

export interface PopupWindowProps {
  title: string
  defaultValue: string
}

export const Notepad = ({ title, defaultValue, handleNotepad }) => {
  const nodeRef = React.useRef(null)

  const [notePadMaximise, setNotePadMaximise] = React.useState(false)
  const [notePadMinimise, setNotePadMinimise] = React.useState(false)

  const handleMinimise = () => {
    console.log("minimize " + notePadMinimise)
  }

  const handleMaximise = () => {
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
    <Draggable bounds="parent" handle=".handle" nodeRef={nodeRef}>
      <div
        className="block absolute bg-gray shadow-button p-1.5 w-720 z-50 left-32 top-20"
        ref={nodeRef}
      >
        <div className="flex justify-between pl-1.5 bg-blue text-white handle">
          <div className="h-5 w-5 relative ">
            <Image
              src={"/images/icons/notepad-file.png"}
              alt="notepad icon"
              layout="fill"
            />
          </div>
          {title}
          <div className="text-black flex gap-x-1">
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

        <textarea
          id="area"
          name="area"
          cols={106}
          rows={10}
          defaultValue={defaultValue}
        />
      </div>
    </Draggable>
  )
}
