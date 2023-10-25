import React, { FC } from "react"
import cx from "classnames"
import { TaskButton } from "@/components/taskButtons"
import Draggable from "react-draggable"
import Link from "next/link"
import { Button } from "../buttons"
import { TextInput } from "../textInput"
import { DropDown } from "../dropdown"
import Image from "next/legacy/image"
import { useNotepadContentsDispatch } from "@/services/notepad"

// http://colfinder.net/materials/Supporting_Distance_Education_Through_Policy_Development/skill/win/win4.htm

interface SaveProps {
  title: string
  exit?: string
  positionX: string | number
  positionY: string | number
  exitFunction?: () => void
  children: React.ReactNode
  contents: string
}

export const Save: FC<SaveProps> = ({
  title,
  exit,
  positionX,
  positionY,
  exitFunction,
  contents,
  children,
}) => {
  const nodeRef = React.useRef(null)
  const dispatch = useNotepadContentsDispatch()
  const [fileName, setFileName] = React.useState("Untitled")

  React.useEffect(() => {
    console.log("fileName", fileName)
  }, [fileName])

  return (
    <Draggable
      bounds="parent"
      handle=".handle"
      positionOffset={{ x: `${positionX}`, y: `${positionY}` }}
      nodeRef={nodeRef}
    >
      <div
        className={cx(`block bg-gray shadow-button p-1.5 pl-1 w-608 z-30`)}
        ref={nodeRef}
      >
        <div className="flex justify-between pl-1.5 bg-blue text-white handle items-center">
          <h1>{title}</h1>
          <div className="text-black flex gap-x-1 ml-auto">
            <Link href={""}>
              <TaskButton
                image={"/images/icons/functional-exit.png"}
                alt={"Help"}
                interaction={() => console.log("help")}
              />
            </Link>
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
        <div className="px-2">
          <div className="flex mb-3 mt-2">
            <DropDown label="Save in" id="save-in" className="mr-3">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </DropDown>
            <TaskButton
              image={"/images/icons/functional-exit.png"}
              alt={"Exit"}
              interaction={() => console.log("up a level")}
            />
            <TaskButton
              image={"/images/icons/functional-exit.png"}
              alt={"Exit"}
              interaction={() => console.log("new folder")}
            />
            <TaskButton
              image={"/images/icons/functional-exit.png"}
              alt={"Exit"}
              interaction={() => console.log("shut down")}
            />
            <TaskButton
              image={"/images/icons/functional-exit.png"}
              alt={"Exit"}
              interaction={() => console.log("shut down")}
            />
          </div>
          <div className=" bg-white relative flex border-t-black border-l-black border-r-white border-b-white border-2 ">
            Foo
          </div>
          <div className="flex mb-3">
            <div className="h-7 flex justify-between bg-grey-light grow">
              <Button
                width="tight"
                className="relative w-7 h-7 p-2 flex items-center justify-center"
              >
                <Image
                  src={"/images/icons/functional-arrow-disabled.png"}
                  alt={""}
                  width={15}
                  height={18}
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
                  width={15}
                  height={18}
                  className="relative"
                />
              </Button>
            </div>
          </div>
          <div className="flex w-full  justify-between">
            <div className="flex flex-col items-stretch w-full mr-4">
              <TextInput
                label="File name"
                id="file-name"
                value={fileName}
                onChange={(event) => setFileName(event.target.value)}
                className="mb-2"
              />
              <DropDown label="Save as type" id="save-as-type">
                <option>.txt</option>
              </DropDown>
            </div>
            <div className="flex flex-col">
              <Button
                width="wide"
                className="relative border-0  mt-0.5 mb-2 flex items-center"
                onClick={() =>
                  dispatch({
                    type: "save as",
                    payload: {
                      file_name: fileName + ".txt",
                      file_contents: `${contents}`,
                    },
                  })
                }
              >
                <span className="text-l">Save</span>
              </Button>
              <Button
                width="wide"
                className="relative border-0  mt-0.5 flex items-center"
                onClick={() => console.log("cancel")}
              >
                <span className="text-l">Cancel</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  )
}
