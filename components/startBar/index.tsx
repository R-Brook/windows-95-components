import React, { FC } from "react"
import Image from "next/image"
import cx from "classnames"
import { Button } from "../buttons"
import { VerticalDivider } from "../divider"

export interface StartBarProps {
  //primary: boolean
}

export const StartBar: FC<StartBarProps> = ({}) => {
  const today = new Date()

  const [time, setTime] = React.useState("")

  React.useEffect(() => {
    const time = setInterval(() => {
      setTime(
        new Date().toLocaleString("en-gb", {
          hour12: true,
          hour: "2-digit",
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
    <div className="bg-gray border-2 border-t-grey-green border-gray inset-0 flex max-w-screen-lg m-auto">
      <Button width="tight" className="border-0 px-2 mt-0.5 flex items-center">
        <span className="relative block h-6 w-8 my-1 mr-1 mx-0.5">
          <Image
            src="/images/start-logo.png"
            alt="Windows 95 logo"
            layout="fill"
          />
        </span>
        <span className="text-xl">Start</span>
      </Button>
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
