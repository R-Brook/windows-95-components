import React, { FC } from "react"
import Image from "next/legacy/image";
import cx from "classnames"
import { Button } from "../buttons"
import { VerticalDivider } from "../divider"

export interface StartBarProps {
  //primary: boolean
}

export const StartBar: FC<StartBarProps> = ({}) => {
  const today = new Date()

  const [startMenuOpen, setStartMenuOpen] = React.useState(false)
  const [time, setTime] = React.useState("")

  React.useEffect(() => {
    const time = setInterval(() => {
      setTime(
        new Date().toLocaleString("en-us", {
          hour12: true,
          hour: "numeric",
          minute: "2-digit",
        })
      )
    }, 1000)

    return () => {
      clearInterval(time)
    }
  }, [])

  const splitTime = time.split(":")
  const hourPrintOut = splitTime[0]
  const minutePrintOut = splitTime[1]

  return (
    <div className="bg-gray border-2 border-t-grey-green border-gray inset-0 flex max-w-screen-lg m-auto relative">
      <Button
        width="tight"
        className="border-0 px-2 mt-0.5 flex items-center"
        onClick={() => setStartMenuOpen(!startMenuOpen)}
      >
        <span className="relative block h-6 w-8 my-1 mr-1 mx-0.5">
          <Image
            src="/images/start-logo.png"
            alt="Windows 95 logo"
            layout="fill"
          />
        </span>
        <span className="text-xl">Start</span>
      </Button>
      {startMenuOpen && (
        <div className="absolute left-1 flex bottom-10 bg-gray shadow-button z-50">
          <div className="relative w-14 m-1 bg-grey-darker">
            <span className="inline-block w-max origin-bottom-left text-white left-14 bottom-0 absolute  -rotate-90 text-4xl p-2">
              Windows 95
            </span>
          </div>
          <ul>
            <a
              href=""
              className="relative flex hover:bg-blue hover:text-white px-2 w-full text-left"
            >
              <li className="px-4 py-2 flex">
                <div className="h-8 w-8 relative">
                  <Image
                    src={"/images/icons/notepad-file.png"}
                    alt="notepad icon"
                    layout="fill"
                  />
                </div>
                <span className=" pl-4 text-xl">Programs</span>
              </li>
            </a>

            <a
              href=""
              className="relative flex hover:bg-blue hover:text-white px-2 w-full text-left"
            >
              <li className="px-4 py-2 flex">
                <div className="h-12 w-12 relative">
                  <Image
                    src={"/images/icons/my-documents.png"}
                    alt="notepad icon"
                    layout="fill"
                  />
                </div>
                <span className=" pl-4 text-xl">Documents</span>
              </li>
            </a>

            <a
              href=""
              className="relative flex hover:bg-blue hover:text-white px-2 w-full text-left"
            >
              <li className="px-4 py-2 flex">
                <div className="h-12 w-12 relative">
                  <Image
                    src={"/images/icons/settings.png"}
                    alt="notepad icon"
                    layout="fill"
                  />
                </div>
                <span className=" pl-4 text-xl">Settings</span>
              </li>
            </a>

            <a
              href=""
              className="relative flex hover:bg-blue hover:text-white px-2 w-full text-left"
            >
              <li className="px-4 py-2 flex">
                <div className="h-10 w-10 relative">
                  <Image
                    src={"/images/icons/find.png"}
                    alt="notepad icon"
                    layout="fill"
                  />
                </div>
                <span className=" pl-4 text-xl">Find</span>
              </li>
            </a>

            <a
              href=""
              className="relative flex hover:bg-blue hover:text-white px-2 w-full text-left"
            >
              <li className="px-4 py-2 flex">
                <div className="h-12 w-12 relative">
                  <Image
                    src={"/images/icons/help-book.png"}
                    alt="notepad icon"
                    layout="fill"
                  />
                </div>
                <span className=" pl-4 text-xl">Help</span>
              </li>
            </a>

            <a
              href=""
              className="relative flex hover:bg-blue hover:text-white px-2 w-full text-left"
            >
              <li className="px-4 py-2 flex ">
                <div className="h-12 w-12 relative">
                  <Image
                    src={"/images/icons/run.png"}
                    alt="notepad icon"
                    layout="fill"
                  />
                </div>
                <span className=" pl-4 text-xl">Run...</span>
              </li>
            </a>

            <a
              href=""
              className="relative flex hover:bg-blue hover:text-white px-2 w-full text-left"
            >
              <li className="px-4 py-2 flex">
                <div className="h-12 w-12 relative">
                  <Image
                    src={"/images/icons/shut-down.png"}
                    alt="notepad icon"
                    layout="fill"
                  />
                </div>
                <span className=" pl-4 text-xl">Shut Down...</span>
              </li>
            </a>
          </ul>
        </div>
      )}
      <VerticalDivider />
      <div className="flex items-center mx-1 mt-0.5 gap-2 ">
        <span className="relative h-7 w-7">
          <Image
            src="/images/icons/desktop.png"
            alt="Desktop icon"
            layout="fill"
          />
        </span>
        <span className="relative h-7 w-7">
          <Image
            src="/images/icons/satellite.png"
            alt="Desktop icon"
            layout="fill"
          />
        </span>
      </div>
      <VerticalDivider />
      <div className="block px-10 mx-1 mt-0.5 font-bold flex-grow">
        programmes
      </div>

      <VerticalDivider />

      <div className="block bg-gray border-2 border-b-grey-green border-r-grey-green border-l-grey-dark border-t-grey-dark m-0 my-0.5 px-3 py-0.5 text-xl flex-initial">
        {/* Remove leading '0' if applicable */}
        {hourPrintOut.charAt(0) === "0"
          ? hourPrintOut.substring(1)
          : hourPrintOut}
        <span className={cx("blink-wrapper", {})}>:</span>
        {/* Make 'am' or 'pm' uppercase */}
        {minutePrintOut &&
          minutePrintOut.length > 0 &&
          minutePrintOut.toUpperCase()}
      </div>
    </div>
  )
}
